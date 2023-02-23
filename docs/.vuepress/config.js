import { defaultTheme } from '@vuepress/theme-default';

module.exports = {
  base: '/gpt-ai-assistant-docs/',
  title: 'GPT AI Assistant',
  theme: defaultTheme({
    repo: 'memochou1993/gpt-ai-assistant',
    docsRepo: 'memochou1993/gpt-ai-assistant-docs',
    editLink: false,
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
