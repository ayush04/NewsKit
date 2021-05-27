import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils/style';

export interface BannerProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  icon?: React.ReactElement<NewsKitIconProps>;
  overrides?: {
    stylePreset?: MQ<string>;
    minHeight?: MQ<string>;
    spaceInset?: MQ<string>;
    innerContainer?: {
      maxWidth?: MQ<string>;
      icon?: {
        spaceInline?: MQ<string>;
      };
      content?: {
        spaceInline?: MQ<string>;
        message?: {
          stylePreset?: MQ<string>;
          typographyPreset?: MQ<string>;
        };
      };
    };
  };
}