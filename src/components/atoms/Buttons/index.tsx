import React from 'react';
import styled, { css } from 'styled-components';

type GreetFunction = () => void;


export interface StyledButtonProps {
  flex?: number | 'auto';
  color?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'xlarge';
  type?: 'button' | 'submit';
  border?: string;
  bgColor?: string;
  transparent?: boolean;
  round?: string;
  fontSize?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  [prop: string]: any;
}

export interface ButtonProps extends StyledButtonProps {
  children?: React.ReactNode;
  onClick?: GreetFunction;
}

const S = {
  Button: styled.button<StyledButtonProps>`
    flex: ${(props) => props.flex};
    display: flex;
    justify-content: center;
    align-items: stretch;
    font-size: ${(props) => (props.fontSize ? props.fontSize : `1.4rem`)};
    border-radius: ${(props) => (props.round ? props.round : `0`)};
    border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
    background: ${(props) => (props.transparent ? 'transparent' : `${props.bgColor}`)};
    color: ${(props) => props.color};
    cursor: pointer;
    outline: none;
    ${(props) => {
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
      if (props.size === 'xlarge') {
        return css`
          padding: 20px 80px;
        `;
      }
    }}
  `,
};


function Buttons({
                   children,
                   flex = 'auto',
                   color = 'black',
                   border = 'none',
                   bgColor = 'white',
                   transparent = false,
                   size = 'medium',
                   type = 'button',
                   round,
                   onClick,
                   fontSize,
                   ...props
                 }: ButtonProps) {
  const commonProps = {
    flex,
    color,
    size,
    border,
    bgColor,
    transparent,
    fontSize,
    type,
    round,

  };

  return <S.Button onClick={onClick} {...commonProps}
                   {...props}>{children}</S.Button>;
}

export default Buttons;

