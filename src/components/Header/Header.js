import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Pivot as Hamburger } from 'hamburger-react';
import { Link } from 'gatsby';

import Logo from '../../images/logo.inline.svg';
import Container from '../Container';

//

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderSC>
      <HeaderContainer>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <nav role="main">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            direction="right"
            label="Show menu"
            size={24}
          />
        </nav>
      </HeaderContainer>
    </HeaderSC>
  );
};

export default Header;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderSC = styled.header`
  height: 7.7rem;
  background: var(--fade-dark);

  @media (min-width: 768px) {
    height: 10rem;
  }

  a {
    transition: var(--ease-links);
    color: var(--black);

    &:hover {
      color: var(--rich-black);
    }
  }

  .logo {
    color: var(--black);
  }
`;
