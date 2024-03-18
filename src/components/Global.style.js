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

@media (min-width: 768px) {
  body {
    font-size: var(--font-size-tablet); /* Используем размер шрифта для планшетов */
  }
}

@media (min-width: 1024px) {
  body {
    font-size: var(--font-size-desktop); /* Используем размер шрифта для десктопов */
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root {
  // Colors
   --iq-primary: #bb9ae6; 
   --iq-secondary: #fafafa; 

   //Fonts
   --font-size-mobile: 16px; /* Размер шрифта для мобильных устройств */
  --font-size-tablet: 18px; /* Размер шрифта для планшетных устройств */
  --font-size-desktop: 20px; /* Размер шрифта для десктопных устройств */

}
`;
