import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AllCapsDetail, HeaderSerif } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

//

const IntroText = () => (
  <IntroTextSt>
    <AllCapsDetail as="h2">Lorem Ipsum</AllCapsDetail>
    <HeaderSerif as="h1">Design that comes to life</HeaderSerif>

    <div className="copy">
      <ParagraphSmall>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nulla posuere
        sollicitudin aliquam ultrices sagittis. Lacus luctus accumsan tortor
        posuere ac. Sit amet venenatis urna cursus eget nunc. Sit amet
        consectetur adipiscing elit pellentesque habitant morbi tristique
        senectus.
      </ParagraphSmall>
      <ParagraphSmall>
        Orci nulla pellentesque dignissim enim sit amet venenatis urna. Risus
        quis varius quam quisque id diam vel quam. Commodo sed egestas egestas
        fringilla phasellus faucibus. Viverra aliquet eget sit amet tellus cras
        adipiscing enim eu. Eleifend quam.
      </ParagraphSmall>
    </div>
  </IntroTextSt>
);

export default IntroText;

const IntroTextSt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 88rem;
  margin: 0 auto;
  color: var(--black);

  h1 {
    margin: 1.6rem 0 2.4rem;
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .copy {
    p {
      margin-bottom: 1.6rem;

      &:first-of-type {
        text-indent: 1.6rem;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    @media (min-width: 640px) {
      columns: 2;
      column-gap: 2.4rem;

      p {
        margin-bottom: 0;
      }
    }
  }
`;
