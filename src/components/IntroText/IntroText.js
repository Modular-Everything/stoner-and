import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AllCapsDetail, HeaderSerif } from '../Type/Headings';
import TwoColText from '../TwoColText';
import { AnimateIn } from '../AnimateIn';

const IntroText = ({ title, subtitle, copy }) => (
  <IntroTextSt>
    <AnimateIn>
      {subtitle && <AllCapsDetail as="h2">{subtitle}</AllCapsDetail>}
      <HeaderSerif as="h1">{title}</HeaderSerif>

      {copy && (
        <div className="copy">
          <TwoColText copy={copy} />
        </div>
      )}
    </AnimateIn>
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
    text-align: center;
  }

  h2 {
    margin-bottom: var(--gutter);
    text-align: center;
  }

  .copy {
    margin-top: calc(var(--gutter) * 1.5);
  }
`;

IntroText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  copy: PropTypes.string,
};

IntroText.defaultProps = {
  subtitle: null,
  copy: null,
};
