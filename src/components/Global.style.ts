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
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
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
   --iq-primary: rgba(187,154,230, 1); // лнопка описание
   --iq-secondary: rgba(214, 210, 210, 0.624); // задний фон
   --iq-underlining: rgba(187, 154, 230, 0.342);
   --iq-cross: rgba(88, 5, 143, 1);
   --iq-boxShadow: rgba(136, 85, 187, 1); // boxShadow

   //Fonts
   --font-size-mobile: 16px; /* Размер шрифта для мобильных устройств */
  --font-size-tablet: 18px; /* Размер шрифта для планшетных устройств */
  --font-size-desktop: 20px; /* Размер шрифта для десктопных устройств */

}
`;
