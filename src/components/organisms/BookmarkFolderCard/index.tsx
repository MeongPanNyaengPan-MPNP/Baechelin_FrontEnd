import React, { useEffect, useState } from 'react';
import { UseMutateFunction } from 'react-query';

import Icon from '@atoms/Icon';
// import Span from '@atoms/Span';
import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';
import BookmarkUpdateOverlay from '@organisms/BookmarkUpdateOverlay';
import BookmarkRegisterInput from '@molecules/BookmarkRegisterInput';
import {
  CreateBookmarkFolderResponse,
  UpdateBookmarkFolderNameParam,
  UpdateBookmarkFolderNameQuery,
} from '@interfaces/BookmarkTypes';
import { IMAGE_URL } from '@constants/url';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface BookmarkFolderCardProps {
  type?: string | null;
  name?: string | undefined;
  folderId?: number;
  fetchCreateBookmarkFolder?: UseMutateFunction<CreateBookmarkFolderResponse, unknown, string, unknown>;
  fetchDeleteBookmarkFolder?: UseMutateFunction<unknown, unknown, number, unknown>;
  fetchUpdateBookmarkFolder?: UseMutateFunction<
    unknown,
    unknown,
    UpdateBookmarkFolderNameParam & UpdateBookmarkFolderNameQuery,
    unknown
  >;
  onClick?: (index: number) => void;
  index?: number;
  thumbNail?: string | null;
}

function BookmarkFolderCard({
                              type = null,
                              name,
                              folderId,
                              fetchCreateBookmarkFolder,
                              fetchDeleteBookmarkFolder,
                              fetchUpdateBookmarkFolder,
                              onClick = () => {
                              },
                              index = 0,
                              thumbNail,
                            }: BookmarkFolderCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [status, setStatus] = useState<string | null>(type);
  const [folderName, setFolderName] = useState<string>('');
  const [nameInputState, setNameInputState] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (name) {
      setFolderName(name);
    }
  }, [name]);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleFolderClick = React.useCallback(() => {
    if (status === 'create') return;
    navigate(`/user/bookmark/${folderId}`);
  }, [folderId, navigate, status]);

  return (
    <S.Wrapper nameInputState={nameInputState}>
      <S.Container>
        <S.ImageWrapper onClick={handleFolderClick}>
          {status !== 'create' && <S.Photos src={thumbNail || IMAGE_URL.NO_IMAGE} />}
          {status === 'create' && <S.Photos src={IMAGE_URL.NO_DATA} />}
        </S.ImageWrapper>
        <S.TitleWrapper>
          {status === 'update' && (
            <>
              <BookmarkRegisterInput
                type="update"
                folderName={name}
                status={status}
                folderId={folderId}
                setFolderName={setFolderName}
                setStatus={setStatus}
                setFormState={setNameInputState}
                fetchUpdateBookmarkFolder={fetchUpdateBookmarkFolder}
              />
              {/* <Span>확인</Span> */}
            </>
          )}

          {status === 'create' && (
            <BookmarkRegisterInput
              type="create"
              status={status}
              setFolderName={setFolderName}
              setStatus={setStatus}
              setFormState={setNameInputState}
              fetchCreateBookmarkFolder={fetchCreateBookmarkFolder}
            />
          )}

          {!status && (
            <>
              <BookmarkRegisterFolderName
                name={folderName}
                fontSize="1.4rem"
                height="null"
                onClick={() => onClick(index)}
              />
              <Icon iconName="more_vert" cursor="pointer" onClick={handleClick} />
            </>
          )}

          <BookmarkUpdateOverlay
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            setStatus={setStatus}
            folderId={folderId}
            fetchDeleteBookmarkFolder={fetchDeleteBookmarkFolder}
          />
        </S.TitleWrapper>
      </S.Container>
      {nameInputState && <S.Message>폴더 명을 입력해주세요</S.Message>}
    </S.Wrapper>
  );
}

export default BookmarkFolderCard;
