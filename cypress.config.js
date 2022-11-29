const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
    //em sistemas legados poderá acontecer um erro no console do cypress identificado como "security error", se ocorrer, descomente a linha acima :) 
  }
})