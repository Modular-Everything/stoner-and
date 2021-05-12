import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

//

export const ButtonCallback = (props) => {
  const { label, theme, as } = props;
  return (
    <ButtonSC as="button" type="button" {...props} theme={theme}>
      {label}
    </ButtonSC>
  );
};

ButtonCallback.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

ButtonCallback.defaultProps = {
  theme: null,
  as: TransitionLink,
};

//

export const ButtonLink = ({ label, to, theme }) => (
  <ButtonSC
    as={TransitionLink}
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
  </ButtonSC>
);

//

const ButtonSC = styled.a`
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
  cursor: pointer;

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
