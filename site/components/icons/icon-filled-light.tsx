import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const Light: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.95857 0.606282C8.15777 0.323947 8.57647 0.323948 8.77567 0.606283L10.1795 2.596C10.4021 2.91144 10.7863 3.0706 11.1667 3.00492L13.5663 2.59063C13.9068 2.53185 14.2029 2.82791 14.1441 3.16841L13.7298 5.56801C13.6641 5.94843 13.8233 6.33268 14.1387 6.55523L16.1285 7.95906C16.4108 8.15826 16.4108 8.57696 16.1285 8.77616L14.1387 10.18C13.8233 10.4025 13.6641 10.7868 13.7298 11.1672L14.1441 13.5668C14.2029 13.9073 13.9068 14.2034 13.5663 14.1446L11.1667 13.7303C10.7863 13.6646 10.4021 13.8238 10.1795 14.1392L8.77567 16.1289C8.57647 16.4113 8.15777 16.4113 7.95857 16.1289L6.55475 14.1392C6.33219 13.8238 5.94794 13.6646 5.56752 13.7303L3.16792 14.1446C2.82743 14.2034 2.53136 13.9073 2.59015 13.5668L3.00443 11.1672C3.07011 10.7868 2.91095 10.4025 2.59551 10.18L0.605794 8.77616C0.323459 8.57696 0.323459 8.15826 0.605794 7.95906L2.59551 6.55523C2.91095 6.33268 3.07011 5.94843 3.00443 5.56801L2.59015 3.16841C2.53136 2.82791 2.82743 2.53185 3.16792 2.59063L5.56752 3.00492C5.94794 3.0706 6.33219 2.91144 6.55475 2.596L7.95857 0.606282ZM13.003 8.36878C13.003 10.9285 10.928 13.0035 8.3683 13.0035C5.80861 13.0035 3.73358 10.9285 3.73358 8.36878C3.73358 5.8091 5.80861 3.73406 8.3683 3.73406C10.928 3.73406 13.003 5.8091 13.003 8.36878ZM8.36712 12.0744C10.4144 12.0744 12.074 10.4148 12.074 8.36761C12.074 6.32038 10.4144 4.66077 8.36712 4.66077C6.31989 4.66077 4.66028 6.32038 4.66028 8.36761C4.66028 10.4148 6.31989 12.0744 8.36712 12.0744Z"
      fill="white"
    />
  </Svg>
);

export const IconFilledLight = withDefaultProps(toNewsKitIcon(Light), {
  title: 'Light icon',
  overrides: {size: 'iconSize020'},
});

IconFilledLight.displayName = 'IconFilledLight';