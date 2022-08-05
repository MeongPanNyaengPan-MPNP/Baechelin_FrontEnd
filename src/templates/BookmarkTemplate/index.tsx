import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import Buttons from '@atoms/Buttons';
import Span from '@atoms/Span';
import BookmarkSelect from '@molecules/BookmarkSelect';
import BookmarkFolderCard from '@organisms/BookmarkFolderCard';
import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';
// import UseLoginHooks from '@hooks/UseLogin';
import {
  createBookmarkFolder,
  deleteBookmarkFolder,
  getUserBookmarkFolders,
  updateBookmarkFolderName,
} from '@service/bookmarkApi';

import { UpdateBookmarkFolderNameParam, UpdateBookmarkFolderNameQuery } from '@interfaces/BookmarkTypes';

import NodataMessage from '@molecules/NodataMessage';
import * as S from './styles';

// interface BookmarkTemplateProps {

// }

function BookmarkTemplate() {
  const [create, setCreate] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number>('all');
  // const { tokenExist } = UseLoginHooks();

  const { data: BookmarkData, refetch } = useQuery(['getBookmarkFolders'], () => getUserBookmarkFolders(), {
    staleTime: 5000,
    cacheTime: Infinity,
    enabled: !create,
  });

  const { mutate: fetchCreateBookmarkFolder } = useMutation(
    (folderNameInput: string) => createBookmarkFolder({ folderName: folderNameInput }),
    {
      onSuccess: () => {
        setCreate(false);
        refetch();
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const { mutate: fetchDeleteBookmarkFolder } = useMutation(
    (folderIdProps: number) => deleteBookmarkFolder(folderIdProps),
    {
      onSuccess: () => {
        refetch();
        console.log('folder deleted');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const { mutate: fetchUpdateBookmarkFolder } = useMutation<
    unknown,
    unknown,
    UpdateBookmarkFolderNameParam & UpdateBookmarkFolderNameQuery
  >(({ folderId, newFolderName }) => updateBookmarkFolderName({ folderId }, { newFolderName }), {
    onSuccess: () => {
      refetch();
      console.log('folder updated');
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onClickCreateButton = () => {
    setCreate((prev) => !prev);
  };

  const onClickCreatedCard = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <Span fontSize="2.4rem" fontWeight="700">
          내가 저장한 가게
        </Span>
        <BookmarkSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          BookmarkData={BookmarkData}
        />
      </S.TitleWrapper>
      <S.BookmarkListWrapper>
        {selectedOption === 'all' && BookmarkData && BookmarkData?.length > 0
          ? BookmarkData?.map((v: any, i) => (
              <BookmarkFolderCard
                name={v.folderName}
                folderId={v.id}
                key={v.id}
                fetchDeleteBookmarkFolder={fetchDeleteBookmarkFolder}
                fetchUpdateBookmarkFolder={fetchUpdateBookmarkFolder}
                thumbNail={v.thumbNail}
                index={i}
                onClick={onClickCreatedCard}
              />
            ))
          : BookmarkData?.length === 0 && (
              <NodataMessage
                message={['북마크 폴더가 없습니다.', '배슐랭에서 내 주변의 배리어프리 가게를 담아보세요!']}
              />
            )}

        {create && <BookmarkFolderCard type="create" fetchCreateBookmarkFolder={fetchCreateBookmarkFolder} />}
      </S.BookmarkListWrapper>
      {selectedOption === 'all' && (
        <S.CreateBookmarkButtonWrapper onClick={onClickCreateButton}>
          <Buttons round="3rem" display="flex" style={{ width: '18.5rem' }}>
            {create ? (
              <Span fontSize="2.4rem">만들기 취소</Span>
            ) : (
              <BookmarkRegisterFolderName
                iconName="create_new_folder"
                name="새 폴더"
                height="null"
                iconSize="2.8rem"
                fontSize="2.4rem"
                justify="center"
              />
            )}
          </Buttons>
        </S.CreateBookmarkButtonWrapper>
      )}
    </S.Container>
  );
}

export default BookmarkTemplate;
