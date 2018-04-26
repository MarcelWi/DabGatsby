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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss-sass'
    ]
};
