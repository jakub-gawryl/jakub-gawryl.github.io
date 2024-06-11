import { FC, ReactNode, useState } from 'react';
import { GlassWindow } from '../GlassWindow';
import { AnimText } from '../AnimText';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const StyledAboutMe = styled.div`
  margin: 100px;
  z-index: 100;
  max-width: 800px;

  @media screen and (max-width: 780px) {
    margin: 36px
  }
`;

const AboutMe: FC<Props> = () => {
  const [ current, setCurrent ] = useState(0);

  const increaseCurrent = () => setCurrent(cur => cur + 1);

  return (
    <StyledAboutMe>
      <GlassWindow
        title="Greetings from Jakub Gawryl, senior frontend/fullstack developer."
        onPrintEnd={increaseCurrent}
      >
        {current > 0 && (
          <AnimText interval={5} onPrintEnd={increaseCurrent}>
            I am enthusiast of programming, autodidact with great passion for
            good quality code.
          </AnimText>
        )}

        {current > 1 && (
          <AnimText interval={5} onPrintEnd={increaseCurrent}>
            Since 2012, I have been working on web-dev creating
            web applications, websites and games, constantly improving my skills.
            Recently I have been focusing mainly on modern technologies based on
            JavaScript/Typescript (Node.js, Express, MongoDB), but equally well
            I find myself in a slightly older solutions like PHP, MySQL, JQuery.
          </AnimText>
        )}

        {current > 2 && (
          <>
            <AnimText
              style={{display: 'inline-block'}}
              interval={10}
              as='a'
              href="https://www.linkedin.com/in/jakub-gawryl/"
              target="_blank"
            >
              let's meet on LinkedIn
            </AnimText>{', '}
            <AnimText
              style={{display: 'block'}}
              interval={10}
              as='a'
              href="https://github.com/jakub-gawryl/"
              target="_blank"
            >
              check out my GitHube
            </AnimText>{' '}
            <AnimText
              style={{display: 'block'}}
              interval={10}
              as='p'
              onPrintEnd={increaseCurrent}
            >
              or email me at gawryl.jakub (at) gmail.com
            </AnimText>
          </>
        )}

        {current > 3 && (
          <AnimText
            interval={20}
            as='small'
            onPrintEnd={increaseCurrent}
            style={{
              display: 'block',
              marginTop: '20px'
            }}
          >
            &gt; spacecraft log entry, June 2004
          </AnimText>
        )}
      </GlassWindow>
    </StyledAboutMe>
  );
};

export { AboutMe };