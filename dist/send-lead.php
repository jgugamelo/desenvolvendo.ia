<?php
/**
 * Endpoint de leads do site desenvolvendo.ia.br
 * Segurança: só aceita POST da própria origem, com rate limiting por IP,
 * honeypot anti-bot, sanitização anti header-injection e anti CSV-injection.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
@ini_set('display_errors', '0');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}

// --- só aceita chamadas vindas do próprio site ---
$allowedOrigins = [
  'https://desenvolvendo.ia.br',
  'https://www.desenvolvendo.ia.br',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, $allowedOrigins, true)) {
  http_response_code(403);
  echo json_encode(['ok' => false, 'error' => 'forbidden']);
  exit;
}

// --- limita o tamanho do payload (20 KB) ---
$raw = file_get_contents('php://input', false, null, 0, 20480);
if ($raw === false || strlen($raw) >= 20480) {
  http_response_code(413);
  echo json_encode(['ok' => false, 'error' => 'payload_too_large']);
  exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;

// --- diretório protegido para logs e controle ---
$dir = __DIR__ . '/leads';
if (!is_dir($dir)) {
  @mkdir($dir, 0755);
  @file_put_contents($dir . '/.htaccess', "Require all denied\n");
}

// --- rate limiting: máx. 5 envios por IP a cada 10 minutos ---
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rlFile = $dir . '/rl_' . substr(hash('sha256', $ip), 0, 16) . '.json';
$now = time();
$hits = [];
if (is_file($rlFile)) {
  $hits = json_decode((string) @file_get_contents($rlFile), true);
  if (!is_array($hits)) $hits = [];
}
$hits = array_values(array_filter($hits, function ($t) use ($now) {
  return ($now - (int) $t) < 600;
}));
if (count($hits) >= 5) {
  http_response_code(429);
  echo json_encode(['ok' => false, 'error' => 'rate_limited']);
  exit;
}
$hits[] = $now;
@file_put_contents($rlFile, json_encode($hits), LOCK_EX);

// --- sanitização: remove quebras de linha (anti header-injection) ---
$clean = function ($v) {
  return trim(str_replace(["\r", "\n"], ' ', mb_substr((string) $v, 0, 1000)));
};

// honeypot: campo invisível — se veio preenchido, é bot
if (!empty($data['website'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$name  = $clean($data['name'] ?? '');
$email = filter_var($clean($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = $clean($data['phone'] ?? '');

if ($name === '' || !$email || $phone === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'missing_fields']);
  exit;
}

// --- monta o corpo do e-mail ---
$labels = [
  'name'     => 'Nome',
  'company'  => 'Empresa',
  'role'     => 'Cargo',
  'email'    => 'E-mail',
  'phone'    => 'WhatsApp/Telefone',
  'country'  => 'País',
  'segment'  => 'Segmento',
  'teamSize' => 'Tamanho da equipe',
  'pain'     => 'Principal dor',
  'message'  => 'Mensagem',
  'lang'     => 'Idioma do site',
];

$body = "Novo lead pelo site desenvolvendo.ia.br\n";
$body .= 'Data: ' . date('d/m/Y H:i:s') . "\n\n";
foreach ($labels as $key => $label) {
  $v = $clean($data[$key] ?? '');
  if ($v !== '') $body .= "$label: $v\n";
}
foreach ($data as $key => $v) {
  if (strpos($key, 'utm_') === 0) $body .= "$key: " . $clean($v) . "\n";
}

$to      = 'contato@desenvolvendo.ia.br';
$subject = '[Site] Novo lead: ' . $name;
$headers = "From: Site desenvolvendo.ia <contato@desenvolvendo.ia.br>\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8";

$sent = @mail($to, $subject, $body, $headers);

// --- backup em CSV (com proteção anti CSV/formula-injection) ---
$logged = false;
if (is_dir($dir)) {
  $csv = function ($v) {
    // impede execução de fórmulas ao abrir no Excel/Sheets
    if ($v !== '' && strpos("=+-@\t", $v[0]) !== false) $v = "'" . $v;
    return '"' . str_replace('"', '""', $v) . '"';
  };
  $line = implode(',', [
    $csv(date('c')),
    $csv($name),
    $csv($email),
    $csv($phone),
    $csv($clean($data['company'] ?? '')),
    $csv($clean($data['country'] ?? '')),
    $csv($clean($data['segment'] ?? '')),
    $csv($clean($data['pain'] ?? '')),
  ]) . "\n";
  $logged = (bool) @file_put_contents($dir . '/leads.csv', $line, FILE_APPEND | LOCK_EX);
}

echo json_encode(['ok' => ($sent || $logged)]);
