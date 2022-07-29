import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';
import { Color } from '@constants/styles';
import { useMutation } from 'react-query';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import { createBookmarkStore } from '@service/bookmarkApi';

interface BookmarkProps {
  size?: string;
  marked?: string;
  storeIdProps: number;
}

function Bookmark({ size, marked = Color.darkGrey, storeIdProps }: BookmarkProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const { mutate: fetchCreateBookmarkStore } = useMutation<
    CreateBookmarkFolderResponse,
    unknown,
    CreateBookmarkStoreBody,
    unknown
  >(
    ({ storeId, folderId }) =>
      createBookmarkStore({
        folderId,
        storeId,
      }),
    {
      onSuccess: () => {
        // setCreate(false);
        console.log('bookmark created');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Icon iconName="bookmark" color={marked} size={size} cursor="pointer" onClick={handleClick} />
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
