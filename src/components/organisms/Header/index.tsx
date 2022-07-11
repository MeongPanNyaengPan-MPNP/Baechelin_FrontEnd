import React from 'react';
import styled from 'styled-components';

import CommonIcon from '@atoms/Logo/CommonIcon.svg';

import Logo from '@atoms/Logo';
import Navigation from '@molecules/Navigation';
import Button from '@atoms/Buttons';
import SearchInput from '@atoms/SearchInput';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100px;
  border-bottom: 2px solid lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  justify-content: space-between;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Logo src={CommonIcon} width="5rem" height="5rem" />
        <SearchInput width="500px" />
        <Navigation>
          <Button>배슐랭 소개</Button>
          <Button>지도</Button>
          <Button onClick={() => navigate('/login')}>로그인</Button>
        </Navigation>
      </Wrapper>
    </Container>
  );
}

export default Header;
