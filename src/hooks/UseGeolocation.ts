import { useEffect, useState } from 'react';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { LOCAL_STORAGE_KEY } from '@constants/index';
import { useSetRecoilState } from 'recoil';
import locationAtom from '@recoil/locationAtom';

const localStorageKey = LOCAL_STORAGE_KEY.USER_LOCATION;

// TODO : alert창 토스트팝업으로 변경

export const ParseUserLocation = () => {
  const userLocation = localStorage.getItem(localStorageKey);
  if (userLocation) {
    return JSON.parse(userLocation);
  }
  return null;
};
export const SavePositionAtLocalStorage = (position: UserLoctaionType) => {
  if (!position) return;
  localStorage.setItem(localStorageKey, JSON.stringify(position));
};
export const UseGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<UserLoctaionType | null>(null);
  const onSuccess = (position: GeolocationPosition) =>
    setCurrentLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  const onError = (e: any) => {
    console.log('현재 위치를 가져올 수 없습니다.', e);
    console.log('error', e.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('geolocation을 지원하지 않는 기기입니다');
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: 0,
    });
  }, []);
  const setLocationAtom = useSetRecoilState(locationAtom);
  setLocationAtom(currentLocation);
  return {
    currentLocation,
    setCurrentLocation,
  };
};

export default UseGeolocation;
