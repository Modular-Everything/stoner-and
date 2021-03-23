import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });

//

export default {
  siteMetadata: {
    title: 'Jewellery',
    siteUrl: 'https://stonerand.co/',
    titleTemplate: '%s | Stoner&',
    description: 'Design that comes to life.',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Accentuate Agency`,
        short_name: `Accentuate`,
        start_url: `/`,
        background_color: `#f0f0e6`,
        theme_color: `#414042`,
        display: `standalone`,
        icon: `./src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`, // important - keep this below the manifest
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f0f0e6`,
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
    `gatsby-plugin-sitemap`,
  ],
};
