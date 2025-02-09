const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/tests/*.spec.js",
    watchForFileChanges: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});