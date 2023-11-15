import loc from '../../../fixtures/locators/components/header.json';

import BaseComponent from '../base/baseComponent';

export default class Header extends BaseComponent{
  constructor() {
    super(loc.container);
  }

  public tabs = {
    friends: () => cy.get(loc.tabs.friends),
    everyone: () => cy.get(loc.tabs.everyone),
    mine: () => cy.get(loc.tabs.mine)
  }

  public buttons = {
    sidenavToggle: () => cy.get(loc.buttons.sidenavToggle),
    notifications: () => cy.get(loc.buttons.notifications),
    newTransaction: () => cy.get(loc.buttons.newTransaction)
  }
}
