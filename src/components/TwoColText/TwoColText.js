import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ParagraphSmall } from '../Type/Copy';

//

const TwoColText = ({ copy }) => (
  <TwoColTextSC>
    {copy.map((text, index) => (
      <ParagraphSmall key={index}>{text}</ParagraphSmall>
    ))}
  </TwoColTextSC>
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
