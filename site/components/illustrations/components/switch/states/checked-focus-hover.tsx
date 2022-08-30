import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../../svg';
import {Path} from '../../../path';
import {Rect} from '../../../rect';

export const CheckedFocusHover: React.FC = () => {
  const mask0 = getSSRId();
  const clip0 = getSSRId();
  const filter0 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M0 0H1490V838H0V0Z" fill="illustrationBackground020" />
      <Path
        d="M476 417.81C476 310.772 562.772 224 669.81 224C776.849 224 863.621 310.772 863.621 417.81C863.621 524.849 776.849 611.621 669.81 611.621C562.772 611.621 476 524.849 476 417.81Z"
        fill="illustrationInterface020"
      />
      <Rect
        x="296"
        y="283"
        width="509.993"
        height="272"
        rx="136"
        fill="illustrationHighlight010"
      />
      <mask
        id={mask0}
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="329"
        y="317"
        width="205"
        height="204"
      >
        <Path
          d="M406.497 454.7L370.798 419.001L358.898 430.9L406.497 478.499L508.494 376.502L496.594 364.603L406.497 454.7Z"
          fill="#0A0A0A"
        />
      </mask>
      <g mask={`url(#${mask0})`}>
        <Rect
          x="329.999"
          y="317.007"
          width="203.994"
          height="203.994"
          fill="interface010"
        />
      </g>
      <g clipPath={`url(#${clip0})`}>
        <Rect
          width="203.994"
          height="203.994"
          transform="translate(568 317.007)"
          fill="interface010"
        />
      </g>
      <Rect
        x="288"
        y="275"
        width="525.984"
        height="287.992"
        rx="143.996"
        stroke="#577FFB"
        stroke-width="16"
        stroke-dasharray="23 23"
      />
      <g filter={`url(#${filter0})`}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M651.177 549L644.472 538.755C639.894 531.76 630.142 529.208 622.682 533.043L624.42 532.149C622.569 533.101 621.681 535.474 622.444 537.446L631.725 561.459C633.196 565.265 636.954 570.649 640.068 573.354C640.068 573.354 658.739 588.808 658.739 594.602V601.938H688.989H697.261H704.114H711.677V594.602C711.677 588.808 723.087 570.558 723.087 570.558C725.188 567.011 726.939 560.761 726.939 556.612V526.099C726.802 519.344 721.059 513.869 713.974 513.869C710.429 513.869 707.558 516.606 707.558 519.986V522.43C707.558 515.674 701.815 510.199 694.729 510.199C691.185 510.199 688.313 512.937 688.313 516.316V518.76C688.313 512.005 682.571 506.53 675.485 506.53C671.94 506.53 669.069 509.267 669.069 512.647V515.091C669.069 514.005 668.953 513.142 668.729 512.458L666.772 480.947C666.507 476.686 662.916 473.375 658.739 473.375C654.533 473.375 651.177 476.76 651.177 480.936V511.188V549Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M624.476 532.256C630.48 530.059 637.502 531.581 642.102 535.926C642.99 536.766 643.789 537.71 644.472 538.754L651.177 548.999V480.935C651.177 476.759 654.533 473.374 658.739 473.374C662.916 473.374 666.507 476.684 666.772 480.946L668.729 512.457C668.749 512.518 668.768 512.581 668.787 512.646C668.973 513.298 669.069 514.101 669.069 515.089V512.646C669.069 512.575 669.07 512.505 669.073 512.435C669.074 512.404 669.075 512.374 669.077 512.343C669.242 509.104 672.047 506.528 675.485 506.528C676.158 506.528 676.818 506.578 677.462 506.673C678.981 506.897 680.412 507.375 681.706 508.06C684.93 509.767 687.302 512.761 688.057 516.315C688.225 517.105 688.313 517.922 688.313 518.759V516.315C688.313 512.935 691.185 510.198 694.729 510.198C695.014 510.198 695.297 510.207 695.577 510.224C697.518 510.345 699.34 510.877 700.95 511.729C704.175 513.437 706.546 516.431 707.301 519.985C707.469 520.774 707.558 521.592 707.558 522.429V519.985C707.558 516.605 710.429 513.868 713.974 513.868C714.258 513.868 714.541 513.876 714.822 513.894C721.512 514.31 726.807 519.614 726.938 526.098V556.611C726.938 560.76 725.188 567.01 723.087 570.557C723.087 570.557 711.677 588.807 711.677 594.601V601.936H658.739V594.601C658.739 588.807 640.068 573.352 640.068 573.352C636.954 570.648 633.196 565.264 631.725 561.457L622.444 537.444C621.935 536.128 622.161 534.633 622.919 533.502C623.177 533.116 623.497 532.772 623.871 532.492C624.072 532.409 624.273 532.331 624.476 532.256ZM622.682 533.042C623.073 532.841 623.469 532.658 623.871 532.492C624.043 532.363 624.226 532.248 624.42 532.148L622.682 533.042ZM618.6 525.101C613.742 528.608 611.813 535.113 613.979 540.716L623.26 564.729C625.259 569.901 629.874 576.519 634.117 580.204L634.198 580.275L634.28 580.342L634.281 580.343L634.314 580.371L634.449 580.483C634.57 580.585 634.755 580.74 634.993 580.943C635.47 581.348 636.161 581.941 636.992 582.672C638.665 584.143 640.866 586.137 643.042 588.276C645.258 590.454 647.259 592.598 648.643 594.388C649.119 595.003 649.448 595.484 649.664 595.831V611.011H720.752V594.756C720.752 594.794 720.754 594.814 720.759 594.814C720.79 594.819 720.957 593.966 721.816 591.939C722.727 589.788 724.004 587.245 725.369 584.716C726.718 582.215 728.078 579.865 729.107 578.133C729.62 577.27 730.045 576.568 730.34 576.086C730.487 575.846 730.601 575.66 730.677 575.538L730.76 575.403L730.782 575.368L730.84 575.275L730.896 575.181C732.481 572.504 733.71 569.246 734.545 566.235C735.379 563.23 736.013 559.774 736.013 556.611V526.006L736.012 525.914C735.769 513.928 725.702 504.793 713.974 504.793C712.052 504.793 710.175 505.149 708.428 505.809C704.62 502.852 699.813 501.123 694.729 501.123C692.808 501.123 690.93 501.479 689.184 502.139C685.729 499.457 681.452 497.785 676.892 497.498L675.829 480.383C675.266 471.305 667.677 464.299 658.739 464.299C649.5 464.299 642.102 471.768 642.102 480.935V524.987C635.42 521.66 627.38 521.186 620.306 524.146M649.972 596.394C649.97 596.394 649.954 596.361 649.93 596.298C649.962 596.364 649.974 596.395 649.972 596.394ZM618.6 525.101L618.533 524.971L620.271 524.077"
          fill="black"
        />
      </g>
      <Path
        d="M868.359 455.381H900.021V467.786H853V374.068H868.359V455.381Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M907.746 430.299C907.746 422.838 909.272 416.23 912.326 410.477C915.47 404.723 919.692 400.273 924.991 397.127C930.38 393.891 936.308 392.272 942.775 392.272C948.614 392.272 953.688 393.441 958 395.778C962.401 398.026 965.904 400.858 968.509 404.274V393.486H984.003V467.786H968.509V456.729C965.904 460.235 962.356 463.157 957.865 465.494C953.374 467.831 948.254 469 942.506 469C936.129 469 930.29 467.382 924.991 464.146C919.692 460.819 915.47 456.235 912.326 450.391C909.272 444.458 907.746 437.761 907.746 430.299ZM968.509 430.569C968.509 425.445 967.431 420.995 965.275 417.219C963.209 413.443 960.47 410.567 957.057 408.589C953.643 406.611 949.961 405.622 946.009 405.622C942.057 405.622 938.374 406.611 934.961 408.589C931.548 410.477 928.763 413.308 926.608 417.084C924.542 420.77 923.509 425.175 923.509 430.299C923.509 435.423 924.542 439.918 926.608 443.784C928.763 447.649 931.548 450.616 934.961 452.684C938.464 454.661 942.147 455.65 946.009 455.65C949.961 455.65 953.643 454.661 957.057 452.684C960.47 450.706 963.209 447.829 965.275 444.053C967.431 440.188 968.509 435.693 968.509 430.569Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1019.54 404.543C1022.14 400.947 1025.69 398.026 1030.18 395.778C1034.76 393.441 1039.83 392.272 1045.4 392.272C1051.96 392.272 1057.89 393.846 1063.19 396.992C1068.49 400.138 1072.66 404.633 1075.72 410.477C1078.77 416.23 1080.3 422.838 1080.3 430.299C1080.3 437.761 1078.77 444.458 1075.72 450.391C1072.66 456.235 1068.44 460.819 1063.05 464.146C1057.75 467.382 1051.87 469 1045.4 469C1039.66 469 1034.54 467.876 1030.04 465.629C1025.64 463.381 1022.14 460.505 1019.54 456.999V467.786H1004.18V368H1019.54V404.543ZM1064.67 430.299C1064.67 425.175 1063.59 420.77 1061.44 417.084C1059.37 413.308 1056.59 410.477 1053.08 408.589C1049.67 406.611 1045.99 405.622 1042.04 405.622C1038.17 405.622 1034.49 406.611 1030.99 408.589C1027.57 410.567 1024.79 413.443 1022.63 417.219C1020.57 420.995 1019.54 425.445 1019.54 430.569C1019.54 435.693 1020.57 440.188 1022.63 444.053C1024.79 447.829 1027.57 450.706 1030.99 452.684C1034.49 454.661 1038.17 455.65 1042.04 455.65C1045.99 455.65 1049.67 454.661 1053.08 452.684C1056.59 450.616 1059.37 447.649 1061.44 443.784C1063.59 439.918 1064.67 435.423 1064.67 430.299Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1163.53 428.816C1163.53 431.603 1163.35 434.12 1162.99 436.367H1106.27C1106.71 442.3 1108.92 447.065 1112.87 450.661C1116.82 454.257 1121.67 456.055 1127.42 456.055C1135.68 456.055 1141.52 452.594 1144.93 445.672H1161.5C1159.26 452.504 1155.17 458.122 1149.24 462.527C1143.41 466.842 1136.13 469 1127.42 469C1120.32 469 1113.95 467.427 1108.29 464.28C1102.72 461.044 1098.32 456.549 1095.08 450.796C1091.94 444.952 1090.37 438.21 1090.37 430.569C1090.37 422.927 1091.89 416.23 1094.95 410.477C1098.09 404.633 1102.45 400.138 1108.02 396.992C1113.68 393.846 1120.14 392.272 1127.42 392.272C1134.42 392.272 1140.67 393.801 1146.15 396.857C1151.62 399.914 1155.89 404.229 1158.94 409.802C1162 415.286 1163.53 421.624 1163.53 428.816ZM1147.49 423.961C1147.4 418.298 1145.38 413.758 1141.43 410.342C1137.48 406.926 1132.58 405.218 1126.74 405.218C1121.45 405.218 1116.91 406.926 1113.14 410.342C1109.36 413.668 1107.12 418.208 1106.4 423.961H1147.49Z"
        fill="illustrationHighlight010"
      />
      <Path
        d="M1194 368V467.786H1178.64V368H1194Z"
        fill="illustrationHighlight010"
      />
      <defs>
        <filter
          id={filter0}
          x="515.872"
          y="409.436"
          width="316.257"
          height="316.257"
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
          <feOffset dy="18.5642" />
          <feGaussianBlur stdDeviation="18.5642" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2040_72800"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2040_72800"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect
            x="568"
            y="317.007"
            width="203.994"
            height="203.994"
            rx="101.997"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default CheckedFocusHover;