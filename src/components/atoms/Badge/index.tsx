import React from 'react';
import styled, { css } from 'styled-components';

const BadgeArea = styled.div<BadgeProps>`
  border-radius: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid #efefef;

  ${(props) => {
    if (props.size === 's') {
      return css`
        width: 2rem;
        height: 2rem;
      `;
    }
    if (props.size === 'm') {
      return css`
        width: 2.5rem;
        height: 2.5rem;
      `;
    }
    if (props.size === 'l') {
      return css`
        width: 3rem;
        height: 3rem;
      `;
    }
  }}
  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export type BadgeProps = {
  size?: 's' | 'm' | 'l';
  alt: string;
  src: string;
  [prop: string]: any;
}

function Badge({
                 size = 'm',
                 alt,
                 src,
                 ...props
               }: BadgeProps) {
  return (
    <BadgeArea size={size} {...props}>
      <img alt={alt} src={src} />
    </BadgeArea>
  );
}

export default Badge;
