import React from 'react';
import { Popover } from '@mui/material';

import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';

import * as S from './styles';

interface BookmarkUpdateOverlayProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  // onClickUpdate:()=>void;
  // onClickDelete:()=>void;
  status: string | null;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
}

function BookmarkUpdateOverlay({ anchorEl, setAnchorEl, status, setStatus }: BookmarkUpdateOverlayProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickUpdate = () => {
    console.log(status);
    setStatus('update');
    handleClose();
  };

  const onClickDelete = () => {
    alert('삭제');
    handleClose();
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
        <BookmarkRegisterFolderName name="수정하기" iconName="create" onClick={onClickUpdate} />
        <BookmarkRegisterFolderName name="삭제하기" iconName="delete" onClick={onClickDelete} />
      </S.Container>
    </Popover>
  );
}

export default BookmarkUpdateOverlay;
