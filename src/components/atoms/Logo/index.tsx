import React from 'react';
import styled from 'styled-components';

// export interface IconProps extends HTMLAttributes<HTMLImageElement> {
//   src?: File | string;
// }

export interface LogoProps {
  width: number | string;
  height: number | string;
  margin?: number | string;
  cursor?: string;
  src?: string;
  alt?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledLogo = styled.img<LogoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.height || null};
  object-fit: fill;
  cursor: ${(props) => props.cursor || null};
`;

function Logo({
  width = '1rem',
  height = '1rem',
  margin,
  cursor = 'pointer',
  src,
  alt = 'LogoAlt',
  onClick,
}: LogoProps): JSX.Element {
  return (
    <StyledLogo width={width} height={height} cursor={cursor} margin={margin} src={src} alt={alt} onClick={onClick} />
  );
}

export default Logo;
