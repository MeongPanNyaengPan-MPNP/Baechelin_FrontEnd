/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MapWrapper from '@organisms/MapWrapper';
import { STORE_FILTERS } from '@constants/store';
import UseGeolocation from '@hooks/UseGeolocation';
import { useRecoilState } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import { useQueryClient } from 'react-query';
import { MAP } from '@constants/useQueryKey';

function SearchMap() {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  const queryClient = useQueryClient();
  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      // localstorage 초기 셋팅
      setLocation(currentLocation);
    }
  }, [currentLocation]);
  React.useEffect(
    () => () => {
      queryClient.refetchQueries(MAP.MAP_STORE);
    },
    [],
  );
  return <MapWrapper filters={STORE_FILTERS} />;
}

export default SearchMap;
