import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

//

const OpenGraphMeta = ({ pageTitle, url, image, description, siteName }) => (
  <Helmet defer={false}>
    <meta property="og:title" content={pageTitle} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content="en_GB" />
  </Helmet>
);

export default OpenGraphMeta;

OpenGraphMeta.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
};
