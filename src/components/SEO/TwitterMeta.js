import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

//

const TwitterMeta = ({ pageTitle, handle, description, image }) => (
  <Helmet defer={false}>
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={handle} />
    <meta name="twitter:description" content={description.substring(0, 200)} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default TwitterMeta;

TwitterMeta.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
