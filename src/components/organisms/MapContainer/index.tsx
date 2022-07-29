/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import UseGeolocation from '@hooks/UseGeolocation';
import locationAtom from '@recoil/locationAtom';
import UseDebounce from '@hooks/UseDebounce';
import { UseMapQuery } from '@hooks/UseQueryHooks';
import { StoreListQueryTypes } from '@interfaces/StoreResponseTypes';
import { SnbQueryString } from '@recoil/mainSnbAtom';

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
`;
const MapArea = styled.div`
  width: calc(100% - 348px);
  height: 100%;
`;
const ListArea = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 348px;
  height: 100vh;
  background: #fff;
`;
type LatingType = {
  La: number;
  Ma: number;
};

function MapContainer() {
  /* 사용자 위치 가져오기 */
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  const [neLatLng, setNeLating] = React.useState<LatingType | null>(null);
  const [swLatLng, setSwLatLng] = React.useState<LatingType | null>(null);
  // const [mapCenter, setMapCenter] = React.useState<LatingType | null>(null);
  // const [mapLevel, setMapLevel] = React.useState<number | null>(0);
  const [latingQueryString, setLatingQueryString] = React.useState<string>('');
  const latingDebounce = UseDebounce<string>(latingQueryString, 1000);
  const [markerSrc, setMarkerSrc] = React.useState({});
  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      setLocation(currentLocation);
    }
  }, []);
  const setMapInfo = useCallback((map: any) => {
    //  const level = map.getLevel();
    //  const center = map.getCenter();
    const bounds = map.getBounds();
    const sw = bounds.getSouthWest();
    const nw = bounds.getNorthEast();
    //   setMapLevel(level);
    //   setMapCenter(center);
    setSwLatLng(sw);
    setNeLating(nw);
  }, []);
  // 맵 셋팅
  useEffect(() => {
    const loca = location || {
      lat: 37.498040446838296,
      lng: 127.02774015894893,
    }; // 내 위치 없을 경우 강남역으로
    const options = { center: new window.kakao.maps.LatLng(loca.lat, loca.lng) };
    const container = document.getElementById('map');
    const markerPosition = new window.kakao.maps.LatLng(loca.lat, loca.lng);
    const initialMarker = {
      src: '/img/ui/ic_marker.png',
      size: new window.kakao.maps.Size(28, 40),
      option: new window.kakao.maps.Point(27, 69),
    };
    setMarkerSrc(initialMarker);
    const markerImage = new window.kakao.maps.MarkerImage(initialMarker.src, initialMarker.size, initialMarker.option);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    const map = new window.kakao.maps.Map(container, options);

    marker.setMap(map);
    setMapInfo(map);
    window.kakao.maps.event.addListener(map, 'bounds_changed', () => {
      setMapInfo(map);
    });
  }, []);

  // 위경도가 바뀔 때 마다 쿼리문
  useEffect(() => {
    const queryString = `latStart=${swLatLng?.Ma}&latEnd=${neLatLng?.Ma}
&lngStart=${swLatLng?.La}&lngEnd=${neLatLng?.La}`;
    setLatingQueryString(queryString);
  }, [neLatLng, swLatLng]);

  // 쿼리문에 디바운스 걸기
  // 1. 바뀐 쿼리를 delay때마다 전달해줌
  // 2. 이전 setTimeout은 취소되고 가장 마지막 query문을 반환함
  // 3. delay이후 마지막 쿼리문으로 fetch
  const { UseMapData } = UseMapQuery();
  const snbQueryString = useRecoilValue(SnbQueryString);
  const { data } = UseMapData<StoreListQueryTypes>(latingDebounce, snbQueryString);
  console.log(data);
  // 동적으로 바뀌는 마커 셋팅
  useEffect(() => {
    console.log(markerSrc);
    console.log('bounce');
  }, [latingDebounce]);
  return (
    <MapWrap>
      <MapArea id="map" />
      <ListArea>
        <p> ne :</p>
        <p> sw :</p>
      </ListArea>
    </MapWrap>
  );
}

export default MapContainer;
