// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  articleByline: '/components/byline',
  audioPlayer: '/components/audio-player',
  dateTime: '/components/date-time',
  icons: '/components/icons',
  spacePresets: '/theming/presets/space-presets',
  typography: '/theming/presets/typography-presets',
  welcome: '/index',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test on ${pageName}`, () => {
      cy.eyesOpen();
      cy.mockConsentAndVisit(path);
      if (!['spacePresets', 'welcome'].includes(pageName)) {
        cy.get('[data-testid="sample-code"]').first().scrollIntoView({
          easing: 'linear',
        });
      }
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
