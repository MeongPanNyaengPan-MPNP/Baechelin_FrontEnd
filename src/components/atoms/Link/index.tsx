import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledLink = styled(Link)<LinkItemProps>`
  flex: ${(props) => props.flex};
  font-size: ${(props) => props.textSize ? `${props.textSize}rem` : '2.4rem'};
  font-weight: ${(props) => props.fontWeight ? `${props.fontWeight}` : 'normal'};
  padding: ${(props) => props.padding ? `${props.padding}` : '0'};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.align ? `${props.align}` : 'inherit'};
  line-height: 1;
`;

const StyledArwItem = styled.span<StyledArwItemProps>`
  display: ${(props) => props.arwDisplay ? `inline-block;` : 'none'};
  margin-left: 0.1em;

  > svg {
    font-size: ${(props) => props.textSize ? `${props.textSize}rem` : '1.3em'};
    margin-top: 0.11em;
  }
`;

type LinkItemProps = {
  textSize?: string;
  fontWeight?: string;
  padding?: string;
  align?: string;
  [prop: string]: any;
} & LinkProps

type StyledArwItemProps = {
  arwDisplay?: boolean;
  textSize?: string;
}

function LinkItem({
                    textSize,
                    children,
                    fontWeight = 'bold',
                    arwDisplay = true,
                    ...rest
                  }: LinkItemProps & StyledArwItemProps) {
  return (
    <StyledLink fontWeight={fontWeight} {...rest}>
      {children}<StyledArwItem arwDisplay={arwDisplay}><ChevronRightIcon /></StyledArwItem>
    </StyledLink>
  );
}

export default LinkItem;
