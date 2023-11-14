import lc from "../../fixtures/locators/signUp.json";
import commonLc from "../../fixtures/locators/common.json";
import url from "../../fixtures/url.json"

import BasePage from "./basePage";

class SignupPage extends BasePage {
  constructor() {
    super(url.signUp);
  }

  //Locators
  private invalidFields = (locator: string) => 
    cy.get(locator + commonLc.properties['aria-invalid'])

  public fields = {
    firstName: () => cy.get(lc.fields.firstName),
    lastName: () => cy.get(lc.fields.lastName),
    userName: () => cy.get(lc.fields.userName),
    password: () => cy.get(lc.fields.password),
    confirmPassword: () => cy.get(lc.fields.confirmPassword),
    invalidFirstName: () => this.invalidFields(lc.fields.firstName),
    invalidLastName: () => this.invalidFields(lc.fields.lastName),
    invalidUserName: () => this.invalidFields(lc.fields.userName),
    invalidPassword: () => this.invalidFields(lc.fields.password),
    invalidConfirmPassword: () => this.invalidFields(lc.fields.confirmPassword),
  }

  public buttons = {
    signUp:() => cy.get(lc.buttons.signUp)
  }

  //Actions
  signUp(opts: {
    firstName: string, 
    lastName: string, 
    userName: string, 
    password: string, 
    click?: boolean
  }) {
    this.fields.firstName().type(opts.firstName);
    this.fields.lastName().type(opts.lastName);
    this.fields.userName().type(opts.userName);
    this.fields.password().type(opts.password);
    this.fields.confirmPassword().type(opts.password);
    if (opts.click) this.buttons.signUp().click();
    return this;
  }
}

export const sup = new SignupPage();
