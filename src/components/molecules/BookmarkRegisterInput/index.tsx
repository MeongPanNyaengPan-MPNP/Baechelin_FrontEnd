import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UseMutateFunction } from 'react-query';

import Icon from '@atoms/Icon';
import {
  CreateBookmarkFolderResponse,
  UpdateBookmarkFolderNameParam,
  UpdateBookmarkFolderNameQuery,
} from '@interfaces/BookmarkTypes';

import * as S from './styles';

interface BookmarkRegisterInputProps {
  type?: string;
  folderName?: string;
  folderId?: number;
  iconName?: string;
  fontSize?: string;
  iconSize?: string;
  height?: string;
  justify?: string;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  fetchCreateBookmarkFolder?: UseMutateFunction<CreateBookmarkFolderResponse, unknown, string, unknown>;
  fetchUpdateBookmarkFolder?: UseMutateFunction<
    unknown,
    unknown,
    UpdateBookmarkFolderNameParam & UpdateBookmarkFolderNameQuery,
    unknown
  >;

  onClick?: () => void;
}

interface FormValue {
  folderName: string;
}

function BookmarkRegisterInput({
  type,
  folderName,
  folderId,
  iconName = 'folder',
  fontSize = '1rem',
  iconSize = '1.7rem',
  height = '2.5rem',
  justify,
  setFolderName,
  setStatus,
  fetchCreateBookmarkFolder,
  fetchUpdateBookmarkFolder,
  onClick,
}: BookmarkRegisterInputProps) {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (data?.folderName && fetchCreateBookmarkFolder && type === 'create') {
      fetchCreateBookmarkFolder(data.folderName);
      setFolderName(data.folderName);
    }
    if (folderId && fetchUpdateBookmarkFolder && type === 'update') {
      fetchUpdateBookmarkFolder({ folderId, newFolderName: data.folderName });
    }
    setStatus(null);
  };

  console.log('folderName', folderName);

  return (
    <S.Container height={height} justify={justify} onClick={onClick}>
      <Icon iconName={iconName} size={iconSize} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input fontSize={fontSize} {...register('folderName')} defaultValue={folderName} />
        <S.Button type="submit">확인</S.Button>
      </form>
    </S.Container>
  );
}

export default BookmarkRegisterInput;
