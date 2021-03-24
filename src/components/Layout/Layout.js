import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Header from '../Header/Header';

//

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />

    <Header />
    <main>{children}</main>
  </>
);

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
