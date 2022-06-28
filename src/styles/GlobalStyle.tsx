
import {createGlobalStyle, GlobalStyleComponent} from "styled-components";

const GlobalStyle :GlobalStyleComponent<any,any> = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    letter-spacing: -0.01em;
    font-size:inherit;
  }
  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyle;
