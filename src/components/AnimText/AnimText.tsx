import { Children, ElementType, FC, HTMLProps, ReactNode, useEffect, useState } from 'react';

type Props = HTMLProps<HTMLElement> & {
  as?: ElementType;
  interval?: number;
  children?: ReactNode;
  onPrintEnd?: () => void
};

const AnimText: FC<Props> = ({
  as: As = 'p',
  interval = 50,
  children,
  onPrintEnd = () => {},
  ...props
}) => {
  const [ partalText, setPartialText ] = useState(' ');

  useEffect(() => {
    if (children) {
      Children.forEach(children, (child, index) => {
        if (typeof child === 'string') {
          const trimmedText = child.trim();
          let curIndex = 0;
          const intervalHandle = setInterval(() => {
            if (curIndex === trimmedText.length) {
              clearInterval(intervalHandle);
              onPrintEnd();
              return;
            }
            curIndex++;
            setPartialText(trimmedText.slice(0, curIndex));
          }, interval);
        }
      });
    }
  }, [children]);

  return <As dangerouslySetInnerHTML={{__html: partalText}} {...props} />;
};

export { AnimText };