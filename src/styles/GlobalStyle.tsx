import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

const GlobalStyle: GlobalStyleComponent<any, any> = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    letter-spacing: -0.01em;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F4F4F4
  }

`;

export default GlobalStyle;
