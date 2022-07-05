import React from 'react';

import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';
import Button, { ButtonTypes } from '@atoms/Button';

interface ButtonGroupTypes extends ButtonGroupProps {
  Buttons?: ButtonTypes[];
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
