import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

export const ParagraphSmall = ({ children, as }) => (
  <ParagraphSmallSC as={as}>{children}</ParagraphSmallSC>
);

const ParagraphSmallSC = styled.p`
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
  <ParagraphLargeSC as={as}>{children}</ParagraphLargeSC>
);

const ParagraphLargeSC = styled.p`
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

//

export const ParagraphHuge = ({ children, as }) => (
  <ParagraphHugeSC as={as}>{children}</ParagraphHugeSC>
);

const ParagraphHugeSC = styled.p`
  font-family: var(--halyard-text);
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.8rem;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

ParagraphHuge.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

ParagraphHuge.defaultProps = {
  as: null,
};
