<script setup>
import { withBase } from '@vuepress/client'
</script>

# 開發

## 介紹

本專案是一個使用 JavaScript 開發的開源專案，歡迎自行修改，或發送合併請求（PR）。

## 建立專案

下載專案。

```bash
git clone git@github.com:memochou1993/gpt-ai-assistant.git
```

進到專案目錄。

```bash
cd gpt-ai-assistant
```

安裝依賴套件。

```bash
npm ci
```

## 執行測試

建立 `.env.test` 檔。

```bash
cp .env.example .env.test
```

運行測試。

```bash
npm run test
```

查看結果。

```bash
> gpt-ai-assistant@0.0.0 test
> jest

  console.info
    === 000001 ===

    Human: 嗨！
    AI: 好的！

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1 s
```

## 使用代理伺服器

建立 `.env` 檔。

```bash
cp .env.example .env
```

設置環境變數。

```env
APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=<your_vercel_access_token>

OPENAI_API_KEY=<your_openai_api_key>

LINE_CHANNEL_ACCESS_TOKEN=<your_line_channel_access_token>
LINE_CHANNEL_SECRET=<your_line_channel_secret>
```

啟動一個本地伺服器。

```bash
npm run dev
```

開啟另一個終端機，啟動一個代理伺服器。

```bash
ngrok http 3000
```

在 [LINE](https://developers.line.biz/zh-hant/) 平台，修改「Webhook URL」，例如「<https://0000.jp.ngrok.io/webhook>」，點選「Update」按鈕。

使用 LINE 手機應用程式發送訊息。

查看結果。

```bash
> gpt-ai-assistant@0.0.0 dev
> node api/index.js

=== 0x1234 ===

Memo: 嗨
AI: 你好嗎？
```
