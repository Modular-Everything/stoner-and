import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

//

export const AnimateIn = ({ threshold, triggerOnce, ...props }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce });

  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 300ms',
        opacity: inView ? 1 : 0,
      }}
      {...props}
    />
  );
};

AnimateIn.propTypes = {
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
};

AnimateIn.defaultProps = {
  threshold: 0.15,
  triggerOnce: true,
};
