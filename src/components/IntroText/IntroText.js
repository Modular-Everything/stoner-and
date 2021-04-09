import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AllCapsDetail, HeaderSerif } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

const IntroText = ({ title, subtitle, copy }) => (
  <IntroTextSt>
    {subtitle && <AllCapsDetail as="h2">{subtitle}</AllCapsDetail>}
    <HeaderSerif as="h1">{title}</HeaderSerif>

    {copy && (
      <div className="copy">
        {copy.map((text) => (
          <ParagraphSmall>{text}</ParagraphSmall>
        ))}
      </div>
    )}
  </IntroTextSt>
);

export default IntroText;

const IntroTextSt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 88rem;
  margin: 0 auto;
  color: var(--black);

  h1 {
    margin-top: 1.6rem;
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .copy {
    margin-top: 2.4rem;
    p {
      margin-bottom: 1.6rem;

      &:first-of-type {
        text-indent: 1.6rem;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    @media (min-width: 640px) {
      columns: 2;
      column-gap: 2.4rem;

      p {
        margin-bottom: 0;
      }
    }
  }
`;

IntroText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  copy: PropTypes.array,
};

IntroText.defaultProps = {
  subtitle: null,
  copy: null,
};
