# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


### 命令解释
```
npm  create  astro@latest # 创建项目
npm  run  dev             # 启动开发服务器
npm  run  build           # 构建生产版本
npm  run  preview         # 预览生产版本

// 衍生命令
npm  i  @astrojs/rss      # 安装astro rss插件
npx  astro  add  preact   # 添加preact支持(轻量React)项目级别依赖

```

## 概念
岛屿架构(Island Architecture) 参考: https://docs.astro.build/en/concepts/islands/
像是大部分的网页框架使用的是SPA(单页面应用)架构,而Astro使用的是岛屿架构,即大部分内容是静态生成的,只有少部分交互式组件是动态加载的,这样可以提升性能和SEO效果.
Astro的核心设计就是整页默认静态, 只有少数需要交互的组件才在浏览器里面跑JS, 这些"少数会动的组件"就像在一大片静态 HTML"海洋"里散落的几个"岛屿", 所以叫 islands architecture(岛屿架构)
他能支持多个UI框架, 比如React, Vue, Svelte等, 可以在同一个项目中混合使用这些框架的组件. 甚至可以在一个页面中使用不同框架的组件.

