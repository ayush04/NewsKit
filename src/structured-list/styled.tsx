import {Grid} from '../grid';
import {StructuredListCellProps, StructuredListItemProps} from './types';
import {
  getMediaQueryFromTheme,
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  styled,
} from '../utils';

export const StyledGrid = styled(Grid)<
  Pick<StructuredListItemProps, 'overrides'>
>`
  ${getStylePreset('structuredListItem', '')};
  ${getResponsiveSpace('padding', 'structuredListItem', '', 'spaceInset')}
  ${getResponsiveSize('minHeight', 'structuredListItem', '', 'minHeight')}
`;

export const StyledWrapper = styled.div<StructuredListCellProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${getMediaQueryFromTheme('md')} {
    justify-content: flex-start;
  }
`;

export const StyledListItemContainer = styled.li<
  Pick<StructuredListItemProps, 'overrides' | 'ariaLabel'>
>`
  list-style: none;
  width: 100%;
`;
