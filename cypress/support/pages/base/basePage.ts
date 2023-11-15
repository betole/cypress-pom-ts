export default abstract class BasePage {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  public open(): this {
    cy.visit(this.url);
    return this;
  }
}
