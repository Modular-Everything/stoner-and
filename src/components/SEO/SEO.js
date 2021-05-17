import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import OpenGraphImage from '../../images/opengraph.jpeg';
import OpenGraphMeta from './OpenGraphMeta';
import TwitterMeta from './TwitterMeta';

//

const SEO = ({ title, description, article }) => {
  const query = graphql`
    query SEO {
      site {
        buildTime
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          siteName
          titleTemplate
          keywords
        }
      }
      settings: sanitySettings(_id: { regex: "/settings/" }) {
        title
        description
        shortDesc
      }
    }
  `;

  const { pathname } = useLocation();
  const { site, settings } = useStaticQuery(query);

  const { buildTime, siteMetadata } = site;
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    siteName,
    author,
    keywords,
  } = siteMetadata;

  const seo = {
    title:
      title && title.includes('Loading')
        ? defaultTitle
        : title || settings.shortDesc || defaultTitle,
    titleTemplate: `${settings.title}%s` || titleTemplate,
    description: description || settings.description || defaultDescription,
    siteUrl,
    url: `${siteUrl}${pathname}`,
    siteName,
    author,
    keywords: keywords.toString(),
    type: article ? 'article' : 'website',
    buildTime,
    image: OpenGraphImage,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        defer={false}
        titleTemplate={seo.titleTemplate}
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta name="revised" content={seo.buildTime} />
        <meta name="url" content={seo.url} />
        <link rel="canonical" href={seo.siteUrl} />
      </Helmet>

      <OpenGraphMeta
        pageTitle={seo.title}
        url={seo.url}
        image={seo.image}
        description={seo.description}
        siteName={seo.siteName}
      />

      <TwitterMeta
        pageTitle={seo.title}
        handle={seo.siteUrl}
        description={seo.description}
        image={seo.image}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
};
