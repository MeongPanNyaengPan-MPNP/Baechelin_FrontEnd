import React from 'react';

import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';
import Button, { ButtonsProps } from '@atoms/Buttons';

interface ButtonGroupTypes extends ButtonGroupProps {
  Buttons?: ButtonsProps[];
}

function Navigation({ Buttons, children, ...props }: ButtonGroupTypes) {
  return (
    <ButtonGroup {...props}>
      {Buttons?.map((v) => (
        <Button {...v}>{v.children}</Button>
      ))}
      {children}
    </ButtonGroup>
  );
}

export default Navigation;
