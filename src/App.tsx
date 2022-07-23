import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Main from '@pages/Main';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Oauth from '@pages/User/Oauth';
import Header from '@organisms/Header';
import StoreDetail from '@pages/StoreDetail';
import Search from '@pages/Search';
import { ThemeProvider } from '@mui/material';

import ReviewWrite from '@pages/ReviewWrite';
import StoreList from '@pages/StoreList';
import SnackBarsContainer from '@molecules/SnackBarsContainer';
import SilentLogin from '@utils/Jwt/refresh';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import PrivateRoute from './routes/PrivateRoutes';

library.add(fas);

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackBarsContainer>
          <SilentLogin>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="/user">
                <Route path="oauth/redirect/:prevPath" element={<Oauth />} />
                <Route path="oauth/redirect" element={<Oauth />} />
                <Route path="bookmark" element={<Login />} />
              </Route>
              <Route path="/store">
                <Route path=":storeName" element={<StoreDetail />} />
                <Route path="list/:topic" element={<StoreList />} />
              </Route>
              <Route path="/search/:keyword" element={<Search />} />
              <Route path="/review">
                <Route
                  path="/review/write"
                  element={
                    <PrivateRoute>
                      <ReviewWrite />
                    </PrivateRoute>
                  }
                />
                <Route path="" element={<NotFound />} />
              </Route>
              <Route path="/store/list" />
              <Route path="/map" />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SilentLogin>
        </SnackBarsContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
