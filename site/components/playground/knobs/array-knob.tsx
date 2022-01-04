import React from 'react';
import {
  styled,
  getTypePresetFromTheme,
  getSizingFromTheme,
  getColorFromTheme,
  Button,
  ButtonSize,
} from 'newskit';
import {Block} from '../../block';
import {KnobContainer, StyledTitle} from './common';
import {TextKnob} from './text-knob';

type UpdateFunction = (
  index: number,
  key?: string,
) => (newValue: unknown) => void;

export interface ArrayKnobProps {
  label: string;
  value: unknown[];
  onChange?: (value: unknown) => void;
}

export const StyledLabel = styled.label`
  display: block;
  ${getTypePresetFromTheme('body030')};
  margin: ${getSizingFromTheme('sizing040')} 0px;
`;

export const StyledInput = styled.input`
  ${getTypePresetFromTheme('body010')};
  display: block;
  padding: ${getSizingFromTheme('spacingSize020')};
  background-color: ${getColorFromTheme('interface020')};
  color: ${getColorFromTheme('inkContrast')};

  width: 300px;
  border-radius: ${({theme}) => theme.borderRadius.semiRounded.sizing040};
  border-style: solid;
  border-width: ${({theme}) => theme.borders.borderWidth020};
  border-color: ${getColorFromTheme('interface040')};

  :focus {
    outline: none;
    border-color: ${getColorFromTheme('interactive010')};
  }
`;

const renderRow = (
  label: string,
  value: unknown,
  index: number,
  length: number,
  update: UpdateFunction,
) => {
  if (typeof value === 'object') {
    return Object.entries(value as Record<string, string>).map(([k, v]) => (
      <Block $display="flex" $flexGrow={1} $maxWidth="350px">
        <TextKnob
          key={label + k + length}
          label={k}
          labelVisible={!index}
          value={v}
          onChange={update(index, k)}
        />
      </Block>
    ));
  }

  if (typeof value === 'string') {
    return (
      <Block $display="flex" $flexGrow={1} $maxWidth="350px">
        <TextKnob
          key={label + length}
          label={label}
          labelVisible={false}
          value={value}
          onChange={update(index)}
        />
      </Block>
    );
  }

  return false;
};

const TEST_ID_PREFIX = 'array-knob';

export const ArrayKnob: React.FC<ArrayKnobProps> = ({
  label,
  value: values,
  onChange = () => {},
}) => {
  const add = () => {
    const lastEntry = values[values.length - 1];
    const newEntry = typeof lastEntry === 'object' ? {...lastEntry} : lastEntry;
    onChange([...values, newEntry]);
  };

  const remove = (index: number) => () => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const update: UpdateFunction = (index, key) => newValue => {
    const newValues = [...values];
    newValues[index] = key ? {...values[index], [key]: newValue} : newValue;
    onChange(newValues);
  };

  const lowercaseLabel = label.toLowerCase().replace(' ', '-');

  return (
    <KnobContainer data-testid={`${TEST_ID_PREFIX}-${lowercaseLabel}`}>
      <StyledTitle>{label}</StyledTitle>
      <Block $marginLeft="sizing030">
        {values.map((value, i, arr) => {
          if (!value || Array.isArray(value)) {
            // eslint-disable-next-line no-console
            console.error(
              'Arrays of arrays not currently supported by ArrayKnob. Entries must be strings or objects of string values',
            );
            return null;
          }

          const row = renderRow(label, value, i, arr.length, update);
          return row ? (
            <Block $display="flex">
              {row}
              <Block
                $display="flex"
                $alignItems="baseline"
                $flexDirection="column-reverse"
              >
                <Button
                  $size={ButtonSize.Small}
                  disabled={arr.length < 2}
                  onClick={remove(i)}
                  data-testid={`${TEST_ID_PREFIX}-button-remove`}
                >
                  -
                </Button>
              </Block>
            </Block>
          ) : null;
        })}
        <Button
          data-testid={`${TEST_ID_PREFIX}-button-add`}
          $size={ButtonSize.Small}
          onClick={add}
        >
          +
        </Button>
      </Block>
    </KnobContainer>
  );
};

export default ArrayKnob;
