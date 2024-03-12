import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  /* --iq-primary: #e50914;
  --iq-primary-hover: #bf000a; // 1
  --iq-light-primary: #d7d3f8; // 1
  --iq-secondary: #6c757d;
  --iq-white: #ffffff;
  --iq-black: #000000;
  --iq-title-text: #23203c;
  --iq-body-text: #D1D0CF;
  --iq-body-bg: #06121e; // 1
  --iq-bg1: #0b1a2a;
  --iq-body-BG: #0b1a2a; // 1
  --iq-gold: #E6C75F;
  --iq-black: #000000;
  --header: #aedae6; */
}
`;
