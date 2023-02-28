import React from 'react';
import {Story as StoryType} from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import styled from '@emotion/styled';
import {Card, CardActions, CardContent, CardLink, CardMedia} from './grid-card';
import {Headline, HeadlineProps} from '../../../headline';
import {Paragraph, ParagraphProps} from '../../../typography';
import {Tag} from '../../../tag';
import {Block} from '../../../block';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../../test/theme-select-object';
import {Flag} from '../../../flag';
import {StorybookCase, StorybookPage} from '../../../test/storybook-comps';
import {LinkStandalone} from '../../../link';

const P = ({overrides, ...props}: Omit<ParagraphProps, 'children'>) => (
  <Paragraph
    overrides={{typographyPreset: 'editorialParagraph020', ...overrides}}
    {...props}
  >
    Et libero, congue at condimentum. Id lobortis urna consectetur a,
    scelerisque lorem amet, magnis fringilla.
  </Paragraph>
);

const H = ({overrides, ...props}: Omit<HeadlineProps, 'children'>) => (
  <Headline
    overrides={{typographyPreset: 'editorialHeadline030', ...overrides}}
    {...props}
  >
    Arcu risus mauris sodales penatibus sit tincidunt.
  </Headline>
);

// Style presets (Taken from style-presets.ts;)
const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

const cardCustomThemeObject: CreateThemeArgs = {
  name: 'card-custom-theme',
  overrides: {
    stylePresets: {
      headlineLink: {
        base: {
          color: '{{colors.interactivePrimary030}}',
        },
      },
      cardLabel: labelDefault,
      cardTeaserLead: {
        base: {
          color: '{{colors.inkBase}}',
        },
      },
      // mocked card Containers
      cardContainerMock: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.blue020}}',
        },
        hover: {
          backgroundColor: '{{colors.blue040}}',
          boxShadow: '{{shadows.shadow030}}',
        },
        active: {
          backgroundColor: '{{colors.blue060}}',
          boxShadow: '{{shadows.shadow050}}',
        },
      },
      cardContainerWithHover: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.blue020}}',
          color: '{{colors.inkContrast}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
          boxShadow: '{{shadows.shadow030}}',
          color: '{{colors.amber070}}',
        },
      },
      titleWithHoverFromParent: {
        base: {
          color: 'currentColor',
        },
      },
      cardContainerMock2: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.purple020}}',
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.blue020}}',
          color: '{{colors.green090}}',
        },
      },
      cardContainerMediaMock: {
        base: {
          backgroundColor: '{{colors.red020}}',
        },
      },
      cardContainerTeaserMock: {
        base: {
          backgroundColor: '{{colors.neutral010}}',
        },
        hover: {
          backgroundColor: '{{colors.amber010}}',
        },
        active: {
          backgroundColor: '{{colors.amber020}}',
        },
      },
      cardContainerActionsMock: {
        base: {
          backgroundColor: '{{colors.green020}}',
        },
      },
      headlineKickerInteractiveMock: {
        base: {
          color: '{{colors.interactiveNegative050}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactiveNegative050}}',
          textDecoration: 'underline',
        },
        active: {
          color: '{{colors.interactiveNegative050}}',
          textDecoration: 'none',
        },
        visited: {
          color: '{{colors.interactiveVisited010}}',
        },
      },
      headlineHeadingInteractiveMock: {
        base: {
          color: '{{colors.green090}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactivePositive040}}',
          textDecoration: 'none',
        },
        active: {
          color: '{{colors.interactivePositive050}}',
          textDecoration: 'underline',
        },
      },
    },
  },
};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Basic">
      <Card
        overrides={{maxWidth: '372px', stylePreset: 'cardComposable'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <H />
          <Block marginBlock="space020">
            <P />
          </Block>
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </StorybookCase>
    <StorybookCase title="As a link">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposableLink'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <CardLink href={window.location.href} expand>
            <H overrides={{heading: {stylePreset: 'headlineLink'}}} />
          </CardLink>
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag href="/news">Tag</Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="With link in action container">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <LinkStandalone href={window.location.href}>
            Standalone Link
          </LinkStandalone>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryCardAreas = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="TO DO" />
  </StorybookPage>
);
StoryCardAreas.storyName = 'Card areas';

export const StoryVariations = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="TO DO" />
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryInsetCard = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="TO DO" />
  </StorybookPage>
);
StoryInsetCard.storyName = 'Inset card';

const Container = styled.div`
  display: grid;
  gap: 2rem;
`;

const SplitCardContainer = styled.div<{maxWidth: string}>`
  display: flex;
  ${({maxWidth}) => ({'max-width': maxWidth})}
`;

