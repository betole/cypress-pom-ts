Cypress.Commands.overwrite(
  'type', (
    originalFn: any,
    element: Cypress.JQueryWithSelector<HTMLElement>,
    text: string,
    options: Partial<Cypress.TypeOptions & { clear: boolean, hide: boolean }>
) => {
  if (options && (options.hide || options.clear)) {
    options.log = false
    Cypress.log({
      $el: element,
      name: 'type (override)',
      message: options.hide? '*'.repeat(text.length) : text
    });
  }

  text = (options && options.clear)? '{selectall}{backspace}' + text : text;

  return originalFn(element, text, options);
});

declare global {
  namespace Cypress {
    interface Chainable {
      type(text: string, options: Partial<Cypress.TypeOptions & { clear: boolean, hide: boolean }>): Chainable
    }
  }
}
