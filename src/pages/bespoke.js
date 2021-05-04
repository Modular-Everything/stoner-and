import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter/Newsletter';
import Slider from '../components/Slider/Slider';
import BrandedLockup from '../components/BrandedLockup/BrandedLockup';

//

export const query = graphql`
  query BespokeQuery {
    page: sanityLegacy(_id: { regex: "/legacy/" }) {
      slides: slider {
        title
        subtitle
        background {
          alt
          asset {
            gatsbyImageData(width: 432, formats: AUTO)
            metadata {
              palette {
                dominant {
                  foreground
                  background
                }
              }
            }
          }
        }
        _rawLink(resolveReferences: { maxDepth: 1 })
      }
    }
  }
`;

//

const LegacyPage = ({ data }) => {
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

  console.log(page);

  return (
    <Layout>
      <Content>
        <ContentContainer>
          <BrandedLockup />
          <Slider slides={page.slides} />
          <Newsletter />
        </ContentContainer>
      </Content>

      <SEO title="Bespoke" />
    </Layout>
  );
};

export default LegacyPage;

const Content = styled.div`
  margin-top: calc(var(--headerHeight) + var(--gutter));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 6);
  }
`;

LegacyPage.propTypes = {
  data: PropTypes.object.isRequired,
};
