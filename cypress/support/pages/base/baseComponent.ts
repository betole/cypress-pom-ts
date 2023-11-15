export default abstract class BaseComponent {
  protected container: string;

  constructor(container: string) {
    this.container = container;
  }

  public base = {
    container: () => cy.get(this.container)
  }
}
