import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '@assets/Logo.svg';
import { useQuery } from 'react-query';

import UserIcon from '@assets/UserIcon.svg';
import Button from '@atoms/Buttons';
import Logo from '@atoms/Logo';

import Navigation from '@molecules/Navigation';
import SearchInput from '@atoms/SearchInput';
import UseLoginHooks from '@hooks/UseLogin';
import ProfileBookmark from '@organisms/ProfileBookmark';
import { useRecoilState } from 'recoil';
import { muiAnchorEl } from '@recoil/modalAtom';
import { getBookmarkTop } from '@service/bookmarkApi';
import { getUserInfo } from '@service/getUserApi';

import { UserLogo } from './styles';
import * as S from './styles';

function Header() {
  const [anchorEl, setAnchorEl] = useRecoilState(muiAnchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: BookmarkTopData } = useQuery(['getBookmarkTop'], () => getBookmarkTop(), {
    staleTime: 5000,
    cacheTime: Infinity,
    // enabled: !create,
  });

  const { data: getUserInfoData } = useQuery(['getUserInfo'], () => getUserInfo(), {
    staleTime: 5000,
    cacheTime: Infinity,
    // enabled: !create,
  });

  const onClickLogo = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onClickAbout = () => {};
  const onClickMap = () => {
    navigate('/map');
  };
  const { tokenExist } = UseLoginHooks();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  console.log('BookmarkTopData', BookmarkTopData);

  return (
    <S.Wrap>
      <S.Container>
        <S.Wrapper>
          <Logo src={LogoImg} width="9.6rem" height="5rem" onClick={onClickLogo} />
          <SearchInput width="56.2rem" margin="0 0 0 9rem" />
          <Navigation>
            <div>
              <Button fontSize="1.6rem" onClick={onClickAbout}>
                배슐랭 소개
              </Button>
            </div>
            <div>
              <Button fontSize="1.6rem" onClick={onClickMap}>
                지도
              </Button>
            </div>
            {/* userIcon */}
            <div>
              {tokenExist ? (
                <>
                  <UserLogo src={UserIcon} width="3rem" height="3rem" onClick={handleClick} />
                  <ProfileBookmark
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    BookmarkTopData={BookmarkTopData}
                    getUserInfoData={getUserInfoData}
                  />
                </>
              ) : (
                <Button fontSize="1.6rem">
                  <Link to="/login" state={{ locationState: location }}>
                    로그인
                  </Link>
                </Button>
              )}
            </div>
          </Navigation>
        </S.Wrapper>
      </S.Container>
    </S.Wrap>
  );
}

export default Header;
