import RSS from "rss";
import { siteConfig } from "@/config/site";
import { toolsData } from "@/data/tools-data";
export async function GET() {
  const feed = new RSS({
    title: siteConfig.title,
    description: siteConfig.description,
    site_url: siteConfig.site, // 你的网站域名
    feed_url: siteConfig.feed_url, // 尽可能用绝对 URL
    language: siteConfig.language, // 网站语言代码
    image_url: siteConfig.image_url, // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: siteConfig.generator, // 想写什么就写什么，也可以不提供
    pubDate: new Date(),
    copyright: siteConfig.copyright,
  });

  const data = toolsData;
  data.forEach((tools) => {
    for (let i = 0; i < tools.data.length; i++) {
      const category = tools.category;
      const tool = tools.data[i];
      feed.item({
        title: tool.title,
        // category: category,
        // href: tool.href,
        // is_free: tool.is_free,
        description: tool.description,
        url: tool.href,
        date: new Date(),
        enclosure: {
          url: tool.image,
          type: "image/jpeg",
        },
      });
    }
  });

  // 从数据库或者文件中获取文章列表

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
