import React from 'react';
import { FormContainer, Inner } from '@organisms/ReviewForm/styles';
import StoreInfo from '@organisms/StoreInfo';
import Span from '@atoms/Span';
import ReviewForm from '../../components/organisms/ReviewForm';

function ReviewWrite({ storeId }: { storeId: string }) {
  return (
    <FormContainer>
      <Inner>
        <h3>
          <Span fontSize="2.4rem" fontWeight="bold">
            후기 남기기
          </Span>
        </h3>
        <StoreInfo storeName={storeId} showIcons={false} type="horizontal" size="regular" />
        <ReviewForm storeName={storeId} />
      </Inner>
    </FormContainer>
  );
}

export default ReviewWrite;
