import React from 'react';
import { Popover } from '@mui/material';
import { UseMutateFunction, useQuery } from 'react-query';

import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import BookmarkRegisterName from '@molecules/BookmarkRegisterName';
import { getUserBookmarkFolders } from '@service/bookmarkApi';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';

import * as S from './styles';

interface BookmarkRegisterProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  storeIdProps: number;
  fetchCreateBookmarkStore: UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>;
}

function BookmarkRegister({ anchorEl, setAnchorEl, storeIdProps, fetchCreateBookmarkStore }: BookmarkRegisterProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { data: BookmarkData } = useQuery(['getBookmarkFolders'], () => getUserBookmarkFolders(), {
    staleTime: 5000,
    cacheTime: Infinity,
    // enabled: !create,
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickFolderName = (folderId: number, storeId: number) => {
    fetchCreateBookmarkStore({ storeId, folderId });
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <S.Container>
        <S.ContentTitle>
          <Span fontSize="1rem" fontWeight="700">
            내 폴더
          </Span>
          <Icon iconName="create_new_folder" size="1.5rem" />
        </S.ContentTitle>
        {BookmarkData?.map((v) => (
          <BookmarkRegisterName name={v.folderName} onClick={() => onClickFolderName(storeIdProps, v.id)} />
        ))}
      </S.Container>
    </Popover>
  );
}

export default BookmarkRegister;
