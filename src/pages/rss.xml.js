// 这个是rss订阅源的配置文件. 用于给博客生成RSS(Really Simple Syndication)订阅源
// 每次博客内容更新时, RSS订阅源也会自动更新, 订阅了该源的用户本地会比较之前的rss文件和最新的rss文件, 如果有更新, 就会提示用户有新的内容可以阅读
// 这里需要配置几个关键的东西
// 1. astro.config.mjs中需要配置site属性, 指定自己网站的地址
// 2. 需要引入@astrojs/rss包, 该包提供了生成RSS的功能 npm install @astrojs/rss
// 3. 创建一个rss.xml.js文件, 用于生成RSS订阅源

// 使用时进入到 host/rss.xml 就可以获取到最新的RSS订阅源

import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// 异步函数GET, 用于处理GET请求,
export async function GET(context) {
    // 返回rss订阅源
  return rss({
    // 外面的标题
    title: 'Astro Learner | Blog',
    // 外面的描述
    description: 'My journey learning Astro',
    // 从astro.config.mjs中获取网站地址, 在xml中是link标签
    site: context.site,
    // 将当前目录下的所有md文档转换为rss条目, 包含标题, 链接, 摘要, 发布时间, 作者等信息
    // <item>
    //   <title>我的第三篇博文</title>
    //   <link link>https://lrns.online/posts/post-3/</link>
    //   <guid isPermaLink="true">https://lrns.online/posts/post-3/</guid>
    //   <description>遇到一些问题，到社区可以得到有用的帮助!</description>
    //   <pubDate>Tue, 15 Jul 2025 00:00:00 GMT</pubDate>
    //   <author>lrns</author>
    // </item>
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    // 语言
    customData: `<language>en-us</language>`,
  });
} 