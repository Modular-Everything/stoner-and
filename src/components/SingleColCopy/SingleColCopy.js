import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HeaderTwoSerif } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';
import alignItems from '../../helpers/alignItems';

const SingleColCopy = ({ title, copy, direction }) => {
  const align = alignItems(direction);

  return (
    <SingleColCopySt textDirection={align.textDirection}>
      {title && <HeaderTwoSerif as="h1">{title}</HeaderTwoSerif>}

      <div className="copy">
        <ParagraphSmall as="p">{copy}</ParagraphSmall>
      </div>
    </SingleColCopySt>
  );
};

export default SingleColCopy;

const SingleColCopySt = styled.section`
  color: ${({ theme }) => theme.contrast};

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
