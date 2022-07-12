import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledLink = styled(Link)<LinkItemProps>`
  flex: ${(props) => props.flex};
  align-items: center;
  font-size: ${(props) => `${props.textSize}rem`};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
  display: inline-flex;
  justify-content: ${(props) => (props.align ? `${props.align}` : 'inherit')};
  line-height: 1;
  text-decoration: none;
`;

const StyledArwItem = styled.span<LinkItemProps>`
  display: ${(props) => (props.arwDisplay ? `inline-block;` : 'none')};
  margin-left: 0.1em;

  > svg {
    font-size: ${(props) => (props.textSize ? `${props.textSize}rem` : '1.3em')};
    margin-top: 0.11em;
  }
`;

export type LinkItemProps = {
  textSize?: number;
  fontWeight?: 'normal' | 'light' | 'bold';
  padding?: string;
  arwDisplay?: boolean;
  [prop: string]: any;
} & LinkProps;

function LinkItem({
  textSize = 2.4,
  to = '/',
  children,
  fontWeight = 'bold',
  arwDisplay = true,
  ...rest
}: LinkItemProps) {
  return (
    <StyledLink textSize={textSize} fontWeight={fontWeight} to={to} {...rest}>
      {children}
      <StyledArwItem arwDisplay={arwDisplay}>
        <ChevronRightIcon />
      </StyledArwItem>
    </StyledLink>
  );
}

export default LinkItem;
