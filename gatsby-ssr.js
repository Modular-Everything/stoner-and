import React from 'react';
import Layout from './src/components/Layout';
import { ThemeProvider } from './src/contexts/ThemeContext';

export function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
}
