import React from 'react';
import styled from 'styled-components';
import SkeletonCard from '@atoms/SkeletonCard';
import { SkeletonProps } from '@mui/material';

export const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

function SkeletonGroup(props: SkeletonProps & { col?: number }) {
  const { width, col } = props;
  return (
    <SkeletonContainer>
      {[...Array(col)].map(() => (
        <SkeletonCard boxStyle={{ width }} />
      ))}
    </SkeletonContainer>
  );
}

export default SkeletonGroup;
