import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

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
          <button type="button" onClick={() => setMenuPage('findUs')}>
            Find Us
          </button>
        </HeaderSerif>
      </motion.li>

      <motion.li variants={item}>
        <HeaderSerif as="h6">
          <Link to="/craftspeople">Craftspeople</Link>
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
