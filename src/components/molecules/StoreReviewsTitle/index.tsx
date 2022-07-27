import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Buttons from '@atoms/Buttons';
import Span from '@atoms/Span';

import * as S from './styles';

function StoreReviewsTitle() {
  const navigate = useNavigate();
  const location = useLocation();

  const { storeName } = useParams();
  const onClickReviewButton = () => {
    navigate(`/review/write/${storeName}`, { state: { LocationBeforeRoute: location } });
  };
  return (
    <S.Container>
      <Span fontSize="2.4rem" fontWeight="700">
        방문 후기
      </Span>
      <div>
        <Buttons
          round="30px"
          fontSize="16px"
          onClick={onClickReviewButton}
          style={{
            width: '12rem',
            height: '3.9rem',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            boxShadow: ' 0px 2px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ED6F2A',
            color: 'white',
            fontWeight: '700',
          }}
        >
          후기 남기기
        </Buttons>
      </div>
    </S.Container>
  );
}

export default StoreReviewsTitle;
