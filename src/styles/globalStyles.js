import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;700&display=swap'); // Antonio
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap'); // Sacramento
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.lightGreen};
  }

`;

export default GlobalStyle;
