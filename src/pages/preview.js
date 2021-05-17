import React from 'react';
import { Match, navigate } from '@reach/router';
import { Helmet } from 'react-helmet';

import Preview from '../components/Preview';

//

const PreviewPage = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <Match path="/preview">
      {({ match, location }) => {
        if (!match) {
          navigate('/');
          return null;
        }
        return <Preview location={location} />;
      }}

      {/* {({ match, location }) =>
        match ? navigate('/') : <Preview location={location} />
      } */}
    </Match>
  </>
);

export default PreviewPage;
