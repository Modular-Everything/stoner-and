import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../Header';
import Footer from '../Footer/Footer';

//

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyles />
      <Typography />

      <Helmet>
        <style type="text/css">{`
          body {
            background-color: ${theme.primary};
            color: ${theme.contrast};
          }
        `}</style>
      </Helmet>

      <Header gradient={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
