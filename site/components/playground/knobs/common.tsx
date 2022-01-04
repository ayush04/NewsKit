import {styled, getSizingFromTheme, getTypePresetFromTheme} from 'newskit';

export const KnobContainer = styled.div`
  margin-bottom: ${getSizingFromTheme('spacingSize020')};
  margin-right: ${getSizingFromTheme('spacingSize020')};
  width: 100%;
`;

export const StyledTitle = styled.span`
  display: block;
  ${getTypePresetFromTheme('body030')};
  margin: ${getSizingFromTheme('sizing040')} 0px;
`;

export const getHash = () =>
  (Math.random() * 10 ** 10).toString(16).split('.')[0];
