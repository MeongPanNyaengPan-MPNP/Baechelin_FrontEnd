import React from 'react';
import TagItem from '@atoms/Tag';
import { TagListType } from '@interfaces/ReviewTypes';
import * as S from './styles';

function TagList({ tagListTitle, tags }: { tagListTitle: string; tags: TagListType[] }) {
  return (
    <>
      {tagListTitle && (
        <S.TagTitle fontSize="1.6rem" fontWeight="bold">
          {tagListTitle}
        </S.TagTitle>
      )}
      <S.TagList>
        {tags.map((item) => (
          <TagItem key={item.id} tagName={item.tag} />
        ))}
      </S.TagList>
    </>
  );
}

export default TagList;
