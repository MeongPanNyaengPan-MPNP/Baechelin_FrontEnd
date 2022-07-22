import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledLink = styled.p<LinkItemProps>`
  flex: ${(props) => props.flex};
  align-items: center;
  font-size: ${(props) => `${props.textsize}rem`};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
  display: inline-flex;
  justify-content: ${(props) => (props.align ? `${props.align}` : 'inherit')};
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
`;

const StyledArwItem = styled.span<LinkItemProps>`
  display: ${(props) => (props.arwDisplay ? `inline-block;` : 'none')};
  margin-left: 0.1em;

  > svg {
    font-size: ${(props) => (props.textsize ? `${props.textsize}rem` : '1.3em')};
    margin-top: 0.11em;
  }
`;

export type LinkItemProps = {
  textsize?: number;
  fontWeight?: 'normal' | 'light' | 'bold';
  padding?: string;
  arwDisplay?: boolean;
  state?: any;
  to: string;
  children: ReactNode;
  [prop: string]: any;
};

function LinkItem({
  textsize = 2.4,
  to = '/',
  children,
  padding,
  fontWeight = 'bold',
  arwDisplay = true,
  state,
}: LinkItemProps) {
  const navigate = useNavigate();
  return (
    <StyledLink
      aria-label="link"
      textsize={textsize}
      fontWeight={fontWeight}
      onClick={() => navigate(`${to}`, { state })}
      padding={padding}
    >
      <span>{children}</span>
      <StyledArwItem arwDisplay={arwDisplay}>
        <ChevronRightIcon />
      </StyledArwItem>
    </StyledLink>
  );
}

export default LinkItem;
