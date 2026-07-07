<?php
/**
 * Endpoint de leads do site desenvolvendo.ia.br
 * Recebe POST (JSON) do formulário, envia e-mail para o time
 * e registra backup em CSV protegido contra acesso web.
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;

// sanitiza: remove quebras de linha (anti header-injection) e limita tamanho
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

// monta o corpo do e-mail
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
// parâmetros de campanha (UTM)
foreach ($data as $key => $v) {
  if (strpos($key, 'utm_') === 0) $body .= "$key: " . $clean($v) . "\n";
}

$to      = 'contato@desenvolvendo.ia.br';
$subject = '[Site] Novo lead: ' . $name;
$headers = "From: Site desenvolvendo.ia <contato@desenvolvendo.ia.br>\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8";

$sent = @mail($to, $subject, $body, $headers);

// backup em CSV (pasta bloqueada para acesso web)
$logged = false;
$dir = __DIR__ . '/leads';
if (!is_dir($dir)) {
  @mkdir($dir, 0755);
  @file_put_contents($dir . '/.htaccess', "Require all denied\n");
}
if (is_dir($dir)) {
  $csv = function ($v) { return '"' . str_replace('"', '""', $v) . '"'; };
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
