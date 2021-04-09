import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderSans, HeaderSerif } from '../Type/Headings';
import { ParagraphHuge } from '../Type/Copy';
import { ButtonLink } from '../Button/Button';

//

const BrandedHeading = ({ label, copy }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrandedHeadingSC theme={theme}>
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
        <ButtonLink
          label="Find a match made in heaven"
          theme={theme.contrast}
          to="/"
        />
      </div>
    </BrandedHeadingSC>
  );
};

export default BrandedHeading;

const BrandedHeadingSC = styled.section`
  padding: 0 var(--gutter);
  color: ${({ theme }) => theme.contrast};

  .heading {
    display: flex;
    justify-content: center;

    h1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

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

    p {
      margin-bottom: calc(var(--gutter) * 1.5);
    }
  }
`;

BrandedHeading.propTypes = {
  label: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
