import { defaultTheme } from '@vuepress/theme-default';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

module.exports = {
  base: '/gpt-ai-assistant-docs/',
  title: 'GPT AI Assistant',
  locales: {
    '/': {
      lang: 'zh',
      description: 'GPT AI Assistant 是基於 OpenAI API 與 LINE Messaging API 實作的應用程式。透過安裝步驟，你可以立即使用 LINE 手機應用程式與你專屬的 AI 助理聊天。',
    },
    '/en/': {
      lang: 'en',
      description: 'GPT AI Assistant is an application that is implemented using the OpenAI API and LINE Messaging API. Through the installation process, you can start chatting with your own AI assistant using the LINE mobile app.',
    },
  },
  displayAllHeaders: true,
  theme: defaultTheme({
    repo: 'memochou1993/gpt-ai-assistant',
    docsRepo: 'memochou1993/gpt-ai-assistant-docs',
    docsDir: 'docs',
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
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-L8KJ2RLXX8',
    }),
  ],
};
