import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Circle } from 'react-preloaders2';

import SEO from '../SEO';

//

const LoadingScreen = ({ setLoading }) => {
  const skip = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (skip.current) {
      const timeout = setTimeout(() => {
        skip.current.style.display = 'block';
      }, 5000);
      timeoutId.current = timeout;
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <SEO title="Loading..." />

      <LoadingSC>
        <Circle color="var(--black)" />

        <p ref={skip}>
          This is taking awhile...{' '}
          <button type="button" onClick={() => setLoading(false)}>
            skip
          </button>
          ?
        </p>
      </LoadingSC>
    </>
  );
};

export default LoadingScreen;

const LoadingSC = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--off-white);
  color: var(--black);

  p {
    display: none;
    font-size: 1.4rem;
    line-height: 2rem;

    button {
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--black);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  #preloader {
    position: relative;
    height: 12rem;
    background: transparent;
  }
`;

LoadingScreen.propTypes = {
  setLoading: PropTypes.func.isRequired,
};
