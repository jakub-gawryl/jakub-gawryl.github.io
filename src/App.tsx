import { FC, ReactNode } from 'react';
import { MainBackground } from './components/MainBackground';
import { AboutMe } from './components/AboutMe';

type Props = {
  children?: ReactNode;
};

const App: FC<Props> = () => {
  return (
    <MainBackground>
      <img src='/img/blue-planet.png' style={{
        position: 'absolute',
        bottom: -150,
        right: -60
        }}/>

      <AboutMe />
    </MainBackground>
  );
};

export { App };