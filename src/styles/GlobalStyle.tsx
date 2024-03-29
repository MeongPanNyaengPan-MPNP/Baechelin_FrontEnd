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
    overflow-x: hidden;
    margin: 0;
    font-size: 1.4rem;
    font-family: 'Roboto', 'Noto Sans KR', 'Malgun Gothic', '맑은고딕', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F4F4F4;
    color: #3B3B3B;
  }

  .MuiTouchRipple-root {
    display: none;
  }

  .MuiPagination-ul {
    flex-wrap: nowrap;
  }

`;

export default GlobalStyle;
