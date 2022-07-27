import React from 'react';
import styled, { css } from 'styled-components';

type GreetFunction = () => void;

export interface StyledButtonProps {
  flex?: number | 'auto' | 'none';
  color?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'xlarge' | 'large';
  type?: 'button' | 'submit';
  border?: string;
  bgColor?: string;
  transparent?: boolean;
  round?: string;
  fontSize?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  align?: string;
  display?: string;
  hover?: boolean;

  [prop: string]: any;
}

export interface ButtonsProps extends StyledButtonProps {
  children?: React.ReactNode;
  onClick?: GreetFunction;
  id?: string;
}

const Button = styled.button<StyledButtonProps>`
  flex: ${(props) => props.flex};
  display: ${(props) => props.display || 'inline-block'};
  justify-content: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : `1.4rem`)};
  border-radius: ${(props) => (props.round ? props.round : `0`)};
  border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  background: ${(props) => (props.transparent ? 'transparent' : `${props.bgColor}`)};
  color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: all 0.1s;

  &:hover {
    opacity: 0.9;
  }

  ${(props) => {
    if (props.hover === false) {
      return css`
        &:hover {
          opacity: 1;
        }
      `;
    }
    if (props.size === 'xsmall') {
      return css`
        padding: 5px 7px;
      `;
    }
    if (props.size === 'small') {
      return css`
        padding: 8px 10px;
      `;
    }
    if (props.size === 'medium') {
      return css`
        padding: 15px 20px;
      `;
    }
    if (props.size === 'large') {
      return css`
        padding: 15px 40px;
      `;
    }
    if (props.size === 'xlarge') {
      return css`
        padding: 20px 80px;
      `;
    }
  }}
`;

function Buttons({
  children,
  flex = 'none',
  color = 'black',
  border = 'none',
  bgColor = 'white',
  transparent = false,
  size = 'medium',
  type = 'button',
  align,
  round,
  onClick,
  display,
  fontSize,
  hover = true,
  id,
  ...props
}: ButtonsProps) {
  const commonProps = {
    flex,
    color,
    size,
    border,
    bgColor,
    transparent,
    hover,
    display,
    fontSize,
    type,
    round,
    align,
  };

  return (
    <Button id={id} onClick={onClick} {...commonProps} {...props}>
      {children}
    </Button>
  );
}

export default Buttons;
