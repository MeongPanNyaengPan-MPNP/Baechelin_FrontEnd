import React from 'react';
import { FormContainer, Inner } from '@organisms/ReviewForm/styles';
import ReviewFormTitle from '@organisms/ReviewFormTitle';
import ReviewForm from '../../components/organisms/ReviewForm';

function ReviewWrite({ storeId }: { storeId: string }) {
  return (
    <FormContainer>
      <Inner>
        <ReviewFormTitle storeId={storeId} />
        <ReviewForm storeName={storeId} />
      </Inner>
    </FormContainer>
  );
}

export default ReviewWrite;
