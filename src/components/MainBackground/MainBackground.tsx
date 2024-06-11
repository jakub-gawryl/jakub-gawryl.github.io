import { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

type StyledProps = {
  x: number;
  y: number;
};


const StyledMainBackground = styled.div.attrs<StyledProps>(({x, y}) => ({
  style: {
    backgroundPositionX: x,
    backgroundPositionY: y
  }
}))<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(/img/bg.png);
  font-family: sans-serif;
  color: #fff;
  overflow: hidden;
`;

const MainBackground: FC<Props> = ({ children }) => {
  const [ mousePos, setMousePos ] = useState([0, 0]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const {
        clientX: x,
        clientY: y
      } = e;

      setMousePos([
        -x / 5,
        -y / 5
      ])
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <StyledMainBackground x={mousePos[0]} y={mousePos[1]}>
      {children}
    </StyledMainBackground>
  );
};

export { MainBackground };