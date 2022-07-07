import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  borderSize?: number;
  round?: number;
  alt: string;
  src: string | undefined;
  width?: string;
  height?: string;
  fit?: boolean;

  [prop: string]: any;
}

const StyledFigure = styled.figure<ImgProps>`
  display: block;
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
  }
`;

function Figure({ round = 0, borderSize = 0, alt = '', src, width, height, fit = true }: ImgProps) {
  const figureProps = {
    borderSize,
    round,
    width,
    height,
    fit,
  };
  return (
    <StyledFigure {...figureProps}>
      <img alt={alt} src={src} />
    </StyledFigure>
  );
}

export default Figure;
