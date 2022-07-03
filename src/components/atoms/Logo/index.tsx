import React from 'react';
import styled from 'styled-components';

// export interface IconProps extends HTMLAttributes<HTMLImageElement> {
//   src?: File | string;
// }

export interface LogoProps {
  width: number | string;
  height: number | string;
  cursor?: string;
  src?: string;
  alt?: string;
}

const StyledLogo = styled.img<LogoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: fill;
  cursor: ${(props) => props.cursor || null};
`;

function Logo({ width = '1rem', height = '1rem', cursor = 'pointer', src, alt = 'LogoAlt' }: LogoProps): JSX.Element {
  return <StyledLogo width={width} height={height} cursor={cursor} src={src} alt={alt} />;
}

export default Logo;
