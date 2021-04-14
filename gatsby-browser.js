import React from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';

export function wrapPageElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>;
}
