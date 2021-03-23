import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --yellow: #ffcc66;
    --grey: #efefef;

    --highlight: var(--yellow);
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
