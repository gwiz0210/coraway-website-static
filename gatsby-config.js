module.exports = {
    siteMetadata: {
        title: `Coraway`,
        description: `On demand rental property showings.`,
        author: `@mostafasoufi`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-109275682-2",
        },
      },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/logo-coraway.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-omni-font-loader",
            options: {
              enableListener: true,
              preconnect: ["https://fonts.gstatic.com"],
      
              web: [
                {
                  file:
                    "https://fonts.googleapis.com/css2?family=PT+Serif&display=swap",
                  name: "PT Serif",
                },
              ],
              custom: [
                {
                  name: "Inter",
                  file: "/fonts/fonts.css",
                },
              ],
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
