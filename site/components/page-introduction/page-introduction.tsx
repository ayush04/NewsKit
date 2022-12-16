import React from 'react';
import {
  Block,
  TextBlock,
  Image,
  ImageProps,
  AudioPlayerComposable,
  GridLayout,
  AudioPlayerVolumeControl,
  AudioPlayerPlayPauseButton,
  AudioPlayerTimeDisplay,
  AudioPlayerSeekBar,
  AudioPlayerPlaybackSpeedControl,
  calculateTime,
  AudioPlayerForwardButton,
  AudioPlayerReplayButton,
  useBreakpointKey,
  Hidden,
  Visible,
} from 'newskit';
import {Separator} from '../separator';
import {Illustration} from '../illustrations/illustration-loader';
import {PageIntroductionProps} from './types';
import {ComponentPageCell, ComponentPageCellCompact} from '../layout-cells';

const heroIsImage = (hero: PageIntroductionProps['hero']): hero is ImageProps =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Boolean(hero && (hero as any).src);

const NarrationAudioPlayer = (props: {url: string}) => {
  const {url} = props;
  const breakpointKey = useBreakpointKey();
  return (
    <AudioPlayerComposable src={url} {...props}>
      <TextBlock
        stylePreset="inkContrast"
        typographyPreset={{
          xs: 'editorialLabel010',
          md: 'editorialLabel030',
        }}
        marginBlockStart="space060"
        marginBlockEnd="space040"
      >
        Listen to this article
      </TextBlock>
      <GridLayout
        columns={{
          xs: 'auto auto auto auto 1fr auto',
          sm: 'auto auto auto auto auto 1fr auto auto',
        }}
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton size="small" />
        <div>
          <Visible xs>
            <AudioPlayerVolumeControl
              layout="collapsed"
              muteButtonSize="small"
            />
          </Visible>
          <Hidden xs>
            <AudioPlayerVolumeControl
              layout="horizontal"
              muteButtonSize="small"
            />
          </Hidden>
        </div>
        <AudioPlayerReplayButton size="small" />
        <AudioPlayerForwardButton size="small" />
        <div>
          <Hidden xs>
            <AudioPlayerTimeDisplay
              format={({currentTime}) => calculateTime(currentTime)}
            />
          </Hidden>
          <Visible xs>
            <AudioPlayerTimeDisplay
              format={({currentTime, duration}) =>
                `${calculateTime(currentTime)}/${calculateTime(duration)}`
              }
            />
          </Visible>
        </div>
        <Hidden xs>
          <AudioPlayerSeekBar />
        </Hidden>
        <Hidden xs>
          <AudioPlayerTimeDisplay
            format={({duration}) => calculateTime(duration)}
          />
        </Hidden>
        <AudioPlayerPlaybackSpeedControl useModal={{xs: true, md: true}} />
      </GridLayout>
    </AudioPlayerComposable>
  );
};

export const PageIntroduction: React.FC<PageIntroductionProps> = ({
  type,
  name,
  introduction,
  hero,
  showSeparator,
  narrationUrl,
}) => (
  <>
    <ComponentPageCell>
      <Block spaceStack={{xs: 'space060', md: 'space070'}}>
        <TextBlock
          stylePreset="inkBrand010"
          typographyPreset={{
            xs: 'editorialHeadline010',
            md: 'editorialHeadline030',
          }}
        >
          {type}
        </TextBlock>
      </Block>
      <Block spaceStack={{xs: 'space050', md: 'space070'}}>
        <TextBlock
          as="h1"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline060',
            md: 'editorialHeadline070',
            lg: 'editorialHeadline080',
          }}
        >
          {name}
        </TextBlock>
      </Block>
    </ComponentPageCell>
    <ComponentPageCellCompact>
      <Block spaceStack={{xs: 'space070', md: 'space080'}}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheadline010',
            md: 'editorialSubheadline020',
          }}
        >
          {introduction}
        </TextBlock>
      </Block>
    </ComponentPageCellCompact>
    <ComponentPageCell>
      <Block
        stylePreset="blockRoundedMedium"
        spaceStack={{xs: 'space000', md: 'space030', lg: 'space010'}}
      >
        {heroIsImage(hero) ? (
          <Image loadingAspectRatio="16:9" alt="" {...hero} />
        ) : (
          hero && (
            <Illustration
              path={hero.illustration}
              {...hero.illustrationProps}
            />
          )
        )}
      </Block>
      {narrationUrl && (
        <Block>
          <NarrationAudioPlayer key="narrationUrl" url={narrationUrl} />
        </Block>
      )}
      {showSeparator && <Separator />}
    </ComponentPageCell>
  </>
);
