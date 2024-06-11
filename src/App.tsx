import { FC, ReactNode } from 'react';
import { MainBackground } from './components/MainBackground';
import { AboutMe } from './components/AboutMe';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const StyledPlanet = styled.div`
  position: fixed;
  overflow: hidden;
  filter: brightness(0.75);
  bottom: -100px;
  right: -60px;
`;

const App: FC<Props> = () => {
  return (
    <MainBackground>
      <StyledPlanet>
        <img src='/img/blue-planet.png' />
      </StyledPlanet>
      <AboutMe />
    </MainBackground>
  );
};

export { App };