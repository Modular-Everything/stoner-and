import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//

export const ThemeContext = createContext();

//

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primary: 'var(--off-white)',
    contrast: 'var(--black)',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
