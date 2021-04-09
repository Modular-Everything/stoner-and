import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

//

export const ButtonLink = ({ label, to, theme }) => (
  <ButtonLinkSC to={to} theme={theme}>
    {label}
  </ButtonLinkSC>
);

const ButtonLinkSC = styled(Link)`
  display: inline-block;
  max-width: 38rem;
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({ theme }) => theme || 'var(--black)'};
  color: ${({ theme }) => theme || 'var(--black)'};
  font-size: 1.4rem;
  letter-spacing: 0.4rem;
  line-height: 2rem;
  text-decoration: none;
  text-transform: uppercase;
`;

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

ButtonLink.defaultProps = {
  theme: null,
};
