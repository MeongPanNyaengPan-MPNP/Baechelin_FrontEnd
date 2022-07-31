import React from 'react';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom, { myAddressAtom } from '@recoil/locationAtom';
import { useQuery } from 'react-query';
import { MAP } from '@constants/index';
import Api from '@service/httpClient';

import * as S from './styles';

function MyLocation() {
  const userLocation = useRecoilValue(locationAtom);
  const [myLocation, setMylocation] = useRecoilState(myAddressAtom);
  useQuery<{ data: { address: string } }>(
    [MAP.MY_LOCATION, userLocation],
    () => Api.get(`/convert/geo?lat=${userLocation?.lat}&lng=${userLocation?.lng}`),
    {
      onSuccess: (data) => {
        setMylocation(data?.data?.address);
      },
    },
  );
  return (
    <S.TextArea>
      <Icon iconName="location_on" size="1.6rem" margin="0 0.5rem 0 0" />
      <Span fontSize="1.2rem">
        <>내 위치 : {myLocation || `없음`}</>
      </Span>
    </S.TextArea>
  );
}

export default MyLocation;
