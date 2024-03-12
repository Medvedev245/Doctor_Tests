import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Global.style';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  selectedOption1: 'qwes',
  selectedOption2: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_OPTIONS':
      return {
        selectedOption1: action.payload.selectedOption1,
        selectedOption2: action.payload.selectedOption2,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Doctor_Teats">
        <ThemeProvider theme={{}}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
