/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
 
}

module.exports = {
  trailingSlash: true,

 // images.unoptimized = true
 images: {
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  unoptimized: true,
  // domains : ["dummyimage.com"],
  // domains: ["assets.vercel.com"],
 },
}

module.exports = nextConfig
