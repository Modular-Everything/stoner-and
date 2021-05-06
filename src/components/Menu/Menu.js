import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './Navigation';
import FindUs from '../../images/placeholders/findus.inline.svg';
import Contact from '../../images/placeholders/contact.inline.svg';

//

const Menu = ({ open, page }) => {
  const container = {
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
  };

  let activePage;
  switch (page.menuPage) {
    case 'findUs':
      activePage = (
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FindUs style={{ width: '75vw', maxHeight: '63rem' }} />
        </motion.h1>
      );
      break;
    case 'contact':
      activePage = (
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Contact style={{ width: '75vw' }} />
        </motion.h1>
      );
      break;
    default:
      activePage = (
        <Navigation
          variants={container}
          setMenuPage={page.setMenuPage}
          initial="enter"
          animate={open ? 'open' : 'closed'}
          exit="exit"
        />
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

      <AnimatePresence>
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
  position: fixed;
  z-index: 450;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  background-color: rgba(240, 240, 230, 0.97);
  pointer-events: ${({ interactive }) => (interactive ? 'unset' : 'none')};

  ul {
    display: flex;
    position: relative;
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

      &.active {
        opacity: 0.5;
        pointer-events: none;
      }
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
