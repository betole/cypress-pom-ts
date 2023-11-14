export default abstract class BasePage {
  constructor(url: string) {
    this.url = url;
  }

  protected url: string;

  public open(): this {
    cy.visit(this.url);
    return this;
  }
}
