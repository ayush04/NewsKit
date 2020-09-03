import React from 'react';

import {StatefulSlider} from '..';
import {styled} from '../../utils/style';
import {ThumbLabelProps, SliderProps, LabelPosition} from '../types';
import {StorybookHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {Placeholder} from '../../icons';

const myCustomTheme = createTheme({
  name: 'my-custom-slider-theme',
  overrides: {
    stylePresets: {
      customTrackStylePreset: {
        base: {
          backgroundColor: 'red',
          borderColor: 'blue',
          borderWidth: '5px',
          borderStyle: 'solid',
        },
      },
      customIndicatorStylePreset: {
        base: {
          backgroundColor: 'yellow',
        },
      },
      customThumbStylePreset: {
        base: {
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: '5px',
          borderStyle: 'solid',
        },
      },
      customThumbLabelStylePreset: {
        base: {
          borderColor: 'black',
          borderWidth: '1px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'green',
        },
      },
      customLabelStylePreset: {
        base: {
          borderColor: 'purple',
          borderWidth: '2px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'purple',
        },
      },
    },
  },
});

const CustomTrack = styled.div`
  width: 100%;
  height: 32px;
  background-image: linear-gradient(red, yellow);
`;
const renderCustomTrack: SliderProps['renderTrack'] = ({props, children}) => (
  <CustomTrack {...props}>{children}</CustomTrack>
);

const CustomThumb = styled.div`
  height: 40px;
  padding: 4px;
  border-radius: 50% 0 50% 0;
  background: black;
  border: dashed 2px yellow;
`;

const renderCustomThumb: SliderProps['renderThumb'] = ({props}) => (
  <CustomThumb {...props} aria-label="custom slider thumb">
    <Placeholder size="iconSize030" color="inkNonEssential" />
  </CustomThumb>
);

const Svg = styled.svg`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

const CustomMinLabel: React.FC = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
  </Svg>
);

// eslint-disable-next-line react/prefer-stateless-function
class CustomMaxLabel extends React.Component {
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
      </Svg>
    );
  }
}

const FlexContainer = styled.div`
  margin: 48px 0;
  display: flex;
`;

const ContainerWithBorder = styled.div`
  border: solid 1px red;
  margin: 48px 0;
  display: flex;
`;

const VerticalContainerWithBorder = styled.div`
  border: solid 1px red;
  display: inline-flex;
  height: 300px;
  margin: 0 24px;
`;

const StyledCustomThumbLabel = styled.h1`
  margin: 0;
  font-family: fantasy;
  color: seagreen;
  bottom: -35px;
  position: relative;
`;
const CustomThumbLabel: React.FC<ThumbLabelProps> = ({children, ...props}) => (
  <StyledCustomThumbLabel {...props}>{`${children}%`}</StyledCustomThumbLabel>
);

export default {
  name: 'slider',
  children: [
    {
      name: '1-thumb-slider',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>1 thumb slider</StorybookHeading>
          <ContainerWithBorder>
            <StatefulSlider values={[50]} max={100} min={0} />
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: '2-thumb-slider',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>2 thumb slider</StorybookHeading>
          <ContainerWithBorder>
            <StatefulSlider values={[30, 60]} max={100} min={0} />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider values={[0, 100]} max={100} min={0} />
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-with-text-labels',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>with text labels</StorybookHeading>
          <ContainerWithBorder>
            <StatefulSlider
              values={[2.5]}
              max={10}
              min={0}
              step={0.5}
              thumbLabel
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider values={[10]} max={20} min={0} minLabel="0" />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider values={[20]} max={30} min={0} maxLabel="30" />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[30]}
              max={40}
              min={0}
              minLabel="0"
              maxLabel="40"
              thumbLabel
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[150]}
              max={200}
              min={100}
              minLabel="100"
              maxLabel="200"
              labelPosition={LabelPosition.Before}
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[150]}
              max={200}
              min={100}
              minLabel="100"
              maxLabel="200"
              labelPosition={LabelPosition.After}
            />
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-with-custom-labels',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>with custom labels</StorybookHeading>
          <ContainerWithBorder>
            <StatefulSlider
              values={[40]}
              max={50}
              min={0}
              minLabel={CustomMinLabel}
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[60]}
              max={70}
              min={0}
              maxLabel={CustomMaxLabel}
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[33]}
              max={80}
              min={0}
              minLabel={CustomMinLabel}
              maxLabel={CustomMaxLabel}
              thumbLabel={CustomThumbLabel}
            />
          </ContainerWithBorder>
          <ContainerWithBorder>
            <StatefulSlider
              values={[80, 90]}
              max={100}
              min={0}
              minLabel={CustomMinLabel}
              maxLabel={CustomMaxLabel}
              thumbLabel={CustomThumbLabel}
            />
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-with-custom-style-preset',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Custom style presets</StorybookHeading>
          <ContainerWithBorder>
            <ThemeProvider theme={myCustomTheme}>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel="0"
                maxLabel="100%"
                thumbLabel
                overrides={{
                  track: {
                    stylePreset: 'customTrackStylePreset',
                    size: 'sizing050',
                  },
                  indicator: {
                    stylePreset: 'customIndicatorStylePreset',
                  },
                  thumb: {
                    stylePreset: 'customThumbStylePreset',
                    size: 'sizing070',
                  },
                  thumbLabel: {
                    stylePreset: 'customThumbLabelStylePreset',
                    typePreset: 'label040',
                    space: 'space060',
                  },
                  labels: {
                    stylePreset: 'customLabelStylePreset',
                    typePreset: 'label030',
                    space: 'space040',
                  },
                }}
              />
            </ThemeProvider>
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-with-custom-renders',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Custom renderers</StorybookHeading>
          <ContainerWithBorder>
            <ThemeProvider theme={myCustomTheme}>
              <StatefulSlider
                values={[40]}
                max={100}
                min={0}
                renderTrack={renderCustomTrack}
              />
            </ThemeProvider>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ThemeProvider theme={myCustomTheme}>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                renderThumb={renderCustomThumb}
              />
            </ThemeProvider>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ThemeProvider theme={myCustomTheme}>
              <StatefulSlider
                values={[60]}
                max={100}
                min={0}
                renderTrack={renderCustomTrack}
                renderThumb={renderCustomThumb}
              />
            </ThemeProvider>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ThemeProvider theme={myCustomTheme}>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                thumbIcon={Placeholder}
              />
            </ThemeProvider>
          </ContainerWithBorder>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-renders-vertical',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Vertical Slider examples</StorybookHeading>
          <FlexContainer>
            <VerticalContainerWithBorder>
              <StatefulSlider values={[20]} max={50} min={0} vertical />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider values={[0, 50]} max={50} min={0} vertical />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel="0"
                maxLabel="%"
                vertical
                thumbLabel
              />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel="0%"
                maxLabel="100%"
                vertical
                thumbLabel
              />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel={CustomMinLabel}
                maxLabel={CustomMaxLabel}
                vertical
              />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel={CustomMinLabel}
                maxLabel={CustomMaxLabel}
                thumbLabel={CustomThumbLabel}
                vertical
              />
            </VerticalContainerWithBorder>
          </FlexContainer>
        </React.Fragment>
      ),
    },
    {
      name: 'slider-with-labels-before-and-after',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>
            Vertical Slider with labels before and after
          </StorybookHeading>
          <FlexContainer>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel="0%"
                maxLabel="100%"
                vertical
                thumbLabel
                labelPosition={LabelPosition.Before}
              />
            </VerticalContainerWithBorder>
            <VerticalContainerWithBorder>
              <StatefulSlider
                values={[50]}
                max={100}
                min={0}
                minLabel="0%"
                maxLabel="100%"
                vertical
                thumbLabel
                labelPosition={LabelPosition.After}
              />
            </VerticalContainerWithBorder>
          </FlexContainer>
        </React.Fragment>
      ),
    },
  ],
};
