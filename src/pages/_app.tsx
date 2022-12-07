import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyles";

import theme from "@styles/theme";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../store/index'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="hs">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
