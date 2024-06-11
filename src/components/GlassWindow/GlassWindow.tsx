import { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimText } from '../AnimText';

type Props = {
  children?: ReactNode;
  title?: string;
  onPrintEnd?: () => void
};

const StyledGlassWindow = styled.div`
  .glass-window {
    position: relative;
    color: #00D6C9;
    width: auto;
    font-family: monospace;
    font-size: 16px;

    p {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: inherit;
    }

    &__title {
      display: inline-block;
      border-radius: 2px;
      line-height: 1.75em;
      padding: 2px 16px;
      color: #fff;
      font-size: 18px;
      background: rgba(22, 139, 158, 0.85);
      margin-bottom: 12px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -10px;
        left: 0;
        width: 40px;
        height: 6px;
        border-radius: 2px;
        background: rgba(22, 139, 158, 0.85);
      }
    }

    &__content {
      line-height: 1.5em;
      padding: 40px;
      border: 2px solid #00D6C9;
      background: rgba(36, 203, 230, 0.3);
      border-radius: 6px;
      box-shadow: 0 0 32px rgba(0, 214, 200, 0.5);
      backdrop-filter: blur(5.3px);
    }

    @media screen and (max-width: 780px) {
      font-size: 14px;
      

      &__title {
        font-size: 15px;
        padding: 10px 24px;
        line-height: 1.25em;
      }

      &__content {
        padding: 20px;
      }
    }
  }
`;

const GlassWindow: FC<Props> = ({
  children,
  title = '',
  onPrintEnd = () => {}
}) => {
  return (
    <StyledGlassWindow>
      <div className="glass-window">
        {title && (
          <AnimText
            className='glass-window__title'
            interval={10}
            onPrintEnd={onPrintEnd}
          >
            {title}
          </AnimText>
        )}
        
        <div className='glass-window__content'>
          {children}
        </div>
      </div>
    </StyledGlassWindow>
  );
};

export { GlassWindow };