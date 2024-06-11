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
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-position: 50% 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/img/earth.jpg);
`;

const App: FC<Props> = () => {
  return (
    <div>
      <StyledPlanet />
      <AboutMe />
    </div>
  );
};

export { App };