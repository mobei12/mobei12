import * as path from 'path';
import { defineConfig } from '@rspress/core';
import { pluginPreview } from '@rspress/plugin-preview';
export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/global.css'),
  lang: 'zh',
  title: '漠北',
  description: '记录分享和分享我的文章，',
  icon: '/mobei_icon.png',
  logo: {
    light: '/homepage_light_icon.png',
    dark: '/homepage_dark_icon.png',
  },
  // Vercel 部署在根路径，GitHub Pages 部署在 /mobei12/
  base: process.env.VERCEL ? '/' : '/mobei12/',
  i18nSource: {
    lastUpdatedText: { zh: '最后更新时间', en: 'Last Updated' },
    searchPlaceholderText: { zh: '搜索文章', en: 'Search' },
  },
  builderConfig: {
    resolve: { alias: { '@components': path.join(__dirname, 'src/components') } },
  },
  plugins: [
    pluginPreview({
      defaultRenderMode: 'pure',
      iframeOptions: {
        builderConfig: {
          resolve: { alias: { '@components': path.join(__dirname, 'src/components') } },
        },
      },
    }),
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/mobei12' },
      { icon: 'juejin', mode: 'link', content: 'https://juejin.cn/user/571401775883960' },
    ],
    lastUpdated: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
  },
  markdown: {
    defaultWrapCode: true,
    showLineNumbers: true,
  },
});
