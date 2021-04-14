import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import { KaleidoscopeBg } from '../components/Kaleidoscope/KaleidoscopeWrappers';
import BrandedHeading from '../components/BrandedHeading/BrandedHeading';
import Layout from '../components/Layout';

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
              darkMuted {
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
  const { theme, setTheme } = useContext(ThemeContext);

  const { page } = data;
  const { kaleidoscopeImages } = page;
  const random = Math.floor(Math.random() * kaleidoscopeImages.length);

  const [image] = useState(kaleidoscopeImages[random]);

  useEffect(() => {
    setTheme({
      ...theme,
      contrast: image.asset.metadata.palette.darkMuted.background,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Content>
        <BrandedHeading
          label="Engagement"
          copy="Hands on design process to create a truly unique ring for your important gift for your love"
        />
        <KaleidoscopeBg image={`${image.asset.url}?w=1080&h=1080`} />
      </Content>

      <SEO title="Engagement" />
    </Layout>
  );
};

export default EngagementPage;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

EngagementPage.propTypes = {
  data: PropTypes.object.isRequired,
};
