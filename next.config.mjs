/** @type {import('next').NextConfig} */
const nextConfig = {
  // OPTIMIZACION DE IMAGENES PARA LOS SIGUIENTES DOMINIOS
  images: {
    domains: [
      'uploadthing.com',
      'utfs.io',
      'img.clerk.com',
      'subdomain',
      'files.stripe.com',
    ],
  },
  reactStrictMode: false,
}

export default nextConfig;
