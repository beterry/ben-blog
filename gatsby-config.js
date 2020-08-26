module.exports = {
    siteMetadata: {
        title: `Ben Terry`,
        author: {
            name: `Ben Terry`,
            summary: `A creative professional who enjoys designing and developing great web experiences`,
        },
        description: `A portfolio website where I share recent projects and experiments`,
        siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    },
    plugins: [
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/work`,
                name: `work`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 768,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ben Terry Portfolio`,
                short_name: `Ben`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#A5D6A7`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `roboto`,
                    `roboto mono`, // you can also specify font weights and styles
                    `barlow\:300,400,500,600,700,900`,
                ],
                display: 'swap'
            }
        },
    ],
}
