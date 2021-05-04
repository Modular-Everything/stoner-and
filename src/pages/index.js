import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText';
import Signpost from '../components/Signpost';
import Layout from '../components/Layout';

//

export const query = graphql`
  query HomepageQuery {
    page: sanityHomepage(_id: { regex: "/homepage/" }) {
      title
      introText {
        title
        subtitle
        copy
      }
      signposts {
        title
        caption
        _type
        _rawLink(resolveReferences: { maxDepth: 1 })
        background {
          asset {
            gatsbyImageData(width: 864, height: 864, formats: AUTO)
          }
          alt
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
      primary: 'var(--off-white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  const { page } = data;

  return (
    <Layout>
      <Content>
        <ContentContainer>
          <IntroText
            title={page.introText.title}
            subtitle={page.introText.subtitle}
            copy={page.introText.copy}
          />

          <Signpost signs={page.signposts} />
        </ContentContainer>
      </Content>

      <SEO />
    </Layout>
  );
};

export default HomePage;

const Content = styled.div`
  margin-top: calc(var(--headerHeight) + var(--gutter));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;

HomePage.propTypes = {
  data: PropTypes.object,
};

HomePage.defaultProps = {
  data: null,
};
