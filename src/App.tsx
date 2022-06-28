import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Login from "@pages/Login";
import GlobalStyle from './styles/GlobalStyle';

library.add(fas);

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
