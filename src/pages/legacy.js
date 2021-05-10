import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText';
import Signpost from '../components/Signpost';
import Layout from '../components/Layout';

//

export const query = graphql`
  query LegacyQuery {
    page: sanityLegacy(_id: { regex: "/legacy/" }) {
      title
      introText {
        title
        subtitle
        copy {
          copy
        }
      }
      signposts {
        title
        caption
        _type
        _key
        _rawLink(resolveReferences: { maxDepth: 1 })
      }
      background {
        alt
        asset {
          gatsbyImageData(width: 1440, height: 900, formats: AUTO)
        }
      }
    }
  }
`;

//

const HomePage = ({ data }) => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  const { page } = data;

  const image = getImage(page.background.asset.gatsbyImageData);
  const { alt } = page.background;

  return (
    <Layout>
      <Content>
        <ContentContainer>
          <IntroText
            title={page.introText.title}
            subtitle={page.introText.subtitle}
            copy={page.introText.copy.copy}
          />

          <Signpost signs={page.signposts} />
        </ContentContainer>
      </Content>

      <PageBackground>
        <GatsbyImage image={image} alt={alt} />
      </PageBackground>

      <SEO />
    </Layout>
  );
};

export default HomePage;

const Content = styled.div`
  position: relative;
  margin-top: calc(var(--headerHeight) + var(--gutter));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;

const PageBackground = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.08;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

HomePage.propTypes = {
  data: PropTypes.object,
};

HomePage.defaultProps = {
  data: null,
};
