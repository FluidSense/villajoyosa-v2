module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://villajoyosa.kvamme.land/', "cdn.sanity.io"],
  },
  generateBuildId: () => 'build',
  headers: async () => [
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/xml'
        }

      ]
    }
  ]
}
