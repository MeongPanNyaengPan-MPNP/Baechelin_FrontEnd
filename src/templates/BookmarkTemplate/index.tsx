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
import StoreCard from '@molecules/StoreCard';

import { UpdateBookmarkFolderNameParam, UpdateBookmarkFolderNameQuery } from '@interfaces/BookmarkTypes';

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
        console.log('folder created');
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

  console.log('selectedOption', selectedOption);
  console.log('BookmarkData', BookmarkData);

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
        {selectedOption === 'all'
          ? BookmarkData?.map((v: any, i) => (
              <BookmarkFolderCard
                name={v.folderName}
                folderId={v.id}
                list={v.bookmarkList}
                key={v.id}
                fetchDeleteBookmarkFolder={fetchDeleteBookmarkFolder}
                fetchUpdateBookmarkFolder={fetchUpdateBookmarkFolder}
                index={i}
                onClick={onClickCreatedCard}
              />
            ))
          : BookmarkData &&
            BookmarkData[Number(selectedOption)]?.bookmarkList.map((v) => {
              const imageList: string[] = [];
              if (v.storeImageList) {
                imageList.push(v.storeImageList);
              }
              return (
                <S.StoreCardsWrapper>
                  <StoreCard {...v} storeImgList={imageList} size="M" />
                </S.StoreCardsWrapper>
              );
            })}
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
                iconSize="3rem"
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
