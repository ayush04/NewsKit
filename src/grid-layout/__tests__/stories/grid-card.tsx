import * as React from 'react';
import {Headline} from '../../../headline';
import {TextBlock} from '../../../text-block';
import {Block} from '../../../block';
import {styled, getStylePreset} from '../../../utils/style';
import {Button} from '../../../button';
import {Image} from '../../../image';
import {Flag, getMediaQueryFromTheme, Paragraph, Tag} from '../../..';
import {IconFilledEmail} from '../../../icons';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {GridLayoutItemProps, GridLayoutProps} from '../../types';
import {getDisplayName} from '../../../utils/component';

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
          <Areas.Thumb alignSelf="end" style={{zIndex: 2, paddingLeft: '12px'}}>
            <Flag>Flag</Flag>
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
              Button
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
              Share
            </Button>
          </Areas.Share>
          {href ? <StyledLink href={href} /> : null}
        </>
      )}
    </StyledAdvancedCard>
  );
};

export const GridTeaser = ({
  title = '',
  teaser = '',
  image = '',
  href = '',
}) => {
  const xsLayout = `
    "thumb"
    "tags"  
  `;

  return (
    <StyledAdvancedCard areas={{xs: xsLayout}} overrides={{maxWidth: '600px'}}>
      {Areas => (
        <>
          <Areas.Thumb>
            <Image src={image} />
          </Areas.Thumb>
          <Areas.Thumb
            spaceInset="spaceInset030"
            alignSelf="end"
            style={{
              zIndex: 2,
              background: `linear-gradient(0deg, black 75%, transparent)`,
              color: '#fff',
            }}
          >
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
                <span style={{color: '#fff'}}>{title}</span>
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
          </Areas.Thumb>
          <Areas.Tags style={{background: 'black'}}>
            <Button
              href="#"
              size="small"
              overrides={{
                stylePreset: `buttonMinimalPrimary`,
              }}
            >
              Button
              <IconFilledEmail />
            </Button>
          </Areas.Tags>
          {href ? <StyledLink href={href} /> : null}
        </>
      )}
    </StyledAdvancedCard>
  );
};

// const hasTouchLink = (children: any, href: string): boolean =>
//   React.Children.toArray(children).some(child => {
//     const componentName = getDisplayName(child);

//     if (componentName === 'CardTouchArea' && child.props.href === href) {
//       return true;
//     }

//     if (typeof child.type === 'function' && child.props.children) {
//       return hasTouchLink(child.props.children, href);
//     }

//     return false;
//   });

const CardContext = React.createContext({useAreas: false});
const useCardContext = () => React.useContext(CardContext);

const StyledCard = styled(GridLayout)`
  position: relative;
  ${props => {
    const a = getStylePreset('', '')(props);
    console.log(props, a);
    return a;
  }}
`;

const Card = ({children, ...props}: GridLayoutProps) => {
  const {areas} = props;

  return (
    <CardContext.Provider value={{useAreas: Boolean(areas)}}>
      <StyledCard {...props}>
        {children}

        {/* {href && (
        // Cover link is not tabbable or read by screen-reader
        <CardCoverLink
          href={href}
          tabIndex={hasTouchLinkInChildren ? -1 : undefined}
          aria-hidden={hasTouchLinkInChildren ? 'true' : undefined}
        />
      )} */}
      </StyledCard>
    </CardContext.Provider>
  );
};

const StyledCardMedia = styled(GridLayout)`
  ${prop => prop.useAreas && `grid-area: media;`}
`;

const CardMedia = ({src, ...props}) => {
  const {useAreas} = useCardContext();
  return (
    <StyledCardMedia {...props} useAreas={useAreas}>
      <img src={src} alt="" style={{maxWidth: '100%'}} />
    </StyledCardMedia>
  );
};

const StyledCardContent = styled(GridLayout)`
  ${prop => prop.useAreas && `grid-area: content;`}
`;

const CardContent = (props: GridLayoutProps) => {
  const {useAreas} = useCardContext();
  return <StyledCardContent {...props} useAreas={useAreas} />;
};

// Card Actions has larger z-index than Cover link so goes over it
const StyledCardActions = styled(Block)`
  position: relative;
  z-index: 2;
  ${prop => prop.useAreas && `grid-area: actions;`}
`;

const CardActions = (props: GridLayoutProps) => {
  const {useAreas} = useCardContext();
  return <StyledCardActions {...props} useAreas={useAreas} />;
};

const StyledCardLink = styled(GridLayout)`
  ${props =>
    props.expand &&
    `
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
    }
    `}
`;

const CardLink = (props: GridLayoutProps & {href: string; expand: boolean}) => (
  <StyledCardLink as="a" {...props} />
);

const cardHref = '/card-link';

export const CardComposableExample = () => (
  <Card
    overrides={{
      maxWidth: {xl: '600px', md: '320px'},
      stylePreset: 'cardComposable',
    }}
    rowGap="space040"
    // columns={{xs: '200px 1fr', md: '1fr'}}
    // areas={{
    //   xs: `
    //     media content
    //     media actions
    //   `,
    //   md: `
    //     media
    //     content
    //     actions
    //   `,
    // }}
  >
    <CardMedia src="/placeholder-3x2.png" />

    <CardContent rowGap="space040">
      <CardLink href={cardHref}>
        <Headline kickerText="KICKER">Title of the card</Headline>
      </CardLink>

      <Paragraph>Some kind of intro</Paragraph>
    </CardContent>

    <CardActions>
      <Tag href="/news">News</Tag>
    </CardActions>
  </Card>
);
