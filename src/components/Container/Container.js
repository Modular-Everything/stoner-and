import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

//

const breakpoints = [640, 768, 1024, 1280];

const PageContainer = styled.div`
  position: relative;
  width: ${({ padding }) =>
    padding ? css`calc(100% - (var(--gutter) * 2))` : css`100%`};
  height: 100%;
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? css`0 var(--gutter)` : `0`)};

  ${breakpoints.map(
    (bp) => `@media(min-width: ${bp}px) { max-width: ${bp}px; }`
  )}
`;

const Container = ({ children, padding, className }) => (
  <PageContainer className={className} padding={padding}>
    {children}
  </PageContainer>
);

export default Container;

//

Container.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  padding: true,
  className: null,
};
