<script setup>
import { withBase } from '@vuepress/client'
</script>

# Getting Started

## Installation

- Log in to the [OpenAI](https://beta.openai.com/) website.
  - Generate an OpenAI <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>.
- Log in to the [LINE](https://developers.line.biz/en/) website.
  - Add a provider (e.g. "My Provider").
  - Create a channel (e.g. "My AI Assistant") of type Messaging API.
  - Click the "Messaging API" tab and generate a <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>.
- Log in to the [GitHub](https://github.com/) website.
  - Go to the `gpt-ai-assistant` project.
  - Click the "Star" button to support this project and the developer.
  - Click the "Fork" button to copy the source code to your own repository.
- Log in to the [Vercel](https://vercel.com/) website.
  - Click the "Create a New Project" button to create a new project.
  - Click the "Import" button to import the `gpt-ai-assistant` project.
  - Click the "Environment Variables" tab and add the following environment variables with their corresponding values:
    - `OPENAI_API_KEY` with the OpenAI <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>.
    - `LINE_CHANNEL_ACCESS_TOKEN` with the LINE <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>.
    - `LINE_CHANNEL_SECRET` with the LINE <a :href="withBase('/images/line-channel-secret.png')" target="_blank">channel secret</a>.
    - `APP_LANG` with `en`.
  - Click the "Deploy" button and wait for the deployment to complete.
  - Go to the dashboard, copy the application URL, e.g. "<https://gpt-ai-assistant.vercel.app/>".
- Go back to the [LINE](https://developers.line.biz/en/) website.
  - Go to the page of "My AI Assistant", click the "Messaging API" tab, set the "Webhook URL" to application URL with `/webhook` path, e.g. "<https://gpt-ai-assistant.vercel.app/webhook>" and click the "Update" button.
  - Click the "Verify" button to verify the webhook call is successful.
  - Enable the "Use webhook" feature.
  - Disable the "Auto-reply messages" feature.
  - Disable the "Greeting messages" feature.
  - Scan the QR code using the LINE mobile app to add as a friend.
- Start chatting with your own AI assistant!

## Debug

1. Check if the environment variables of the project are filled out correctly in the Vercel.
2. Click the "Redeploy" button to redeploy if there are any changes.
3. If there is still a problem, please go to [Issues](https://github.com/memochou1993/gpt-ai-assistant/issues) page, describe your problem and attach a screenshot.
