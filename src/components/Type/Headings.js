import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

export const AllCapsDetail = ({ children, as }) => (
  <AllCapsDetailSt as={as}>{children}</AllCapsDetailSt>
);

const AllCapsDetailSt = styled.h3`
  font-family: var(--halyard-display);
  font-size: 1.2rem;
  font-weight: normal;
  letter-spacing: 0.2rem;
  line-height: 2rem;
  text-transform: uppercase;

  @media (min-width: 640px) {
    font-size: 1.4rem;
  }
`;

AllCapsDetail.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

AllCapsDetail.defaultProps = {
  as: null,
};

//

export const HeaderSerif = ({ children, as }) => (
  <HeaderSerifSt as={as}>{children}</HeaderSerifSt>
);

const HeaderSerifSt = styled.h1`
  font-family: var(--optima);
  font-size: clamp(4rem, 4vw, 6.2rem);
  font-weight: normal;
  letter-spacing: -0.02rem;
  line-height: clamp(4rem, 3.2vw, 6.2rem);
`;

HeaderSerif.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderSerif.defaultProps = {
  as: null,
};

//

export const HeaderTwoSerif = ({ children, as }) => (
  <HeaderTwoSerifSt as={as}>{children}</HeaderTwoSerifSt>
);

const HeaderTwoSerifSt = styled.h2`
  font-family: var(--optima);
  font-size: clamp(2.8rem, 3vw, 4.8rem);
  font-weight: normal;
  letter-spacing: 0.01rem;
  line-height: clamp(3.4rem, 2.4vw, 3.4rem);
`;

HeaderTwoSerif.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderTwoSerif.defaultProps = {
  as: null,
};
