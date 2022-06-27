import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Buttons from '@atoms/Buttons';

function Main() {
  return (
    <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom />
          <Buttons type="button" size="large" >으앙</Buttons>
        </Box>
      </Container>
  )
}

export default Main
