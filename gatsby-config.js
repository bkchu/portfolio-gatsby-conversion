module.exports = {
  siteMetadata: {
    title: `Brandon Chung - UI Developer`,
    description: `Brandon Chung - UI Developer currently curating experiences that are pleasing and accessible at projekt202.`,
    author: `Brandon Chung`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Chung - UI Developer`,
        short_name: `Brandon Chung - UI Developer`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/bkchuLogo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-85177244-2",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
