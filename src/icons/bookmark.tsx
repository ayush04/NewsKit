import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SizingKeys, ColorKeys} from '../themes';

export interface BookmarkIconProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<BookmarkIconProps> = ({$size, $color}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>Bookmark icon</title>
    <path d="M17,3 L7,3 C5.9,3 5.01,3.9 5.01,5 L5,21 L12,18 L19,21 L19,5 C19,3.9 18.1,3 17,3 L17,3 Z M17,18 L12,15.82 L7,18 L7,5 L17,5 L17,18 L17,18 Z" />
  </Svg>
);

export const Bookmark = withTheme<BookmarkIconProps>(props => {
  const Icon = props.theme.icons.Bookmark || defaultIcon;

  return <Icon {...props} />;
});
