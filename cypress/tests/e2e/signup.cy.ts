import api from "../../fixtures/api.json";

import { sup } from "../../support/pages/signUp";
import { sip } from "../../support/pages/signIn";

import {url} from "../../support/utils/api";
import { Fixtures } from "../../support/enums/fixtures";
import { hp } from "../../support/pages/home";
import UserWS from "../../support/wrappers/userWS";

before(function() {
  cy.envFixture([
    Fixtures.USERS,
    Fixtures.BANK_ACCOUNTS
  ]);
});

describe('Sign Up Flows', function () {
  beforeEach(function() {
    sip
      .open()
      .goToSignUp();
    cy  
      .intercept('POST', url(api.users))
      .as('createUser');
  });

  it('Sign Up as a new user. Then sign in and check starting balance is 0.', function() {
    const newUser = new UserWS();
    cy.log(newUser.password);
    sup
      .signUp(newUser, true);
    cy
      .wait('@createUser')
      .its('response.statusCode')
      .should('eq', 201);

    sip
      .signin(newUser, true);
    hp.om
      .completeOnboarding(this.bankAccounts.newUserUI);
    
    //Validations
    hp.sn.labels.fullName().should('contain.text', `${newUser.firstName} ${newUser.lastName.charAt(0)}`);
    hp.sn.labels.userName().should('have.text', `@${newUser.userName}`);
    hp.sn.labels.balance().should('have.text', `$0.00`);
    hp.rows.container(0).should('be.visible');
    hp.hd.tabs.everyone().should('attr', 'aria-selected', 'true');
    hp.hd.buttons.newTransaction().should('attr', 'aria-disabled', 'false');
    hp.hd.buttons.sidenavToggle().should('be.visible');
  })
});
