import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '@assets/Logo.svg';

import Navigation from '@molecules/Navigation';
import Button from '@atoms/Buttons';
import SearchInput from '@atoms/SearchInput';
import Logo from '@atoms/Logo';

import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickLogo = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const onClickAbout = () => {};
  const onClickMap = () => {};

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
            {/* <Logo src={UserIcon} width="3rem" height="3rem" /> */}
            <Link to="/login" state={{ locationState: location }}>
              로그인
            </Link>
          </div>
        </Navigation>
      </S.Wrapper>
    </S.Container>
  );
}

export default Header;
