import lc from "../../fixtures/locators/signin.json";
import commonLc from "../../fixtures/locators/common.json";
import url from "../../fixtures/url.json"

import BasePage from "./basePage";

class SignInPage extends BasePage {
  constructor() {
    super(url.signIn);
  }
  
  //Locators
  private invalidFields = (locator: string) => 
    cy.get(locator + commonLc.properties['aria-invalid']);

  public fields = {
    userName: () => cy.get(lc.fields.userName),
    password: () => cy.get(lc.fields.password),
    invalidUserName: () => this.invalidFields(lc.fields.userName),
    invalidPassword: () => this.invalidFields(lc.fields.password)
  }

  public buttons = {
    signIn: () => cy.get(lc.buttons.signIn)
  }

  public checks = {
    rememberMe: () => cy.get(lc.checks.rememberMe)
  }

  public links = {
    goToSignUp: () => cy.get(lc.links.signUp)
  }

  // //Actions
  // public override open(): SignInPage {
  //   super.open();
  //   return this;
  // }

  public signin(opts: {
    userName: string, 
    password: string, 
    click?: boolean, 
    rememberMe?: boolean
  }): SignInPage {
    this.fields.userName().type(opts.userName);
    this.fields.password().type(opts.password);
    if (opts.rememberMe) this.checks.rememberMe().click();
    if (opts.click) this.buttons.signIn().click();
    return this;
  }

  public goToSignUp(): void {
    this.links.goToSignUp().click();
  }
}

export const sip = new SignInPage();
