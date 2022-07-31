import React from 'react';
import { Popover } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { UseMutateFunction } from 'react-query';

import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';
import modalAtom, { muiAnchorEl } from '@recoil/modalAtom';

import * as S from './styles';

interface BookmarkUpdateOverlayProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;

  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
  folderId?: number;
  fetchDeleteBookmarkFolder: UseMutateFunction<unknown, unknown, number, unknown> | undefined;
}

function BookmarkUpdateOverlay({
  anchorEl,
  setAnchorEl,
  setStatus,
  folderId,
  fetchDeleteBookmarkFolder,
}: BookmarkUpdateOverlayProps) {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const setAnchorElDelete = useSetRecoilState(muiAnchorEl);
  const setModalContent = useSetRecoilState(modalAtom);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickDelete = () => {
    setAnchorElDelete(null);
    setModalContent({
      messages: ['폴더에 저장된 가게가 모두 지워집니다. 삭제하시겠습니까?'],
      submitButton: {
        onClick: () => {
          if (folderId && fetchDeleteBookmarkFolder) {
            fetchDeleteBookmarkFolder(folderId);
          }
        },
        show: true,
      },
      cancelButton: {
        onClick() {},
        point: true,
        show: true,
      },
    });
    handleClose();
  };

  const onClickUpdate = () => {
    setStatus('update');
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
