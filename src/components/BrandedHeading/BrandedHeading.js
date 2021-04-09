import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts/ThemeContext';
import Logo from '../../images/logo.fluid.inline.svg';
import { HeaderSans } from '../Type/Headings';
import { ParagraphHuge } from '../Type/Copy';
import { ButtonLink } from '../Button/Button';

//

const BrandedHeading = ({ label, copy }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrandedHeadingSC theme={theme}>
      <div className="heading">
        <Logo />
        <HeaderSans>{label}</HeaderSans>
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
  color: ${({ theme }) => theme.contrast};

  .heading {
    display: flex;
    justify-content: center;

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
