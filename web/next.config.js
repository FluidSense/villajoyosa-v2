module.exports = {
  reactStrictMode: true,
  target: "serverless",
  images: {
    domains: ['https://villajoyosa.kvamme.land/', "cdn.sanity.io"],
  },
  generateBuildId: () => 'build', // Should decrease build time on Netlify
}
