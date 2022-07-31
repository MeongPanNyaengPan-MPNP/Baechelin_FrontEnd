import React from 'react';
import styled, { css } from 'styled-components';

export interface ThumbNailProps extends ImageProps {
  borderSize?: number;
  round?: number;
  width?: string;
  height?: string;
  fit?: boolean;
  hover?: boolean;

  [prop: string]: any;
}

export interface ImageProps {
  alt: string | undefined;
  src: string | undefined;
}

const StyledFigure = styled.figure<ThumbNailProps>`
  display: block;
  position: relative;
  width: ${(props) => (props.width ? `${props.width}` : '100%')};
  height: ${(props) => (props.height ? `${props.height}` : 'auto')};
  background: #efefef;
  border: ${(props) => (props.borderSize ? `${props.borderSize}px solid #efefef` : 'none')};
  border-radius: ${(props) => (props.round ? `${props.round}em` : 'none')};
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: ${(props) => (props.fit ? 'cover' : `contain`)};
    transition: all 0.3s;
  }

  &:hover > img {
    transform: ${(props) => (props.hover ? `scale(1.03);` : '')};
  }

  ${(props) => {
    if (props.borderSize) {
      return css`
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: none;
          border: ${props.borderSize}px solid #efefef;
          width: 100%;
          height: 100%;
          opacity: 0.2;
        }
      `;
    }
  }}
`;

function ThumbNail({ round = 0, borderSize = 0, alt = '', src, width, height, fit = true, hover }: ThumbNailProps) {
  const props = {
    borderSize,
    round,
    width,
    height,
    fit,
    hover,
  };
  return (
    <StyledFigure {...props}>
      <img alt={alt} src={src} />
    </StyledFigure>
  );
}

export default ThumbNail;
