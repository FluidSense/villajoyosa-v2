module.exports = {
  reactStrictMode: true,
  target: 'serverless', // See if this stops creating useless functions https://docs.netlify.com/configure-builds/common-configurations/next-js/
  images: {
    domains: ['https://villajoyosa.kvamme.land/', "cdn.sanity.io"],
  },
  generateBuildId: () => 'build', // Should decrease build time on Netlify
}
