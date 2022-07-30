import React from 'react';
import StoreCategorySnb, { FiltersType } from '@organisms/StoreCategorySnb';
import StoreCardList from '@organisms/StoreCardList';
import NoDataMessage from '@molecules/NodataMessage';
import * as S from './styles';

export interface StoreListTemplateProps {
  filters: FiltersType;
  topic?: string | undefined;
  title?: string;
  keyword?: string;
}

function StoreListTemplate({ filters, topic, title, keyword }: StoreListTemplateProps) {
  return (
    <S.Wrapper>
      <section>
        <StoreCategorySnb filters={filters} />
      </section>
      <S.Container>
        <S.CardGroup>
          <StoreCardList topic={topic} keyword={keyword} title={title} />
          {!topic && !keyword && <NoDataMessage message={['잘못된 접근입니다']} />}
        </S.CardGroup>
      </S.Container>
    </S.Wrapper>
  );
}

export default StoreListTemplate;
