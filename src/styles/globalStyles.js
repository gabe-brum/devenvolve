import { createGlobalStyle } from "styled-components";
// import sacramento from '../fonts/sacramento.woff'
// import sacramento2 from '../fonts/sacramento.woff2'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* @font-face {
  font-family: 'Sacramento';
  src: url(${sacramento2}) format('woff2'),
       url(${sacramento}) format('woff');
  } */
`;

export default GlobalStyle;
