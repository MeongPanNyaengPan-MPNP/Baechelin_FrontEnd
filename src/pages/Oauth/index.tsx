import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Oauth() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  return (
    <div />
  );
}

export default Oauth;
