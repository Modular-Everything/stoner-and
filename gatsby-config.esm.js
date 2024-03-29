import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });

const isProd = process.env.NODE_ENV === 'production';

//

export default {
  flags: { PRESERVE_WEBPACK_CACHE: true },

  siteMetadata: {
    title: 'Jewellery',
    siteUrl: 'https://stonerand.co/',
    siteName: 'Stoner&',
    titleTemplate: 'Stoner&%s',
    description: 'Design that comes to life.',
    author: 'Christopher Stoner',
    keywords: [
      'Jewellery',
      'Watches',
      'Diamonds',
      'Gems',
      'Rings',
      'Engagement',
      'Weddings',
      'Marriage',
      'Restoration',
      'Bespoke',
      'Design',
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stoner&`,
        short_name: `Stoner&`,
        start_url: `/`,
        background_color: `#f0f0e6`,
        theme_color: `#414042`,
        display: `standalone`,
        icon: `./src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-remove-serviceworker`, // important - keep this below the manifest
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#414042`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://anonaddy.us1.list-manage.com/subscribe/post?u=86e604503fc42249d937a8c23&amp;id=5bc89eac0c',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
