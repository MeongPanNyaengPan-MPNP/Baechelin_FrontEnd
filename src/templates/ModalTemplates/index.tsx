import React, { ReactNode, useCallback } from 'react';
import Icon from '@atoms/Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

function ModalTemplates({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const historyBack = useCallback(() => {
    navigate(-1);
    console.log('navigate됨', pathname);
  }, [navigate, pathname]);
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.CloseBtnArea onClick={historyBack}>
          <Icon iconName="close_icon" size="2.8rem" />
        </S.CloseBtnArea>
        {children}
      </S.Modal>
    </S.ModalContainer>
  );
}

export default ModalTemplates;
