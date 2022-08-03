import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';

import { CardContentAddressArea, CardContentArea, CardContentAreaTop } from '@molecules/StoreCard/styles';

const SkeletonCardItem = styled.div<{ boxStyle?: any }>`
  display: inline-block;
  background: #fff;
  width: 270px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  boxstyle: any;
`;

function SkeletonCard({ boxStyle }: { boxStyle?: any }) {
  return (
    <SkeletonCardItem style={boxStyle}>
      <Skeleton variant="rectangular" width="100%" height="145px" />
      <CardContentAreaTop>
        <Skeleton variant="text" width="20%" height="1.2rem" sx={{ margin: '20px 20px 5px' }} />
        <Skeleton variant="text" width="40%" height="2.4rem" sx={{ margin: '5px 20px 0' }} />
      </CardContentAreaTop>
      <CardContentAddressArea>
        <Skeleton variant="text" width="80%" height="1.4rem" sx={{ margin: '0 20px' }} />

        <Skeleton variant="text" width="40%" height="1.4rem" sx={{ margin: '5px 20px 0' }} />
      </CardContentAddressArea>
      <CardContentArea>
        <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{
            margin: '0px 5px -5px 0',
            display: 'inline-block;',
          }}
        />
        <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{
            margin: '0px 5px -5px',
            display: 'inline-block;',
          }}
        />
        <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{
            margin: '0px 5px -5px',
            display: 'inline-block;',
          }}
        />
        <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{
            margin: '0px 5px -5px',
            display: 'inline-block;',
          }}
        />
        <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{
            margin: '0px 5px -5px',
            display: 'inline-block;',
          }}
        />
      </CardContentArea>
    </SkeletonCardItem>
  );
}

export default SkeletonCard;
