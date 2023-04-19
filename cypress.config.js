const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'https://neradni-dani.com',
    supportFile: false,
    fixturesFolder: false,
    viewportHeight: 1200,
    viewportWidth: 1200,
    blockHosts: [
      'googleads.g.doubleclick.net',
      'pagead2.googlesyndication.com',
    ],
  },
})
