import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import TransitionLink from 'gatsby-plugin-transition-link';

import { HeaderSerif } from '../Type/Headings';

//

const Navigation = ({ variants, setMenuPage }) => {
  const item = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <motion.ul variants={variants}>
      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <TransitionLink
            to="/engagement"
            exit={{
              length: 1,
            }}
            entry={{
              delay: 0.6,
            }}
          >
            Engaged
          </TransitionLink>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <TransitionLink
            to="/legacy"
            exit={{
              length: 1,
            }}
            entry={{
              delay: 0.6,
            }}
          >
            Legacy
          </TransitionLink>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <TransitionLink
            to="/bespoke"
            exit={{
              length: 1,
            }}
            entry={{
              delay: 0.6,
            }}
          >
            Bespoke
          </TransitionLink>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <button type="button" onClick={() => setMenuPage('findUs')}>
            Find Us
          </button>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <TransitionLink
            to="/craftspeople"
            exit={{
              length: 1,
            }}
            entry={{
              delay: 0.6,
            }}
          >
            Craftspeople
          </TransitionLink>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <button type="button" onClick={() => setMenuPage('contact')}>
            Contact
          </button>
        </HeaderSerif>
      </motion.li>
    </motion.ul>
  );
};

export default Navigation;

Navigation.propTypes = {
  variants: PropTypes.object.isRequired,
  setMenuPage: PropTypes.func.isRequired,
};
