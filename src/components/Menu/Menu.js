import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './Navigation';

//

const Menu = ({ open, page }) => {
  const container = {
    enter: () => ({
      rotate: 90,
    }),
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
    exit: () => ({
      rotate: 45,
    }),
  };

  let activePage;
  switch (page.menuPage) {
    case 'findUs':
      activePage = <h1>Find Us</h1>;
      break;
    case 'contact':
      activePage = <h1>Contact</h1>;
      break;
    default:
      activePage = (
        <Navigation variants={container} setMenuPage={page.setMenuPage} />
      );
  }

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          body {
            overflow: ${open ? 'hidden' : 'unset'}
          }
        `}</style>
      </Helmet>

      <AnimatePresence initial={false}>
        <MenuSC
          role="navigation"
          variants={container}
          animate={open ? 'open' : 'closed'}
          interactive={!!open}
        >
          {activePage}
        </MenuSC>
      </AnimatePresence>
    </>
  );
};

export default Menu;

const MenuSC = styled(motion.nav)`
  display: flex;
  position: absolute;
  z-index: 500;
  top: var(--headerHeight);
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - var(--headerHeight));
  background-color: rgba(240, 240, 230, 0.97);
  pointer-events: ${({ interactive }) => (interactive ? 'unset' : 'none')};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 0 clamp(calc(var(--gutter) / 2), 4vh, calc(var(--gutter) * 3)) 0;
      padding: 0;

      &:last-of-type {
        margin: 0;
      }
    }

    a {
      transition: var(--ease-links);
      color: var(--black);
      text-decoration: none;
    }

    button {
      margin: 0;
      padding: 0;
      transition: var(--ease-links);
      border: 0;
      outline: none;
      background: transparent;
      color: var(--black);
      letter-spacing: inherit;
      cursor: pointer;
    }

    a:hover,
    button:hover {
      opacity: 0.75;
    }
  }
`;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  page: PropTypes.shape({
    menuPage: PropTypes.string.isRequired,
    setMenuPage: PropTypes.func.isRequired,
  }).isRequired,
};
