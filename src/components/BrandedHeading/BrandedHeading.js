import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderSans, HeaderSerif } from '../Type/Headings';
import { ParagraphHuge } from '../Type/Copy';
import { ButtonLink } from '../Button/Button';

//

const BrandedHeading = ({ label, copy, cta, direction }) => {
  const { theme } = useContext(ThemeContext);

  let textDirection;
  let flexDirection;
  switch (direction) {
    case 'left':
      textDirection = 'left';
      flexDirection = 'flex-start';
      break;
    case 'right':
      textDirection = 'right';
      flexDirection = 'flex-end';
      break;
    default:
      textDirection = 'center';
      flexDirection = 'center';
  }

  return (
    <BrandedHeadingSC
      theme={theme}
      textDirection={textDirection}
      flexDirection={flexDirection}
    >
      <div className="heading">
        <h1>
          <HeaderSerif as="span">
            Stoner<em>&amp;</em>
          </HeaderSerif>
          <HeaderSans as="span">{label}</HeaderSans>
        </h1>
      </div>

      <div className="copy">
        <ParagraphHuge as="p">{copy}</ParagraphHuge>
        {cta && <ButtonLink label={cta} theme={theme.contrast} to="/" />}
      </div>
    </BrandedHeadingSC>
  );
};

export default BrandedHeading;

const BrandedHeadingSC = styled.section`
  padding: 0 var(--gutter);
  color: ${({ theme }) => theme.contrast};

  @media (min-width: 640px) {
    padding: 0;
  }

  .heading {
    display: flex;
    justify-content: center;

    @media (min-width: 640px) {
      justify-content: ${({ flexDirection }) => flexDirection};
    }

    h1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media (min-width: 640px) {
        justify-content: ${({ flexDirection }) => flexDirection};
      }

      @media (min-width: 768px) {
        flex-wrap: nowrap;
      }

      em {
        position: relative;
        left: -0.2rem;
        margin-right: -0.2rem;
        font-style: normal;
      }
    }

    svg {
      height: 4.6rem;
    }
  }

  .copy {
    max-width: 54rem;
    margin-top: var(--gutter);
    text-align: center;

    @media (min-width: 640px) {
      text-align: ${({ textDirection }) => textDirection};
    }

    p {
      margin-bottom: calc(var(--gutter) * 1.5);
    }
  }
`;

BrandedHeading.propTypes = {
  label: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  cta: PropTypes.string,
  direction: PropTypes.string,
};

BrandedHeading.defaultProps = {
  direction: 'center',
  cta: null,
};
