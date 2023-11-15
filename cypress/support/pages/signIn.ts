import loc from "../../fixtures/locators/pages/signin.json";
import commonLoc from "../../fixtures/locators/common.json";
import url from "../../fixtures/url.json"

import BasePage from "./base/basePage";
import Secrets from "../utils/secrets";
import UserWS from "../wrappers/userWS";

class SignInPage extends BasePage {
  constructor() {
    super(url.signIn);
  }
  
  //Locators
  private invalidFields = (locator: string) => 
    cy.get(locator + commonLoc.properties['aria-invalid']);

  public inputs = {
    userName: () => cy.get(loc.inputs.userName),
    password: () => cy.get(loc.inputs.password),
    invalidUserName: () => this.invalidFields(loc.inputs.userName),
    invalidPassword: () => this.invalidFields(loc.inputs.password)
  }

  public buttons = {
    signIn: () => cy.get(loc.buttons.signIn)
  }

  public checks = {
    rememberMe: () => cy.get(loc.checks.rememberMe)
  }

  public links = {
    goToSignUp: () => cy.get(loc.links.signUp)
  }

  public signin(user: UserWS, click?: boolean, rememberMe?: boolean): SignInPage {
    this.inputs.userName().type(user.userName);
    this.inputs.password()
    .type(user.password? user.password : Secrets.getPassword(user.userName), {hide: true});
    if (rememberMe) this.checks.rememberMe().click();
    if (click) this.buttons.signIn().click();
    return this;
  }

  public goToSignUp(): void {
    this.links.goToSignUp().click();
  }
}

export const sip = new SignInPage();
