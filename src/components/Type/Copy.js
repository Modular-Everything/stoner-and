import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

export const ParagraphSmall = (props) => {
  const { children, as } = props;
  return (
    <ParagraphSmallSC as={as} {...props}>
      {children}
    </ParagraphSmallSC>
  );
};

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

export const ParagraphLarge = (props) => {
  const { children, as } = props;
  return (
    <ParagraphLargeSC as={as} {...props}>
      {children}
    </ParagraphLargeSC>
  );
};

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

export const ParagraphHuge = (props) => {
  const { children, as } = props;
  return (
    <ParagraphHugeSC as={as} {...props}>
      {children}
    </ParagraphHugeSC>
  );
};

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
