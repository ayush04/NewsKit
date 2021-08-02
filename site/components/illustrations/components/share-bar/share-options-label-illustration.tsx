import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ShareOptionsLabelIllustration: React.FC = () => {
  const clip0 = getSSRId();

  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <Path
            d="M622 258.726C622 247.832 627.214 239 633.645 239H1496.35C1502.79 239 1508 247.832 1508 258.726V579.274C1508 590.168 1502.79 599 1496.35 599H633.645C627.214 599 622 590.168 622 579.274V258.726Z"
            fill="illustrationInterface010"
          />
        </g>
        <Path
          d="M788.779 457.433C783.734 457.433 779.173 456.557 775.096 454.806C771.088 453.054 767.909 450.532 765.56 447.239C763.21 443.947 762.001 440.058 761.932 435.575H777.48C777.687 438.587 778.724 440.969 780.59 442.721C782.525 444.472 785.151 445.348 788.468 445.348C791.854 445.348 794.514 444.542 796.449 442.931C798.384 441.249 799.352 439.078 799.352 436.415C799.352 434.243 798.695 432.457 797.382 431.056C796.069 429.655 794.411 428.569 792.407 427.798C790.472 426.957 787.777 426.047 784.321 425.066C779.622 423.665 775.787 422.298 772.816 420.967C769.913 419.566 767.391 417.499 765.249 414.767C763.175 411.965 762.139 408.252 762.139 403.628C762.139 399.284 763.21 395.501 765.352 392.278C767.494 389.055 770.501 386.603 774.37 384.922C778.24 383.17 782.663 382.295 787.638 382.295C795.102 382.295 801.148 384.151 805.778 387.864C810.477 391.507 813.069 396.622 813.552 403.207H797.589C797.451 400.685 796.38 398.618 794.376 397.007C792.441 395.326 789.85 394.485 786.602 394.485C783.769 394.485 781.488 395.22 779.761 396.692C778.102 398.163 777.273 400.3 777.273 403.102C777.273 405.064 777.895 406.71 779.139 408.041C780.452 409.302 782.041 410.353 783.907 411.194C785.842 411.965 788.537 412.875 791.992 413.926C796.691 415.327 800.526 416.729 803.498 418.13C806.469 419.531 809.026 421.633 811.168 424.435C813.311 427.238 814.382 430.916 814.382 435.47C814.382 439.393 813.38 443.036 811.376 446.399C809.372 449.762 806.435 452.459 802.565 454.491C798.695 456.452 794.1 457.433 788.779 457.433Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M859.304 397.638C863.657 397.638 867.527 398.618 870.913 400.58C874.299 402.472 876.925 405.309 878.791 409.092C880.726 412.805 881.693 417.289 881.693 422.544V456.697H867.182V424.54C867.182 419.916 866.041 416.378 863.761 413.926C861.48 411.404 858.371 410.143 854.432 410.143C850.424 410.143 847.245 411.404 844.895 413.926C842.615 416.378 841.475 419.916 841.475 424.54V456.697H826.963V378.932H841.475V405.729C843.341 403.207 845.828 401.246 848.938 399.844C852.048 398.373 855.503 397.638 859.304 397.638Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M891.762 427.378C891.762 421.493 892.902 416.273 895.182 411.719C897.532 407.166 900.676 403.663 904.615 401.211C908.623 398.758 913.08 397.532 917.987 397.532C922.271 397.532 926.003 398.408 929.182 400.16C932.43 401.911 935.021 404.118 936.956 406.78V398.478H951.571V456.697H936.956V448.185C935.09 450.918 932.499 453.195 929.182 455.016C925.934 456.768 922.168 457.643 917.883 457.643C913.046 457.643 908.623 456.382 904.615 453.86C900.676 451.338 897.532 447.8 895.182 443.246C892.902 438.622 891.762 433.333 891.762 427.378ZM936.956 427.588C936.956 424.015 936.265 420.967 934.883 418.445C933.501 415.853 931.635 413.891 929.285 412.56C926.936 411.159 924.414 410.458 921.719 410.458C919.023 410.458 916.536 411.124 914.255 412.455C911.975 413.786 910.109 415.748 908.658 418.34C907.276 420.862 906.585 423.875 906.585 427.378C906.585 430.881 907.276 433.963 908.658 436.626C910.109 439.218 911.975 441.214 914.255 442.616C916.605 444.017 919.093 444.717 921.719 444.717C924.414 444.717 926.936 444.052 929.285 442.721C931.635 441.319 933.501 439.358 934.883 436.836C936.265 434.243 936.956 431.161 936.956 427.588Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M980.257 407.516C982.123 404.433 984.541 402.016 987.513 400.265C990.553 398.513 994.008 397.638 997.878 397.638V413.086H994.043C989.482 413.086 986.027 414.172 983.677 416.343C981.397 418.515 980.257 422.298 980.257 427.693V456.697H965.745V398.478H980.257V407.516Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M1061.04 426.327C1061.04 428.429 1060.9 430.32 1060.62 432.002H1018.64C1018.99 436.205 1020.44 439.498 1022.99 441.88C1025.55 444.262 1028.69 445.453 1032.43 445.453C1037.82 445.453 1041.65 443.106 1043.93 438.412H1059.58C1057.93 444.017 1054.75 448.641 1050.05 452.284C1045.35 455.857 1039.58 457.643 1032.74 457.643C1027.21 457.643 1022.23 456.417 1017.81 453.965C1013.46 451.443 1010.04 447.905 1007.55 443.351C1005.13 438.797 1003.92 433.543 1003.92 427.588C1003.92 421.563 1005.13 416.273 1007.55 411.719C1009.97 407.166 1013.35 403.663 1017.71 401.211C1022.06 398.758 1027.07 397.532 1032.74 397.532C1038.2 397.532 1043.07 398.723 1047.35 401.105C1051.71 403.487 1055.06 406.885 1057.41 411.299C1059.83 415.643 1061.04 420.652 1061.04 426.327ZM1046.01 422.123C1045.94 418.34 1044.59 415.327 1041.96 413.086C1039.34 410.774 1036.12 409.618 1032.32 409.618C1028.73 409.618 1025.69 410.739 1023.2 412.981C1020.78 415.152 1019.3 418.2 1018.74 422.123H1046.01Z"
          fill="illustrationHighlight010"
        />
        <Path
          opacity="0.5"
          d="M1242.32 424.078V469.169H1262.37V424.078H1277.31L1280.15 405.426H1262.37V393.322C1262.37 388.219 1264.85 383.245 1272.82 383.245H1280.9V367.365C1280.9 367.365 1273.56 366.105 1266.55 366.105C1251.9 366.105 1242.32 375.038 1242.32 391.21V405.426H1226.04V424.078H1242.32Z"
          fill="illustrationSubtle010"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M725 438C734.389 438 742 430.389 742 421C742 411.611 734.389 404 725 404C717.694 404 711.464 408.609 709.06 415.078L394.992 415.5L395.008 427.5L709.119 427.078C711.565 433.465 717.753 438 725 438Z"
          fill="illustrationHighlight010"
        />
        <g filter={`url(#${filter1})`}>
          <Path
            d="M425 423C425 490.379 370.379 545 303 545C235.621 545 181 490.379 181 423C181 355.621 235.621 301 303 301C370.379 301 425 355.621 425 423Z"
            fill="illustrationInterface010"
          />
        </g>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M237.917 423C248.152 397.026 273.417 378.625 303 378.625C332.583 378.625 357.847 397.026 368.083 423C357.847 448.974 332.583 467.375 303 467.375C273.417 467.375 248.152 448.974 237.917 423ZM355.185 423C345.423 403.061 325.424 390.458 303 390.458C280.576 390.458 260.578 403.061 250.815 423C260.578 442.939 280.517 455.542 303 455.542C325.484 455.542 345.423 442.939 355.185 423ZM303 408.208C311.165 408.208 317.792 414.835 317.792 423C317.792 431.165 311.165 437.792 303 437.792C294.835 437.792 288.208 431.165 288.208 423C288.208 414.835 294.835 408.208 303 408.208ZM276.375 423C276.375 408.327 288.327 396.375 303 396.375C317.673 396.375 329.625 408.327 329.625 423C329.625 437.673 317.673 449.625 303 449.625C288.327 449.625 276.375 437.673 276.375 423Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="595.73"
          y="225.865"
          width="938.54"
          height="412.54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="13.1349" />
          <feGaussianBlur stdDeviation="13.1349" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="165"
          y="293"
          width="276"
          height="276"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default ShareOptionsLabelIllustration;