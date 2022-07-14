import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCategorySnb from '@organisms/StoreCategorySnb';

import * as S from './styles';

export interface MainProps {
  slideItems: ThumbNailProps[];
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
}

function MainTemplates({ slideItems, cateItems, facilityItems }: MainProps) {
  return (
    <S.Container>
      <MainVisualSlide slideItems={slideItems} />
      <StoreCategorySnb cateItems={cateItems} facilityItems={facilityItems} />
    </S.Container>
  );
}

export default MainTemplates;
