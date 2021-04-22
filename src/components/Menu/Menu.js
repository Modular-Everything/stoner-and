import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import { HeaderSerif } from '../Type/Headings';

//

const Menu = ({ open }) => {
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

  const item = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          body {
            overflow: ${open ? 'hidden' : 'unset'}
          }
        `}</style>
      </Helmet>

      <MenuSC
        role="navigation"
        variants={container}
        animate={open ? 'open' : 'closed'}
        interactive={!!open}
      >
        <motion.ul variants={container}>
          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <Link to="/engagement">Engagement</Link>
            </HeaderSerif>
          </motion.li>

          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <Link to="/legacy">Legacy</Link>
            </HeaderSerif>
          </motion.li>

          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <Link to="/bespoke">Bespoke</Link>
            </HeaderSerif>
          </motion.li>

          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <button type="button">Find Us</button>
            </HeaderSerif>
          </motion.li>

          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <Link to="/craftspeople">Craftspeople</Link>
            </HeaderSerif>
          </motion.li>

          <motion.li variants={item}>
            <HeaderSerif as="h6">
              <button type="button">Contact</button>
            </HeaderSerif>
          </motion.li>
        </motion.ul>
      </MenuSC>
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
      background: transparent;
      color: var(--black);
      letter-spacing: inherit;
    }

    a:hover,
    button:hover {
      opacity: 0.75;
    }
  }
`;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};
