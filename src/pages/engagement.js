import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { KaleidoscopeBg } from '../components/Kaleidoscope/Kaleidoscope';

//

const EngagementPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <KaleidoscopeBg />

      <SEO title="Engagement" />
    </>
  );
};

export default EngagementPage;
