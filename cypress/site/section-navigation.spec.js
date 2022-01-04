// / <reference types="Cypress" />

describe('section navigation', () => {
  it('should contain the correct section navigation links', () => {
    cy.visit(`${Cypress.env('DOC_SITE_URL')}/components/tag-list`);
    cy.get('[data-testid="section-navigation"]')
      .find('li > a')
      .each(el => {
        cy.wrap(el).should('have.attr', 'href', `#${el.text().toLowerCase()}`);
      });
  });
});
