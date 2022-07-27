import React from 'react';
import FormTemplates from '@templates/FormTemplates';
import { useParams } from 'react-router-dom';

function ReviewWrite() {
  const { storeId = '' } = useParams();
  return <FormTemplates storeId={storeId} />;
}

export default ReviewWrite;
