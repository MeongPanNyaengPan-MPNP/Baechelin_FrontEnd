import React from 'react';
import { StoreMapListQueryTypes } from '@interfaces/StoreResponseTypes';
import styled from 'styled-components';

type MapStoreListProps = {
  storeItems: StoreMapListQueryTypes | undefined;
};
const Container = styled.div`
  background: #fff;
  padding-top: 45px;
`;

function MapStoreList(props: MapStoreListProps) {
  const { storeItems } = props;
  return (
    <Container>
      <p>총 {storeItems?.totalCount}</p>
      <p>{storeItems?.cards?.length}</p>
      {storeItems?.cards?.map((item) => (
        <div key={item.storeId}>{item.name}</div>
      ))}
    </Container>
  );
}

export default MapStoreList;
