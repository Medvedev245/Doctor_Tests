import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Global.style';

import { Provider } from 'react-redux';
import { store } from 'store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Doctor_Tests">
        <ThemeProvider theme={{}}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
