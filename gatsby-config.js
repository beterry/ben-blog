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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/pages/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/src/pages/work`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                defaultLayouts: {
                    blog: require.resolve("./src/layouts/blog-template.js"),
                    default: require.resolve("./src/layouts/work-template.js"),
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 768,
                            sizeByPixelDensity: true,
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
                    `raleway\:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i`,
                ],
                display: 'swap'
            }
        },
        `gatsby-plugin-mdx-source-name`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-styled-components`,
    ],
}
