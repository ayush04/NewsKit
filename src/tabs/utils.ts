import {Theme} from '../theme';
import {getToken} from '../utils/get-token';
import {getBorderFromTheme, getMotionFromTheme} from '../utils/style';

export const getLayoutParams = (
  el: HTMLElement | undefined,
  theme: Theme,
  vertical: boolean,
  lengthOverride?: string,
) => {
  if (!el) {
    return {
      length: 0,
      distance: 0,
    };
  }

  const params = vertical
    ? {
        length: el.clientHeight,
        distance: el.offsetTop,
      }
    : {
        length: el.clientWidth,
        distance: el.offsetLeft,
      };

  if (lengthOverride) {
    const newLength = lengthOverride.includes('%')
      ? params.length * (parseFloat(lengthOverride) / 100)
      : parseInt(theme.sizing[lengthOverride], 10);

    const lengthDifference = params.length - newLength;
    if (lengthDifference > 0) {
      params.distance += lengthDifference / 2;
      params.length = newLength;
    }
  }
  return params;
};

export const KEYBOARD_ACTION = {
  next: 'next',
  previous: 'previous',
  start: 'start',
  end: 'end',
};

export const KEYBOARD_ARROWS = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  home: 36,
  end: 35,
};

export const parseKeyDown = (event: React.KeyboardEvent, vertical: boolean) => {
  const next = vertical ? KEYBOARD_ARROWS.down : KEYBOARD_ARROWS.right;
  const prev = vertical ? KEYBOARD_ARROWS.up : KEYBOARD_ARROWS.left;

  switch (event.keyCode) {
    case next:
      return KEYBOARD_ACTION.next;
    case prev:
      return KEYBOARD_ACTION.previous;
    case KEYBOARD_ARROWS.home:
      return KEYBOARD_ACTION.start;
    case KEYBOARD_ARROWS.end:
      return KEYBOARD_ACTION.end;
    default:
      return null;
  }
};

export const preventDefault = (e: React.MouseEvent) => e.preventDefault();

export const getTabBarIndicatorStyle = (
  theme: Theme,
  length?: number,
  distance?: number,
  vertical?: boolean,
  keyUpdated?: number,
  overrides?: {},
) => {
  const weightToken = getToken(
    {theme, overrides},
    'tabs.tabBarIndicator',
    'tabBarIndicator',
    'weight',
  );
  const weight = getBorderFromTheme(weightToken, undefined)({theme});

  const motionDurationToken = getToken(
    {theme, overrides},
    'tabs.tabBarIndicator',
    'tabBarIndicator',
    'motionDuration',
  );

  const motionDuration = getMotionFromTheme(motionDurationToken, undefined)({
    theme,
  });

  const motionTimingToken = getToken(
    {theme, overrides},
    'tabs.tabBarIndicator',
    'tabBarIndicator',
    'motionTiming',
  );
  const motionTiming = getMotionFromTheme(motionTimingToken, undefined)({
    theme,
  });

  return {
    width: vertical ? weight : `${length}px`,
    height: vertical ? `${length}px` : weight,
    transform: vertical
      ? `translateY(${distance}px)`
      : `translateX(${distance}px)`,
    transition:
      keyUpdated && keyUpdated > 1
        ? `all ${motionDuration} ${motionTiming}`
        : '',
  };
};

export const getFirstParentElementWithRole = (
  element: Node | null,
  role: string,
) => {
  let currentElement = element as HTMLElement;
  while (currentElement && !(currentElement.getAttribute('role') === role)) {
    currentElement = currentElement.parentElement as HTMLElement;
  }
  return currentElement;
};

// Take the descendant element with a specific role but traverse the DOM only looking in each first child.
export const getDescendantOnlyFromFirstChild = (
  element: Node | null,
  role: string,
) => {
  let currentElement = element && element.childNodes && element.childNodes[0];

  while (
    currentElement &&
    !((currentElement as HTMLElement).getAttribute('role') === role)
  ) {
    currentElement = currentElement.childNodes && currentElement.childNodes[0];
  }
  return currentElement;
};
