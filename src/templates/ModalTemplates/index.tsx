import React, { ReactNode, useCallback } from 'react';
import Icon from '@atoms/Icon';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function ModalTemplates({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const historyBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
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
