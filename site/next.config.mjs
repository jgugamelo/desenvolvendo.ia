/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Gera HTML estático em site/out — necessário para hospedagens
  // sem Node.js (HostGator, cPanel etc). Na Vercel também funciona.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
