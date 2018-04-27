module.exports = {
    siteMetadata: {
        title: 'DAB Gatsby',
        subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
        menu: [
            {
                label: 'Articles',
                path: '/'
            },
            {
                label: 'About me',
                path: '/about/'
            },
            {
                label: 'Contact me',
                path: '/contact/'
            }
        ]
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark'
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss-sass'
    ]
};
