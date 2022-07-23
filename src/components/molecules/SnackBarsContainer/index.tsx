// TODO : taost 팝업 연속클릭 오류 해결 -> 각 객체의 true,false 상태로 관리

import React from 'react';
import SnackBars from '@atoms/SnackBars';
import { useRecoilState } from 'recoil';
import snackBarAtom from '@recoil/snackBarAtom';
import * as S from './styles';

function SnackBarsContainer({ children }: any) {
  const [snackBarItems, setSnackBarItems] = useRecoilState(snackBarAtom);
  const [prevSnackBars, setPrevSnackBars] = React.useState(0);
  React.useEffect(() => {
    if (prevSnackBars < snackBarItems.length) {
      setTimeout(() => {
        setSnackBarItems((cur, ...rest) => rest);
      }, 3000);
    }
    setPrevSnackBars(snackBarItems.length);
  }, [snackBarItems, setSnackBarItems, prevSnackBars]);

  return (
    <>
      {children}

      {snackBarItems && snackBarItems.length > 0 && (
        <S.SnackBarContainer>
          <S.SnackBarArea>
            {snackBarItems.map((item) => (
              <SnackBars message={item} key={`${item}${Math.random() * 10}`} />
            ))}
          </S.SnackBarArea>
        </S.SnackBarContainer>
      )}
    </>
  );
}

export default SnackBarsContainer;
