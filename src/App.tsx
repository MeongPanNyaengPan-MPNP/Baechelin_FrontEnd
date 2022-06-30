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
import Bookmark from '@pages/Bookmark';
import GlobalStyle from './styles/GlobalStyle';
import PrivateRoute from './routes/PrivateRoutes';

library.add(fas);

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/mypage' element={<PrivateRoute />}>
          <Route path='bookmark' element={<Bookmark />} />
          <Route path='' element={<Mypage />} />
        </Route>
        <Route path='/user' element={<PrivateRoute />}>
          <Route path='oauth/:social' element={<Oauth />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
