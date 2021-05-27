import React from 'react';
import {
  Link,
  Tab,
  TabAlign,
  Tabs,
  TabsDistribution,
  TabsIndicatorPosition,
  TabSize,
  TextBlock,
  UnorderedList,
} from 'newskit';
import {parseEnumValues} from '../../utils/parse-enum-values';
import {Mono} from '../../components/flags';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../components/component-page-template';

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Tabs',
      hero: {
        illustration: 'components/tabs-illustration',
      },
      introduction:
        'Tabs allow users to alternate between views within the same context.',
    }}
    componentDefaultsKey="tabs"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.20.1',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    }}
    compliance={{
      variations: true,
      states: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      seo: true,
      props: true,
      performance: false,
      design: true,
      uiKit: true,
      themes: true,
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a Tab component.',
      cards: [
        {
          description:
            'Use tabs to alternate between views within the same context.',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-01.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Avoid using Tabs to navigate to different pages and anchoring to different sections on a page. A Navigation component is a more appropriate component for this purpose.',
          kind: UsageKind.DONT,
          media: {
            src: '/static/tabs/tabs-dont-01.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Use Tabs when users have two or more content views to choose from.',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-02.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Avoid using Tabs when there are more than five or more content views to choose from. Consider using an alternative component such as a Selector to reduce the users cognitive load.',
          kind: UsageKind.DONT,
          media: {
            src: '/static/tabs/tabs-dont-02.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'All Tab items should be consistent in size e.g. small, medium or large Tab item. This is to ensure Tab items have equal importance. ',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-03.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Don’t mix Tab items that include an icon or don’t include an icon. This is to ensure Tab items have equal importance.',
          kind: UsageKind.DONT,
          media: {
            src: '/static/tabs/tabs-dont-03.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Tab labels should be in sentence case. This helps with scannability and legibility.',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-04.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Tab labels shouldnt be truncated. Keep it short, clear, and fully visible.',
          kind: UsageKind.DONT,
          media: {
            src: '/static/tabs/tabs-dont-04.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Tabs should be in close proximity to the content it’s changing.',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-05.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Avoid nesting Tabs to prevent usability issues. Consider using an alternative component such as an Accordion or rethink the page structure.',
          kind: UsageKind.DONT,
          media: {
            src: '/static/tabs/tabs-dont-05.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'The Tab shouldn’t fall out of view of the content. If the content is too large to display with the Tabs in the same viewport, then ensure the Tabs become fixed (sticky).',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-06.svg',
            alt: 'src alt',
          },
        },
        {
          description:
            'Tabs in the vertical orientation should be used when horizontal space is less generous and when the list of sections is greater than can be presented to the user in a horizontal format.',
          kind: UsageKind.DO,
          media: {
            src: '/static/tabs/tabs-do-07.svg',
            alt: 'src alt',
          },
        },
      ],
    }}
    componentAPI={{
      introduction: `Tabs have a range of props that can be used to define an appropriate experience for different use cases.`,
      components: [
        {
          title: 'Tabs',
          summary: `Tabs have a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: `An array of Tab components.`,
            },
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description: 'If true, changes the orientation to vertical.',
            },
            {
              name: 'distribution',
              type: parseEnumValues(TabsDistribution),
              default: 'TabsDistribution.start',
              description: 'Defines the distribution of the Tabs.',
            },
            {
              name: 'align',
              type: parseEnumValues(TabAlign),
              default: 'Tab.Align.Start',
              description: 'Defines the alignment of the Tabs.',
            },
            {
              name: 'divider',
              type: 'boolean',
              default: 'false',
              description:
                'If true, renders a divider component between Tab items in a Tab list.',
            },
            {
              name: 'initialSelectedIndex',
              type: 'number',
              default: '0',
              description:
                'Defines the index of the initially selected Tab item.',
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the space between the Tabs and the Tab Panel.',
            },
            {
              attribute: 'selectionIndicator.track.stylePreset',
              type: 'MQ<string>',
              default: 'tabBarTrack',
              description: `If provided, this overrides the selection indicator track styling.`,
            },

            {
              attribute: 'selectionIndicator.track.weight',
              type: 'MQ<string>',
              default: 'borderWidth020',
              description:
                'If provided with a sizing token, will override the fixed weight (height if horizontal, width if vertical) of the election indicator track.',
            },
            {
              attribute: 'selectionIndicator.indicator.stylePreset',
              type: 'MQ<string>',
              default: 'tabsBarIndicator',
              description: 'If provided, this overrides the indicator styling.',
            },
            {
              attribute: 'selectionIndicator.indicator.size',
              type: 'string',
              default: '',
              description:
                'If provided with a sizing token or any CSS length value e.g. 75%, will override the indicator size.',
            },
            {
              attribute: 'selectionIndicator.indicator.weight',
              type: 'string',
              default: 'borderWidth020',
              description:
                'If provided with a sizing token, will override the fixed weight (height if horizontal, width if vertical) of the indicator.',
            },
            {
              attribute: 'selectionIndicator.indicator.motionDuration',
              type: 'string',
              default: 'motionDuration030',
              description:
                'If provided with a motion duration token, this overrides the transition duration upon hover and active of the indicator.',
            },
            {
              attribute: 'selectionIndicator.indicator.motionTiming',
              type: 'string',
              default: 'motionEaseInAndOut',
              description:
                'If provided with a motion timing token, this overrides the transition timing upon hover and active of the indicator.',
            },
            {
              attribute: 'divider',
              type: "DividerProps['overrides']",
              default: '',
              description: (
                <>
                  If provided, this overrides the divider styling,{' '}
                  <Link target="_blank" href="/components/divider">
                    see divider component
                  </Link>{' '}
                  for full documentation.
                </>
              ),
            },
            {
              attribute: 'scroll',
              type: "ScrollProps['overrides']",
              default: '',
              description: (
                <>
                  If provided, this overrides the scroll styling,{' '}
                  <Link target="_blank" href="/components/scroll">
                    see scroll component
                  </Link>{' '}
                  for full documentation.
                </>
              ),
            },
          ],
        },
        {
          title: 'Tab',
          summary:
            'A Tab has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content rendered inside the Tab Panel.',
            },
            {
              name: 'label',
              type: '	React.ReactNode',
              description: 'Label of the Tab item.',
            },
            {
              name: 'ariaLabel',
              type: 'string',
              default: 'label',
              description: 'Defines the aria-label attribute of the Tab item.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'If true, renders a Tab in a disabled state.',
            },
          ],
          overridesRows: [
            {
              attribute: 'height',
              type: 'MQ<string>',
              description:
                'If provided with a sizing token, will override the the height of the Tab.',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: ['Small = sizing060', 'Medium = sizing080'],
              description:
                'If provided with a sizing token, will override  the minHeight of the Tab.',
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              description:
                'If provided with a sizing token, will override the minWidth of the Tab. ',
            },
            {
              attribute: 'iconSize',
              type: 'string',
              default: [
                'Small = iconSize010',
                'Medium = iconSize020',
                'Large = iconSize030',
              ],
              description:
                'If provided with a sizing token, will override the minWidth of the Tab. ',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'tab',
              description: 'If provided, this overrides the Tab styling.  ',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityButton010',
                'Medium = utilityButton030',
                'Large = utilityButton030',
              ],
              description:
                'If provided, this overrides the selection indicator typography of the text label in the Tab.',
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',

              default: [
                'Small = spaceInsetSquish020',
                'Medium = spaceInsetSquish030',
                'Large = spaceInsetSquish030',
              ],
              description:
                'If provided, this overrides the inset space within the Tab.',
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the space between the icon and the label in the Tab.',
            },
          ],
        },
      ],
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Tabs component, its variations, and configuration options.',
      playground: {
        componentName: 'Tabs',
        component: state => (
          <Tabs {...state}>
            <Tab label="Now playing">
              <TextBlock typographyPreset="utilityBody020">
                Stories of our Times | One remarkable story, told in depth, each
                day. Our daily news podcast takes you to the heart of the
                stories that matter, with exclusive access and reporting.
                Published for the start of your day and hosted by Manveen Rana
                and David Aaronovitch.
              </TextBlock>
            </Tab>
            <Tab label="Up next">
              <TextBlock typographyPreset="utilityBody020">
                Red Box | News Podcast of the Year: Matt Chorley presents the
                best interviews, analysis and panel discussions from his Times
                Radio show. Listen live 10am-1pm Monday to Thursday.
              </TextBlock>
            </Tab>
            <Tab label="Later">
              <TextBlock typographyPreset="utilityBody020">
                Stories of our Times | One remarkable story, told in depth, each
                day. Our daily news podcast takes you to the heart of the
                stories that matter, with exclusive access and reporting.
                Published for the start of your day and hosted by Manveen Rana
                and David Aaronovitch.
              </TextBlock>
            </Tab>
          </Tabs>
        ),
        knobs: [
          {
            name: 'Distribution',
            propName: 'distribution',
            options: [
              {
                label: 'TabsDistribution.Start',
                value: TabsDistribution.Start,
                isDefault: true,
              },
              {
                label: 'TabsDistribution.Grow',
                value: TabsDistribution.Grow,
              },
              {
                label: 'TabsDistribution.Equal',
                value: TabsDistribution.Equal,
              },
            ],
          },
          {
            name: 'Size',
            propName: 'size',
            options: [
              {
                label: 'TabSize.Small',
                value: TabSize.Small,
              },
              {
                label: 'TabSize.Medium',
                value: TabSize.Medium,
                isDefault: true,
              },
              {
                label: 'TabSize.Large',
                value: TabSize.Large,
              },
            ],
          },
          {
            name: 'Space Inline',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {spaceInline: undefined},
                isDefault: true,
              },
              {
                label: 'space040',
                value: {spaceInline: 'space040'},
              },
              {
                label: 'space060',
                value: {spaceInline: 'space060'},
              },
            ],
          },
          {
            name: 'Tab Bar Track Weight',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    track: {
                      weight: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: 'borderWidth030',
                value: {
                  selectionIndicator: {
                    track: {
                      weight: 'borderWidth030',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Tab Bar Indicator Weight',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    indicator: {
                      weight: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: 'borderWidth030',
                value: {
                  selectionIndicator: {
                    indicator: {
                      weight: 'borderWidth030',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Tab Bar Indicator size',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: '75%',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: '75%',
                    },
                  },
                },
              },
              {
                label: 'sizing050',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: 'sizing050',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Style preset overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  stylePreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'cardContainer',
                value: {
                  stylePreset: 'cardContainer',
                },
              },
            ],
          },
          {
            name: 'divider',
            propName: 'divider',
            type: 'boolean',
            value: false,
          },
          {
            name: 'vertical',
            propName: 'vertical',
            type: 'boolean',
            value: false,
          },
          {
            name: 'initialSelectedIndex',
            propName: 'initialSelectedIndex',
            type: 'number',
            value: 0,
          },
          {
            name: 'Align',
            propName: 'align',
            options: [
              {
                label: 'TabAlign.Center',
                value: TabAlign.Center,
                isDefault: true,
              },
              {
                label: 'TabAlign.Start',
                value: TabAlign.Start,
              },
              {
                label: 'TabAlign.End',
                value: TabAlign.End,
              },
            ],
          },
          {
            name: 'Indicator Position',
            propName: 'indicatorPosition',
            options: [
              {
                label: 'TabsIndicatorPosition.Start',
                value: TabsIndicatorPosition.Start,
              },
              {
                label: 'TabsIndicatorPosition.End',
                value: TabsIndicatorPosition.End,
                isDefault: true,
              },
              {
                label: 'TabsIndicatorPosition.None',
                value: TabsIndicatorPosition.None,
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'Tabs contain three required elements and one optional element.',
      rows: [
        {
          name: 'Tab',
          description: 'Includes a label, icon',
          component: ['Text', 'Block', 'Icons'],
          optional: undefined,
        },
        {
          name: 'Tabs',
          description: 'Includes a list of Tabs',
          component: 'Tabs',
          optional: undefined,
        },
        {
          name: 'Tabs Bar',
          description: 'Includes indicator and track',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Divider',
          description: 'Dividers between each Tab',
          component: 'Divider',
          optional: true,
        },
        {
          name: 'Tab Panel',
          description: 'Contains the elements of the Tab content',
          component: 'Block',
          optional: undefined,
        },
      ],
      media: {
        src: '/static/tabs/tabs-anatomy.svg',
        alt: 'Card Media',
      },
    }}
    options={{
      introduction:
        'Tabs have options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of the Tabs; small, medium, and large. Tab label, icon, and the tab container change size. Tabs match the same height as three button sizes, to align when used together.',
          media: {
            src: '/static/tabs/tabs-options-size.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in Tab items and can be positioned either before (leading) or after (trailing) the label in the Tab.',
          media: {
            src: '/static/tabs/tabs-options-icons.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Label',
          description:
            'Labels can be displayed in Tab items. A label can give more context to what content will be displayed when a Tab is selected. ',
          media: {
            src: '/static/tabs/tabs-options-label.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Orientation',
          description: 'Tabs can be displayed horizontally or vertically. ',
          media: {
            src: '/static/tabs/tabs-options-orientation.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Indicator Position',
          description:
            'The Tabs indicator position can be displayed on the bottom of the Tab for the horizontal orientation and left or right of the Tab for the vertical orientation.',
          media: {
            src: '/static/tabs/tabs-options-indicator-position.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Indicator Size',
          description:
            'The size of a Tab indicator can be defined appropriately to give more or less affordance, using either: full-width of the tab, fixed-width/fixed-height (based on orientation) or a percentage of the Tab height/width (based on orientation).',
          media: {
            src: '/static/tabs/tabs-options-indicator-size.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Indicator Weight',
          description:
            'The weight of a Tab indicator can be customised appropriately to give more or less affordance.',
          media: {
            src: '/static/tabs/tabs-options-indicator-weight.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Track Weight',
          description:
            'The weight of a Tab track can be customised appropriately to give more or less affordance.',
          media: {
            src: '/static/tabs/tabs-options-track-weight.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Dividers',
          description:
            'Dividers can be displayed in Tabs in between Tab items. Dividers in Tabs match the same width/height (depending on orientation) of the Tab items.',
          media: {
            src: '/static/tabs/tabs-options-dividers.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Distribution',
          description: (
            <UnorderedList
              overrides={{
                content: {
                  stylePreset: 'inkBase',
                  typographyPreset: 'editorialParagraph020',
                },
              }}
            >
              <>
                <Mono>Start</Mono>
                Aligns the Tab items to the left of the content area for
                horizontal orientation (default) and to the top for vertical
                orientation. The width of the Tab Group is defined by the width
                of its children.
              </>
              <>
                <Mono>Grow</Mono> Spreads all Tab items across the content area,
                filling the entire available width or height depending on the
                orientation. The width of each Tab item is defined by it’s
                content.
              </>
              <>
                <Mono>Equal</Mono> Spaces each tab across the content area
                equally, regardless of the width or height of its children.
              </>
            </UnorderedList> // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) as any,

          media: {
            src: '/static/tabs/tabs-options-distribution.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Alignment',
          description: (
            <>
              <UnorderedList
                overrides={{
                  content: {
                    stylePreset: 'inkBase',
                    typographyPreset: 'editorialParagraph020',
                  },
                }}
              >
                <>
                  <Mono>Start</Mono>Aligns the Tab item label and icons to the
                  left.
                </>
                <>
                  <Mono>Center</Mono> Centers the Tab item label and icons.
                </>
                <>
                  <Mono>End</Mono> Aligns the Tab item label and icons to the
                  right.
                </>
              </UnorderedList>
              <p>
                NOTE - The default alignment depends on the orientation. When
                Tabs are vertical it’s <Mono>Start</Mono> and when Tabs are
                horizontal it’s <Mono>Center</Mono>.
              </p>
            </> // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) as any,

          media: {
            src: '/static/tabs/tabs-options-alignment.svg',
            alt: 'Card Media',
          },
        },
      ],
    }}
    states={{
      introduction:
        'Tab items have states including, base, hover, active, disabled, and focus. They can be displayed with both, base or selected. By default, Tabs have one Tab item in a selected state.',
      cards: [
        {
          title: 'Base',
          description:
            'Tab items have a base state. This is the base style of the Tab item before it has been interacted with by a user.',
          media: {
            src: '/static/tabs/tabs-states-base.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Hover',
          description:
            'Tab items have a hover state. The style of the Tab item changes to visually communicate and provide feedback to the user that the Tab item is an interactive element.',
          media: {
            src: '/static/tabs/tabs-states-hover.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Active',
          description:
            'Tab items have an active state. The style of the Tab item changes to visually communicate and provide feedback to the user that the Tab item has been interacted with.',
          media: {
            src: '/static/tabs/tabs-states-active.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Selected',
          description:
            'Tab items have a selected state. The style of the Tab item changes to visually communicate and provide feedback to the user that the Tab item has been selected.',
          media: {
            src: '/static/tabs/tabs-states-selected.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Disabled',
          description:
            'Tab items in a disabled state communicate that a Tab item exists, but is not available to the user in that scenario. When the user’s cursor hovers over a Tab item in a disabled state, the cursor shows as not-allowed. Disabled tab items are often used to maintain layout consistency and communicate that a Tab item may become available if another condition has been met.',
          media: {
            src: '/static/tabs/tabs-states-disabled.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Focus',
          description:
            'Tab items in a focus state communicate that a user has highlighted a Tab item, using an input method such as a keyboard or voice.',
          media: {
            src: '/static/tabs/tabs-states-focus.svg',
            alt: 'Card Media',
          },
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how Tabs behave.',
      cards: [
        {
          title: 'Animation',
          description:
            'When the user selects a Tab item, the indicator slides along the track of the Tabs to the newly selected Tab item. At the time of selection, the Tabs content changes immediately.',
          media: {
            src: '/static/tabs/tabs-behaviours-animation.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Selected',
          description:
            'Only one tab item can be selected at any given time. This property changes an individual tab item’s selected state.',
          media: {
            src: '/static/tabs/tabs-behaviours-selected.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Tabs Overflow',
          description:
            'When there are too many Tabs to fit horizontally across the viewport, a Scroll component is applied. On a desktop, the controls (buttons) are rendered on the scroll.',
          media: {
            src: '/static/tabs/tabs-behaviours-tab-overflow.svg',
            alt: 'Card Media',
          },
        },
        {
          title: 'Label Overflow Wrap',
          description:
            'When the label in a Tab item is too long for the available horizontal space, it wraps to form another line.',
          media: {
            src: '/static/tabs/tabs-behaviours-label-wrap.svg',
            alt: 'Card Media',
          },
        },
      ],
    }}
    related={{
      introduction: '',
      related: ['Scroll'],
    }}
    accessibility={{
      introduction: (
        <>
          Tabs implement the latest{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">
            WAI-ARIA Tabs specifications
          </Link>
          .
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'tab',
            role: 'Focusses to the first Tab Item in a Tab list.',
          },
          {
            order: 2,
            element: 'tabPanel',
            role: 'Focusses to the Tab Panel.',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the Tab list it moves focus to the active Tab. If focus is on the active Tab it moves focus to the next element in the keyboard focus Tabs associated Tab panel.',
          },
          {
            command: ['Rtn'],
            description:
              'Activates the Tab if it was not activated automatically on focus.',
          },
          {
            command: ['Left'],
            description:
              'Focuses and activates the previous Tab in the tab list when the Tabs orientation is horizontal. If the current tab is the first tab in the tab list it activates the last tab.',
          },
          {
            command: ['Right'],
            description:
              'Focuses and activates the next Tab in the Tab list when the Tabs orientation is horizontal. If the current tab is the last tab in the tab list it activates the first tab.',
          },
          {
            command: ['Up'],
            description:
              'Focuses and activates the previous Tab in the tab list when the Tabs orientation is vertical. If the current tab is the first tab in the tab list it activates the last tab.',
          },
          {
            command: ['Down'],
            description:
              'Focuses and activates the next Tab in the Tab list when the Tabs orientation is vertical. If the current tab is the last tab in the tab list it activates the first tab.',
          },
          {
            command: ['Home'],
            description: 'Focuses activates the first Tab in the Tab list.',
          },
          {
            command: ['End'],
            description: 'Focuses activates the last Tab in the Tab list.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'tab',
            attribute: 'arialabel',
            value: '',
            description:
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with a Tab Item in a Tabs. Example: ariaLabel="view component overrides”',
            userSupplied: true,
          },
          {
            element: 'tab',
            attribute: 'aria-selected',
            value: '“true” or “false”',
            description:
              'Aria-selected is used to indicate the currently selected tab',
          },
          {
            element: 'tab',
            attribute: 'aria-controls',
            value: 'auto-generated',
            description:
              'Maintains a reference from the tab to the associated panel ',
          },
          {
            element: 'tab',
            attribute: 'aria-hidden',
            value: '“true”',
            description: 'Hides the Tab Bar Indicator from screenreaders.',
          },
          {
            element: 'tab',
            attribute: 'aria-labelledby',
            value: 'auto-generated',
            description:
              'Maintains a reference from the tab to the associated panel',
          },
          {
            element: 'tab',
            attribute: 'role',
            value: '“tabpanel”',
            description:
              'ARIA Tab role indicates an interactive element inside a Tab Group that, when activated, displays its associated Tab Panel',
          },
          {
            element: 'tab',
            attribute: 'aria-orientation',
            value: '“horizontal” or “vertical”',
            description: 'Describes the orientation of the tabs',
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'Ensure icons have Alt Text applied.',
    }}
  />
);