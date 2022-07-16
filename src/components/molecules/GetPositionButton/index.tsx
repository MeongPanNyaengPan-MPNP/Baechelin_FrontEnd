import React, { useCallback } from 'react';
import Buttons, { ButtonsProps } from '@atoms/Buttons';
import { getPosition, parseUserLocation } from '@utils/Location/getLocation';
import { useSetRecoilState } from 'recoil';
import locationAtom from '@recoil/locationAtom';

type PositionButton = { message?: string } & ButtonsProps;

function GetPositionButton({
                             message,
                             ...props
                           }: PositionButton) {
  const {
    bgColor = '#3B3B3B',
    color = '#fff',
    align = 'center',
    fontSize = '1.4rem'
  } = props;

  const setUserLocationState = useSetRecoilState(locationAtom);

  useCallback(() => {
    getPosition();
    const userLocation = parseUserLocation();
    setUserLocationState(userLocation);
  }, [setUserLocationState]);

  return (
    <Buttons {...props} bgColor={bgColor} color={color} align={align} fontSize={fontSize} onClick={getPosition}>
      위치정보 동의하기
    </Buttons>
  );
}

export default GetPositionButton;
