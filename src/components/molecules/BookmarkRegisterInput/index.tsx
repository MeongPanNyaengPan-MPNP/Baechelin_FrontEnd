import React, { SetStateAction, useCallback } from 'react';
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
  status: string;
  setFolderName?: React.Dispatch<React.SetStateAction<string>> | null;
  setStatus?: React.Dispatch<React.SetStateAction<string | null>>;
  fetchCreateBookmarkFolder?: UseMutateFunction<CreateBookmarkFolderResponse, unknown, string, unknown>;
  fetchUpdateBookmarkFolder?: UseMutateFunction<
    unknown,
    unknown,
    UpdateBookmarkFolderNameParam & UpdateBookmarkFolderNameQuery,
    unknown
  >;
  setFormState: React.Dispatch<SetStateAction<boolean>>;

  onClick?: () => void;
}

interface FormValue {
  folderName: string;
}

function BookmarkRegisterInput({
  type = '',
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
  status,
  setFormState,
}: BookmarkRegisterInputProps) {
  const { register, handleSubmit, getValues } = useForm<FormValue>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (data?.folderName && fetchCreateBookmarkFolder && type === 'create') {
      fetchCreateBookmarkFolder(data.folderName);
    }
    if (setFolderName && setStatus) {
      setFolderName(data.folderName);
      setStatus(null);
    }
    if (folderId && fetchUpdateBookmarkFolder && type === 'update') {
      fetchUpdateBookmarkFolder({
        folderId,
        newFolderName: data.folderName,
      });
    }
  };
  const checkValue = useCallback(() => {
    if (status === 'create' || status === 'update') {
      const cur = getValues();
      setFormState(!cur.folderName);
    }
  }, [getValues, setFormState, status]);
  React.useEffect(() => {
    if (status === 'create') {
      setFormState(true);
    }
  }, [setFormState, status]);
  return (
    <S.Container height={height} justify={justify} onClick={onClick}>
      <Icon iconName={iconName} size={iconSize} />
      <form onSubmit={handleSubmit(onSubmit)} onChange={checkValue}>
        <S.Input
          fontSize={fontSize}
          inputType={type}
          {...register('folderName', {
            required: true,
            min: 1,
          })}
          defaultValue={folderName}
        />
        {type !== 'register' && <S.Button type="submit">확인</S.Button>}
      </form>
    </S.Container>
  );
}

export default BookmarkRegisterInput;
