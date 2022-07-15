export function getPosition() {
  navigator.geolocation.watchPosition(
    (res) => {
      const userLoca = {
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      };
      localStorage.setItem('user-location', JSON.stringify(userLoca));
    },
    (error) => {
      alert(error.message);
    },
    {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: Infinity,
    },
  );
}

export const parseUserLocation = () => {
  const key = process.env.REACT_APP_USER_LOCATION_KEY;
  if (key) {
    const userLocation = localStorage.getItem(key);
    if (userLocation) {
      return JSON.parse(userLocation);
    }
  }
  return null;
};

export default getPosition;
