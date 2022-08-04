import React from 'react';
import { Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ProfileBookmarkTitle from '@molecules/ProfileBookmarkTitle';
import ProfileBookmarkContent from '@molecules/ProfileBookmarkContent';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';

import { Color } from '@constants/styles';
import { GetBookmarkTopResponse } from '@interfaces/BookmarkTypes';

import * as S from './styles';

interface ProfileBookmarkProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
  BookmarkTopData: GetBookmarkTopResponse[] | undefined;
  getUserInfoData: any;
}

function ProfileBookmark({ anchorEl, setAnchorEl, BookmarkTopData, getUserInfoData }: ProfileBookmarkProps) {
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickMyFolder = () => {
    handleClose();
    navigate('/user/bookmark');
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transitionDuration={{
        appear: 300,
        enter: 100,
        exit: 100,
      }}
      className="bookmark_popover"
    >
      <S.Container>
        <ProfileBookmarkTitle name={getUserInfoData?.name} email={getUserInfoData?.email} />
        <S.ContentTitle>
          <Span fontSize="1.6rem" fontWeight="700">
            최근 저장한 가게
          </Span>
          <div>
            <Icon iconName="folder" color={Color.orange} size="2rem" />
            <Span fontSize="1.6rem" onClick={onClickMyFolder} cursor="pointer">
              내 폴더
            </Span>
          </div>
        </S.ContentTitle>
        {BookmarkTopData?.map((v) => (
          <ProfileBookmarkContent
            key={v.storeId}
            name={v.name}
            address={v.address}
            phone={v.phoneNumber}
            rate={v.pointAvg}
            photo={v.storeImageList || undefined}
            storeId={v.storeId}
          />
        ))}
      </S.Container>
    </Popover>
  );
}

export default ProfileBookmark;
