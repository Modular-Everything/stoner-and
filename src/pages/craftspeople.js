import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';
import GenericImage from '../components/GenericImage/GenericImage';
import TwoColText from '../components/TwoColText';
import useWindowWidth from '../hooks/useWindowWidth';

//

const GenericImageNode = ({ src, alt }) => (
  <section className="genericImage">
    <GenericImage src={src} alt={alt} />
  </section>
);

GenericImageNode.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

//

const ColumnCopyNode = ({ copy }) => (
  <section className="columnCopy">
    <TwoColText copy={copy} />
  </section>
);

ColumnCopyNode.propTypes = {
  copy: PropTypes.string.isRequired,
};

//

const ImageGridDefaultNode = ({ collection }) => (
  <section className="imageGrid">
    {collection.map((image) => (
      <GenericImage src={image.asset.gatsbyImageData} alt={image.alt} />
    ))}
  </section>
);

ImageGridDefaultNode.propTypes = {
  collection: PropTypes.array.isRequired,
};

//

const ImageGridCarouselNode = ({ collection }) => {
  SwiperCore.use([Pagination]);

  return (
    <section className="imageGrid--carousel">
      <Swiper pagination={{ clickable: false }} spaceBetween={16}>
        {collection.map((image) => (
          <>
            <SwiperSlide>
              <GenericImage src={image.asset.gatsbyImageData} alt={image.alt} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
};

ImageGridCarouselNode.propTypes = {
  collection: PropTypes.array.isRequired,
};

//

export const query = graphql`
  query CraftspeopleQuery {
    page: sanityCraftspeople(_id: { regex: "/craftspeople/" }) {
      title
      introText {
        title
        subtitle
        copy: _rawCopy
      }
      content {
        ... on SanityGenericImage {
          _key
          _type
          alt
          asset {
            gatsbyImageData(width: 1280, height: 720, formats: AUTO)
          }
        }
        ... on SanityColumnCopy {
          _key
          _type
          copy
        }
        ... on SanityImageGrid {
          _key
          _type
          image {
            alt
            asset {
              gatsbyImageData(width: 1000, height: 1200, formats: AUTO)
            }
          }
        }
      }
    }
  }
`;

const CraftspeoplePage = ({ data }) => {
  const { setTheme } = useContext(ThemeContext);
  const { page } = data;

  useEffect(() => {
    setTheme({
      primary: 'var(--off-white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Content>
        <ContentContainer>
          <IntroText
            title={page.introText.title}
            subtitle={page.introText.subtitle}
            copy={page.introText.copy.copy}
          />

          {page.content.map((node) => {
            switch (node._type) {
              case 'genericImage':
                return (
                  <GenericImageNode
                    key={node._key}
                    src={node.asset.gatsbyImageData}
                    alt={node.asset.alt}
                  />
                );

              case 'columnCopy':
                return <ColumnCopyNode key={node._key} copy={node.copy} />;

              case 'imageGrid':
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if (useWindowWidth() >= 768) {
                  return (
                    <ImageGridDefaultNode
                      key={node._key}
                      collection={node.image}
                    />
                  );
                }
                return (
                  <ImageGridCarouselNode
                    key={node._key}
                    collection={node.image}
                  />
                );

              default:
                return null;
            }
          })}
        </ContentContainer>
      </Content>

      <SEO title={page.title} />
    </Layout>
  );
};

export default CraftspeoplePage;

const Content = styled.div`
  margin: calc(var(--headerHeight) + var(--gutter)) 0;

  .columnCopy {
    max-width: 88rem;
    margin-right: auto;
    margin-left: auto;
  }

  .imageGrid {
    display: grid;
    grid-gap: var(--gutter);
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-content: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .imageGrid--carousel {
    .gatsby-image-wrapper {
      max-width: 46rem;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 2.4rem;
    }

    .swiper-pagination {
      .swiper-pagination-bullet {
        height: 0.2rem;
        /* transition: width 0.2s ease 0s; */
        transition: 250ms ease width, 250ms ease opacity;
        border: 0.1rem solid var(--off-white);
        border-radius: 0.1rem;
        background-color: transparent;
      }

      .swiper-pagination-bullet-active {
        width: 2.4rem;
        background-color: var(--off-white);
      }
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
    }
  }
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;

CraftspeoplePage.propTypes = {
  data: PropTypes.object.isRequired,
};
