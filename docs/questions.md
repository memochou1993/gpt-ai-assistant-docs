<script setup>
import { withBase } from '@vuepress/client'
</script>

# 常見問題

## 使用這個專案是免費的嗎？

是的，但是在使用上會有限制。

## 使用 OpenAI 免費方案有哪些限制？

使用 OpenAI 的免費方案，可以有三個月 18 美金的免費額度，使用超過的話，將無法再和 AI 對話。

::: tip 解決方案：

- 使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。
- 訂閱 OpenAI 的付費方案。
:::

## 使用 Vercel 免費方案有哪些限制？

使用 Vercel 的免費方案，會有 10 秒的超時限制。如果 AI 的處理時間過久，就會無法取得回應。
::: tip 解決方案：

- 降低 `OPENAI_COMPLETION_MAX_TOKENS` 的值。
- 降低 `APP_MAX_PROMPT_SENTENCES` 的值。
- 降低 `APP_MAX_PROMPT_TOKENS` 的值。
- 訂閱 Vercel 的付費方案。
- 使用虛擬專用伺服器進行部署。
:::

## 使用 SerpApi 免費方案有哪些限制？

使用 SerpApi 的免費方案，可以有查詢 100 次的免費額度，使用超過的話，將無法再請 AI 查詢。

::: tip 解決方案：

- 訂閱 SerpApi 的付費方案。
:::

## 為什麼 LINE 平台會出現 404 錯誤？

在 LINE 平台驗證 Webhook URL 時，出現「404 Not Found」的錯誤，代表 Webhook URL 有誤。

::: tip 解決方案：

- 在 LINE 平台檢查 Webhook URL 是否填寫正確，以及是否加上「`/webhook`」路徑。
:::

## 為什麼 LINE 平台會出現 403 錯誤？

在 LINE 平台驗證 Webhook URL 時，出現「403 Forbidden」的錯誤，這代表驗證訊息來源失敗。

::: tip 解決方案：

- 在 Vercel 平台檢查 `LINE_CHANNEL_SECRET` 環境變數是否填寫正確。
:::

## 為什麼機器人不讀不回？

機器人不讀不回，代表 Vercel 或 LINE 相關的環境變數有誤。

::: tip 解決方案：

- 在 Vercel 平台檢查專案名稱是否與 GitHub 專案名稱一致。
- 在 Vercel 平台檢查 `LINE_CHANNEL_ACCESS_TOKEN` 環境變數是否填寫正確。
:::

## 為什麼機器人已讀不回？

機器人已讀不回，代表 OpenAI 相關的環境變數有誤。

::: tip 解決方案：

- 在 Vercel 平台檢查 `OPENAI_API_KEY` 環境變數是否填寫正確。
:::

## 為什麼 LINE 訊息中出現 400 錯誤？

在使用 LINE 聊天時，出現「400 Bad Request」的錯誤，代表訊息內容違反了 OpenAI 的安全政策。

::: tip 解決方案：

- 避免送出違反 OpenAI 安全政策的訊息。
:::

## 為什麼 LINE 訊息中出現 429 錯誤？

在使用 LINE 聊天時，出現「429 Too Many Requests」的錯誤，代表 OpenAI 的免費方案已經到期，或者超過了使用額度。

::: tip 解決方案：

- 使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。
- 訂閱 OpenAI 的付費方案。
:::

## 為什麼 LINE 訊息中出現 500 錯誤？

在使用 LINE 聊天時，出現「500 Internal Server Error」的錯誤，代表 OpenAI 伺服器出現問題。

::: tip 解決方案：

- 過一陣子再傳送訊息。
:::

## 為什麼 AI 回覆的日期是錯的？

因為 OpenAI 目前提供的 API 資料只有到 2021 年。

::: tip 解決方案：

- 生成一個 SerpApi 的 API key，詳見<a :href="withBase('/04-environments#一覽')" target="_blank">環境變數</a>說明。
- 在 Vercel 平台，新增 `SERPAPI_API_KEY` 環境變數。
- 使用「查詢」指令，請 AI 在 Google 上查詢資料。
:::

## 可以將機器人加到群組中嗎？

可以。

::: tip 解決方案：

- 在 LINE 平台，將「Allow bot to join group chats」功能開啟。
- 在 Vercel 平台，提高 `APP_MAX_GROUPS` 環境變數的值。
- 在 Vercel 平台，提高 `APP_MAX_USERS` 環境變數的值。
:::

## 可以 Webhook URL 的路徑嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_WEBHOOK_PATH` 環境變數的值。
:::

## 可以修改 API 超時時間嗎？

可以，但是只有在使用虛擬專用伺服器進行部署時才有用。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_API_TIMEOUT` 環境變數的值。
:::

## 可以修改語言嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_LANG` 環境變數的值。
:::

## 可以修改群組數量上限嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_MAX_GROUPS` 環境變數的值。
:::

## 可以修改用戶數量上限嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_MAX_USERS` 環境變數的值。
:::

## 上下文是什麼？

上下文指的是 AI 與使用者的對話語境，是使 AI 理解對話脈絡的秘密。

::: tip 解決方案：

- 當上下文愈豐富時，AI 回應的效果愈好、記住的內容也愈多；但是相對的，處理時間也愈久、費用也愈貴。
:::

## 上下文單詞怎麼計算？

單詞（Tokens）指的是 GPT 語言模型所處理的文本內容。

::: tip 解決方案：

- 可以使用 OpenAI 提供的 [Tokenizer](https://beta.openai.com/tokenizer) 進行計算。
:::

## 可以修改上下文語句的數量上限嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_MAX_PROMPT_SENTENCES` 環境變數的值。
:::

## 可以修改上下文單詞的數量上限嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `APP_MAX_PROMPT_TOKENS` 環境變數的值。
:::

## 可以讓 AI 知道我是誰嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `HUMAN_NAME` 環境變數的值。
- 在 Vercel 平台，修改 `HUMAN_INIT_PROMPT` 環境變數的值。
:::

## 可以設定 AI 的人物設定嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `HUMAN_INIT_PROMPT` 環境變數的值。
:::

## 可以讓 AI 知道自己是誰嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `BOT_NAME` 環境變數的值。
- 在 Vercel 平台，修改 `BOT_INIT_PROMPT` 環境變數的值。
:::

## 可以修改 AI 的回覆語氣嗎？

可以。

::: tip 解決方案：

- 在 Vercel 平台，修改 `BOT_TONE` 環境變數的值。
:::

## 可以讓 AI 連網嗎？

可以。

::: tip 解決方案：

- 生成一個 SerpApi 的 API key，詳見<a :href="withBase('/04-environments#一覽')" target="_blank">環境變數</a>說明。
- 在 Vercel 平台，新增 `SERPAPI_API_KEY` 環境變數。
- 使用「查詢」指令，請 AI 在 Google 上查詢資料。
:::
