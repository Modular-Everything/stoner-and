import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as qs from 'query-string';
import * as sanityClient from '@sanity/client';

import Layout from '../Layout';
import Loading from '../Loading';
import SEO from '../SEO';

//

const Preview = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  if (!location) return null;

  const urlParams = qs.parse(location.search);
  const { _id } = urlParams;

  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
    token: process.env.GATSBY_SANITY_TOKEN,
    apiVersion: '2021-05-17',
    useCdn: false,
  });

  const query = `*[_id == "${_id}"]`;

  client.fetch(query).then((docs) => {
    console.log('Documents matching this slug:');
    docs.forEach((doc) => {
      console.log(doc);
    });
  });

  if (loading)
    return (
      <Layout>
        <Loading setLoading={setLoading} />
      </Layout>
    );

  return (
    <Layout>
      Preview
      <SEO />
    </Layout>
  );
};

export default Preview;

Preview.propTypes = {
  location: PropTypes.object.isRequired,
};
