<script setup>
import { withBase } from '@vuepress/client'
</script>

# Environment Variables

Set environment variables to change program settings.

Name | Default Value | Description
--- | --- | ---
`APP_DEBUG` | `false` | Print prompt to console. The value must be `true` of `false`.
`APP_WEBHOOK_PATH` | `/webhook` | Custom webhook path.
`APP_API_TIMEOUT` | `9000` | Timeout for API calls.
`APP_LANG` | `zh` | Application language. The value must be one of `zh`, `en` or `ja`.
`APP_MAX_GROUPS` | `1` | Maximum groups. The `VERCEL_ACCESS_TOKEN` environment variable is required.
`APP_MAX_USERS` | `5` | Maximum users. The `VERCEL_ACCESS_TOKEN` environment variable is required.
`APP_MAX_PROMPT_MESSAGES` | `12` | Maximum prompt sentences.
`APP_MAX_PROMPT_TOKENS` | `1024` | Maximum prompt tokens.
`APP_INIT_PROMPT` | `''` | Initial prompt of system.
`HUMAN_NAME` | `''` | Name of user.
`HUMAN_INIT_PROMPT` | `''` | Initial prompt of user.
`BOT_NAME` | `AI` | Name of AI Assistant. This is used to call AI Assistant when auto-reply is deactivated.
`BOT_INIT_PROMPT` | `''` | Initial prompt of AI Assistant.
`BOT_TONE` | `''` | Tone of AI Assistant.
`BOT_DEACTIVATED` | `false` | Deactivate auto-reply at the beginning. The value must be `true` of `false`.
`ERROR_TIMEOUT_DISABLED` | `false` | Disable timeout error. The value must be `true` of `false`.
`VERCEL_TIMEOUT` | `<APP_API_TIMEOUT>` | Timeout for Vercel API calls.
`VERCEL_PROJECT_NAME` | `gpt-ai-assistant` | Vercel project name. You can use this environment variable when the Vercel project name differs from the GitHub project name.
`VERCEL_TEAM_ID` | `null` | Vercel team ID. You must use this environment variable when using Vercel's Pro plan.
`VERCEL_ACCESS_TOKEN` | `null` | Vercel <a :href="withBase('/images/vercel-access-token.png')" target="_blank">access token</a>
`VERCEL_DEPLOY_HOOK_URL` | `null` | Vercel <a :href="withBase('/images/vercel-deploy-hook-url.png')" target="_blank">deploy hook URL</a>
`OPENAI_TIMEOUT` | `<APP_API_TIMEOUT>` | Timeout for OpenAI API calls.
`OPENAI_API_KEY` | `null` | OpenAI <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>
`OPENAI_COMPLETION_MODEL` | `gpt-3.5-turbo` | Refer to [model](https://beta.openai.com/docs/api-reference/completions/create#completions/create-model) parameter for details.
`OPENAI_COMPLETION_TEMPERATURE` | `0.9` | Refer to [temperature](https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature) parameter for details.
`OPENAI_COMPLETION_MAX_TOKENS` | `160` | Refer to [max_tokens](https://beta.openai.com/docs/api-reference/completions/create#completions/create-max_tokens) parameter for details.
`OPENAI_COMPLETION_FREQUENCY_PENALTY` | `0` | Refer to [frequency_penalty](https://beta.openai.com/docs/api-reference/completions/create#completions/create-frequency_penalty) parameter for details.
`OPENAI_COMPLETION_PRESENCE_PENALTY` | `0.6` | Refer to [presence_penalty](https://beta.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty) parameter for details.
`OPENAI_IMAGE_GENERATION_SIZE` | `256x256` | Refer to [size](https://beta.openai.com/docs/api-reference/images/create#images/create-size) parameter for details.
`LINE_TIMEOUT` | `<APP_API_TIMEOUT>` | Timeout for LINE Messaging API calls.
`LINE_CHANNEL_ACCESS_TOKEN` | `null` | LINE <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>
`LINE_CHANNEL_SECRET` | `null` | LINE <a :href="withBase('/images/line-channel-secret.png')" target="_blank">channel secret</a>
`SERPAPI_TIMEOUT` | `<APP_API_TIMEOUT>` | Timeout for SerpApi API calls.
`SERPAPI_API_KEY` | `null` | SerpApi <a :href="withBase('/images/serpapi-api-key.png')" target="_blank">API key</a>
`SERPAPI_LOCATION` | `Taiwan` | Location of search。
`SERPAPI_LANG` | `lang_zh-TW` | Language of search。

Click the "Redeploy" button to redeploy if there are any changes.

<div align="center">
  <img :src="withBase('/images/vercel-redeploy.png')" width="600"/>
</div>
