import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

function Main() {

  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom />
        <Link to='/login' >로그인123</Link>
      </Box>
    </Container>
  );
}

export default Main;
