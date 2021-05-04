import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HeaderTwoSerif } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';
import alignItems from '../../helpers/alignItems';
import { ThemeContext } from '../../contexts/ThemeContext';

const SingleColCopy = ({ title, copy, direction }) => {
  const align = alignItems(direction);
  const { theme } = useContext(ThemeContext);

  return (
    <SingleColCopySt theme={theme} textDirection={align.textDirection}>
      {title && <HeaderTwoSerif as="h1">{title}</HeaderTwoSerif>}

      <div className="copy">
        <ParagraphSmall as="p">{copy}</ParagraphSmall>
      </div>
    </SingleColCopySt>
  );
};

export default SingleColCopy;

const SingleColCopySt = styled.section`
  display: inherit;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.contrast};

  @media (min-width: 640px) {
    display: unset;
  }

  h1 {
    max-width: 54rem;
    margin-bottom: calc(var(--gutter) / 2);
    text-align: center;

    @media (min-width: 640px) {
      text-align: ${({ textDirection }) => textDirection};
    }
  }

  .copy {
    max-width: 42rem;
    text-align: center;

    @media (min-width: 640px) {
      text-align: ${({ textDirection }) => textDirection};
    }
  }
`;

SingleColCopy.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

SingleColCopy.defaultProps = {
  title: null,
  direction: 'left',
};
