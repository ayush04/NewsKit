import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SizingKeys} from '../themes/newskit-light/sizing';

export interface WhatsAppIconProps {
  $size: SizingKeys;
}

const defaultIcon: React.FC<WhatsAppIconProps> = ({$size}) => (
  <Svg viewBox="0 0 400 400" $size={$size}>
    <title>WhatsApp Logo</title>
    <g>
      <circle fill="#25D366" cx="200" cy="200" r="200" />
    </g>
    <g transform="rotate(-90 200.0000152587891,200)">
      <g>
        <path
          fill="#ffffff"
          d="m257.94568,174.77384c-3.14674,1.57488 -18.61776,9.1866 -21.50242,10.23793c-2.88406,1.05012 -4.98189,1.57428 -7.07971,-1.57488c-2.09783,-3.14976 -8.12863,-10.23853 -9.96437,-12.33877c-1.83515,-2.09964 -3.67089,-2.36353 -6.81763,-0.78744c-3.14674,1.57488 -13.28624,4.89734 -25.30556,15.61897c-9.35447,8.34421 -15.67029,18.64856 -17.50544,21.79892c-1.83575,3.15036 -0.19626,4.85326 1.37923,6.4221c1.41606,1.41002 3.14734,3.67573 4.72041,5.51329c1.57367,1.83696 2.09783,3.15036 3.14674,5.2494c1.04891,2.10085 0.52476,3.9378 -0.26268,5.51268c-0.78623,1.57488 -7.07971,17.06462 -9.70169,23.36595c-2.55435,6.13527 -5.14855,5.30435 -7.08032,5.40157c-1.83333,0.09118 -3.93358,0.11051 -6.0308,0.11051c-2.09783,0 -5.50725,-0.78744 -8.39191,-3.9372c-2.88406,-3.15036 -11.01329,-10.76389 -11.01329,-26.25182c0,-15.48974 11.27537,-30.4523 12.84904,-32.55255c1.57367,-2.10085 22.18902,-33.88467 53.75666,-47.51511c7.50725,-3.24275 13.36897,-5.17875 17.93901,-6.62863c7.53805,-2.39553 14.39795,-2.05737 19.82005,-1.24698c6.0459,0.90278 18.61776,7.61172 21.24034,14.96196c2.62198,7.35206 2.62198,13.65218 1.83515,14.96438c-0.78623,1.3128 -2.88406,2.10024 -6.0308,3.67573m-57.41668,-78.39676l-0.04227,0c-18.78322,0.00725 -37.20593,5.05375 -53.27719,14.59058l-3.82246,2.26872l-39.61716,-10.39252l10.57428,38.62682l-2.48853,3.96075c-10.47826,16.66546 -16.01269,35.92755 -16.00423,55.70654c0.02295,57.71318 46.98069,104.6673 104.71923,104.6673c27.95895,-0.00966 54.24035,-10.91184 74.00425,-30.69808c19.76269,-19.78503 30.64011,-46.08455 30.62924,-74.05377c-0.02355,-57.71801 -46.98069,-104.67636 -104.67515,-104.67636m89.08698,193.76455c-23.77718,23.80496 -55.39796,36.9203 -89.08819,36.93419c-69.41608,0 -125.91248,-56.49277 -125.94025,-125.92999c-0.00906,-22.19687 5.78986,-43.86173 16.811,-62.96137l-17.86655,-65.26028l66.7621,17.51269c18.39493,-10.03322 39.10569,-15.32186 60.18359,-15.32851l0.05133,0l0.0006,0c69.40884,0 125.91006,56.4982 125.93844,125.93663c0.01268,33.65098 -13.07488,65.29229 -36.85206,89.09664"
        />
      </g>
    </g>
  </Svg>
);

export const WhatsApp = withTheme<WhatsAppIconProps>(props => {
  const {$size, theme} = props;

  const Icon = theme.icons.WhatsApp || defaultIcon;

  return <Icon $size={$size} />;
});
