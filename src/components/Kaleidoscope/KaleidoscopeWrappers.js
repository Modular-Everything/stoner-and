import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Kaleidoscope } from './Kaleidoscope';

//

export const KaleidoscopeBg = ({ image, children }) => {
  const [landscape, setLandscape] = useState(null);

  useEffect(() => {
    const checkOrientation = () => {
      setLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation, false);
  }, [landscape]);

  if (!image) return null;

  return (
    <KaleidoscopeBgST isLandscape={landscape}>
      {children && children}
      <Kaleidoscope image={image} />
    </KaleidoscopeBgST>
  );
};

const KaleidoscopeBgST = styled.section`
  display: flex;
  position: absolute;
  z-index: -50;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  canvas {
    width: ${({ isLandscape }) => (isLandscape ? '100%' : 'unset')};
    height: ${({ isLandscape }) => (isLandscape ? 'unset' : '100%')};
  }
`;

KaleidoscopeBg.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

KaleidoscopeBg.defaultProps = {
  children: null,
};

//

export const KaleidoscopeSq = ({ image, children }) => {
  if (!image) return null;

  return (
    <KaleidoscopeSqST>
      {children && children}
      <Kaleidoscope image={image} />
    </KaleidoscopeSqST>
  );
};

const KaleidoscopeSqST = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;

  canvas {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
`;

KaleidoscopeSq.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

KaleidoscopeSq.defaultProps = {
  children: null,
};
