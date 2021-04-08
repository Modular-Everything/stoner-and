import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

export const ParagraphSmall = ({ children, as }) => (
  <ParagraphSmallSt as={as}>{children}</ParagraphSmallSt>
);

const ParagraphSmallSt = styled.p`
  font-family: var(--halyard-text);
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.01rem;
  line-height: 2rem;
`;

ParagraphSmall.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

ParagraphSmall.defaultProps = {
  as: null,
};

//

export const ParagraphLarge = ({ children, as }) => (
  <ParagraphLargeSt as={as}>{children}</ParagraphLargeSt>
);

const ParagraphLargeSt = styled.p`
  font-family: var(--halyard-text);
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.01rem;
  line-height: 2.2rem;
`;

ParagraphLarge.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

ParagraphLarge.defaultProps = {
  as: null,
};
