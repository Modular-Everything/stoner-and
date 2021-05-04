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
          <BrandedLockup
            title="Bespoke"
            heading="State of the art techniques bring your dreams to life"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis. Lacus luctus accumsan tortor posuere ac."
          />
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
  margin-top: calc(var(--headerHeight) + (var(--gutter) * 2));

  @media (min-width: 768px) {
    margin-top: calc(var(--headerHeight) + var(--gutter));
  }
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 6);
  }
`;

LegacyPage.propTypes = {
  data: PropTypes.object.isRequired,
};