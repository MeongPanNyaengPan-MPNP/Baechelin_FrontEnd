import React, { useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '@assets/Logo.svg';

import UserIcon from '@assets/UserIcon.svg';
import Navigation from '@molecules/Navigation';
import Button from '@atoms/Buttons';
import SearchInput from '@atoms/SearchInput';
import Logo from '@atoms/Logo';
import UseLoginHooks from '@hooks/UseLogin';
import ProfileBookmark from '@organisms/ProfileBookmark';

import * as S from './styles';

function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const onClickLogo = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onClickAbout = () => {};
  const onClickMap = () => {};
  const { tokenExist } = UseLoginHooks();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <Logo src={LogoImg} width="12rem" height="5rem" onClick={onClickLogo} />
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
              // <Logo src={UserIcon} width="3rem" height="3rem" onClick={UseLogout} /> // 임시 로그아웃
              <>
                <Logo src={UserIcon} width="3rem" height="3rem" onClick={handleClick} />
                <ProfileBookmark anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
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
  );
}

export default Header;
