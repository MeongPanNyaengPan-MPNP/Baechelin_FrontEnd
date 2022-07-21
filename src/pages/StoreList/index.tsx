import React from 'react';
import StoreListTemplate from '@templates/StoreListTemplate';
import { STORE_FILTERS } from '@constants/storeFilters';
import { useParams } from 'react-router-dom';

function Search() {
  const params = useParams();
  return (
    <StoreListTemplate
      topic={params?.topic}
      facilityItems={STORE_FILTERS.FACILITY}
      cateItems={STORE_FILTERS.CATEGORY}
    />
  );
}

export default Search;
