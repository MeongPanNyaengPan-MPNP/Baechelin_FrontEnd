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
import { Pagination } from '@mui/material';
import NoDataMessage from '@molecules/NodataMessage';

import * as S from './styles';

function MapWrapper({ filters }: { filters: FiltersType }) {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  const { UseMapData } = UseMapQuery();
  const [pageNum, setPageNum] = useState<number>(1);
  const latingQueryString = useRecoilValue(LatingQueryString);
  const snbQueryString = useRecoilValue(SnbQueryString);
  const { debounceVal, bool } = UseDebounce<string>(latingQueryString, 1000);
  const [itemResult, setitemResult] = useState<StoreMapResponseTypes[][]>([]);
  console.log(bool);
  const {
    data: storeItems,
    isLoading,
    isFetched,
  } = UseMapData<StoreMapListQueryTypes>(debounceVal, snbQueryString, pageNum - 1);

  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      setLocation(currentLocation);
    }
  }, [currentLocation, location, setLocation]);
  const pageChangeHandler = (pageNumber = 1) => {
    setPageNum(pageNumber);
  };

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
  React.useEffect(() => {
    setPageNum(1);
  }, [bool]);
  return (
    <S.Wrapper>
      <S.CategoryContainer>
        <StoreCategorySnb filters={filters} snbBorder showMapButton={false} />
      </S.CategoryContainer>
      <S.Content>
        <MapContainer location={location} storeItems={itemResult} />
      </S.Content>
      <S.StoreListArea>
        <MapStoreList
          leftElement={storeItems?.leftElement}
          totalCount={storeItems?.totalCount}
          storeItems={itemResult}
          isLoading={isLoading}
          isFetched={isFetched}
        />
        <S.PaginationBar>
          <Pagination
            count={Number(storeItems?.totalPage) + 1}
            showFirstButton
            showLastButton
            size="medium"
            siblingCount={0}
            boundaryCount={1}
            page={pageNum}
            onChange={(e, page) => pageChangeHandler(page)}
          />
        </S.PaginationBar>
      </S.StoreListArea>
      {(bool || isLoading) && (
        <S.DisabledBox>
          <NoDataMessage message={['LOADING']} />
        </S.DisabledBox>
      )}
    </S.Wrapper>
  );
}

export default MapWrapper;
