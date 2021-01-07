import {deepMerge} from '../utils/deep-merge';

import {
  ThemeBase,
  ThemeLoggerFunction,
  ThemeOverrides,
  UncompiledTheme,
} from './types';

import * as foundations from './foundations';
import * as presets from './presets';

import {componentDefaults} from './component-defaults';
import {get} from '../utils/get';

interface CreateThemeArgs {
  name?: string;
  baseTheme?: UncompiledTheme;
  overrides?: ThemeOverrides;
  checkOverrides?: boolean;
  warningLogger?: ThemeLoggerFunction;
}

const deepDuplicationChecker = (
  warningLogger: ThemeLoggerFunction,
  baseTheme: ThemeBase,
  overrides: ThemeOverrides,
) => {
  const recurse = (obj: object, keys?: string) => {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = keys ? [keys, key].join('.') : key;
      if (typeof value === 'object') {
        recurse(value, newKey);
      } else if (get(baseTheme, newKey) === value) {
        warningLogger(
          `Override at path: '${newKey}' has the same value as base theme: '${value}'.`,
        );
      }
    });
  };
  recurse(overrides);
};

export const createTheme = ({
  name = 'unnamed-newskit-theme',
  baseTheme,
  overrides = {},
  checkOverrides,
  // eslint-disable-next-line no-console
  warningLogger = console.warn.bind(console),
}: CreateThemeArgs): UncompiledTheme => {
  if (baseTheme && baseTheme.compiled) {
    throw new Error(
      'createTheme received a compiled baseTheme. Base themes must be uncompiled.',
    );
  }

  const newskitLight: ThemeBase = {
    ...foundations,
    ...presets,
    componentDefaults,
    icons: {},
  };

  if (checkOverrides) {
    deepDuplicationChecker(warningLogger, baseTheme || newskitLight, overrides);
  }

  return deepMerge(newskitLight, baseTheme, overrides, {name, themeVersion: 1});
};
