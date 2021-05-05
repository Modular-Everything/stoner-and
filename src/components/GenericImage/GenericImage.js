import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { AnimateIn } from '../AnimateIn';

/**
 *
 * @param {object} src Receives contents of gatsbyImageData
 * @param {string} alt Alternate text for the image
 * @param {bool} fadeIn Whether to fade the when in view
 * @returns An image with no constraints or styles
 */

const GenericImage = ({ src, alt, fadeIn }) => {
  const image = getImage(src);

  if (!fadeIn) return <GatsbyImage image={image} alt={alt || ''} />;

  return (
    <AnimateIn>
      <GatsbyImage image={image} alt={alt || ''} />
    </AnimateIn>
  );
};

export default GenericImage;

GenericImage.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  fadeIn: PropTypes.bool,
};

GenericImage.defaultProps = {
  alt: null,
  fadeIn: true,
};
