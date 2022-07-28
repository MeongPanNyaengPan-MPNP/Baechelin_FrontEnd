import React, { useEffect, useState } from 'react';

import Icon from '@atoms/Icon';
// import Span from '@atoms/Span';
import BookmarkRegisterFolderName from '@molecules/BookmarkRegisterName';
import BookmarkUpdateOverlay from '@organisms/BookmarkUpdateOverlay';
import BookmarkRegisterInput from '@molecules/BookmarkRegisterInput';

import * as S from './styles';

interface BookmarkFolderCardProps {
  type?: string | null;
  name?: string | undefined;
  list?: object;
}

function BookmarkFolderCard({ type = null, name, list }: BookmarkFolderCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [status, setStatus] = useState<string | null>(type);
  const [folderName, setFolderName] = useState<string>('북마크 폴더');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (name) {
      setFolderName(name);
    }
  }, [name]);

  console.log('bookmarklist', list);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <S.Container>
      <S.ImageWrapper>
        {status !== 'create' && (
          <S.Photos src="https://content.api.news/v3/images/bin/104903dc87c2963a2d3e722aa85fe923?width=650" />
        )}
      </S.ImageWrapper>
      <S.TitleWrapper>
        {status === 'update' && (
          <>
            <BookmarkRegisterInput setFolderName={setFolderName} setStatus={setStatus} />
            {/* <Span>확인</Span> */}
          </>
        )}

        {status === 'create' && <BookmarkRegisterInput setFolderName={setFolderName} setStatus={setStatus} />}

        {!status && (
          <>
            <BookmarkRegisterFolderName name={folderName} fontSize="1.4rem" height="null" />
            <Icon iconName="more_vert" cursor="pointer" onClick={handleClick} />
          </>
        )}

        <BookmarkUpdateOverlay anchorEl={anchorEl} setAnchorEl={setAnchorEl} status={status} setStatus={setStatus} />
      </S.TitleWrapper>
    </S.Container>
  );
}

export default BookmarkFolderCard;
