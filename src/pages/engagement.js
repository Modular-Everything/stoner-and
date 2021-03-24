import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { KaleidoscopeBg } from '../components/Kaleidoscope/KaleidoscopeWrappers';

//

export const query = graphql`
  query EngagementQuery {
    page: sanityEngagement(_id: { eq: "engagement" }) {
      title
      kaleidoscopeImages {
        asset {
          url
          metadata {
            palette {
              darkVibrant {
                background
              }
            }
          }
        }
      }
    }
  }
`;

//

const EngagementPage = ({ data }) => {
  console.log(data);

  const { theme, setTheme } = useContext(ThemeContext);

  const { page } = data;
  const { kaleidoscopeImages } = page;
  const random = Math.floor(Math.random() * kaleidoscopeImages.length);

  const [image, setImage] = useState(kaleidoscopeImages[random]);

  useEffect(() => {
    setTheme({
      ...theme,
      contrast: image.asset.metadata.palette.darkVibrant.background,
    });
    console.log(theme);
  }, []);

  return (
    <>
      <Header />

      <KaleidoscopeBg image={`${image.asset.url}?w=1080&h=1080`} />

      <SEO title="Engagement" />
    </>
  );
};

export default EngagementPage;
