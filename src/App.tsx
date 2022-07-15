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

import GlobalStyle from './styles/GlobalStyle';

library.add(fas);

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="/user">
          <Route path="oauth/redirect" element={<Oauth />} />
          <Route path="bookmark" element={<Login />} />
        </Route>
        <Route path="/store">
          <Route path=":storeName" element={<StoreDetail />} />
        </Route>
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/store/list" />
        <Route path="/map" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
