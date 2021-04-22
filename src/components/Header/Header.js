import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pivot as Hamburger } from 'hamburger-react';
import { Link } from 'gatsby';
import { MdKeyboardBackspace as BackIcon } from 'react-icons/md';

import { ThemeContext } from '../../contexts/ThemeContext';
import Logo from '../../images/logo.fluid.inline.svg';
import Container from '../Container';
import Menu from '../Menu/Menu';

//

const Header = ({ gradient }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPage, setMenuPage] = useState('navigation');
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HeaderSC theme={theme}>
        <HeaderContainer>
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <nav role="main">
            {menuPage === 'navigation' ? (
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                direction="right"
                label="Show menu"
                size={24}
              />
            ) : (
              <BackButton
                type="button"
                onClick={() => setMenuPage('navigation')}
              >
                <BackIcon />
              </BackButton>
            )}
          </nav>
        </HeaderContainer>
      </HeaderSC>

      <Menu open={menuOpen} page={{ menuPage, setMenuPage }} />

      {gradient && <Skrim />}
    </>
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

  a {
    transition: var(--ease-links);
    opacity: 1;
    color: ${({ theme }) => theme.contrast};

    &:hover {
      opacity: 0.8;
    }
  }

  .logo {
    max-width: 12rem;
    color: ${({ theme }) => theme.contrast};

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