const SplitCardBar = styled.div<{width: string; background: string}>`
  ${({width, background}) => ({width, background})}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SplitBars = ({
  columns,
  maxWidth,
}: {
  columns: string;
  maxWidth: string;
}) => {
  const [first, second] = columns.split(' ');
  return (
    <SplitCardContainer maxWidth={maxWidth}>
      <SplitCardBar width={first} background="#FEECEC">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {first}
        </Paragraph>
      </SplitCardBar>
      <SplitCardBar width={second} background="#D5E0FC">
        <Paragraph
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingBlock: 'space020',
          }}
        >
          {second}
        </Paragraph>
      </SplitCardBar>
    </SplitCardContainer>
  );
};

const SplitCard = ({columns}: {columns: string}) => {
  const maxWidth = '600px';
  return (
    <div>
      <SplitBars columns={columns} maxWidth={maxWidth} />
      <Card
        overrides={{
          maxWidth,
          marginBlockStart: 'space020',
          stylePreset: 'cardComposable',
        }}
        columns={columns}
        areas={`
          media content
          media actions
        `}
      >
        <CardContent overrides={{paddingInline: 'space040'}}>
          <H />
          <Block marginBlock="space020">
            <P />
          </Block>
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </div>
  );
};

export const StoryLayout = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <Container>
      <SplitCard columns="50% 50%" />
      <SplitCard columns="40% 60%" />
      <SplitCard columns="60% 40%" />
    </Container>
  </StorybookPage>
);
StoryLayout.storyName = 'Layout';

export const StorySpan = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="TO DO" />
  </StorybookPage>
);
StorySpan.storyName = 'Span';

export const StoryOrder = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="CardContent and heading first">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
        areas={`
          content
          media
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryOrder.storyName = 'Order';

export const StoryResponsiveCard = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Typography preset - headline">
      <Card
        overrides={{
          maxWidth: {xl: '600px', md: '372px'},
          stylePreset: 'cardComposable',
        }}
        rowGap="space040"
        columnGap="space040"
        columns={{xs: '200px 1fr', md: '1fr'}}
        areas={{
          xs: `
            media content
            media actions
          `,
          md: `
            media
            content
            actions
          `,
        }}
      >
        <CardContent>
          <H />
          <Block marginBlock="space020">
            <P />
          </Block>
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryResponsiveCard.storyName = 'Responsive card';

export const StoryOnClick = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="onClick handler on Tag">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag onClick={() => alert('Tag clicked')} size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryOnClick.storyName = 'On click';

export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Margin overrides">
      <Card
        overrides={{
          maxWidth: '250px',
          stylePreset: 'cardComposable',
          marginInline: 'space060',
        }}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="Padding overrides">
      <Card
        overrides={{
          maxWidth: '250px',
          stylePreset: 'cardComposable',
          paddingBlock: 'space060',
        }}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space020'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="Padding overrides CardContent area">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space060'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H overrides={{marginBlockStart: 'space020'}} />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryStylingOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Override background and hover colours">
      <Card
        overrides={{
          maxWidth: '250px',
          stylePreset: 'cardContainerWithHover',
        }}
      >
        <CardMedia src="/placeholder-3x2.png" />
        <CardContent
          overrides={{paddingBlock: 'space040', paddingInline: 'space040'}}
          rowGap="space030"
        >
          <div>
            <Flag>Flag</Flag>
          </div>
          {/* unfortunately in NewsKit there is not way parent hover to trigger the children one
           the easiest way to do that is using css currentColor */}
          <H overrides={{heading: {stylePreset: 'titleWithHoverFromParent'}}} />
          <P />
        </CardContent>
        {/* TODO: CardActions might be better to be a Grid instead of Block so all sub-components are consistent  */}
        <CardActions marginBlock="space040" paddingInline="space040">
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
    <StorybookCase title="TODO Override text, button and background colours">
      <Card
        overrides={{
          maxWidth: '250px',
          stylePreset: 'cardContainerMock2',
        }}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H
            overrides={{
              marginBlockStart: 'space020',
              // this is wrong override, it needs to be
              //  heading: {stylePreset: 'headlineHeadingInteractiveMock'}
              stylePreset: 'headlineHeadingInteractiveMock',
            }}
          />
          <P
            overrides={{
              marginBlockStart: 'space020',
              stylePreset: 'cardContainerMock2',
            }}
          />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions
          marginBlock="space040"
          stylePreset="cardContainerActionsMock"
        >
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryStylingOverrides.storyName = 'Styling overrides';

export const StoryOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Typography preset - headline">
      <Card
        overrides={{maxWidth: '250px', stylePreset: 'cardComposable'}}
        areas={`
          media
          content
          actions
        `}
      >
        <CardContent overrides={{paddingBlock: 'space040'}}>
          <div>
            <Flag>Flag</Flag>
          </div>
          <H
            overrides={{
              marginBlockStart: 'space020',
              typographyPreset: 'editorialHeadline070',
            }}
          />
          <P overrides={{marginBlockStart: 'space020'}} />
        </CardContent>
        <CardMedia src="/placeholder-3x2.png" />
        <CardActions marginBlock="space040">
          <Tag href="http://example.com" size="medium">
            Tag
          </Tag>
        </CardActions>
      </Card>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/composable-card',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          cardCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
