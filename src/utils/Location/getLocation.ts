import { UserLoctaionType } from '@interfaces/LocationTypes';

export function getPosition(): Promise<UserLoctaionType> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (res) => ({
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      }),
      reject,
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      },
    );
  });
}

export default getPosition;
