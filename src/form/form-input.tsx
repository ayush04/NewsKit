import React, {useContext} from 'react';
import composeRefs from '@seznam/compose-react-refs';
import {Label} from '../text-field/label';
import {TextField} from '../text-field/text-field';
import {AssistiveText} from '../text-field/assistive-text';
import {composeEventHandlers, getStatusIcon} from './utils';
import {useReactKeys} from '../utils/hooks';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {
  AssistiveTextProps,
  FormInputTextFieldProps,
  FormEntryProps,
  LabelProps,
  TextFieldSize,
  FormInputState,
} from '../text-field/types';
import {FormEntry} from './form-entry';
import {Block} from '../block';

const FormInputContext = React.createContext<{
  name?: string;
  size?: TextFieldSize;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  assistiveTextId?: string;
  statusIcon?: React.ReactNode;
}>({});

export type FormInputProps = {
  state?: FormInputState;
  size?: TextFieldSize;
  children?: JSX.Element | JSX.Element[];
  id?: string;
} & Omit<FormEntryProps, 'children'>;

const useFormFieldContext = () => useContext(FormInputContext);

export const FormInput = ({
  name,
  rules,
  state: stateProp,
  size = TextFieldSize.Medium,
  children,
  id,
}: FormInputProps) => {
  const [autoGeneratedId] = useReactKeys(1);

  const currentID = id || autoGeneratedId;

  const theme = useTheme();

  const validationIconSize = getToken(
    {theme, overrides: {}},
    `textField.${size}.endEnhancer`,
    'endEnhancer',
    'iconSize',
  );

  return (
    <FormEntry name={name} rules={rules}>
      {({ref, state: stateContext, onChange, onBlur, error}) => {
        const state = stateProp || stateContext;
        const assistiveTextId =
          (state === 'invalid' && `${currentID}-error-text`) ||
          `${currentID}-assistive-text`;

        const statusIcon = getStatusIcon({
          state,
          iconSize: validationIconSize,
        });

        const value = {
          name,
          size,
          onChange,
          onBlur,
          state,
          error,
          ref,
          id: currentID,
          assistiveTextId,
          statusIcon,
        };

        return (
          <FormInputContext.Provider value={value}>
            {children}
          </FormInputContext.Provider>
        );
      }}
    </FormEntry>
  );
};

export const FormInputLabel = ({children, ...props}: LabelProps) => {
  const {size, state, id} = useFormFieldContext();

  return (
    <Label size={size} state={state} htmlFor={id} {...props}>
      {children}
    </Label>
  );
};

export const FormInputTextField = React.forwardRef<
  HTMLInputElement,
  FormInputTextFieldProps
>(({children, onChange, onBlur, endEnhancer, ...props}, inputRef) => {
  const {
    size,
    name,
    state,
    onChange: onChangeContext,
    onBlur: onBlurContext,
    ref,
    id,
    assistiveTextId,
    statusIcon,
  } = useFormFieldContext();

  function getEndEnhancer() {
    if (!statusIcon) {
      return endEnhancer;
    }
    if (endEnhancer) {
      return (
        <>
          {statusIcon} <Block spaceInline="space020" /> {endEnhancer}{' '}
        </>
      );
    }
    return statusIcon;
  }
  return (
    <TextField
      name={name}
      state={state}
      size={size}
      onChange={composeEventHandlers([onChange, onChangeContext])}
      onBlur={composeEventHandlers([onBlur, onBlurContext])}
      ref={composeRefs(ref, inputRef)}
      endEnhancer={getEndEnhancer()}
      id={id}
      aria-describedby={assistiveTextId}
      {...props}
    />
  );
});

export const FormInputAssistiveText = ({
  children,
  ...props
}: AssistiveTextProps) => {
  const {size, state, error, assistiveTextId} = useFormFieldContext();

  return (
    <AssistiveText size={size} state={state} id={assistiveTextId} {...props}>
      {error || children}
    </AssistiveText>
  );
};