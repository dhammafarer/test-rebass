const siteMetadata = require('./src/data/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/logos/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'controlnet-international',
        short_name: 'ctn',
        start_url: '/',
        background_color: '#336699',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/logos/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-transformer-remark',
  ],
}
