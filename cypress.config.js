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
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
