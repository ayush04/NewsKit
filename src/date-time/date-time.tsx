import * as React from 'react';
import format from 'date-fns/format';
import {styled} from '../utils/style';
import {DateTimeProps} from './types';
import {TextBlock} from '../text-block';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';

const StyledDateText = styled(TextBlock)`
  white-space: pre;
`;

const StyledPrefix = StyledDateText;
const StyledSuffix = StyledDateText;

const defaultDateFormat = "MMMM d yyyy, h:mmaaaaa'm'";

const ThemelessDateTime: React.FC<DateTimeProps> = ({
  date,
  dateFormat = defaultDateFormat,
  prefix,
  suffix,
  overrides = {},
}) => {
  const theme = useTheme();

  const getPresets = (path: string) => ({
    typographyPreset: getToken(
      {theme, overrides},
      `dateTime.${path}`,
      `${path}`,
      'typographyPreset',
    ),
    stylePreset: getToken(
      {theme, overrides},
      `dateTime.${path}`,
      `${path}`,
      'stylePreset',
    ),
  });

  const prefixPresets = getPresets('prefix');
  const datePresets = getPresets('');
  const suffixPresets = getPresets('suffix');

  return (
    <time>
      {prefix && (
        <StyledPrefix as="span" {...prefixPresets}>
          {`${prefix} `}
        </StyledPrefix>
      )}
      <StyledDateText as="span" {...datePresets}>
        {format(new Date(date), dateFormat)}
        {suffix ? `, ` : ` `}
      </StyledDateText>
      {suffix && (
        <StyledSuffix as="span" {...suffixPresets}>
          {suffix}
        </StyledSuffix>
      )}
    </time>
  );
};

export const DateTime = withOwnTheme(ThemelessDateTime)({
  defaults,
});
