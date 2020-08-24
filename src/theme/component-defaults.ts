export const componentDefaults = {
  byline: {
    stylePreset: 'byline',
    typePreset: 'meta020',
    space: 'sizing020',
    link: {
      stylePreset: 'bylineLink',
      typePreset: 'meta020',
    },
    divider: {
      stylePreset: 'bylineDivider',
      spaceInline: 'space020',
    },
  },
  button: {
    small: {
      typePreset: 'buttonSmall',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset020Squish',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing020',
    },
    medium: {
      typePreset: 'buttonMedium',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset030Squish',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      space: 'sizing020',
    },
    large: {
      typePreset: 'buttonLarge',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset040Squish',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      space: 'sizing020',
    },
  },
  card: {
    media: {
      stylePreset: 'imageSharp',
    },
    actionsContainer: {
      stylePreset: 'cardActionsContainer',
      minHeight: 'sizing080',
      paddingPreset: 'spaceInset000Squish',
    },
  },
  headlineH1: {
    stylePreset: 'headlineH1',
    typePreset: {
      xs: 'heading050',
      md: 'heading070',
      lg: 'heading090',
    },
  },
  headlineH2: {
    stylePreset: 'headlineH2',
    typePreset: {
      xs: 'heading030',
      md: 'heading040',
    },
  },
  headlineH3: {
    stylePreset: 'headlineH3',
    typePreset: {
      xs: 'heading020',
      md: 'heading030',
    },
  },
  headlineH4: {
    stylePreset: 'headlineH4',
    typePreset: {
      xs: 'heading010',
      md: 'heading020',
    },
  },
  headlineH5: {
    stylePreset: 'headlineH5',
    typePreset: 'subhead015',
  },
  headlineH6: {
    stylePreset: 'headlineH6',
    typePreset: 'subhead010',
  },
  headline: {
    heading: {
      stylePreset: 'headlineContent',
      typePreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
    },
    kicker: {
      stylePreset: 'headlineKicker',
      typePreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
      spaceInline: {
        xs: 'space030',
        sm: 'space030',
        md: 'space040',
        lg: 'space040',
      },
    },
  },
  iconButton: {
    small: {
      stylePreset: 'iconButtonDefault',
      paddingPreset: 'spaceInset020',
      width: 'sizing060',
      height: 'sizing060',
    },
    medium: {
      stylePreset: 'iconButtonDefault',
      paddingPreset: 'spaceInset030',
      width: 'sizing080',
      height: 'sizing080',
    },
    large: {
      stylePreset: 'iconButtonDefault',
      paddingPreset: 'spaceInset040',
      width: 'sizing090',
      height: 'sizing090',
    },
  },

  flag: {
    small: {
      typePreset: 'flag010',
      stylePreset: 'flagDefault',
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typePreset: 'flag020',
      stylePreset: 'flagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
  },
  tab: {
    small: {
      stylePreset: 'tab',
      typePreset: 'label020',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing020',
    },
    medium: {
      stylePreset: 'tab',
      typePreset: 'label020',
      paddingPreset: 'spaceInset030Squish',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      space: 'sizing020',
    },
    large: {
      stylePreset: 'tab',
      typePreset: 'label030',
      paddingPreset: 'spaceInset030Squish',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      space: 'sizing020',
    },
  },

  unorderedList: {
    spaceStack: 'space040',
    content: {
      stylePreset: 'unorderedListItemContent',
      typePreset: 'body010',
    },
    marker: {
      stylePreset: 'unorderedListItemMarker',
      spaceInline: 'space020',
      size: 'iconSize005',
    },
  },
  tag: {
    small: {
      typePreset: 'tag010',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    medium: {
      typePreset: 'tag020',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typePreset: 'tag030',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing070',
      iconSize: 'iconSize020',
      space: 'sizing010',
    },
  },
  titleBar: {
    paddingPreset: {
      xs: 'spaceInset030Squish',
      md: 'spaceInset040Squish',
    },
    stylePreset: 'titleBar',
    heading: {
      typePreset: {
        xs: 'heading040',
        md: 'heading050',
        lg: 'heading070',
      },
    },
  },
  shareBar: {
    label: {
      typePreset: 'label020',
      stylePreset: 'shareBarLabel',
      spaceInline: 'space040',
      spaceStack: 'space040',
    },
    items: {
      space: 'sizing020',
    },
  },
  divider: {
    stylePreset: 'dividerHorizontal',
  },
  standfirst: {
    styledText: {
      stylePreset: 'standfirst',
      typePreset: {
        xs: 'subhead020',
        md: 'subhead030',
      },
    },
  },
  image: {
    stylePreset: 'imageSharp',
  },
  link: {
    stylePreset: 'linkInline',
    space: 'sizing010',
    externalIcon: {
      size: 'iconSize010',
    },
  },
  linkStandalone: {
    stylePreset: 'linkStandalone',
  },
  paragraph: {
    stylePreset: 'paragraph',
    typePreset: 'body020',
    dropCap: {
      stylePreset: 'paragraphDropCap',
      typePreset: 'display040',
      space: 'space020',
    },
  },
  dateTime: {
    stylePreset: 'dateTime',
    typePreset: 'meta020',
    prefix: {
      stylePreset: 'dateTimePrefix',
      typePreset: 'meta020',
    },
    suffix: {
      stylePreset: 'dateTimeSuffix',
      typePreset: 'meta020',
    },
  },
  slider: {
    track: {
      stylePreset: 'sliderTrack',
      size: 'sizing030',
    },
    indicator: {
      stylePreset: 'sliderIndicator',
    },
    thumb: {
      stylePreset: 'sliderThumb',
      size: 'sizing060',
    },
    thumbLabel: {
      stylePreset: 'sliderThumbLabel',
      typePreset: 'label030',
      space: 'space060',
    },
    labels: {
      stylePreset: 'sliderLabels',
      typePreset: 'label020',
      space: 'space030',
    },
  },
  grid: {
    maxWidth: 1920,
    columns: 12,
    containerMargin: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
    columnGutters: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
    rowGutters: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
  },
};
