import {siteConfig} from '@/config/site'

export default async function sitemap() {
    const links: string[] = []
    const URL = siteConfig.site
    ;['', 'feed.xml', 'sitemap.xml', 'robots.txt'].map((item) => {
        links.push(item)
    })

    links.push()
    const routes = links.map((route) => ({
        url: `${URL}/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes]
}
