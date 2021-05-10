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
    page: sanityBespoke(_id: { regex: "/bespoke/" }) {
      title
      slides: slider {
        title
        subtitle
        background {
          alt
          asset {
            gatsbyImageData(width: 720, formats: AUTO)
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
      newsletter {
        enable
        kaleidoscopeImage {
          asset {
            url
          }
        }
      }
      opening {
        title
        copy
        kaleidoscopeImage {
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
  }
`;

//

const LegacyPage = ({ data }) => {
  const { page } = data;

  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--off-white)',
      contrast:
        page.opening.kaleidoscopeImage.asset.metadata.palette.darkMuted
          .background,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  return (
    <Layout>
      <Content>
        <ContentContainer>
          <BrandedLockup
            title={page.title}
            heading={page.opening.title}
            copy={page.opening.copy}
            image={page.opening.kaleidoscopeImage.asset.url}
          />

          <Slider slides={page.slides} />

          {page.newsletter.enable && (
            <Newsletter
              image={
                (page.newsletter.kaleidoscopeImage &&
                  page.newsletter.kaleidoscopeImage.asset.url) ||
                page.opening.kaleidoscopeImage.asset.url
              }
            />
          )}
        </ContentContainer>
      </Content>

      <SEO title={page.title} data-react-helmet="true" />
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
