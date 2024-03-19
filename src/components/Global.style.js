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
  // Colors
   --iq-primary: rgba(187,154,230, 1);
   --iq-secondary: rgba(250,250,250, 1); 
   --iq-underlining: rgba(187, 154, 230, 0.342);

   //Fonts
   --font-size-mobile: 16px; /* Размер шрифта для мобильных устройств */
  --font-size-tablet: 18px; /* Размер шрифта для планшетных устройств */
  --font-size-desktop: 20px; /* Размер шрифта для десктопных устройств */

}
`;
