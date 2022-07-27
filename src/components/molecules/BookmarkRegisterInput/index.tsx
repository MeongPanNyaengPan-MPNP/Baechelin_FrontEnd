import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Icon from '@atoms/Icon';

import * as S from './styles';

interface BookmarkRegisterInputProps {
  iconName?: string;
  fontSize?: string;
  iconSize?: string;
  height?: string;
  justify?: string;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  onClick?: () => void;
}

interface FormValue {
  folderName: string;
}

function BookmarkRegisterInput({
  iconName = 'folder',
  fontSize = '1rem',
  iconSize = '1.7rem',
  height = '2.5rem',
  justify,
  setFolderName,
  setStatus,
  onClick,
}: BookmarkRegisterInputProps) {
  const { register, handleSubmit } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (data?.folderName) {
      setFolderName(data.folderName);
    }
    setStatus(null);
    console.log(data);
  };

  return (
    <S.Container height={height} justify={justify} onClick={onClick}>
      <Icon iconName={iconName} size={iconSize} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input fontSize={fontSize} {...register('folderName')} />
        <S.Button type="submit">확인</S.Button>
      </form>
    </S.Container>
  );
}

export default BookmarkRegisterInput;
