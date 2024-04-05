import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'mobei&article',
  description: 'mobei&article',
  icon: '/mobei_icon.png',
  logo: {
    light: '/homepage_light_icon.png',
    dark: '/homepage_dark_icon.png',
  },
  base: '/mobei12/',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/mobei12' },
      { icon: 'juejin', mode: 'link', content: 'https://juejin.cn/user/571401775883960' },
    ],
    lastUpdatedText: '最后更新时间',
    lastUpdated: true,
    searchPlaceholderText: '搜索文章',
    enableContentAnimation: true,
    enableScrollToTop: true,
  },
  markdown: {
    defaultWrapCode: true,
    showLineNumbers: true,
  },
});
