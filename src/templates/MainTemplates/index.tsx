import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import * as S from './styles';

function MainTemplates({ slideItems }: { slideItems: ThumbNailProps[] }) {
  return (
    <S.Container>
      <MainVisualSlide slideItems={slideItems} />
    </S.Container>
  );
}

export default MainTemplates;
