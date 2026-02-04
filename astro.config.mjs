// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
// 一个配置项目
export default defineConfig({
  //用于指定网站的基本信息, 在rss.xml.js中会用到site属性
  // 自己网站的地址
  site: "https://lrns.online",

  integrations: [preact()]
});