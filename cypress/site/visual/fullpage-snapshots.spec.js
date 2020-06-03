// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  articleByline: '/components/article-byline',
  audioPlayer: '/components/audio-player',
  dateLine: '/components/date-line',
  icons: '/foundations/icons',
  radioPlayer: '/components/radio-player',
  spacing: '/foundations/spacing',
  typography: '/foundations/typography',
  welcome: '/index',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.visit(path);
      if (!['spacing', 'welcome'].includes(pageName)) {
        cy.get('[data-testid="sample-code"]')
          .first()
          .scrollIntoView({
            easing: 'linear',
          });
      }
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
