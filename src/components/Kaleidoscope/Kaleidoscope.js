import React from 'react';
import PropTypes from 'prop-types';

//

const Kaleidoscope = () => <canvas />;

//

export const KaleidoscopeBg = ({ children }) => {
  console.log('ok');

  return (
    <section>
      {children && children}
      <Kaleidoscope />
    </section>
  );
};

KaleidoscopeBg.propTypes = {
  children: PropTypes.node,
};

KaleidoscopeBg.defaultProps = {
  children: null,
};
