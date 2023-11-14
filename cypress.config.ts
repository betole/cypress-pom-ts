/// <reference types="cypress"/>

import { defineConfig } from "cypress";
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

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
    setupNodeEvents(on, config) {
      const env = config.env.ENV?? 'local';
      const envFilePath = resolve(`cypress/fixtures/envs/${env}`, 'config.json');
      const fixtureConfig = JSON.parse(readFileSync(envFilePath, 'utf-8'));
      return {
        ...config,
        ...fixtureConfig
      }
    },
  },
});
