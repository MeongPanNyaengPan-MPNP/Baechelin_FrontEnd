import React from 'react';
import { Popover } from '@mui/material';

import ProfileBookmarkTitle from '@molecules/ProfileBookmarkTitle';
import ProfileBookmarkContent from '@molecules/ProfileBookmarkContent';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';

import { Color } from '@constants/styles';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

interface ProfileBookmarkProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

function ProfileBookmark({ anchorEl, setAnchorEl }: ProfileBookmarkProps) {
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
        horizontal: 'left',
      }}
    >
      <S.Container>
        <ProfileBookmarkTitle name="먹보" email="meokbo@coupang.com" />
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
        <ProfileBookmarkContent />
        <ProfileBookmarkContent />
        <ProfileBookmarkContent />
      </S.Container>
    </Popover>
  );
}

export default ProfileBookmark;
