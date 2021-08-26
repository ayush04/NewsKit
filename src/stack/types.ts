import {MQ} from '../utils/style/types';
import {AlignSelfValues} from '../stack-child';

export type FlexWrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse';

export interface CommonStackPropsWithoutMQ {
  spaceStack: string;
  spaceInline: string;
  flexGrow: boolean | number;
  flexShrink: boolean | number;
  flowReverse: boolean;
  flow:
    | Flow
    | 'vertical-left'
    | 'vertical-center'
    | 'vertical-right'
    | 'vertical-stretch'
    | 'horizontal-top'
    | 'horizontal-center'
    | 'horizontal-bottom'
    | 'horizontal-stretch';

  stackDistribution:
    | StackDistribution
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

  inline: boolean;
  height?: string;
}

type AddMQ<T> = {[P in keyof T]: MQ<T[P]>};

type CommonStackProps = AddMQ<CommonStackPropsWithoutMQ> & {
  as?: keyof JSX.IntrinsicElements;
};

export type DefaultStackProps = CommonStackPropsWithoutMQ & {
  wrap: FlexWrap;
};

export interface StyledStackProps extends CommonStackProps {
  $wrap: MQ<FlexWrap>;
  $height?: MQ<string>;
}

export interface StackProps extends Partial<CommonStackProps> {
  wrap?: MQ<FlexWrap>;
  list?: boolean;
  ariaLabel?: string;
  role?: string;
}

export interface ChildProps
  extends Pick<
    StyledStackProps,
    'spaceInline' | 'spaceStack' | 'flow' | '$wrap'
  > {
  order?: MQ<number>;
}

export interface StyledChildProps
  extends Pick<
    StyledStackProps,
    'spaceInline' | 'spaceStack' | 'flow' | '$wrap' | 'as'
  > {
  $order?: MQ<number>;
  $alignSelf?: AlignSelfValues;
  flexGrow?: boolean | number;
}

export enum Flow {
  VerticalLeft = 'vertical-left',
  VerticalCenter = 'vertical-center',
  VerticalRight = 'vertical-right',
  VerticalStretch = 'vertical-stretch',
  HorizontalTop = 'horizontal-top',
  HorizontalCenter = 'horizontal-center',
  HorizontalBottom = 'horizontal-bottom',
  HorizontalStretch = 'horizontal-stretch',
}

export enum StackDistribution {
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
}
