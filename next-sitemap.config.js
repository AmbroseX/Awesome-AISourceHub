/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://www.aisourcehub.info",
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 14000,
    generateRobotsTxt: true, // (optional)
    exclude: ['/protected-page', '/awesome/secret-page'],
    // ...other options
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    // additionalPaths: async (config) => [
    //     await config.transform(config, '/additional-page'),
    // ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/admin'],
            },
        ],
        additionalSitemaps: [],
    },
}