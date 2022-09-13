/* eslint-disable consistent-return */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ThemeProvider} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {pathToID} from '../../components/illustrations/utils';
import {docsThemeLight} from '../../theme/doc-theme';

const RUN = false;

if (!process.browser && RUN) {
  // const files = globby('**/*.tsx', {cwd: '../../components/illustrations/'});
  // console.log({files});

  // import Component from '../../components/illustrations/components/checkbox/hero';

  // // render to string as ReactDOM.renderToString

  // const html = ReactDOMServer.renderToStaticMarkup(
  //   <ThemeProvider theme={newskitLightTheme}>
  //     <Component />
  //   </ThemeProvider>,
  // );

  // console.log(html);

  // @ts-ignore
  const getComponent = imprt => {
    if (imprt.default) return imprt.default;

    const exports = Object.values(imprt);
    return exports[0];
  };

  (async () => {
    const g = await import('globby');
    const fs = require('fs');
    const path = require('path');

    const processDir = process.cwd();

    const ignoreList = [
      'circle',
      'ellipse',
      'illustration-loader',
      'path',
      'rect',
      'svg',
    ];

    const paths = await g.globby(
      path.join(processDir, 'site/components/illustrations/**/*.tsx'),
      // __dirname + '../../components/illustrations/**/*.tsx',
      {},
    );

    const imprtPaths = paths

      .slice(0, 1500)
      .map((path: string) =>
        path
          .replace(`${processDir}/site/components/illustrations/`, '')
          .replace('.tsx', ''),
      )
      .filter((path: string) => !ignoreList.includes(path));

    console.log({short: imprtPaths});
    const components = imprtPaths.map(
      path => import(`../../components/illustrations/${path}`),
    );

    const importedComponents = await Promise.all(components);
    const svgComponents = importedComponents.map((imprt, indx) => {
      const Component = getComponent(imprt);

      if (!Component) {
        console.log(`no default for:${imprtPaths[indx]}`);
      }

      const id = pathToID(imprtPaths[indx]);
      // render to string
      const svg = ReactDOMServer.renderToStaticMarkup(
        <ThemeProvider theme={docsThemeLight}>
          <Component />
        </ThemeProvider>,
      );

      // add id and style
      const styledSVG = svg.replace(
        '<svg ',
        `<svg id="${id}" style="width: 100%; height: 100%" `,
      );

      return styledSVG;
    });

    function ensureDirectoryExistence(filePath: string) {
      const dirname = path.dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdirSync(dirname);
    }

    svgComponents.forEach((svgContent, indx) => {
      const filePath = `${imprtPaths[indx]}.svg`;
      const fullPath = `${processDir}/site/public/static/illustrations/${filePath}`;
      console.log(fullPath);
      ensureDirectoryExistence(fullPath);

      fs.writeFileSync(fullPath, svgContent, {flag: 'w'});
    });
  })();
}

// grap all files from folder

// read a single file
// import Component from '../components/illustrations/components/checkbox/hero';

// replace fill colors

// add reference id="name-of-file"

// save file as svg

