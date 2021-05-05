import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ParagraphSmall } from '../Type/Copy';
import { AnimateIn } from '../AnimateIn';

//

const TwoColText = ({ copy }) => (
  <AnimateIn>
    <TwoColTextSC>
      <ParagraphSmall as="p">{copy}</ParagraphSmall>
    </TwoColTextSC>
  </AnimateIn>
);

export default TwoColText;

const TwoColTextSC = styled.div`
  p {
    margin-bottom: 1.6rem;

    &:first-of-type {
      text-indent: 1.6rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (min-width: 640px) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 640px) {
    columns: 2;
    column-gap: 2.4rem;
  }
`;

TwoColText.propTypes = {
  copy: PropTypes.array.isRequired,
};
