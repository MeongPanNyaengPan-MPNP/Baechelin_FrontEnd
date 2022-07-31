import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';
import { UseMutateFunction } from 'react-query';

import { Color } from '@constants/styles';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';

interface BookmarkProps {
  size?: string;
  marked?: string;
  storeIdProps?: number | undefined;
  isBookmark?: string | number;
  fetchCreateBookmarkStore?:
    | UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>
    | undefined;
}

function Bookmark({
  isBookmark = 'N',
  size,
  marked = Color.darkGrey,
  storeIdProps,
  fetchCreateBookmarkStore,
}: BookmarkProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const bookmarkState = isBookmark === 'Y' ? Color.orange : Color.darkGrey;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Icon iconName="bookmark" color={bookmarkState || marked} size={size} cursor="pointer" onClick={handleClick} />
      <BookmarkRegister
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        storeIdProps={storeIdProps}
        fetchCreateBookmarkStore={fetchCreateBookmarkStore}
      />
    </>
  );
}

export default Bookmark;
