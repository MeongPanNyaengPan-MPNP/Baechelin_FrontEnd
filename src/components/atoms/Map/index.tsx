/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
// useLayoutEffect,useImperativeHandle
type ClickableListProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  center: {
    lat: number;
    lng: number;
  };
  mapEvent?: any;
};

export const KakaoMapContext = React.createContext<kakao.maps.Map>(undefined as unknown as kakao.maps.Map);

const MapItem = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = React.forwardRef((props: ClickableListProps, ref) => {
  const { id, center, mapEvent, className, style, children } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<kakao.maps.Map>();
  useEffect(() => {
    const MapEl = mapRef.current;
    if (!MapEl) return;
    const initalMapCenter = new kakao.maps.LatLng(center.lat, center.lng);
    const kakaoMap = new kakao.maps.Map(MapEl, { center: initalMapCenter });
    kakaoMap.setMaxLevel(5);
    setMap(kakaoMap);
    if (mapEvent) {
      kakao.maps.event.addListener(kakaoMap, 'tilesloaded', () => {
        mapEvent(kakaoMap);
      });
    }
  }, []);
  useImperativeHandle(ref, () => map, [map]);
  return (
    <>
      <MapItem id={id} style={style} className={className} ref={mapRef} />
      {map && <KakaoMapContext.Provider value={map}>{children}</KakaoMapContext.Provider>}
    </>
  );
});

export default Map;
