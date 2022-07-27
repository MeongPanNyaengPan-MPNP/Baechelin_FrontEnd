import React from 'react';
import TagItem from '@atoms/Tag';
import { TagListType } from '@interfaces/ReviewTypes';
import Span from '@atoms/Span';
import * as S from './styles';

function TagList({ tagListTitle, tags }: { tagListTitle: string; tags: TagListType[] }) {
  return (
    <S.TagContainer>
      {tagListTitle && (
        <S.TagTitle>
          <Span fontSize="1.6rem" fontWeight="bold">
            {tagListTitle}
          </Span>
        </S.TagTitle>
      )}
      <S.TagList>
        {tags.map((item) => (
          <TagItem key={item.id} tagName={item.tag} />
        ))}
      </S.TagList>
    </S.TagContainer>
  );
}

export default TagList;
