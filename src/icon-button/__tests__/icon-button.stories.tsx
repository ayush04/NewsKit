import * as React from 'react';
import {IconButton} from '..';
import {getColorFromTheme, styled} from '../../utils/style';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {
  Block,
  Cell,
  Grid,
  Stack,
  StackDistribution,
  IconFilledEmail,
  IconFilledLink,
  IconFilledPause,
  ButtonOverrides,
  ButtonSize,
} from '../..';

const Container = styled.div`
  margin: 24px;
`;

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

interface IntentKindStylePreset {
  kind: string;
  stylePreset: string;
}

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div<{hasBackground?: boolean}>`
  margin-top: 24px;
  ${({hasBackground, theme}) =>
    hasBackground && {
      background: getColorFromTheme('black')({theme}),
      color: getColorFromTheme('white')({theme}),
    }}
`;

const IconButtonIntentKindsScenario: React.FC<{
  hasBackground?: boolean;
  name: string;
  buttonKinds: IntentKindStylePreset[];
  overrides: ButtonOverrides;
}> = ({hasBackground = false, name, buttonKinds, overrides}) => (
  <Background hasBackground={hasBackground}>
    <StorybookSubHeading>{name}</StorybookSubHeading>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {buttonKinds.map(({kind, stylePreset}) => {
        const kindOverrides = {...overrides, stylePreset};
        return (
          <Cell xs={4} sm={3}>
            <Stack
              spaceInline="space020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{kind}</h3>
              <Block data-state="Default">
                <IconButton
                  aria-label="Pause icon"
                  overrides={kindOverrides}
                  size={ButtonSize.Medium}
                >
                  <IconFilledPause />
                </IconButton>
              </Block>

              <Block data-state="Focused">
                <IconButton
                  aria-label="Link icon"
                  autoFocus
                  overrides={kindOverrides}
                  size={ButtonSize.Medium}
                >
                  <IconFilledLink />
                </IconButton>
              </Block>

              <Block data-state="Disabled">
                <IconButton
                  aria-label="Email icon"
                  disabled
                  overrides={kindOverrides}
                  size={ButtonSize.Medium}
                >
                  <IconFilledEmail />
                </IconButton>
              </Block>

              <Block data-state="Loading">
                <IconButton
                  aria-label="Loading indicator"
                  overrides={kindOverrides}
                  size={ButtonSize.Medium}
                  loading
                />
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </Background>
);

export default {
  title: 'NewsKit Light/icon-button',
  component: () => 'None',
};

export const StoryIconButtonSizes = () => (
  <>
    <StorybookSubHeading>Icon Button Size</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space070"
        spaceInline="space070"
        wrap="wrap"
      >
        <IconButton aria-label="Email icon" size={ButtonSize.Small}>
          <IconFilledEmail />
        </IconButton>
        <IconButton aria-label="Email icon" size={ButtonSize.Medium}>
          <IconFilledEmail />
        </IconButton>
        <IconButton aria-label="Email icon" size={ButtonSize.Large}>
          <IconFilledEmail />
        </IconButton>
      </Stack>
    </Container>
  </>
);
StoryIconButtonSizes.storyName = 'icon-button-sizes';

export const StoryIconButtonIntentPrimary = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Primary"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidPrimary'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedPrimary'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalPrimary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    }}
  />
);
StoryIconButtonIntentPrimary.storyName = 'icon-button-intent-primary';

export const StoryIconButtonIntentSecondary = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Secondary"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidSecondary'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedSecondary'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalSecondary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorSecondary',
      },
    }}
  />
);
StoryIconButtonIntentSecondary.storyName = 'icon-button-intent-secondary';

export const StoryIconButtonIntentNegative = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Negative"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidNegative'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedNegative'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalNegative'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorNegative',
      },
    }}
  />
);
StoryIconButtonIntentNegative.storyName = 'icon-button-intent-negative';

export const StoryIconButtonIntentPositive = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Positive"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidPositive'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedPositive'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalPositive'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPositive',
      },
    }}
  />
);
StoryIconButtonIntentPositive.storyName = 'icon-button-intent-positive';

export const StoryIconButtonInverse = () => (
  <IconButtonIntentKindsScenario
    hasBackground
    name="Icon Button Inverse"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidInverse'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedInverse'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalInverse'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorInverse',
      },
    }}
  />
);
StoryIconButtonInverse.storyName = 'icon-button-inverse';

export const StoryIconButtonLink = () => (
  <React.Fragment>
    <StorybookSubHeading>Icon button link</StorybookSubHeading>
    <Container>
      <IconButton aria-label="Link icon" href="https://www.newskit.co.uk/">
        <IconFilledLink />
      </IconButton>
    </Container>
    <StorybookSubHeading>Icon button link with overrides</StorybookSubHeading>
    <Container>
      <IconButton
        aria-label="Link icon"
        href="https://www.newskit.co.uk/"
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        <IconFilledLink />
      </IconButton>
    </Container>
  </React.Fragment>
);
StoryIconButtonLink.storyName = 'icon-button-link';