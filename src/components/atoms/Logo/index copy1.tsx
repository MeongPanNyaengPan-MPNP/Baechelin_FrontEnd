import { ComponentType, HTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  src?: File | string;
}

const Logo: StyledComponent<ComponentType<IconProps>, any, IconProps> = styled.img<IconProps>`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export default Logo;
