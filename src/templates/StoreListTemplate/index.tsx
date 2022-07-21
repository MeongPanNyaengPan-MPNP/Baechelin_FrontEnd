import React from 'react';
import StoreCategorySnb from '@organisms/StoreCategorySnb';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCardList from '@organisms/StoreCardList';
import NoDataMessage from '@molecules/NodataMessage';
import * as S from './styles';

export interface StoreListTemplateProps {
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  topic?: string | undefined;
}

function StoreListTemplate({ topic, cateItems, facilityItems }: StoreListTemplateProps) {
  return (
    <S.Wrapper>
      <section>
        <StoreCategorySnb cateItems={cateItems} facilityItems={facilityItems} />
      </section>
      <S.Container>
        <S.CardGroup>
          {topic ? <StoreCardList topic={topic} /> : <NoDataMessage message={['잘못된 접근입니다']} />}
        </S.CardGroup>
      </S.Container>
    </S.Wrapper>
  );
}

export default StoreListTemplate;
