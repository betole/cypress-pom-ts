import loc from "../../fixtures/locators/pages/signUp.json";
import commonLoc from "../../fixtures/locators/common.json";
import url from "../../fixtures/url.json"

import BasePage from "./base/basePage";
import Secrets from "../utils/secrets";
import UserWS from "../wrappers/userWS";

class SignupPage extends BasePage {
  constructor() {
    super(url.signUp);
  }

  //Locators
  private invalidFields = (locator: string) => 
    cy.get(locator + commonLoc.properties['aria-invalid']);

  public inputs = {
    firstName: () => cy.get(loc.inputs.firstName),
    lastName: () => cy.get(loc.inputs.lastName),
    userName: () => cy.get(loc.inputs.userName),
    password: () => cy.get(loc.inputs.password),
    confirmPassword: () => cy.get(loc.inputs.confirmPassword),
    invalidFirstName: () => this.invalidFields(loc.inputs.firstName),
    invalidLastName: () => this.invalidFields(loc.inputs.lastName),
    invalidUserName: () => this.invalidFields(loc.inputs.userName),
    invalidPassword: () => this.invalidFields(loc.inputs.password),
    invalidConfirmPassword: () => this.invalidFields(loc.inputs.confirmPassword),
  }

  public buttons = {
    signUp:() => cy.get(loc.buttons.signUp)
  }

  //Actions
  signUp(user: UserWS, click?: boolean
  ) {
    const pwd = user.password? user.password : Secrets.getPassword(user.userName);
    this.inputs.firstName().type(user.firstName);
    this.inputs.lastName().type(user.lastName);
    this.inputs.userName().type(user.userName);
    this.inputs.password().type(pwd, {hide: true});
    this.inputs.confirmPassword().type(pwd, {hide: true});
    if (click) this.buttons.signUp().click();
    return this;
  }
}

export const sup = new SignupPage();
