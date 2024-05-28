export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  site: "https://www.aisourcehub.info", // 你的网站域名
  feed_url: "https://www.aisourcehub.info/feed.xml", // 尽可能用绝对 URL
  title: "AI Source Hub Information | AI 科技 一手信息源 | 优质信息源导航大全",
  description:
    "学习第一步，搞定信息源, 聚合全网优质信息源, 收集一些有观点、有干货、一手的AI 科技资讯资源，可以帮助你更好地了解和跟踪前沿一手消息,解决信息焦虑",
  icons: "/logo.svg",
  keywords: ["信息源", "AI 资讯", "科技 资讯", "一手消息", "前沿资讯"],
  h1_p: "学习第一步，搞定信息源, 聚合全网优质信息源",
  h3_p: "收集一些有观点、有干货、一手的AI 科技资讯资源，可以帮助你更好地了解和跟踪前沿一手消息,解决信息焦虑",
  h4_p1: "和人工智能、科技相关",
  h4_p2: "有干货",
  h4_p3: "信息及时",
  language: "zh-CN", // 网站语言代码
  image_url: "/opengraph-image.png", // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
  official_image: "/officialWechat.png",
  generator: "https://www.aisourcehub.info", // 想写什么就写什么，也可以不提供
  copyright: `&copy; 2024 - ${new Date().getFullYear().toString()} by AmbroseX`,
  mainNav: [],
  submit:
    "https://youmiais.feishu.cn/share/base/form/shrcnSO8Eh1g6krlh4iuAkMVfYg",
  googleId: "G-DQV98M9BYP",
  baiduId: "b8c620bcdc7e56366dca8f529fddb7a2", //
  baiduVerifi: "codeva-jkSt3dLvqE", //
  yandexVerifi: "0d0e0b71c05af6ae",
  contact_p1: "欢迎关注康哥的公众号,持续更新AI开发、产品商业化日常~",
  links: {
    rss: "https://www.aisourcehub.info/feed.xml",
    twitter: "https://twitter.com/FlytoAGI",
    okjk: "https://okjk.co/axwF5n",
    github: "https://github.com/AmbroseX",
    github_web: "https://github.com/AmbroseX/Awesome-AISourceHub",
    github_collect: "https://github.com/AmbroseX/Awesome-AISourceHub",
  },
};
