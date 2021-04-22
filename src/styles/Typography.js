import { createGlobalStyle } from 'styled-components';
import Optima from '../fonts/Optima.woff';

//

const Typography = createGlobalStyle`
  :root {
    --halyard-display: 'halyard-display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --halyard-text: 'halyard-text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --optima: 'Optima', Georgia, 'Times New Roman', Times, serif;
  }

  @font-face {
    font-family: 'Optima';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local('Optima'), url(${Optima}) format('woff');
  }

  html {
    color: var(--black);
    font-family: var(--halyard-display);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  ::selection {
    background: var(--white);
    color: var(--black);
  }

  mark, .mark {
    display: inline;
    margin: 0;
    padding: 0;
    background: var(--highlight);
    line-height: 1;
  }
`;

export default Typography;
