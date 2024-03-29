import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TransitionState } from 'gatsby-plugin-transition-link';

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

      <TransitionState>
        {({ mount, transitionStatus }) => (
          <>
            <Helmet>
              <link
                rel="stylesheet"
                href="https://use.typekit.net/wgr2qyf.css"
              />
              <style type="text/css">{`
                body {
                  transition: 250ms ease background, 250ms ease color;

                  background-color: ${
                    mount && transitionStatus === 'entered'
                      ? theme.primary
                      : 'var(--off-white)'
                  };

                  color: ${
                    mount && transitionStatus === 'entered'
                      ? theme.contrast
                      : 'var(--black)'
                  };
                }
              `}</style>
            </Helmet>

            <motion.div
              style={{ opacity: 0 }}
              animate={{
                opacity: mount && transitionStatus === 'entered' ? 1 : 0,
              }}
            >
              <Header gradient={gradient} />
              <main>{children}</main>
              <Footer />
            </motion.div>
          </>
        )}
      </TransitionState>
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
