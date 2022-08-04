import React from 'react';
import Icon from '@atoms/Icon';
import BookmarkRegister from '@organisms/BookmarkRegister';
import { useMutation, useQueryClient } from 'react-query';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import UseLoginHooks from '@hooks/UseLogin';
import { Color } from '@constants/styles';
import { createBookmarkStore, deleteBookmarkStore } from '@service/bookmarkApi';
import { useSetRecoilState } from 'recoil';
import modalAtom from '@recoil/modalAtom';
import { useLocation, useNavigate } from 'react-router-dom';

interface BookmarkProps {
  size?: string;
  marked?: string;
  storeIdProps?: number;
}

function Bookmark({
                    size,
                    marked = 'N',
                    storeIdProps = 0
                  }: BookmarkProps) {
  const { tokenExist } = UseLoginHooks();
  const queryClient = useQueryClient();
  const [bookmarkState, setBookmarkState] = React.useState<string>(marked);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const { mutate: fetchCreateBookmarkStore } = useMutation<CreateBookmarkFolderResponse,
    unknown,
    CreateBookmarkStoreBody,
    unknown>(
    ({
       storeId,
       folderId
     }) =>
      createBookmarkStore({
        folderId,
        storeId,
      }),
    {
      onSuccess: () => {
        // setCreate(false);
        setBookmarkState('Y');
        queryClient.invalidateQueries('getBookmarkTop');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );
  const setModalContent = useSetRecoilState(modalAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: fetchDeleteBookmarkStore } = useMutation<CreateBookmarkFolderResponse, unknown, number, unknown>(
    (storeId) => deleteBookmarkStore(storeId),
    {
      onSuccess: () => {
        // setCreate(false);
        queryClient.invalidateQueries('getBookmarkTop');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!tokenExist) {
      setModalContent({
        messages: ['북마크 기능은 로그인 후 사용할 수 있습니다.'],
        submitButton: {
          show: true,
          message: '취소',
          onClick() {
          },
        },
        cancelButton: {
          show: true,
          message: '로그인 하기',
          onClick: () => {
            navigate('/login', {
              state: {
                locationState: location,
                destinationPath: location.pathname,
              },
            });
          },
        },
      });
      return;
    }
    if (bookmarkState === 'Y') {
      fetchDeleteBookmarkStore(storeIdProps || 0);
      setBookmarkState('N');
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  React.useEffect(() => {
    if (tokenExist) {
      setBookmarkState(marked);
    } else {
      setBookmarkState('N');
    }
  }, [marked, tokenExist]);
  return (
    <>
      <Icon
        iconName="bookmark"
        color={bookmarkState === 'Y' ? Color.orange : Color.darkGrey}
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
