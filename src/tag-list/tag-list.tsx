import React from 'react';
import {styled, getSizingFromTheme} from '../utils/style';
import {SizingKeys} from '../themes';
import {TagListProps, TagListLayout} from './types';
import {Tag} from '../tag';
import {StyledUl as ListStyledUl} from '../list';

const layoutToJustifyContent = {
  [TagListLayout.Left]: 'flex-start',
  [TagListLayout.Center]: 'center',
  [TagListLayout.Right]: 'flex-end',
};

const StyledUl = styled(ListStyledUl)<{layout?: TagListLayout}>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({layout = TagListLayout.Center}) =>
    layoutToJustifyContent[layout]};
`;

const StyledLi = styled.li<{$spacing?: SizingKeys}>`
  box-sizing: border-box;
  display: inline-block;
  list-style-type: none;

  margin-right: ${getSizingFromTheme('spacingSize010', '$spacing')};
  margin-bottom: ${getSizingFromTheme('spacingSize010')};

  :last-child {
    margin-right: 0;
  }
`;

export const TagList: React.FC<TagListProps> = ({
  $layout,
  $size,
  $shape,
  $spacing,
  tagData,
}) => (
  <StyledUl layout={$layout}>
    {tagData.map(({label, href}, i) => (
      <StyledLi
        // eslint-disable-next-line react/no-array-index-key
        key={`${label}-${href}-${$shape}-${$size}-${i}`}
        $spacing={$spacing}
      >
        <Tag $size={$size} $shape={$shape} href={href}>
          {label}
        </Tag>
      </StyledLi>
    ))}
  </StyledUl>
);
