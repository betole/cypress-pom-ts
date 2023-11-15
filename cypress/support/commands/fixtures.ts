import { Fixtures } from "../enums/fixtures";

const envFixtureBasePath = `envs/${Cypress.env('ENV')}/`;

Cypress.Commands.add('envFixture', (fixtures: Fixtures[]) => {
  fixtures.forEach(fixture => {
    const path = envFixtureBasePath + fixture;
    const alias = Cypress._.camelCase(fixture.replace('/', '_'));
    cy.fixture(envFixtureBasePath + fixture).as(alias);
    Cypress.log({
      name: 'envFixture',
      message: `load ${path} as ${alias}`
    })
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      envFixture(fixtures: Fixtures[]): void;
    }
  }
}