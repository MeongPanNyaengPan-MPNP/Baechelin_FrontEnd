import React from 'react';
import {Routes, Route} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {RecoilRoot} from 'recoil';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Main from "@pages/Main";
import theme from './styles/theme';
import GlobalStyle from "./styles/GlobalStyle";

library.add(fas)

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App;
