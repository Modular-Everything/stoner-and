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

      <p>Hello!</p>
      <button
        type="button"
        onClick={() =>
          setTheme({ primary: 'var(--black)', contrast: 'var(--off-white)' })
        }
      >
        Click me
      </button>
      <button
        type="button"
        onClick={() =>
          setTheme({
            primary: 'var(--off-white)',
            contrast: 'var(--off-black)',
          })
        }
      >
        Click me next
      </button>

      <SEO />
    </>
  );
};

export default HomePage;
