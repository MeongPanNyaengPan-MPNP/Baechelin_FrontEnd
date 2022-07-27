import React, { useState } from 'react';

import Buttons from '@atoms/Buttons';
import Span from '@atoms/Span';
import BookmarkSelect from '@molecules/BookmarkSelect';
import BookmarkFolderCard from '@organisms/BookmarkFolderCard';
import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';

import * as S from './styles';

// interface BookmarkTemplateProps {

// }

function BookmarkTemplate() {
  const [create, setCreate] = useState(false);

  const onClickCreateButton = () => {
    setCreate((prev) => !prev);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <Span fontSize="2.4rem" fontWeight="700">
          내가 저장한 가게
        </Span>
        <BookmarkSelect />
      </S.TitleWrapper>
      <S.BookmarkListWrapper>
        <BookmarkFolderCard />
        <BookmarkFolderCard />
        <BookmarkFolderCard />
        <BookmarkFolderCard />
        <BookmarkFolderCard />
        {create && <BookmarkFolderCard type="create" />}
      </S.BookmarkListWrapper>
      <S.CreateBookmarkButtonWrapper onClick={onClickCreateButton}>
        <Buttons round="3rem" display="flex" style={{ width: '18.5rem' }}>
          <BookmarkRegisterFolderName
            iconName="create_new_folder"
            name="새 폴더"
            height="null"
            iconSize="3rem"
            fontSize="24px"
            justify="center"
          />
        </Buttons>
      </S.CreateBookmarkButtonWrapper>
    </S.Container>
  );
}

export default BookmarkTemplate;
