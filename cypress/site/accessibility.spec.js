// / <reference types="Cypress" />

import siteRoutes from '../../site/routes.json';

const flatRoutes = routes =>
  routes.reduce((acc, route) => {
    if (route.page) {
      acc.push(route.id);
      return acc;
    }

    return acc.concat(flatRoutes(route.subNav));
  }, []);

const pages = flatRoutes(siteRoutes);

describe('Page accessibility', () => {
  pages.forEach(path => {
    it(`should pass basic a11y test for ${Cypress.env(
      'DOC_SITE_URL',
    )}${path}`, () => {
      const url = `${Cypress.env('DOC_SITE_URL')}${path}`;

      cy.visit(url);
      cy.injectAxe();
      if (path === `/foundations/typography` || path === `/pages/article`) {
        // The typography page is a showcase so we have disabled the heading order rule for this page.
        // More info on the rule here: https://www.w3.org/WAI/tutorials/page-structure/headings/
        cy.checkA11y({
          rules: {
            'heading-order': {enabled: false},
            'color-contrast': {enabled: false},
          },
        });
      } else {
        cy.checkA11y({
          rules: {
            'color-contrast': {enabled: false},
          },
        });
      }
    });
  });
});
