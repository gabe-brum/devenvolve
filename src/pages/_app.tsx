import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyles";

import theme from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="hs">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
