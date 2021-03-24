import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    --rich-black: #191617;
    --black: #414042;
    --grey: #e1e2da;
    --off-white: #f0f0e6;
    --white: #fff;

    --highlight: var(--off-white);
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
