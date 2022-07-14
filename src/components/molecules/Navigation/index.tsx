import React, { ReactNode } from 'react';

import Button, { ButtonsProps } from '@atoms/Buttons';
import styled from 'styled-components';

export interface ButtonGroupTypes extends ButtonGroupProps {
  Buttons?: ButtonsProps[];
  children: ReactNode;
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 31.2rem;
`;

function Navigation({ Buttons, children, ...props }: ButtonGroupTypes) {
  return (
    <Container {...props}>
      {Buttons?.map((v) => (
        <Button {...v}>{v.children}</Button>
      ))}
      {children}
    </Container>
  );
}

export default Navigation;
