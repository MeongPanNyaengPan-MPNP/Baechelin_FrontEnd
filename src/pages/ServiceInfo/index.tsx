import React from 'react';
import { Container } from '@templates/MainTemplate/styles';
import Thumbnail from '@atoms/Thumbnail';

function ServiceInfo() {
  return (
    <Container>
      <Thumbnail fit alt="서비스 소개페이지" src="/img/img_service_info.png" hover={false} />
    </Container>
  );
}

export default ServiceInfo;
