<script setup>
import { withBase } from '@vuepress/client'
</script>

# 環境變數

## 介紹

在 Vercel 平台設置環境變數，可以變更程式的設定。

## 一覽

名稱 | 預設值 | 說明
--- | --- | ---
`APP_DEBUG` | `false` | 是否在標準輸出印出訊息，值必須為 `true` 或 `false`。
`APP_WEBHOOK_PATH` | `/webhook` | 應用程式的 webhook URL 路徑。
`APP_API_TIMEOUT` | `9000` | 呼叫外部服務 API 的超時時間。
`APP_LANG` | `zh` | 程式的初始語言，值必須為 `zh_TW`、`zh_CN`、`en` 或 `ja`。
`APP_MAX_GROUPS` | `1` | 群組數量上限，必須設置 `VERCEL_ACCESS_TOKEN` 環境變數。
`APP_MAX_USERS` | `5` | 用戶數量上限，必須設置 `VERCEL_ACCESS_TOKEN` 環境變數。
`APP_MAX_PROMPT_MESSAGES` | `12` | 上下文語句的數量上限。
`APP_MAX_PROMPT_TOKENS` | `1024` | 上下文單詞的數量上限。
`APP_INIT_PROMPT` | `''` | 系統的初始提示詞，用來設定使用者或 AI 的人物設定。
`HUMAN_NAME` | `''` | 使用者的名字。
`HUMAN_INIT_PROMPT` | `''` | 使用者的初始提示詞，用來設定使用者或 AI 的人物設定。
`BOT_NAME` | `AI` | AI 的名字。當 AI 自動回覆設為關閉時，可以用來呼叫。
`BOT_INIT_PROMPT` | `''` | AI 的初始提示詞，用來設定使用者或 AI 的人物設定。
`BOT_TONE` | `''` | AI 的回覆語氣。
`BOT_DEACTIVATED` | `false` | 是否在一開始將 AI 自動回覆設為關閉，值必須為 `true` 或 `false`。
`ERROR_TIMEOUT_DISABLED` | `false` | 是否將呼叫外部服務 API 的超時錯誤關閉，值必須為 `true` 或 `false`。
`VERCEL_TIMEOUT` | `<APP_API_TIMEOUT>` | 呼叫 Vercel API 的超時時間。
`VERCEL_PROJECT_NAME` | `gpt-ai-assistant` | Vercel 的專案名稱。當 Vercel 的專案名稱與 GitHub 的專案名稱不一樣時，必須使用此環境變數指定。
`VERCEL_TEAM_ID` | `null` | Vercel 的 <a :href="withBase('/images/vercel-team-id.png')" target="_blank">team ID</a>。使用 Vercel 的 Pro 方案時，必須使用此環境變數指定。
`VERCEL_ACCESS_TOKEN` | `null` | Vercel 的 <a :href="withBase('/images/vercel-access-token.png')" target="_blank">access token</a>，用來實現持久化儲存。
`VERCEL_DEPLOY_HOOK_URL` | `null` | Vercel 的 <a :href="withBase('/images/vercel-deploy-hook-url.png')" target="_blank">deploy hook URL</a>，用來重新部署應用程式。
`OPENAI_TIMEOUT` | `<APP_API_TIMEOUT>` | 呼叫 OpenAI API 的超時時間。
`OPENAI_API_KEY` | `null` | OpenAI 的 <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>，用來實現與 AI 對話。
`OPENAI_BASE_URL` | `https://api.openai.com` | OpenAI 的 API 端點。
`OPENAI_COMPLETION_MODEL` | `gpt-3.5-turbo` | 詳見 [model](https://platform.openai.com/docs/api-reference/chat/create#chat-create-model) 參數說明。
`OPENAI_COMPLETION_TEMPERATURE` | `0.9` | 詳見 [temperature](https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature) 參數說明。
`OPENAI_COMPLETION_MAX_TOKENS` | `160` | 詳見 [max_tokens](https://platform.openai.com/docs/api-reference/chat/create#chat-create-max_tokens) 參數說明。
`OPENAI_COMPLETION_FREQUENCY_PENALTY` | `0` | 詳見 [frequency_penalty](https://platform.openai.com/docs/api-reference/chat/create#chat-create-frequency_penalty) 參數說明。
`OPENAI_COMPLETION_PRESENCE_PENALTY` | `0.6` | 詳見 [presence_penalty](https://platform.openai.com/docs/api-reference/chat/create#chat-create-presence_penalty) 參數說明。
`OPENAI_COMPLETION_STOP_SEQUENCES` | `assistant:,user:` | 詳見 [stop](https://platform.openai.com/docs/api-reference/chat/create#chat-create-stop) 參數說明。
`OPENAI_IMAGE_GENERATION_MODEL` | `dall-e-2` | 詳見 [model](https://platform.openai.com/docs/api-reference/images/create#images-create-model) 參數說明。
`OPENAI_IMAGE_GENERATION_SIZE` | `256x256` | 詳見 [size](https://platform.openai.com/docs/api-reference/images/create#images-create-size) 參數說明。
`OPENAI_IMAGE_GENERATION_QUALITY` | `standard` | 詳見 [quality](https://platform.openai.com/docs/api-reference/images/create#images-create-quality) 參數說明。
`LINE_TIMEOUT` | `<APP_API_TIMEOUT>` | 呼叫 LINE Messaging API 的超時時間。
`LINE_CHANNEL_ACCESS_TOKEN` | `null` | LINE 的 <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>，用來傳送訊息。
`LINE_CHANNEL_SECRET` | `null` | LINE 的 <a :href="withBase('/images/line-channel-secret.png')" target="_blank">channel secret</a>，用來驗證訊息來源。
`SERPAPI_TIMEOUT` | `<APP_API_TIMEOUT>` | 呼叫 SerpApi API 的超時時間。
`SERPAPI_API_KEY` | `null` | SerpApi 的 <a :href="withBase('/images/serpapi-api-key.png')" target="_blank">API key</a>，用來查詢 Google 資料。
`SERPAPI_LOCATION` | `tw` | 查詢 Google 資料時，使用的地區。
`SERPAPI_LANG` | `lang_zh-TW` | 查詢 Google 資料時，使用的語言。

## 重新部署

每當環境變數有變更，就必須在 Vercel 平台點選「Redeploy」按鈕，以重新套用設定。

<div align="center">
  <img :src="withBase('/images/vercel-redeploy.png')" width="600"/>
</div>
