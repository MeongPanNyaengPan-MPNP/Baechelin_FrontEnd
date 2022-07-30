import React, { useEffect, useState } from 'react';

import MapStoreList from '@molecules/MapStoreList';
import MapContainer from '@molecules/MapContainer';
import StoreCategorySnb, { FiltersType } from '@organisms/StoreCategorySnb';
import UseGeolocation from '@hooks/UseGeolocation';
import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import UseDebounce from '@hooks/UseDebounce';
import { UseMapQuery } from '@hooks/UseQueryHooks';
import { StoreMapListQueryTypes, StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
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
    flex-shrink: 1;
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
  right: 348px;
  z-index: 100;

  .facility_area {
    margin: 20px 0 0 auto;

    > div {
      margin: 0 0 0 auto;
      padding-right: 0;
    }
  }
}

.category_area > div {
  margin: 0 0 0 auto;
}
`;

function MapWrapper({ filters }: { filters: FiltersType }) {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);

  const latingQueryString = useRecoilValue(LatingQueryString);
  const snbQueryString = useRecoilValue(SnbQueryString);
  const latingDebounce = UseDebounce<string>(latingQueryString, 1000);
  const { UseMapData } = UseMapQuery();
  const { data: storeItems, isLoading, isFetched } = UseMapData<StoreMapListQueryTypes>(latingDebounce, snbQueryString);

  const [itemResult, setitemResult] = useState<StoreMapResponseTypes[][]>([]);
  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      setLocation(currentLocation);
    }
  }, [currentLocation, location, setLocation]);
  useEffect(() => {
    // const result: { [key: number]: StoreMapResponseTypes[] }[] = [];
    const lngRes: { [key: number]: StoreMapResponseTypes[] } = {};
    storeItems?.cards?.forEach((item) => {
      const lng = item.longitude;
      if (!lngRes[lng]) {
        lngRes[lng] = [item];
      } else {
        lngRes[lng] = [...lngRes[lng], item];
      }
    });
    const result = Object.keys(lngRes).map((key) => lngRes[Number(key)]);
    setitemResult(result);
  }, [storeItems]);
  return (
    <Wrapper>
      <CategoryContainer>
        <StoreCategorySnb filters={filters} snbBorder />
      </CategoryContainer>
      <Content>
        <MapContainer location={location} storeItems={itemResult} />
        <MapStoreList
          leftElement={storeItems?.leftElement}
          totalCount={storeItems?.totalCount}
          storeItems={itemResult}
          isLoading={isLoading}
          isFetched={isFetched}
        />
      </Content>
    </Wrapper>
  );
}

export default MapWrapper;
