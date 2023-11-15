import loc from "../../fixtures/locators/pages/signin.json";
import commonLc from "../../fixtures/locators/common.json";
import url from "../../fixtures/url.json"

import BasePage from "./base/basePage";
import { OnboardingModal } from "./modals/onboarding";
import SideNav from "./components/sidenav";

class HomePage extends BasePage {
  public om: OnboardingModal = new OnboardingModal();
  public sn: SideNav = new SideNav();

  constructor() {
    super(url.home);
  }
}

export const hp = new HomePage();
