import React from 'react';
import styled from 'styled-components';

export interface SpanProps {
  children?: React.ReactChild;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  width?: string;
  fontSize?: number | string;
  size?: string;
  blockWidth?: boolean;
  className?: string;
  del?: boolean;
  [prop: string]: any;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const StyledSpan = styled.span<SpanProps>`
  color: ${(props: SpanProps) => props.color || 'black'};
  text-align: ${(props: SpanProps) => props.textAlign};
  width: ${(props) => (props.blockWidth ? '100%' : props.width)};
  word-wrap: break-word;
  word-break: break-all;
  font-size: ${(props) => props.fontSize};

  &.del {
    text-decoration: line-through;
  }
  &.small {
    padding: 0.5em 0.3em;
    font-size: 1rem;
  }
  &.normal {
    padding: 1em 2em;
    /* padding: 0.7em 0.5em; */
    font-size: 1.2rem;
  }
  &.big {
    padding: 1em 0.9em;
    font-size: 1.2rem;
    font-weight: bold;
  }
  &.title {
    padding: 1.3em 1.84em;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Span = ({
  children,
  color = 'inherit',
  textAlign = 'left',
  width = 'auto',
  fontSize = '1rem',
  size = 'normal',
  className,
  blockWidth = false,
  onClick,
}: SpanProps) => {
  const needProps = {
    color,
    textAlign,
    width,
    fontSize,
    size,
    blockWidth,
  };

  return (
    <StyledSpan {...needProps} className={className} onClick={onClick}>
      {children}
    </StyledSpan>
  );
};

export default Span;
