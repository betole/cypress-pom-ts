import { CyHttpMessages, HttpResponseInterceptor, RouteMatcher, StaticResponse } from "cypress/types/net-stubbing";

class Stub {
  private hasQuery = (req: CyHttpMessages.IncomingHttpRequest) => {
    return (
      typeof req.body == 'object' &&
      req.body.hasOwnProperty('query') && 
      typeof req.body.query == 'string'
    );
  }

  private hasOperationName = (req: CyHttpMessages.IncomingHttpRequest, operationName?: string) => {
    if (operationName) {
      return req.body.hasOwnProperty('operationName') && typeof req.body.operationName === operationName;
    } else {
      return true;
    }
  }

  private queryMatchesPattern = (req: CyHttpMessages.IncomingHttpRequest, pattern?: string | RegExp) => {
    if (pattern) {
      const matcher = typeof pattern == 'string'? new RegExp(pattern) : pattern;
      return typeof req.body.query == 'string' && (req.body.query as string).match(matcher);
    } else {
      return true;
    }
  }

  public modifyRest(opts: {
    urlMatcher: RouteMatcher,
    modifier: HttpResponseInterceptor | StaticResponse,
    alias?: string
  }): Stub {
    cy.intercept(opts.urlMatcher, (req: CyHttpMessages.IncomingHttpRequest) => {
      req.alias = opts.alias;
      req.reply(opts.modifier);
    });
    return this;
  }

  public modifyGraphQL(opts: {
    matcher: { url: string, operationName?: string, queryPattern?: string | RegExp},
    modifier: HttpResponseInterceptor | StaticResponse,
    alias?: string
  }): Stub {
    cy.intercept('POST', opts.matcher.url, (req: CyHttpMessages.IncomingHttpRequest) => {
      if (
        this.hasQuery(req) &&
        this.hasOperationName(req, opts.matcher.operationName) &&
        this.queryMatchesPattern(req, opts.matcher.queryPattern)
      ) {
        req.alias = opts.alias;
        req.reply(opts.modifier);
      }
    });
    return this;
  }

  public newTabInCurrent(alias: string): Stub {
    cy.on('window:before:load', (win: any) => {
      cy.stub(win, 'open')
        .as(alias)
        .callsFake((url: string) => {
          if (url) {
            return win
              .open
              .wrappedMethod
              .call(win, url, '_self');
          }
        });
    });
    return this;
  }
}

export const stub = new Stub();
