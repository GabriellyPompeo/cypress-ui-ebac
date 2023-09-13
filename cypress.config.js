const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'pe1qqx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //em sistemas legados poderá acontecer um erro no console do cypress identificado como "security error", se ocorrer, descomente a linha acima :) 
    chromeWebSecurity: false,

    // para em todos os testes iniciarem no mesmo link, descomente a linha abaixo:
    // baseUrl: 'http://lojaebac.ebaconline.art.br/#'
  },
})