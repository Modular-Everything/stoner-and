import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

//

export const ButtonLink = ({ label, to, theme }) => (
  <ButtonLinkSC
    to={to}
    theme={theme}
    exit={{
      length: 1,
    }}
    entry={{
      delay: 0.6,
    }}
  >
    {label}
  </ButtonLinkSC>
);

const ButtonLinkSC = styled(TransitionLink)`
  display: inline-block;
  max-width: 40rem;
  padding: 1.6rem 3.2rem;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) background-color,
    1s cubic-bezier(0.075, 0.82, 0.165, 1) color;
  border: 1px solid ${({ theme }) => theme || 'var(--black)'};
  background-color: rgba(255, 255, 255, 0);
  color: ${({ theme }) => theme || 'var(--black)'};
  font-size: 1.4rem;
  letter-spacing: 0.4rem;
  line-height: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme || 'var(--black)'};
    color: ${({ theme }) =>
      theme === 'var(--white)' ? 'var(--black)' : 'var(--white)'};
  }
`;

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

ButtonLink.defaultProps = {
  theme: null,
};
