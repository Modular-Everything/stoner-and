import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderSans, HeaderSerif } from '../Type/Headings';
import { ParagraphHuge } from '../Type/Copy';
import { ButtonLink } from '../Button/Button';
import alignItems from '../../helpers/alignItems';
import { AnimateIn } from '../AnimateIn';

//

const BrandedHeading = ({ label, copy, cta, direction }) => {
  const { theme } = useContext(ThemeContext);
  const align = alignItems(direction);

  return (
    <BrandedHeadingSC
      theme={theme}
      textDirection={align.textDirection}
      flexDirection={align.flexDirection}
    >
      <AnimateIn>
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
          {cta && cta.link && cta.title && (
            <ButtonLink
              label={cta.title}
              theme={theme.contrast}
              to={`/${cta.link._type}`}
            />
          )}
        </div>
      </AnimateIn>
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
  }

  a {
    margin-top: calc(var(--gutter) * 1.5);
  }
`;

BrandedHeading.propTypes = {
  label: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    link: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }),
  direction: PropTypes.string,
};

BrandedHeading.defaultProps = {
  direction: 'center',
  cta: null,
};
