import React, {useEffect, useState} from 'react';
import {useSpeechSynthesis, useSpeechRecognition} from 'react-speech-kit';
import {Block} from '../../../src/block';
import {Button} from '../../../src/button';
import {Divider} from '../../../src/divider';
import {Image} from '../../../src/image';
import {Modal} from '../../../src/modal';
import {Accordion} from '../../../src/accordion';
import {TextBlock} from '../../../src/text-block';
import {routes} from '../../routes';

const content = (
  <TextBlock
    typographyPreset="editorialParagraph010"
    stylePreset="inkContrast"
    paddingBlockEnd="space010"
  >
    <br />
    Hold the button and tell me the name of a component, foundations or presets
    you want to read about:
    <br /> Eg: &quot;Button&quot; or &quot;Style Presets&quot; or
    &quot;Borders&quot;
  </TextBlock>
);

const VocalNavigatorModal: React.FC<{isOpen: boolean; setIsOpen: Function}> = ({
  isOpen,
  setIsOpen,
}) => {
  const [transcript, setTranscript] = useState<string>();
  const [
    displayConfirmationButtons,
    setDisplayConfirmationButton,
  ] = useState<boolean>();
  const {speak, voices} = useSpeechSynthesis();

  const speakEnhanced = (text: string) => {
    speak({text, voice: voices[39], pitch: 1.6, rate: 1});
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        speakEnhanced('Welcome, what can I find for you?');
      }, 500);
    }
  }, [isOpen]);

  const askUserConfirmation = () => {
    speakEnhanced(`Did you say ${transcript}?`);
  };

  const {listen, listening, stop} = useSpeechRecognition({
    onResult: (result: string) => {
      setTranscript(result);
    },
    onEnd: () => {
      askUserConfirmation();
      setDisplayConfirmationButton(true);
    },
  });

  const startListening = () => {
    listen();
  };

  const handleStopListening = () => {
    stop();
  };

  const handleNoButton = () => {
    speakEnhanced(`I am sorry, I am still learning, please try again`);
    setTranscript('');
    setDisplayConfirmationButton(false);
  };

  const handleYesButton = () => {
    searchAndTakeUserToPage();
  };

  const searchAndTakeUserToPage = () => {
    // @ts-ignore SEARCHING COMPONENTS DOCS
    routes[3].subNav[1].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });

    // @ts-ignore Foundations
    routes[2].subNav[1].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });

    // @ts-ignore Presets Presets
    routes[2].subNav[2].subNav.forEach((nav: {title: string}) => {
      if (nav.title.toLowerCase() === transcript?.toLowerCase()) {
        window.location.href = `${nav.id}`;
      }
    });
  };
  const [expanded, toggleExpanded] = React.useState(false);
  return (
    <>
      <Modal
        open={isOpen}
        onDismiss={() => {
          speakEnhanced('Thank you, goodbye');
          setIsOpen(!isOpen);
        }}
        header="Vocal Search"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2814/2814666.png"
          overrides={{width: '200px', height: '200px'}}
        />

        <Accordion
          header="How to guide"
          expanded={expanded}
          onClick={() => toggleExpanded(!expanded)}
          overrides={{
            header: {
              typographyPreset: 'utilityButton010',
            },
          }}
        >
          {content}
        </Accordion>
        <Divider />

        <TextBlock
          stylePreset="inkContrast"
          paddingBlockEnd="space030"
          paddingBlockStart="space030"
          typographyPreset="utilityButton010"
        >
          {' '}
          Microphone: {listening ? 'on' : 'off'}{' '}
        </TextBlock>

        <Button
          overrides={{
            paddingBlockEnd: 'space020',
          }}
          size="small"
          onTouchStart={startListening}
          onMouseDown={startListening}
          onKeyDown={startListening}
          onTouchEnd={handleStopListening}
          onMouseUp={handleStopListening}
          onKeyUp={handleStopListening}
        >
          Hold to talk
        </Button>
        <TextBlock
          paddingBlock="space030"
          stylePreset="inkContrast"
          typographyPreset="utilityButton010"
        >
          You said: {transcript}
        </TextBlock>

        {displayConfirmationButtons && (
          <div style={{display: 'inline-flex'}}>
            <Button
              overrides={{
                paddingBlock: 'space020',
              }}
              size="small"
              onClick={handleYesButton}
            >
              yes
            </Button>
            <Block paddingInlineStart="space010" />
            <Button
              overrides={{
                paddingBlockEnd: 'space010',
              }}
              size="small"
              onClick={handleNoButton}
            >
              no
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VocalNavigatorModal;
