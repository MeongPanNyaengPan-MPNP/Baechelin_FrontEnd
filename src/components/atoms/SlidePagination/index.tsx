import React from 'react';
import styled, { css } from 'styled-components';

type PaginationProps = { paginationLength: number; paginationId?: string };
export const PaginationArea = styled.div<PaginationProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  ${(props) => {
    if (props.paginationLength > 0) {
      return css`
        margin-top: 30px;
      `;
    }
  }}
  .swiper-pagination-bullet {
    background: #a9a9a9;
    opacity: 1;
    margin: 0 3px;
  }

  .swiper-pagination-bullet-active {
    background: #ed6f2a;
  }
`;

function SlidePagination(props: PaginationProps) {
  const { paginationLength, paginationId } = props;
  return <PaginationArea paginationLength={paginationLength} id={paginationId} />;
}

export default SlidePagination;
