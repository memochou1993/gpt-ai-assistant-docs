<script setup>
import { withBase } from '@vuepress/client'
</script>

# Development

Clone the project.

```bash
git clone git@github.com:memochou1993/gpt-ai-assistant.git
```

Go to the project directory.

```bash
cd gpt-ai-assistant
```

Install dependencies.

```bash
npm ci
```

## Tests

Copy `.env.example` to `.env.test`.

```bash
cp .env.example .env.test
```

Run the tests.

```bash
npm run test
```

Check the results.

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

## Using Proxy Server

Copy `.env.example` to `.env`.

```bash
cp .env.example .env
```

Set the environment variables as follows:

```env
APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=<your_vercel_access_token>

OPENAI_API_KEY=<your_openai_api_key>

LINE_CHANNEL_ACCESS_TOKEN=<your_line_channel_access_token>
LINE_CHANNEL_SECRET=<your_line_channel_secret>
```

Start a local server.

```bash
npm run dev
```

Start a proxy server.

```bash
ngrok http 3000
```

Go back to the [LINE](https://developers.line.biz/en/) website, modify the "Webhook URL" to e.g. "<https://0000.jp.ngrok.io/webhook>" and click the "Update" button.

Send a message from the LINE mobile app.

Check the results.

```bash
> gpt-ai-assistant@0.0.0 dev
> node api/index.js

=== 0x1234 ===

Memo: 嗨
AI: 你好嗎？
```
