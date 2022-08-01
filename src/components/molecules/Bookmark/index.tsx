import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';
import { UseMutateFunction } from 'react-query';

import { Color } from '@constants/styles';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import UseLoginHooks from '@hooks/UseLogin';

interface BookmarkProps {
  size?: string;
  marked?: string;
  storeIdProps?: number | undefined;
  fetchCreateBookmarkStore?:
    | UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>
    | undefined;
}

function Bookmark({ size, marked = Color.darkGrey, storeIdProps, fetchCreateBookmarkStore }: BookmarkProps) {
  const { tokenExist } = UseLoginHooks();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const bookmarkState = () => (marked === 'Y' ? Color.orange : Color.darkGrey);
  const tokenStateBookmark = tokenExist ? bookmarkState() : Color.darkGrey;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!tokenExist) return;
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Icon
        iconName="bookmark"
        color={tokenStateBookmark || marked}
        size={size}
        cursor="pointer"
        onClick={handleClick}
      />
      {tokenExist && (
        <BookmarkRegister
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          storeIdProps={storeIdProps}
          fetchCreateBookmarkStore={fetchCreateBookmarkStore}
        />
      )}
    </>
  );
}

export default Bookmark;
