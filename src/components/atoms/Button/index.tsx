import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

export interface ButtonTypes extends ButtonProps {
  children?: React.ReactNode;
}

function Button({ children, ...props }: ButtonTypes) {
  return (
    <MuiButton variant="outlined" {...props}>
      {children}
    </MuiButton>
  );
}
export default Button;
