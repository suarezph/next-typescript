/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },*/
}

module.exports = nextConfig
