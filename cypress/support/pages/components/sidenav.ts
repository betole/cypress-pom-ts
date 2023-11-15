import loc from '../../../fixtures/locators/components/sidenav.json';

import BaseComponent from '../base/baseComponent';

export default class SideNav extends BaseComponent{
  constructor() {
    super(loc.container);
  }

  public labels = {
    fullName: () => cy.get(loc.labels.fullName),
    userName: () => cy.get(loc.labels.userName),
    avatar: () => cy.get(loc.labels.avatar),
    balance: () => cy.get(loc.labels.balance)
  }

  public buttons = {
    home: () => cy.get(loc.buttons.home),
    myAccount: () => cy.get(loc.buttons.myAccount),
    bankAccounts: () => cy.get(loc.buttons.bankAccounts),
    notifications: () => cy.get(loc.buttons.notifications),
    logout: () => cy.get(loc.buttons.logout)
  }
}