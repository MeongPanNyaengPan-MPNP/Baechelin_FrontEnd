import React from 'react';
import NoDataMessage from '@molecules/NodataMessage';
import { Container } from '@templates/MainTemplate/styles';
import styled from 'styled-components';

const Inner = styled.div`
  padding: 50px 0;
`;

function NotFound() {
  return (
    <Container>
      <Inner>
        <NoDataMessage message={['잘못된 페이지 입니다.', '올바른 주소를 입력해주세요.']} />
      </Inner>
    </Container>
  );
}

export default NotFound;
