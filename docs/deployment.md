<script setup>
import { withBase } from '@vuepress/client'
</script>

# 部署

## 使用 Docker 容器

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
docker-compose up -d
```
