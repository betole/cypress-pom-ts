import loc from '../../../fixtures/locators/forms/createBankAccount.json';

import BaseComponent from '../base/baseComponent';

export class CreateBankAccountForm extends BaseComponent {
  
  constructor() {
    super(loc.container);
  }

  //Locators
  public inputs = {
    name: () => cy.get(loc.inputs.name),
    routingNumber: () => cy.get(loc.inputs.routingNumber),
    accountNumber: () => cy.get(loc.inputs.accountNumber)
  }

  //Actions
  public fill(form: {
    name?: string, 
    routingNumber?: string, 
    accountNumber?: string
  }, clear? : boolean):CreateBankAccountForm {
    if (form.name) this.inputs.name().type(form.name, {clear});
    if (form.routingNumber) this.inputs.routingNumber().type(form.routingNumber, {clear});
    if (form.accountNumber) this.inputs.accountNumber().type(form.accountNumber, {clear});
    return this;
  }
}
