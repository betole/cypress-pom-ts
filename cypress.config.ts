/// <reference types="cypress"/>

import { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: 1
  },
  chromeWebSecurity: false,
  numTestsKeptInMemory: 5,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  includeShadowDom: true,
  screenshotsFolder: './reports/screenshots',
  e2e: {
    specPattern: 'cypress/tests/e2e/**/*.ts',
    setupNodeEvents(on, config) {
      return require('./cypress/support/plugins.ts')(on, config);
    },
  }
});
