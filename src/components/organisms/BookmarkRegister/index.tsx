import React from 'react';
import { Popover } from '@mui/material';

import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import BookmarkRegisterName from '@molecules/BookmarkRegisterName';

import * as S from './styles';

interface BookmarkRegisterProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

function BookmarkRegister({ anchorEl, setAnchorEl }: BookmarkRegisterProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickFolderName = () => {
    alert('북마크 등록');
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
        <BookmarkRegisterName name="북마크폴더" onClick={onClickFolderName} />
        <BookmarkRegisterName name="북마크폴더" onClick={onClickFolderName} />
      </S.Container>
    </Popover>
  );
}

export default BookmarkRegister;
