import { defaultTheme } from '@vuepress/theme-default';

module.exports = {
  theme: defaultTheme({
    repo: 'memochou1993/gpt-ai-assistant',
    docsRepo: 'memochou1993/gpt-ai-assistant-docs',
    navbar: [
      {
        text: 'Languages',
        children: [
          {
            text: '中文',
            link: '/',
          },
          {
            text: 'English',
            link: '/en',
          },
        ],
      },
    ],
  }),
};
