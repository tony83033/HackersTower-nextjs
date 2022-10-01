/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
