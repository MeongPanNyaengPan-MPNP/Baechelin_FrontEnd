/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MapWrapper from '@organisms/MapWrapper';
import { STORE_FILTERS } from '@constants/store';

function SearchMap() {
  return <MapWrapper filters={STORE_FILTERS} />;
}

export default SearchMap;
