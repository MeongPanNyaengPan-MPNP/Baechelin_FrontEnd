import React from "react";
import Button,{ButtonProps} from '@mui/material/Button';

export interface ButtonTypes extends ButtonProps{
  children?:React.ReactNode;
}
function Buttons({children, ...props}:ButtonTypes){
  return(
    <Button variant="outlined"{...props}>{children}</Button>
  )
}
export default Buttons
