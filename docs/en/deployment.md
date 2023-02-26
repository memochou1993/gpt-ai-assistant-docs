<script setup>
import { withBase } from '@vuepress/client'
</script>

# Deployment

## Using Docker

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

Start a local server with Docker Compose.

```bash
docker-compose up -d
```
