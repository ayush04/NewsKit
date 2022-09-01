import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {TextFieldSize} from '../../text-field';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs, newskitLightTheme} from '../../theme';
import {TextArea} from '../text-area';
import {Label} from '../../label';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {FormInputState} from '../../form/types';
import {TextAreaProps} from '../types';
import {
  Form,
  FormInput,
  FormInputAssistiveText,
  FormInputLabel,
  FormInputTextArea,
} from '../../form';
import {Button} from '../../button';
import {deepMerge} from '../../utils';

const textAreaCustomThemeObject: CreateThemeArgs = {
  name: 'text-area-custom-theme',
  overrides: {
    stylePresets: {
      customStyle: deepMerge(newskitLightTheme.stylePresets.inputField, {
        base: {
          backgroundColor: 'blue',
          borderWidth: '8px',
          borderRadius: '10px',
          borderColor: 'violet',
          placeholderColor: 'white',
        },
      }),
      customOutline: deepMerge(newskitLightTheme.stylePresets.inputField, {
        focus: {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
        },
      }),
    },
  },
};

const DOCS_URL = 'https://newskit.co.uk/components/text-area/';

const sizes: TextFieldSize[] = ['small', 'medium', 'large'];
const states: FormInputState[] = ['valid', 'invalid', 'disabled'];
const resizes: TextAreaProps['resize'][] = [
  'none',
  'vertical',
  'horizontal',
  'both',
];

export const TextAreaSizes = () => (
  <StorybookPage title="TextArea Sizes" url={DOCS_URL}>
    {sizes.map(size => (
      <StorybookCase title={size}>
        <Label size={size}>Label</Label>
        <TextArea size={size} placeholder="Placeholder" />
        <AssistiveText size={size}>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
  </StorybookPage>
);

export const TextAreaStates = () => (
  <StorybookPage title="TextArea States" url={DOCS_URL}>
    <StorybookCase title="Base">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="auto focus">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" autoFocus />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    {states.map(state => (
      <StorybookCase title={state as string}>
        <Label>Label</Label>
        <TextArea placeholder="Placeholder" state={state} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
    <StorybookCase title="read only">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" readOnly />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaWidth = () => (
  <StorybookPage title="TextArea Width" url={DOCS_URL}>
    <StorybookCase title="default (100%)">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>

    <StorybookCase title="fixed width">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" overrides={{width: '200px'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaHeight = () => (
  <StorybookPage title="TextArea Height" url={DOCS_URL}>
    <StorybookCase title="default">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>

    <StorybookCase title="fixed height">
      <Label>Label</Label>
      <TextArea placeholder="Placeholder" overrides={{minHeight: '200px'}} />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaResize = () => (
  <StorybookPage title="TextArea resize" url={DOCS_URL}>
    {resizes.map(resize => (
      <StorybookCase title={resize as string}>
        <Label>Label</Label>
        <TextArea placeholder="Placeholder" resize={resize} />
        <AssistiveText>Assistive Text</AssistiveText>
      </StorybookCase>
    ))}
  </StorybookPage>
);

export const TextAreaRowsAndCols = () => (
  <StorybookPage title="TextArea cols and rows" url={DOCS_URL}>
    <StorybookCase title="cols and rows">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        rows={5}
        cols={40}
        overrides={{width: 'unset', minHeight: 'unset'}}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaOverrides = () => (
  <StorybookPage title="TextArea overrides" url={DOCS_URL}>
    <StorybookCase title="style">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'customStyle',
          typographyPreset: 'editorialHeadline010',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="logical props">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          paddingBlock: 'space050',
          paddingInline: 'space080',
          marginBlockStart: 'space060',
          marginBlockEnd: 'space050',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
    <StorybookCase title="outline">
      <Label>Label</Label>
      <TextArea
        placeholder="Placeholder"
        overrides={{
          stylePreset: 'customOutline',
        }}
      />
      <AssistiveText>Assistive Text</AssistiveText>
    </StorybookCase>
  </StorybookPage>
);

export const TextAreaValidation = () => (
  <StorybookPage title="TextArea validation" url={DOCS_URL}>
    <StorybookCase title="Form validation">
      <Form onSubmit={() => console.log('Form submitted')}>
        <FormInput
          name="name"
          rules={{
            required: 'Required field',
          }}
        >
          <FormInputLabel>Label</FormInputLabel>
          <FormInputTextArea />
          <FormInputAssistiveText>Assistive text</FormInputAssistiveText>
        </FormInput>
        <Button type="submit" overrides={{marginBlockStart: 'space040'}}>
          Submit
        </Button>
      </Form>
    </StorybookCase>
  </StorybookPage>
);

export default {
  title: 'NewsKit Light/text-area',
  component: () => 'None',
  disabledRules: ['color-contrast'],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          textAreaCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
