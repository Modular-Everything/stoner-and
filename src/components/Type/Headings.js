import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

export const AllCapsDetail = (props) => {
  const { children, as } = props;

  return (
    <AllCapsDetailSt as={as} {...props}>
      {children}
    </AllCapsDetailSt>
  );
};

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

export const HeaderSerif = (props) => {
  const { children, as } = props;

  return (
    <HeaderSerifSt as={as} {...props}>
      {children}
    </HeaderSerifSt>
  );
};

const HeaderSerifSt = styled.h1`
  font-family: var(--optima);
  font-size: clamp(4rem, 4vw, 6.2rem);
  font-weight: normal;
  letter-spacing: -0.2rem;
  line-height: clamp(4rem, 4vw, 6.2rem);
`;

HeaderSerif.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderSerif.defaultProps = {
  as: null,
};

//

export const HeaderSans = (props) => {
  const { children, as } = props;

  return (
    <HeaderSansSt as={as} {...props}>
      {children}
    </HeaderSansSt>
  );
};

const HeaderSansSt = styled.h1`
  font-family: var(--halyard-display);
  font-size: clamp(4rem, 4vw, 5.6rem);
  font-weight: normal;
  letter-spacing: -0.02rem;
  line-height: clamp(4rem, 3.2vw, 5.6rem);
`;

HeaderSans.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderSans.defaultProps = {
  as: null,
};

//

export const HeaderThree = (props) => {
  const { children, as } = props;

  return (
    <HeaderThreeSt as={as} {...props}>
      {children}
    </HeaderThreeSt>
  );
};

const HeaderThreeSt = styled.h1`
  font-family: var(--halyard-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: normal;
  letter-spacing: 0.01rem;
  line-height: clamp(2.4rem, 2vw, 3.6rem);
`;

HeaderThree.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderThree.defaultProps = {
  as: null,
};

//

export const HeaderTwoSerif = (props) => {
  const { children, as } = props;

  return (
    <HeaderTwoSerifSt as={as} {...props}>
      {children}
    </HeaderTwoSerifSt>
  );
};

const HeaderTwoSerifSt = styled.h2`
  font-family: var(--optima);
  font-size: clamp(2.8rem, 3vw, 4.8rem);
  font-weight: normal;
  letter-spacing: 0.01rem;
  line-height: clamp(3.4rem, 3.8vw, 4.8rem);
`;

HeaderTwoSerif.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderTwoSerif.defaultProps = {
  as: null,
};

//

export const HeaderThreeSerif = (props) => {
  const { children, as } = props;

  return (
    <HeaderThreeSerifSt as={as} {...props}>
      {children}
    </HeaderThreeSerifSt>
  );
};

const HeaderThreeSerifSt = styled.h2`
  font-family: var(--optima);
  font-size: clamp(2.4rem, 2.6vw, 3.6rem);
  font-weight: normal;
  letter-spacing: 0.01rem;
  line-height: clamp(3.4rem, 3.8vw, 4.8rem);
`;

HeaderThreeSerif.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderThreeSerif.defaultProps = {
  as: null,
};

//

export const HeaderSmall = (props) => {
  const { children, as } = props;

  return (
    <HeaderSmallSt as={as} {...props}>
      {children}
    </HeaderSmallSt>
  );
};

const HeaderSmallSt = styled.h3`
  font-family: var(--halyard-display);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.06rem;
  line-height: 2.2rem;
`;

HeaderSmall.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

HeaderSmall.defaultProps = {
  as: null,
};

//

export const AllCapsHeader = (props) => {
  const { children, as } = props;

  return (
    <AllCapsHeaderSt as={as} {...props}>
      {children}
    </AllCapsHeaderSt>
  );
};

const AllCapsHeaderSt = styled.h3`
  font-family: var(--halyard-display);
  font-size: 1.4rem;
  font-weight: normal;
  letter-spacing: 0.2rem;
  line-height: 2rem;
  text-transform: uppercase;
`;

AllCapsHeader.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

AllCapsHeader.defaultProps = {
  as: null,
};
