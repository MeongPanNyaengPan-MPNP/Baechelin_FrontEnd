import React from 'react';
import { Icon as MuiIcon } from '@mui/material';

export interface IconProps {
  iconName: string;
  color?: string;
  size?: string;
  cursor?: string;
  margin?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Icon({
  iconName,
  color = 'black',
  size = '1.6rem',
  margin,
  onClick,
  cursor = 'null',
}: IconProps): JSX.Element {
  return (
    <MuiIcon sx={{ color }} style={{ fontSize: size, cursor, margin }} onClick={onClick}>
      {iconName}
    </MuiIcon>
  );
}

export default Icon;
