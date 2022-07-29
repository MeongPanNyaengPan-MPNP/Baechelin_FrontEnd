import React from 'react';
import Buttons, { ButtonsProps } from '@atoms/Buttons';

type PositionButton = { message?: string } & ButtonsProps;

function GetPositionButton({ message, ...props }: PositionButton) {
  const { bgColor = '#3B3B3B', color = '#fff', align = 'center', fontSize = '1.4rem' } = props;

  const callBackGeoLocation = React.useCallback(() => {
    window.location.reload();
  }, []);
  return (
    <Buttons {...props} bgColor={bgColor} color={color} align={align} fontSize={fontSize} onClick={callBackGeoLocation}>
      위치정보 동의하기
    </Buttons>
  );
}

export default GetPositionButton;
