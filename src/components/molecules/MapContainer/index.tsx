import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Map from '@atoms/Map';
import Marker from '@atoms/MapMarker';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { useSetRecoilState } from 'recoil';
import { LatingQueryString } from '@recoil/mapAtom';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';
import LatLng = kakao.maps.LatLng;

type MapContainerProps = {
  location: UserLoctaionType;
  storeItems: StoreMapResponseTypes[][] | undefined;
};

const MapContainer = React.forwardRef((props: MapContainerProps, ref) => {
  /* 사용자 위치 가져오기 */
  const { location, storeItems } = props;
  const MapRef = useRef<kakao.maps.Map>(null);
  const MarkerRef = useRef<kakao.maps.Marker>();

  const setLatingQueryString = useSetRecoilState(LatingQueryString);
  const [neLatLng, setNeLating] = useState<LatLng | null>(null);
  const [swLatLng, setSwLatLng] = useState<LatLng | null>(null);

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
  }, [neLatLng, setLatingQueryString, swLatLng]);

  useImperativeHandle(ref, () => MapRef, []);
  return (
    <S.Container>
      <S.MapArea>
        <Map
          center={{
            lat: location?.lat || 37.498040446838296,
            lng: location?.lng || 127.02774015894893,
          }}
          ref={MapRef}
          mapEvent={mapBoundEvent}
        >
          {storeItems?.map((item) => (
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
      </S.MapArea>
    </S.Container>
  );
});

export default MapContainer;
