import loc from "../../fixtures/locators/pages/home.json";
import url from "../../fixtures/url.json"

import BasePage from "./base/basePage";
import { OnboardingModal } from "./modals/onboarding";
import SideNav from "./components/sidenav";
import Header from "./components/header";

class HomePage extends BasePage {
  public om: OnboardingModal = new OnboardingModal();
  public sn: SideNav = new SideNav();
  public hd: Header = new Header();

  constructor() {
    super(url.home);
  }

  public rows = {
    container:  (i: number) => cy.get(loc.rows.container).eq(i),
    amount: (i: number) => cy.get(loc.rows.amount).eq(i),
    commentCount: (i: number) => cy.get(loc.rows.commentCount).eq(i),
    likeCount: (i: number) => cy.get(loc.rows.likeCount).eq(i),
    paymentId: (i: number) => cy.get(loc.rows.paymentId).eq(i),
    receiver: (i: number) => cy.get(loc.rows.receiver).eq(i),
    sender: (i: number) => cy.get(loc.rows.sender).eq(i),
    action: (i: number) => cy.get(loc.rows.action).eq(i),
  }

  public noTransactions = {
    container: () => cy.get(loc.rows.noTransactions),
    createTransaction: () => cy.get(loc.rows.createTransaction)
  }
}

export const hp = new HomePage();
