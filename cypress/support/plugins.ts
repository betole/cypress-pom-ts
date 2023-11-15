import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  // get get fixture-specific config/env
  const env = config.env.ENV?? 'local';
  const envFilePath = resolve(`cypress/fixtures/envs/${env}`, 'config.json');
  const fixtureConfig = JSON.parse(readFileSync(envFilePath, 'utf-8'));
  // return the merged config from both sources
  return {
    ...config,
    ...fixtureConfig
  }
}
