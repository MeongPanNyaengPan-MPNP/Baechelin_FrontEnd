import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import Buttons from '@atoms/Buttons';
import Span from '@atoms/Span';
import BookmarkSelect from '@molecules/BookmarkSelect';
import BookmarkFolderCard from '@organisms/BookmarkFolderCard';
import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';
// import UseLoginHooks from '@hooks/UseLogin';
import { createBookmarkFolder, getUserBookmarkFolders } from '@service/bookmarkApi';

import * as S from './styles';

// interface BookmarkTemplateProps {

// }

function BookmarkTemplate() {
  const [create, setCreate] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('all');
  // const { tokenExist } = UseLoginHooks();

  const { data: BookmarkData }: any = useQuery(['getShopDetail'], () => getUserBookmarkFolders(), {
    // eslint-disable-next-line object-curly-newline
    staleTime: 5000,
    cacheTime: Infinity,
  });

  const { mutate: fetchCreateBookmarkFolder } = useMutation(
    (folderName: string) => createBookmarkFolder({ folderName }),
    {
      onSuccess: (msg) => {
        console.log(msg);
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  console.log('selectedOption', selectedOption);
  console.log('BookmarkData', BookmarkData);

  const onClickCreateButton = () => {
    setCreate((prev) => !prev);

    // fetchCreateBookmarkFolder() 폴더명 인풋 state 구현필요
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <Span fontSize="2.4rem" fontWeight="700">
          내가 저장한 가게
        </Span>
        <BookmarkSelect setSelectedOption={setSelectedOption} />
      </S.TitleWrapper>
      <S.BookmarkListWrapper>
        {selectedOption === 'all' &&
          BookmarkData?.map((v: any) => <BookmarkFolderCard name={v.folderName} list={v.bookmarkList} key={v.id} />)}
        {create && <BookmarkFolderCard type="create" />}
      </S.BookmarkListWrapper>
      {selectedOption === 'all' && (
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
      )}
    </S.Container>
  );
}

export default BookmarkTemplate;
