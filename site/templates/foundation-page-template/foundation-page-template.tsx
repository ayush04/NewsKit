import React from 'react';
import {ThemeProvider} from 'newskit';

import Layout from '../../components/layout';
import {PageTemplate} from '../page-template';
import {
  foundationsThemeLight,
  foundationsThemeDark,
} from '../../theme/doc-theme';
import {OnwardJourneySectionProps} from '../template-sections';
import {FoundationPageTemplateProps} from './types';

const defaultFeatureCard: Partial<OnwardJourneySectionProps> = {
  buttonLabel: 'Read more',
  stylePrefix: 'foundationFeatureCard',
  layout: 'horizontal',
  href: 'readMore',
};

export const FoundationPageTemplate: React.FC<FoundationPageTemplateProps> = ({
  children,
  layoutProps,
  featureCard,
  ...rest
}) => (
  <Layout {...layoutProps} newPage>
    {({themeMode}) => (
      <>
        <ThemeProvider
          theme={
            themeMode === 'light' ? foundationsThemeLight : foundationsThemeDark
          }
        >
          <PageTemplate
            {...rest}
            featureCard={
              {
                ...defaultFeatureCard,
                ...featureCard,
              } as OnwardJourneySectionProps
            }
          >
            {children}
          </PageTemplate>
        </ThemeProvider>
      </>
    )}
  </Layout>
);