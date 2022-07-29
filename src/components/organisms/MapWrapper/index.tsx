import React from 'react';
import MapStoreList from '@molecules/MapStoreList';
import MapContainer from '@molecules/MapContainer';
import StoreCategorySnb, { FiltersType } from '@organisms/StoreCategorySnb';
import UseGeolocation from '@hooks/UseGeolocation';
import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import UseDebounce from '@hooks/UseDebounce';
import { UseMapQuery } from '@hooks/UseQueryHooks';
import { StoreMapListQueryTypes } from '@interfaces/StoreResponseTypes';
import { LatingQueryString } from '@recoil/mapAtom';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;

  > div:first-child {
    width: calc(100% - 348px);
    flex-shrink: 0;
  }

  > div:last-child {
    width: 348px;
    flex-shrink: 0;
  }
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
`;
const CategoryContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

function MapWrapper({ filters }: { filters: FiltersType }) {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);

  const latingQueryString = useRecoilValue(LatingQueryString);
  const snbQueryString = useRecoilValue(SnbQueryString);
  const latingDebounce = UseDebounce<string>(latingQueryString, 1000);
  const { UseMapData } = UseMapQuery();
  const { data: storeItems } = UseMapData<StoreMapListQueryTypes>(latingDebounce, snbQueryString);

  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      setLocation(currentLocation);
    }
  }, [currentLocation, location, setLocation]);

  return (
    <Wrapper>
      <CategoryContainer>
        <StoreCategorySnb filters={filters} snbBorder />
      </CategoryContainer>
      <Content>
        <MapContainer location={location} storeItems={storeItems} />
        <MapStoreList storeItems={storeItems} />
      </Content>
    </Wrapper>
  );
}

export default MapWrapper;
