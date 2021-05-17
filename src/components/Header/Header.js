import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pivot as Hamburger } from 'hamburger-react';
import { graphql, useStaticQuery } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import { BsArrowLeft as BackIcon } from 'react-icons/bs';

import { ThemeContext } from '../../contexts/ThemeContext';
import Logo from '../../images/logo.fluid.inline.svg';
import Container from '../Container';
import Menu from '../Menu/Menu';
import { AnimateIn } from '../AnimateIn';

//

const Header = ({ gradient }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPage, setMenuPage] = useState('navigation');
  const { theme } = useContext(ThemeContext);

  const query = graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  const { site } = useStaticQuery(query);
  const { title } = site.siteMetadata;

  return (
    <AnimateIn>
      <HeaderSC theme={theme} menuOpen={menuOpen}>
        <HeaderContainer>
          <div className="logo">
            <TransitionLink
              to="/"
              exit={{
                length: 1,
              }}
              entry={{
                delay: 0.6,
              }}
            >
              <Logo alt={title} aria-label={title} />
            </TransitionLink>
          </div>

          <div>
            {menuPage === 'navigation' ? (
              <div
                className={`hamburgerHandler ${menuOpen ? 'open' : 'closed'}`}
              >
                <Hamburger
                  toggled={menuOpen}
                  toggle={setMenuOpen}
                  direction="right"
                  label="Show menu"
                  size={24}
                  // color={menuOpen ? 'var(--black)' : theme.contrast}
                />
              </div>
            ) : (
              <BackButton
                type="button"
                onClick={() => setMenuPage('navigation')}
              >
                <BackIcon />
              </BackButton>
            )}
          </div>
        </HeaderContainer>
      </HeaderSC>

      <Menu open={menuOpen} page={{ menuPage, setMenuPage }} />

      {gradient && <Skrim />}
    </AnimateIn>
  );
};

export default Header;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSC = styled.header`
  position: fixed;
  z-index: 500;
  top: 0;
  width: 100%;
  height: var(--headerHeight);

  .hamburgerHandler {
    transition: var(--ease-color);
    transition-delay: 0s;

    &.open {
      /* transition-delay: 1s; */
      color: var(--black);
    }

    &.closed {
      /* transition-delay: 0s; */
      color: ${({ theme }) => theme.contrast};
    }

    .react-hamburger div div {
      background: inherit;
    }
  }

  a {
    transition: var(--ease-links), var(--ease-color);
    transition-delay: ${({ menuOpen }) => (menuOpen ? '0s' : '1s !important')};
    opacity: 1;
    color: ${({ menuOpen, theme }) =>
      menuOpen ? 'var(--black)' : theme.contrast};

    &:hover {
      opacity: 0.8;
    }
  }

  .logo {
    max-width: 12rem;
    color: ${({ menuOpen, theme }) =>
      menuOpen ? 'var(--black)' : theme.contrast};

    @media (min-width: 768px) {
      max-width: 16rem;
    }

    svg {
      width: 100%;
    }
  }
`;

const Skrim = styled.div`
  position: fixed;
  z-index: 400;
  top: 0;
  width: 100%;
  height: var(--headerHeight);
  background: var(--fade-dark);
`;

const BackButton = styled.button`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
  margin: 0;
  padding: 0;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--black);
  cursor: pointer;
  user-select: none;

  svg {
    position: relative;
    top: 0.2rem;
    width: 3.2rem;
    height: 3.2rem;
  }
`;

Header.propTypes = {
  gradient: PropTypes.bool,
};

Header.defaultProps = {
  gradient: true,
};
