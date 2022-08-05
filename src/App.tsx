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
import Bookmark from '@pages/Bookmark';
import StoreDetailPhotosModal from '@pages/StoreDetailPhotosModal';
import ServiceInfo from '@pages/ServiceInfo';
import AlertContainer from '@molecules/AlertContainer';
import SearchMap from '@pages/SearchMap';
import BookmarkDetail from '@pages/BookmarkDetail';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import PrivateRoute from './routes/PrivateRoutes';

library.add(fas);

function App() {
  const location = useLocation();
  const state = location.state as { locationState?: Location };
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SnackBarsContainer>
          <Header />
          <SilentLogin />
          <Routes location={state?.locationState}>
            <Route path="/" element={<Main />} />
            <Route path="/map" element={<SearchMap />} />
            <Route path="/user">
              <Route path="oauth/redirect/:prevPath" element={<Oauth />} />
              <Route path="oauth/redirect/" element={<Oauth />} />
              <Route path="bookmark" element={<Bookmark />} />
              <Route path="bookmark/:folderId" element={<BookmarkDetail />} />
            </Route>
            <Route path="/store">
              <Route path=":storeId" element={<StoreDetail />} />
              <Route path="list/:topic" element={<StoreList />} />
            </Route>
            <Route path="photosModal" element={<StoreDetailPhotosModal />} />
            <Route path="/search/:keyword" element={<Search />} />
            <Route path="/review/write/*" element={<PrivateRoute />}>
              <Route path=":storeId" element={<ReviewWrite />} />
            </Route>
            <Route path="/about" element={<ServiceInfo />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {state?.locationState && (
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="photosModal" element={<StoreDetailPhotosModal />} />
            </Routes>
          )}
        </SnackBarsContainer>
        <AlertContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
