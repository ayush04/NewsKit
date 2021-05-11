// This script is for patching up and creating TSX files from the SVGs we get from Luke's Figma plugin

/* eslint-disable no-template-curly-in-string */
const fs = require('fs');
const path = require('path');

const paths = [__dirname, '../site/components/illustrations/components'];

const files = fs.readdirSync(path.resolve(...paths));
const upper = str => `${str[0].toUpperCase()}${str.substr(1)}`;

files
  .filter(filename => filename.endsWith('.svg'))
  .forEach(filename => {
    const file = fs
      .readFileSync(path.resolve(...paths, filename), {
        encoding: 'utf-8',
      })
      .replace(/fill="Palette/g, 'fill="illustrationPalette')
      .replace(/fill="i-/g, 'fill="illustration')
      .replace(`id="mask0"`, 'id={mask0}')
      .replace(`id="mask1"`, 'id={mask1}')
      .replace(`id="mask2"`, 'id={mask2}')
      .replace(`id="mask3"`, 'id={mask3}')
      .replace(`mask="url(#mask0)"`, 'mask={`url(#${mask0})`}')
      .replace(`mask="url(#mask1)"`, 'mask={`url(#${mask1})`}')
      .replace(`mask="url(#mask2)"`, 'mask={`url(#${mask2})`}')
      .replace(`mask="url(#mask3)"`, 'mask={`url(#${mask3})`}')
      .replace(`id="clip0"`, 'id={clip0}')
      .replace(`id="clip1"`, 'id={clip1}')
      .replace(`id="clip2"`, 'id={clip2}')
      .replace(`clipPath="url(#clip0)"`, 'clipPath={`url(#${clip0})`}>')
      .replace(`clipPath="url(#clip1)"`, 'clipPath={`url(#${clip1})`}>')
      .replace(`clipPath="url(#clip2)"`, 'clipPath={`url(#${clip2})`}>')
      .replace(`id="filter0_d"`, 'id={filter0}')
      .replace(`filter="url(#filter0_d)"`, 'filter={`url(#${filter0})`}')
      .replace(/fill=" /g, 'fill="')
      .replace(/<path/g, '<Path')
      .replace(/<rect/g, '<Rect')
      .replace(/<circle/g, '<Circle')
      .replace(/<ellipse/g, '<Ellipse')
      .replace('<svg', '<Svg')
      .replace('</svg', '</Svg');

    const filename2 = filename
      .replace('components-', '')
      .replace('.svg', '')
      .split('-')
      .map(upper)
      .join('');

    const compName = `${filename2}Illustration`;
    const newFile = `import React from 'react';
import {getSSRId} from 'newskit';
${file.includes('Svg') ? `import {Svg} from '../svg';` : ''}
${file.includes('Path') ? `import {Path} from '../path';` : ''}
${file.includes('Rect') ? `import {Rect} from '../rect';` : ''}
${file.includes('Circle') ? `import {Circle} from '../circle';` : ''}
${file.includes('Ellipse') ? `import {Ellipse} from '../ellipse';` : ''}

export const ${compName}: React.FC = () => {
  ${file.includes('mask0') ? 'const mask0 = getSSRId();' : ''}
  ${file.includes('mask1') ? 'const mask1 = getSSRId();' : ''}
  ${file.includes('mask2') ? 'const mask2 = getSSRId();' : ''}
  ${file.includes('mask3') ? 'const mask3 = getSSRId();' : ''}
  ${file.includes('clip0') ? 'const clip0 = getSSRId();' : ''}
  ${file.includes('clip1') ? 'const clip1 = getSSRId();' : ''}
  ${file.includes('clip2') ? 'const clip2 = getSSRId();' : ''}
  ${file.includes('filter0') ? 'const filter0 = getSSRId();' : ''}
  return (
    ${file}
  );
};
export default ${compName};`;

    fs.writeFileSync(
      path.resolve(
        ...paths,
        `${filename
          .replace('components-', '')
          .replace('.svg', '-illustration.tsx')}`,
      ),
      newFile,
      {
        encoding: 'utf-8',
      },
    );
  });
