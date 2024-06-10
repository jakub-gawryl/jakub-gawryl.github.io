import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const App: FC<Props> = () => {
  return (
    <div>Hello world!</div>
  );
};

export { App };