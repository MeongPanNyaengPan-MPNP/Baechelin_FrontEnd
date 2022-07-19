import React from 'react';
import Buttons, { ButtonsProps } from '@atoms/Buttons';
import UseGeolocation from '@hooks/UseGeolocation';

type PositionButton = { message?: string } & ButtonsProps;

function GetPositionButton({ message, ...props }: PositionButton) {
  const { bgColor = '#3B3B3B', color = '#fff', align = 'center', fontSize = '1.4rem' } = props;

  return (
    <Buttons {...props} bgColor={bgColor} color={color} align={align} fontSize={fontSize} onClick={UseGeolocation}>
      위치정보 동의하기
    </Buttons>
  );
}

export default GetPositionButton;
