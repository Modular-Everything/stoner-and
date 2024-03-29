import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import JewelleryDevice from '../components/JewelleryDevice/JewelleryDevice';
import ImageHeading from '../components/ImageHeading/ImageHeading';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter/Newsletter';
import Slider from '../components/Slider/Slider';

//

export const query = graphql`
  query BespokeQuery {
    page: sanityBespoke(_id: { regex: "/bespoke/" }) {
      title
      background {
        asset {
          url
          gatsbyImageData(width: 1920, formats: AUTO)
        }
        alt
      }
      heading {
        title
        copy
        _rawLink(resolveReferences: { maxDepth: 1 })
      }
      jewelleryDevice {
        title
        subtitle
        copy
      }
      newsletter {
        enable
        kaleidoscopeImage {
          asset {
            url
          }
        }
      }
      slides: slider {
        _key
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
    }
  }
`;

//

const BespokePage = ({ data }) => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--rich-black)',
      contrast: 'var(--off-white)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  const { page } = data;

  return (
    <Layout>
      <ImageHeading heading={page.heading} background={page.background} />

      <Content>
        <ContentContainer>
          <JewelleryDevice
            title={page.jewelleryDevice.title}
            subtitle={page.jewelleryDevice.subtitle}
            copy={page.jewelleryDevice.copy}
          />

          <Slider slides={page.slides} />

          {page.newsletter.enable && (
            <Newsletter
              image={
                (page.newsletter.kaleidoscopeImage &&
                  page.newsletter.kaleidoscopeImage.asset.url) ||
                page.background.asset.url
              }
            />
          )}
        </ContentContainer>
      </Content>

      <SEO title={page.title} data-react-helmet="true" />
    </Layout>
  );
};

export default BespokePage;

const Content = styled.div`
  margin-top: calc(-1 * (var(--gutter) * 6));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 6);
  }
`;

BespokePage.propTypes = {
  data: PropTypes.object.isRequired,
};
