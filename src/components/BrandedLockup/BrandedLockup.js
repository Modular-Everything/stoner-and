import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { KaleidoscopeSq } from '../Kaleidoscope/KaleidoscopeWrappers';
import Placeholder from '../../images/placeholders/square.jpeg';
import Gem from '../../images/shapes/gem-clip.svg';
import SingleColCopy from '../SingleColCopy';
import { ThemeContext } from '../../contexts/ThemeContext';

//

const BrandedLockup = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrandedLockupSC theme={theme}>
      <div className="overlay">
        <Lockup>
          <h3>Stoner&amp;</h3>
          <h4>Bespoke</h4>
        </Lockup>

        <SingleColCopy
          title="State of the art techniques bring your dreams to life"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis. Lacus luctus accumsan tortor posuere ac."
        />
      </div>

      <div className="kaleidoscope">
        <KaleidoscopeSq image={Placeholder} />
      </div>
    </BrandedLockupSC>
  );
};

export default BrandedLockup;

const Lockup = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: Optima;
    font-size: clamp(3.2rem, 10vw, 10rem);
    line-height: 0.75;

    @media (min-width: 640px) {
      height: clamp(6.8rem, 11vw, 10rem);
      line-height: unset;
    }
  }

  h4 {
    font-family: Halyard Display;
    font-size: clamp(3.2rem, 10vw, 10rem);
    line-height: 0.75;

    @media (min-width: 640px) {
      height: clamp(6.8rem, 11vw, 10rem);
      transform: translateY(-3.4rem) translateX(-6.4rem);
      line-height: unset;
    }
  }
`;

const BrandedLockupSC = styled.section`
  position: relative;
  min-height: 50vw;
  color: ${({ theme }) => theme.contrast};

  .overlay {
    display: flex;
    position: relative;
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 50vw;
    text-align: center;

    @media (min-width: 640px) {
      align-items: unset;
      text-align: unset;
    }

    ${Lockup} {
      margin-bottom: calc(var(--gutter) * 3);

      @media (min-width: 640px) {
        align-self: flex-end;
        margin-bottom: 0;
      }
    }
  }

  .kaleidoscope {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;

    @media (min-width: 640px) {
      opacity: 0.45;
    }

    @media (min-width: 1024px) {
      opacity: 0.65;
    }

    canvas {
      mask-image: url(${Gem});
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: url(${Gem});
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }
  }
`;
