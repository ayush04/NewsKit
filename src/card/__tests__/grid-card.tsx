import * as React from 'react';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {styled} from '../../utils/style';
import {Button} from '../../button';
import {Image} from '../../image';
import {Flag, getMediaQueryFromTheme, IconFilledEmail} from '../..';
import {GridLayout} from './gridlayout';

const cardTeaserLeadInset = 'space010';

const StyledAdvancedCard = styled(GridLayout)`
  border: 1px solid gray;
`;

const StyledLink = styled.a`
  grid-area: 1 / 1 / 2 / 3;
  z-index: 3;

  ${getMediaQueryFromTheme('md')} {
    grid-area: 1 / 1 / 3 / 3;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const GridCard = ({title = '', teaser = '', image = '', href = ''}) => {
  const xsLayout = `
    "thumb content"
    "tags  share"  
  `;
  const mdLayout = `
    "thumb    thumb"
    "content  content"
    "tags     share"
  `;

  return (
    <StyledAdvancedCard
      areas={{xs: xsLayout, md: mdLayout}}
      columns={{xs: '1fr 1fr'}}
      overrides={{maxWidth: '600px'}}
    >
      {Areas => (
        <>
          <Areas.Thumb>
            <Image src={image} />
          </Areas.Thumb>
          <Areas.Thumb
            alignSelf={{xs: 'end'}}
            style={{zIndex: 2, paddingLeft: '12px'}}
          >
            <Flag>EXCLUSIVE</Flag>
          </Areas.Thumb>
          <Areas.Content spaceInset="spaceInset030">
            <Block spaceStack="space030">
              <Headline
                kickerText="KICKER"
                overrides={{
                  typographyPreset: {
                    xs: 'editorialHeadline030',
                    md: 'editorialHeadline050',
                  },
                }}
              >
                {title}
              </Headline>
            </Block>

            <TextBlock
              stylePreset="cardTeaserLead"
              typographyPreset={{
                xs: 'editorialParagraph010',
                md: 'editorialParagraph020',
              }}
            >
              {teaser}
            </TextBlock>
          </Areas.Content>
          <Areas.Tags>
            <Button
              href="#"
              size="small"
              overrides={{
                stylePreset: `buttonMinimalPrimary`,
              }}
            >
              Celebrity
              <IconFilledEmail />
            </Button>
          </Areas.Tags>
          <Areas.Share justifySelf="end">
            <Button
              size="small"
              href="#"
              overrides={{
                stylePreset: `buttonMinimalPositive`,
              }}
            >
              <IconFilledEmail />
              share
            </Button>
          </Areas.Share>
          {href ? <StyledLink href={href} /> : null}
        </>
      )}
    </StyledAdvancedCard>
  );
};
