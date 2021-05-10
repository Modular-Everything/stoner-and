import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

//

const LegacyPage = () => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      ...
      <SEO />
    </Layout>
  );
};

export default LegacyPage;
