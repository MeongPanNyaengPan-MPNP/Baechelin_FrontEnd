import React from 'react';
import styled from 'styled-components';
import { ButtonGroup } from '@mui/material';

import CommonIcon from '@atoms/Logo/CommonIcon.svg';

import Logo from '@atoms/Logo';

const Container = styled.div`
  width: 100vw;
  height: 100px;
  border-bottom: 2px solid lightgray;
`;

function Header() {
  return (
    <Container>
      <ButtonGroup />
      <Logo src={CommonIcon} width="5rem" height="5rem" />
    </Container>
  );
}

export default Header;
