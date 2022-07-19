import React from 'react';
import styled from 'styled-components';

export const PaginationArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;

  .swiper-pagination-bullet {
    background: #a9a9a9;
    opacity: 1;
    margin: 0 3px;
  }

  .swiper-pagination-bullet-active {
    background: #ed6f2a;
  }
`;

function SlidePagination({ paginationId }: { paginationId?: string }) {
  return <PaginationArea id={paginationId} />;
}

export default SlidePagination;
