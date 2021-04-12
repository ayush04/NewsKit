import React from 'react';
import {
  ObjectFitProperty,
  HeightProperty,
  WidthProperty,
  MaxHeightProperty,
  MaxWidthProperty,
  ObjectPositionProperty,
  PaddingTopProperty,
} from 'csstype';
import {MQ} from '../utils/style';
import {CaptionOverrides} from '../caption';

interface HTMLImageElementWithNoSizes
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {}

interface ImageAlignmentProps {
  fit?: ObjectFitProperty;
  position?: ObjectPositionProperty<string>;
}
export interface StyledImageProps
  extends HTMLImageElementWithNoSizes,
    ImageAlignmentProps {
  $height?: HeightProperty<string>;
  $width?: WidthProperty<string>;
  $loading: boolean;
  maxHeight?: MaxHeightProperty<string>;
  maxWidth?: MaxWidthProperty<string>;
}
export interface ImageContainerProps {
  paddingTop?: PaddingTopProperty<number>;
  loading: boolean;
  stylePreset?: MQ<string>;
}
export interface ImageProps
  extends HTMLImageElementWithNoSizes,
    ImageAlignmentProps {
  placeholderIcon?: boolean;
  loadingAspectRatio?: string;
  captionText?: string;
  creditText?: string;
  overrides?: {
    height?: HeightProperty<string>;
    width?: WidthProperty<string>;
    maxHeight?: MaxHeightProperty<string>;
    maxWidth?: MaxWidthProperty<string>;
    stylePreset?: MQ<string>;
    caption?: CaptionOverrides;
  };
}
