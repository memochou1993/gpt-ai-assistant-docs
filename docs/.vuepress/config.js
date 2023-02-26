import { defaultTheme } from '@vuepress/theme-default';

module.exports = {
  base: '/gpt-ai-assistant-docs/',
  title: 'GPT AI Assistant',
  locales: {
    '/': {
      lang: 'zh',
      sidebarDepth: 3,
    },
    '/en/': {
      lang: 'en',
    },
  },
  displayAllHeaders: true,
  theme: defaultTheme({
    repo: 'memochou1993/gpt-ai-assistant',
    docsRepo: 'memochou1993/gpt-ai-assistant-docs',
    editLink: false,
    locales: {
      '/': {
        selectLanguageName: '中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    sidebar: {
      '/': [
        {
          text: '文件',
          children: [
            {
              text: '介紹',
              link: '/',
            },
            '/getting-started/',
            '/update/',
            '/commands/',
            '/environments/',
            '/development/',
            '/deployment/',
            '/recipes/',
            '/questions/',
            '/changelog/',
          ],
        },
      ],
      '/en/': [
        {
          text: 'Documentation',
          children: [
            {
              text: 'Introduction',
              link: '/en/',
            },
            '/en/getting-started/',
            '/en/update/',
            '/en/commands/',
            '/en/environments/',
            '/en/development/',
            '/en/deployment/',
            '/en/changelog/',
          ],
        },
      ],
    },
  }),
};
