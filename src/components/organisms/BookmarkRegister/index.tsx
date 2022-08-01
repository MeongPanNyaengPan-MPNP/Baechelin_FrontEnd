import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UseMutateFunction, useMutation, useQuery } from 'react-query';

import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import BookmarkRegisterName from '@molecules/BookmarkRegisterName';
import { createBookmarkFolder, getUserBookmarkFolders } from '@service/bookmarkApi';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';

import * as S from './styles';

interface FormValue {
  folderName: string;
}

interface BookmarkRegisterProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  storeIdProps?: number | undefined;
  fetchCreateBookmarkStore?:
    | UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>
    | undefined;
}

function BookmarkRegister({ anchorEl, setAnchorEl, storeIdProps, fetchCreateBookmarkStore }: BookmarkRegisterProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [createFolder, setCreateFolder] = useState(false);

  const { data: BookmarkData, refetch } = useQuery(['getBookmarkFolders'], () => getUserBookmarkFolders(), {
    staleTime: 5000,
    cacheTime: Infinity,
    // enabled: !create,
  });

  const { mutate: fetchCreateBookmarkFolder } = useMutation(
    (folderNameInput: string) => createBookmarkFolder({ folderName: folderNameInput }),
    {
      onSuccess: () => {
        refetch();
        console.log('folder created');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const { register, handleSubmit, setValue } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    setValue('folderName', '');
    fetchCreateBookmarkFolder(data.folderName);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickFolderName = (folderId: number, storeId: number) => {
    if (fetchCreateBookmarkStore) {
      fetchCreateBookmarkStore({
        storeId,
        folderId,
      });
      setAnchorEl(null);
    }
  };

  const onClickCreateFolder = () => {
    setCreateFolder((prev) => !prev);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.Inner>
            <S.ContentTitle>
              <Span fontSize="1.2rem" fontWeight="700">
                내 폴더
              </Span>
              <Icon iconName="create_new_folder" size="1.5rem" onClick={onClickCreateFolder} cursor="pointer" />
            </S.ContentTitle>
            {createFolder && (
              <S.InputContainer>
                <Icon iconName="folder" size="1.7rem" />
                <S.Input fontSize="1.2rem" {...register('folderName')} />
              </S.InputContainer>
            )}
            {BookmarkData?.map((v) => (
              <BookmarkRegisterName
                margin="0.6rem 0"
                key={v.folderName}
                name={v.folderName}
                onClick={() => onClickFolderName(v.id, storeIdProps || 0)}
              />
            ))}
          </S.Inner>
        </S.Container>
        {createFolder && <S.FolderConfirmButton type="submit">확인</S.FolderConfirmButton>}
      </form>
    </Popover>
  );
}

export default BookmarkRegister;
