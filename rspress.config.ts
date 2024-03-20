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
  themeConfig: {
    socialLinks: [
     /*  { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' }, */
    ],
  },
});
