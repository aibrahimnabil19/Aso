/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ibiene.com',
      },
      {
        protocol: 'https',
        hostname: 'freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freepik.com',
      },
    ]
  }
};

export default nextConfig;
