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

import MyLocation from '@molecules/MyLocation';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import MapStoreItem from '@molecules/MapStoreItem';
import * as S from './styles';

function MapWrapper({ filters }: { filters: FiltersType }) {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  const { UseMapData } = UseMapQuery();
  const [pageNum, setPageNum] = useState<number>(0);
  const latingQueryString = useRecoilValue(LatingQueryString);
  const snbQueryString = useRecoilValue(SnbQueryString);
  const { debounceVal, bool } = UseDebounce<string>(latingQueryString, 700);

  const [groupStoreItemResult, setGroupStoreItemResult] = useState<StoreMapResponseTypes[][]>([]);

  const {
    data: storeMapListData,
    isLoading,
    isFetched,
  } = UseMapData<StoreMapListQueryTypes>(debounceVal, snbQueryString, pageNum);

  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      setLocation(currentLocation);
    }
  }, [currentLocation, location, setLocation]);
  const pageChangeHandler = (pageNumber = 1) => {
    setPageNum(pageNumber);
  };
  useEffect(() => {
    // 같은 위치 업장 배열로 묶기
    const lngRes: { [key: number]: StoreMapResponseTypes[] } = {};
    storeMapListData?.cards?.forEach((item) => {
      const lng = item.longitude;
      if (!lngRes[lng]) {
        lngRes[lng] = [item];
      } else {
        lngRes[lng] = [...lngRes[lng], item];
      }
    });
    const result = Object.keys(lngRes).map((key) => lngRes[Number(key)]);
    setGroupStoreItemResult(result);
  }, [storeMapListData]);

  // 리스트가 바뀔 때마다 페이지네이션 초기화
  React.useEffect(() => {
    setPageNum(0);
  }, [debounceVal, snbQueryString]);

  return (
    <S.Wrapper>
      <S.CategoryContainer>
        <StoreCategorySnb filters={filters} snbBorder showMapButton={false} />
        <S.MyLocationArea>
          <MyLocation />
        </S.MyLocationArea>
      </S.CategoryContainer>
      <S.Content>
        <MapContainer location={location} storeItems={groupStoreItemResult} />
      </S.Content>
      <S.StoreListArea>
        <MapStoreList totalCount={storeMapListData?.totalCount} isFetched={isFetched} bool={bool} isLoading={isLoading}>
          {storeMapListData &&
            groupStoreItemResult?.length > 0 &&
            !bool &&
            groupStoreItemResult.map((stores) => (
              <S.MapStoreList className="store_wrap" id={`wrap_${stores[0].storeId}`} key={`wrap_${stores[0].storeId}`}>
                {stores.map((item) => (
                  <MapStoreItem item={item} key={item.storeId} />
                ))}
              </S.MapStoreList>
            ))}
        </MapStoreList>
        <S.PaginationBar>
          <Pagination
            count={storeMapListData?.totalPage && Number(storeMapListData?.totalPage) + 1}
            showFirstButton
            showLastButton
            size="medium"
            siblingCount={0}
            boundaryCount={1}
            page={pageNum + 1}
            onChange={(e, page) => pageChangeHandler(page - 1)}
          />
        </S.PaginationBar>
      </S.StoreListArea>

      {!isLoading && Number(storeMapListData?.leftElement) > 3 && (
        <S.totalCount>
          <p>
            <button type="button" onClick={() => setPageNum((prevState) => prevState + 1)}>
              {storeMapListData?.leftElement}개의 가게
              <Span fontSize="1.4rem" fontWeight={400}>
                Click
              </Span>
              <Icon iconName="add_icon" color="#fff" />
              <strong />
            </button>
          </p>
        </S.totalCount>
      )}
    </S.Wrapper>
  );
}

export default MapWrapper;
