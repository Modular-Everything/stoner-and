import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Container from '../Container';
import BrandedHeading from '../BrandedHeading';

//

const ImageHeading = ({ heading, background }) => {
  const image = getImage(background.asset.gatsbyImageData);
  const { alt } = background;

  return (
    <ImageHeadingSC>
      {heading && (
        <ContentContainer>
          <BrandedHeading
            label={heading.title}
            copy={heading.copy}
            cta={heading._rawLink}
            direction="right"
          />
        </ContentContainer>
      )}

      <div className="background">
        <Skrim />
        <GatsbyImage image={image} alt={alt} />
      </div>
    </ImageHeadingSC>
  );
};

export default ImageHeading;

const ImageHeadingSC = styled.section`
  position: relative;
  z-index: 0;
  height: calc(110vh - var(--headerHeight));
  padding-top: var(--headerHeight);
  background: no-repeat center;
  background-size: cover;

  .background {
    .gatsby-image-wrapper {
      position: absolute;
      z-index: 25;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Skrim = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    360deg,
    var(--rich-black) 0%,
    rgba(0, 0, 0, 0) 75%
  );

  @media (min-width: 768px) {
    background-image: linear-gradient(
      360deg,
      var(--rich-black) 0%,
      rgba(0, 0, 0, 0) 35%
    );
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  position: relative;
  z-index: 100;
  align-items: center;
  justify-content: flex-end;
  height: 70%;
`;

ImageHeading.propTypes = {
  heading: PropTypes.object,
  background: PropTypes.object.isRequired,
};

ImageHeading.defaultProps = {
  heading: null,
};
