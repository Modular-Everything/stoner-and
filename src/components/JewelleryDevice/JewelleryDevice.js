import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import { useInView } from 'react-intersection-observer';

import { HeaderTwoSerif, AllCapsHeader } from '../Type/Headings';
import TwoColText from '../TwoColText/TwoColText';
import Gem from '../../images/shapes/gem.inline.svg';

//

const JewelleryDevice = ({ title, subtitle, copy }) => {
  const gemRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    const gems = gemRef.current.children;
    const gemLeft = gems[0].firstChild;
    const gemMiddle = gems[1].firstChild;
    const gemRight = gems[2].firstChild;

    const timeline = anime.timeline();

    const random = (arr) => Math.floor(Math.random() * arr.length);

    const loopShapes = () => {
      const rotations = [0, 90, 180, 360];
      const scales = [0.5, 0.8, 0.9, 1, 1.1, 1.2];

      setTimeout(() => {
        anime({
          targets: gemLeft,
          scale: scales[random(scales)],
          rotate: rotations[random(rotations)],
        });

        anime({
          targets: gemRight,
          scale: scales[random(scales)],
          rotate: rotations[random(rotations)],
        });

        anime({
          targets: gemMiddle,
          scale: scales[random(scales)],
          rotate: rotations[random(rotations)],
          complete: () => loopShapes(),
        });
      }, [1000]);
    };

    if (inView) {
      timeline.add({
        targets: gemLeft,
        translateX: [0, '-115%'],
        delay: 1000,
      });

      timeline.add(
        {
          targets: gemRight,
          translateX: [0, '115%'],
        },
        '-=1000'
      );

      timeline.add({
        targets: gemMiddle,
        rotate: 90,
      });

      timeline.add(
        {
          targets: gemLeft,
          translateX: 0,
        },
        '-=500'
      );

      timeline.add({
        targets: gemRight,
        translateX: 0,
        scaleX: 0.5,
        complete: () => loopShapes(),
      });
    }
  }, [inView]);

  return (
    <JewelleryDeviceSC>
      {subtitle && <AllCapsHeader as="h2">{subtitle}</AllCapsHeader>}

      {title && <HeaderTwoSerif as="h1">{title}</HeaderTwoSerif>}

      <article className="device" ref={ref}>
        <ul ref={gemRef}>
          <li>
            <Gem />
          </li>
          <li>
            <Gem />
          </li>
          <li>
            <Gem />
          </li>
        </ul>
      </article>

      {copy && (
        <div className="copy">
          <TwoColText copy={copy} />
        </div>
      )}
    </JewelleryDeviceSC>
  );
};

export default JewelleryDevice;
const JewelleryDeviceSC = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: var(--gutter);
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  .copy {
    max-width: 88rem;
  }

  .device {
    --deviceHeight: 16rem;

    @media (min-width: 500px) {
      --deviceHeight: 22rem;
    }

    @media (min-width: 640px) {
      --deviceHeight: 27rem;
    }

    width: 100%;
    height: var(--deviceHeight);
    margin: calc(var(--gutter) * 2) 0;

    ul {
      position: relative;
      width: 100%;
      height: var(--deviceHeight);
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        position: absolute;
        left: 50%;
        height: 100%;
        transform: translate(-50%, 0);
        transform-origin: center;
      }

      svg {
        width: 100%;
        height: 100%;
        transform-origin: center;
      }
    }
  }
`;

JewelleryDevice.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.array,
};

JewelleryDevice.defaultProps = {
  subtitle: null,
  title: null,
  copy: null,
};
