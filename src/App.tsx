import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from '@pages/Main';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Oauth from '@pages/Oauth';
import Mypage from '@pages/Mypage';
import { ThemeProvider } from '@mui/material';
import ReviewWrite from '@pages/ReviewWrite';
import Header from '@organisms/Header';
import GlobalStyle from './styles/GlobalStyle';

library.add(fas);
function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reviewWrite' element={<ReviewWrite />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/user/oauth' element={<Oauth />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
