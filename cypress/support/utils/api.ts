const baseUrl: string = Cypress.env('API_BASE_URL')?? Cypress.config().baseUrl;

export default class Api {
  public static url = (path: string) => `${baseUrl}${path}`;
}

export const api = new Api();
export const url = Api.url;
