import React from 'react';
import TagItem from '@atoms/Tag';
import * as S from './styles';

export type TagListProps = {
  tagListTitle?: string;
  tags: string[];
};

function TagList({ tagListTitle, tags }: TagListProps) {
  return (
    <>
      {tagListTitle && (
        <S.TagTitle fontSize="1.6rem" fontWeight="bold">
          {tagListTitle}
        </S.TagTitle>
      )}
      <S.TagList>
        {tags.map((item) => (
          <TagItem key={item} tagName={item} />
        ))}
      </S.TagList>
    </>
  );
}

export default TagList;
