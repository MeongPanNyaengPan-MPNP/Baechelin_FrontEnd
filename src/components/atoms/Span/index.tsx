import React from 'react';
import styled, { css } from 'styled-components';

export interface SpanProps {
  children?: React.ReactChild;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  width?: string;
  fontSize?: number | string;
  fontWeight?: string | number | 'bold' | 'normal';
  size?: string;
  blockWidth?: boolean;
  className?: string;
  del?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  display?: string;
  ellipsis?: null | number;

  [prop: string]: any;
}

const StyledSpan = styled.span<SpanProps>`
  display: ${(props) => props.display || 'inline'};
  color: ${(props: SpanProps) => props.color || 'black'};
  text-align: ${(props: SpanProps) => props.textAlign};
  width: ${(props) => (props.blockWidth ? '100%' : props.width)};
  word-wrap: break-word;
  word-break: break-all;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 1.4;
  white-space: pre-wrap;

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

  /* 말줄임 처리 */
  ${(props) => {
    if (props.ellipsis && props.ellipsis > 1) {
      return css`
        display: -webkit-box;
        word-wrap: break-word;
        -webkit-line-clamp: ${props.ellipsis};
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.4;
        height: ${props.ellipsis + props.ellipsis * 0.4}em;
      `;
    }
    if (props.ellipsis && props.ellipsis === 1) {
      return css`
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    }
  }}
`;

const Span = ({
  children,
  color = 'inherit',
  textAlign = 'left',
  width = 'auto',
  fontSize = '1rem',
  fontWeight = '500',
  size = 'normal',
  className,
  blockWidth = false,
  onClick,
  display,
  ellipsis = null,
}: SpanProps) => {
  const needProps = {
    color,
    textAlign,
    width,
    fontSize,
    size,
    blockWidth,
    fontWeight,
    display,
    ellipsis,
  };

  return (
    <StyledSpan {...needProps} className={className} onClick={onClick}>
      {children}
    </StyledSpan>
  );
};

export default Span;
