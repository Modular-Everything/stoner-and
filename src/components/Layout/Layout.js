import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../Header';
import Footer from '../Footer/Footer';
import LoadingScreen from '../Loading';
import logrocket from '../../helpers/logrocket';

//

const Layout = ({ gradient, children }) => {
  logrocket();
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <>
        <GlobalStyles />
        <Typography />
        <LoadingScreen setLoading={setLoading} />
      </>
    );

  return (
    <>
      <GlobalStyles />
      <Typography />

      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/wgr2qyf.css" />
        <style type="text/css">{`
          body {
            background-color: ${theme.primary};
            color: ${theme.contrast};
          }
        `}</style>
      </Helmet>

      <Header gradient={gradient} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.bool,
};

Layout.defaultProps = {
  gradient: false,
};
