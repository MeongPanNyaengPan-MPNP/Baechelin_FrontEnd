import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '@assets/Logo.svg';
import { useQuery } from 'react-query';
import Button from '@atoms/Buttons';
import Logo from '@atoms/Logo';

import Navigation from '@molecules/Navigation';
import SearchInput from '@atoms/SearchInput';
import UseLoginHooks from '@hooks/UseLogin';
import ProfileBookmark from '@organisms/ProfileBookmark';
import { useRecoilState, useRecoilValue } from 'recoil';

import { muiAnchorEl } from '@recoil/modalAtom';
import { getBookmarkTop } from '@service/bookmarkApi';

import { userToken } from '@recoil/userAtom';
import { UseUserQuery } from '@hooks/UseQueryHooks';
import * as S from './styles';
import { UserLogo } from './styles';

function Header() {
  const [anchorEl, setAnchorEl] = useRecoilState(muiAnchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const token = useRecoilValue(userToken);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { UseGetUserInfo } = UseUserQuery(token);
  const { data: userInfoData } = UseGetUserInfo();
  const { data: BookmarkTopData } = useQuery(['getBookmarkTop'], () => getBookmarkTop(), {
    staleTime: 5000,
    cacheTime: Infinity,
    // enabled: !create,
  });

  const onClickLogo = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onClickAbout = () => {
    navigate('/about');
  };
  const onClickMap = () => {
    navigate('/map');
  };
  const { tokenExist } = UseLoginHooks();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.Wrapper>
          <Logo src={LogoImg} width="9.6rem" height="auto" margin="0 auto 0 0;" onClick={onClickLogo} />
          <SearchInput width="56.2rem" margin="0 7rem" />
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
              {tokenExist && userInfoData ? (
                <>
                  <S.LogoArea>
                    <UserLogo src={userInfoData?.userImage} width="3rem" height="3rem" onClick={handleClick} />
                  </S.LogoArea>
                  <ProfileBookmark
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    BookmarkTopData={BookmarkTopData}
                    getUserInfoData={userInfoData}
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
