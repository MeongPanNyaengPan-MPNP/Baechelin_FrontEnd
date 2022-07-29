/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Map from '@atoms/Map';
import styled from 'styled-components';
import Marker from '@atoms/MapMarker';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { useSetRecoilState } from 'recoil';
import { LatingQueryString } from '@recoil/mapAtom';
import { StoreMapListQueryTypes, StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import LatLng = kakao.maps.LatLng;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
`;
const MapArea = styled.div`
  width: 100%;
  height: 100%;
`;
type MapContainerProps = {
  location: UserLoctaionType;
  storeItems: StoreMapListQueryTypes | undefined;
};

const MapContainer = React.forwardRef((props: MapContainerProps, ref) => {
  /* 사용자 위치 가져오기 */
  const { location, storeItems } = props;
  const MapRef = useRef<kakao.maps.Map>(null);
  const MarkerRef = useRef<kakao.maps.Marker>();

  const setLatingQueryString = useSetRecoilState(LatingQueryString);
  const [neLatLng, setNeLating] = useState<LatLng | null>(null);
  const [swLatLng, setSwLatLng] = useState<LatLng | null>(null);
  const [itemResult, setitemResult] = useState<StoreMapResponseTypes[][]>([]);
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
    /*
        Object.keys(lngRes).forEach((key) => {
          const latRes: { [key: number]: StoreMapResponseTypes[] } = {};
          lngRes[Number(key)].forEach((item) => {
            const lat = item.latitude;
            if (!latRes[lat]) {
              latRes[lat] = [item];
            } else {
              latRes[lat] = [...latRes[lat], item];
            }
          });
          result.push(latRes);
        }); */
    // setitemResult(result);
  }, [storeItems]);

  /*   const latingDebounce = UseDebounce<string>(latingQueryString, 1000);
    const { UseMapData } = UseMapQuery();
    const { data: storeItems } = UseMapData<StoreMapListQueryTypes>(latingDebounce, snbQueryString); */
  const mapBoundEvent = useCallback((map: kakao.maps.Map | null) => {
    if (map == null) return;
    const bounds = map.getBounds();
    const sw: LatLng = bounds.getSouthWest();
    const nw: LatLng = bounds.getNorthEast();
    setSwLatLng(sw);
    setNeLating(nw);
  }, []);
  useEffect(() => {
    const queryString = `latStart=${swLatLng?.getLat()}&latEnd=${neLatLng?.getLat()}
&lngStart=${swLatLng?.getLng()}&lngEnd=${neLatLng?.getLng()}`;
    setLatingQueryString(queryString);
  }, [neLatLng, swLatLng]);

  useImperativeHandle(ref, () => MapRef, [ref]);
  return (
    <Container>
      <MapArea>
        <Map
          center={{
            lat: location?.lat || 37.498040446838296,
            lng: location?.lng || 127.02774015894893,
          }}
          ref={MapRef}
          mapEvent={mapBoundEvent}
        >
          {itemResult.map((item) => (
            <Marker
              key={item[0].storeId}
              firstStoreName={item[0].name}
              ref={MarkerRef}
              position={{
                lat: item[0].latitude,
                lng: item[0].longitude,
              }}
              storeItems={item}
            />
          ))}
        </Map>
      </MapArea>
    </Container>
  );
});

export default MapContainer;
