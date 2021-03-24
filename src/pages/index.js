import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SEO from '../components/SEO';

//

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      Homepage.
      <SEO />
    </>
  );
};

export default HomePage;
