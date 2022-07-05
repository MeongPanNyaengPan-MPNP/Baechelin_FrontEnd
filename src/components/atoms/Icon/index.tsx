import React from 'react';
import styled from 'styled-components';

export interface IconProps {
  width: number | string;
  height: number | string;
  cursor?: string;
  src?: string;
  alt?: string;
}

const StyledIcon = styled.img<IconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: fill;
  cursor: ${(props) => props.cursor || null};
`;

function Icon({ width = '1rem', height = '1rem', cursor = 'pointer', src, alt = 'IconAlt' }: IconProps): JSX.Element {
  return <StyledIcon width={width} height={height} cursor={cursor} src={src} alt={alt} />;
}

export default Icon;
