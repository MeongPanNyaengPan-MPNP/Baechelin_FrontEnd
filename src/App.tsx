import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Main from '@pages/Main';
import Login from '@pages/LoginModal';
import NotFound from '@pages/NotFound';
import Oauth from '@pages/User/Oauth';
import Header from '@organisms/Header';
import StoreDetail from '@pages/StoreDetail';
import Search from '@pages/Search';
import { ThemeProvider } from '@mui/material';

import ReviewWrite from '@pages/ReviewWrite';
import StoreList from '@pages/StoreList';
import SnackBarsContainer from '@molecules/SnackBarsContainer';
import SilentLogin from '@utils/Jwt/SilentLogin';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import PrivateRoute from './routes/PrivateRoutes';

library.add(fas);

function App() {
  const location = useLocation();
  const state = location.state as { locationState?: Location };
  console.log('app state', state);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackBarsContainer>
          <Header />
          <SilentLogin />
          <Routes location={state?.locationState}>
            <Route path="/" element={<Main />} />
            <Route path="/user">
              <Route path="oauth/redirect/:prevPath" element={<Oauth />} />
              <Route path="oauth/redirect" element={<Oauth />} />
            </Route>
            <Route path="/store">
              <Route path=":storeName" element={<StoreDetail />} />
              <Route path="list/:topic" element={<StoreList />} />
            </Route>
            <Route path="/search/:keyword" element={<Search />} />
            {/*            <Route path="/review">
              <Route
                path="/review/write"
                element={
                  <PrivateRoute>
                    <ReviewWrite />
                  </PrivateRoute>
                }
              />
              <Route path="" element={<NotFound />} />
            </Route> */}
            <Route path="/review/write/*" element={<PrivateRoute prevPath="/review/write" />}>
              <Route path="*" element={<ReviewWrite />} />
            </Route>
            <Route path="/store/list" />
            <Route path="/map" />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
          {state?.locationState && (
            <Routes>
              <Route path="login" element={<Login />} />
            </Routes>
          )}
        </SnackBarsContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
