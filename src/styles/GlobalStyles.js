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

    --fade-dark: linear-gradient(180deg, rgba(17, 17, 17, 0.15) 0%, rgba(17, 17, 17, 0) 100%);

    --ease-links: 250ms ease-in-out color;

    --gutter: 2.4rem;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
