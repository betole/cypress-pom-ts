import loc from '../../../fixtures/locators/modals/onboarding.json';

import BaseComponent from '../base/baseComponent';
import { CreateBankAccountForm } from '../forms/createBankAccount';

export class OnboardingModal extends BaseComponent {
  public bf: CreateBankAccountForm = new CreateBankAccountForm();

  constructor() {
    super(loc.container);
  }

  //Locators
  public buttons = {
    save: () => cy.get(loc.buttons.save),
    logout: () => cy.get(loc.buttons.logout),
    next: () => cy.get(loc.buttons.next),
    done: () => cy.get(loc.buttons.done)
  }
  
  //Actions
  completeOnboarding(bankForm: {
    name: string, 
    routingNumber: string, 
    accountNumber: string
  }): OnboardingModal {
    this.buttons.next().click();
    this.bf.fill(bankForm);
    this.buttons.save().click();
    this.buttons.done().click();
    return this;
  }
}

export const om = new OnboardingModal();
