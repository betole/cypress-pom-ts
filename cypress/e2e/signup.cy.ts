import { sup } from "../support/pages/signUp";
import { sip } from "../support/pages/signIn";
import apiUrl from "../fixtures/apiUrl.json";

const apiBaseUrl = Cypress.env('API_BASE_URL');

describe('Sign Up Flows', function () {
  beforeEach(function() {
    sip
      .open()
      .goToSignUp();
    cy  
      .intercept('POST', apiBaseUrl + apiUrl.users)
      .as('createUser');
  });

  it('Happy Path', function() {
    sup
      .signUp({
        userName: 'JRB',
        firstName: 'JRB',
        lastName: 'testUser',
        password: 'callefalsa123',
        click: true
      });
    cy
      .wait('@createUser')
      .its('response')
      .then(resp => {
        expect(resp.statusCode).to.eq(201);
      });;
  });
});