const PreviewIllustrationExport = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <div>its ok</div>
    <svg viewBox="0 0 1490 838">
      <use xlinkHref="#components-checkbox-hero" />
    </svg>
    <svg
      style={{width: '100%', height: '100%'}}
      width={1490}
      height={838}
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="css-0"
    >
      <symbol id="components-checkbox-hero">
        <rect
          style={{fill: 'var(--color-illustrationBackground020)'}}
          width={1490}
          height={838}
        />
        <mask
          id="nk-174-bla"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x={524}
          y={198}
          width={442}
          height={442}
        >
          <path
            style={{fill: 'var(--color-interface010)'}}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M564 198C541.909 198 524 215.909 524 238V600C524 622.091 541.909 640 564 640H926C948.091 640 966 622.091 966 600V238C966 215.909 948.091 198 926 198H564ZM894.074 339.21C901.922 331.438 901.983 318.775 894.21 310.926C886.438 303.078 873.775 303.017 865.926 310.79L698.811 476.296L640.618 413.977C633.079 405.904 620.423 405.47 612.35 413.009C604.277 420.548 603.844 433.204 611.382 441.277L680.822 515.639C690.057 525.529 705.637 525.833 715.251 516.312L894.074 339.21Z"
          />
        </mask>
        <g mask="url(#nk-174-bla)">
          <g filter="url(#nk-176)">
            <rect
              style={{fill: 'var(--color-interface010)'}}
              width={442}
              height={442}
              transform="translate(524 198)"
            />
            <mask
              id="nk-175-bla"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x={524}
              y={198}
              width={442}
              height={442}
            >
              <rect
                style={{fill: 'var(--color-white)'}}
                x={524}
                y={198}
                width={442}
                height={442}
                rx={40}
              />
            </mask>
            <g mask="url(#nk-175-bla)">
              <path
                style={{fill: 'var(--color-illustrationPalette060)'}}
                d="M595.918 59.8407C382.813 116.942 256.241 335.591 313.211 548.207C370.181 760.823 589.121 886.893 802.226 829.792C1015.33 772.69 1141.9 554.041 1084.93 341.425C1027.96 128.809 809.023 2.73928 595.918 59.8407Z"
              />
              <path
                style={{fill: 'var(--color-illustrationPalette050)'}}
                d="M1002.99 96.8475C1003.07 96.8906 1003.25 96.9756 1003.53 97.1055C1007.91 99.1526 1036.16 112.36 1068.14 148.574C1102.15 187.09 1140.37 251.652 1158.49 356.525C1176.6 461.403 1163.78 541.071 1132.79 601.112C1101.8 661.153 1052.61 701.617 997.896 728.038C888.442 780.893 773.419 777.333 692.717 731.566C653.717 709.449 638.198 668.461 619.488 619.046C618.891 617.47 618.29 615.884 617.686 614.29C598.158 562.801 574.373 502.873 516.937 446.432C453.669 384.259 452.188 288.648 481.72 203.039C496.482 160.247 518.981 119.995 545.338 87.7331C571.699 55.4657 601.892 31.2242 632.026 20.4037C692.376 -1.2663 765.44 7.30177 833.296 26.583C901.139 45.8601 963.696 75.8223 1002.99 96.8475Z"
                stroke="#446BE4"
              />
              <path
                style={{fill: 'var(--color-illustrationPalette040)'}}
                d="M1183.35 378.395C1183.37 378.33 1183.42 378.188 1183.5 377.972C1184.75 374.564 1192.78 352.596 1190.6 316.493C1188.28 278.095 1174.39 223.678 1128.41 158.618C1036.43 28.4959 909.183 10.9163 845.958 47.408C842.415 49.4529 838.805 51.5259 835.144 53.6286C805.131 70.8652 771.634 90.1027 742.743 112.273C710.32 137.154 683.778 165.669 674.452 199.103C655.774 266.059 685.85 323.475 724.415 390.251C733.412 405.83 740.134 423.661 746.073 441.954C748.774 450.272 751.316 458.692 753.835 467.04C754.087 467.873 754.337 468.704 754.588 469.535C757.357 478.701 760.116 487.761 763.055 496.5C774.822 531.499 789.397 561.145 818.575 571.667C820.017 572.187 856.146 582.535 902.85 587.594C949.565 592.655 1006.75 592.412 1050.37 571.843C1136.69 531.142 1163.2 444.352 1182.7 380.518C1182.92 379.808 1183.13 379.1 1183.35 378.395Z"
                stroke="#577FFB"
              />
              <path
                style={{fill: 'var(--color-illustrationPalette030)'}}
                d="M1136.97 286.428C1136.98 286.391 1137.01 286.309 1137.06 286.185C1137.77 284.23 1142.38 271.656 1141.13 250.98C1139.8 228.986 1131.84 197.796 1105.47 160.491C1052.73 85.8798 979.826 75.8635 943.667 96.7335C941.633 97.9072 939.562 99.0969 937.461 100.304C920.236 110.196 901.026 121.228 884.459 133.942C865.864 148.211 850.678 164.54 845.344 183.658C834.653 221.984 851.858 254.857 873.996 293.188C879.17 302.147 883.033 312.397 886.443 322.899C887.994 327.674 889.452 332.508 890.898 337.299C891.043 337.776 891.187 338.254 891.331 338.731C892.919 343.991 894.502 349.187 896.187 354.199C902.941 374.287 911.28 391.201 927.919 397.202C928.727 397.494 949.443 403.428 976.232 406.33C1003.03 409.234 1035.8 409.088 1060.78 397.31C1110.22 373.995 1125.41 324.27 1136.61 287.624C1136.73 287.224 1136.85 286.825 1136.97 286.428Z"
                stroke="#87A4FC"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="nk-176"
            x={508}
            y={190}
            width={474}
            height={474}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={8} />
            <feGaussianBlur stdDeviation={8} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_973_179076"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_973_179076"
              result="shape"
            />
          </filter>
        </defs>
      </symbol>
    </svg>
  </Layout>
);

export default PreviewIllustrationExport;
