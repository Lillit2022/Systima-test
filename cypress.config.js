const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ommq8s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
