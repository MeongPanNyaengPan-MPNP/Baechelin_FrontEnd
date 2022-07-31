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
}

function BookmarkFolderCard({
  type = null,
  name,
  folderId,
  fetchCreateBookmarkFolder,
  fetchDeleteBookmarkFolder,
  fetchUpdateBookmarkFolder,
  onClick = () => {},
  index = 0,
}: BookmarkFolderCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [status, setStatus] = useState<string | null>(type);
  const [folderName, setFolderName] = useState<string>('');

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

  return (
    <S.Container>
      <S.ImageWrapper onClick={() => onClick(index)}>
        {status !== 'create' && (
          <S.Photos src="https://content.api.news/v3/images/bin/104903dc87c2963a2d3e722aa85fe923?width=650" />
        )}
      </S.ImageWrapper>
      <S.TitleWrapper>
        {status === 'update' && (
          <>
            <BookmarkRegisterInput
              type="update"
              folderName={name}
              folderId={folderId}
              setFolderName={setFolderName}
              setStatus={setStatus}
              fetchUpdateBookmarkFolder={fetchUpdateBookmarkFolder}
            />
            {/* <Span>확인</Span> */}
          </>
        )}

        {status === 'create' && (
          <BookmarkRegisterInput
            type="create"
            setFolderName={setFolderName}
            setStatus={setStatus}
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
  );
}

export default BookmarkFolderCard;
