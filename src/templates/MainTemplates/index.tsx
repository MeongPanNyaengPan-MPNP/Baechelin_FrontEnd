import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCategorySnb from '@organisms/StoreCategorySnb';

import CardGroupSlide from '@organisms/CardGroupSlide';
import * as S from './styles';

export interface MainTemplateProps<TNearStore> {
  slideItems: ThumbNailProps[];
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  NearStoreItems: TNearStore[];
}

function MainTemplates<TNearStore>({
  slideItems,
  cateItems,
  facilityItems,
  NearStoreItems,
}: MainTemplateProps<TNearStore>) {
  return (
    <S.Container>
      <MainVisualSlide slideItems={slideItems} />
      <StoreCategorySnb cateItems={cateItems} facilityItems={facilityItems} />

      <CardGroupSlide<TNearStore> // 가까운순
        cardItems={NearStoreItems}
        paginationId="bestBookMark"
        viewLength={3}
        spaceBetween={40}
      />
    </S.Container>
  );
}

export default MainTemplates;
