<script setup>
import { withBase } from '@vuepress/client'
</script>

# 常見問題

## GPT AI Assistant 是免費的嗎？

GPT AI Assistant 是一個免費的開源專案。

## GPT AI Assistant 預設的語言模型是什麼？

GPT AI Assistant 在 `4.0.0` 以後的版本，預設使用 `gpt-3.5-turbo` 語言模式，與 [ChatGPT](https://chat.openai.com/) 一樣。

::: tip 訣竅：

- 在 Vercel 平台修改 `OPENAI_COMPLETION_MODEL` 環境變數的值，可以改變語言模型。
:::

## GPT AI Assistant 可以連網嗎？

可以，但是會有額度。

::: tip 訣竅：

- 生成一個 [SerpApi](https://serpapi.com/) 的 <a :href="withBase('/images/serpapi-api-key.png')" target="_blank">API key</a>，詳見<a :href="withBase('/environments#一覽')" target="_blank">環境變數</a>說明。
- 在 Vercel 平台新增 `SERPAPI_API_KEY` 環境變數。
- 使用「查詢」指令，讓 AI 連網查詢資料。
:::

## 使用 OpenAI 免費方案有哪些限制？

使用 OpenAI 免費方案，可以獲得三個月 18 美金的免費額度。如果超過使用額度的話，將無法再和 AI 進行對話。

::: tip 訣竅：

- 使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。
- 訂閱 OpenAI 的付費方案。
:::

## 使用 Vercel 免費方案有哪些限制？

使用 Vercel 免費方案，會有 10 秒的超時限制。如果 AI 的處理時間太久的話，就會無法取得回應。

::: tip 訣竅：

- 在 Vercel 平台降低 `OPENAI_COMPLETION_MAX_TOKENS` 環境變數的值。
- 在 Vercel 平台降低 `APP_MAX_PROMPT_MESSAGES` 環境變數的值。
- 在 Vercel 平台降低 `APP_MAX_PROMPT_TOKENS` 環境變數的值。
- 訂閱 Vercel 的付費方案，並在 Vercel 平台新增 `VERCEL_TEAM_ID` 環境變數。
- 使用虛擬專用伺服器進行部署。
:::

## 使用 SerpApi 免費方案有哪些限制？

使用 SerpApi 免費方案，可以獲得 100 次查詢的免費額度。如果超過使用額度的話，將無法再讓 AI 連網查詢資料。

::: tip 訣竅：

- 訂閱 SerpApi 的付費方案。
:::

## 為什麼 LINE 平台會出現 403 錯誤？

在 LINE 平台驗證 Webhook URL 時，出現「403 Forbidden」的錯誤，這代表驗證訊息來源失敗。

::: tip 訣竅：

- 在 Vercel 平台檢查 `LINE_CHANNEL_SECRET` 環境變數是否填寫正確。
:::

## 為什麼 LINE 平台會出現 404 錯誤？

在 LINE 平台驗證 Webhook URL 時，出現「404 Not Found」的錯誤，代表 Webhook URL 不正確。

::: tip 訣竅：

- 在 LINE 平台檢查 Webhook URL 是否填寫正確，以及是否加上「`/webhook`」路徑。
:::

## 為什麼 AI 不讀不回？

在使用 LINE 聊天時，AI 不讀不回，代表 Vercel 或 LINE 相關的環境變數不正確。

::: tip 訣竅：

- 在 Vercel 平台檢查專案名稱是否與 GitHub 專案名稱一致，不一致時必須使用 `VERCEL_PROJECT_NAME` 指定。
- 在 Vercel 平台檢查 `LINE_CHANNEL_ACCESS_TOKEN` 環境變數是否填寫正確。
:::

## 為什麼 AI 已讀不回？

在使用 LINE 聊天時，AI 已讀不回，代表 OpenAI 相關的環境變數不正確。

::: tip 訣竅：

- 在 Vercel 平台檢查 `OPENAI_API_KEY` 環境變數是否填寫正確。
:::

## 為什麼 LINE 訊息中出現 Invalid character 錯誤？

在使用 LINE 聊天時，出現「`Invalid character in header content ["Authorization"]`」的錯誤，代表 OpenAI 相關的環境變數不正確。

::: tip 訣竅：

- 在 Vercel 平台檢查 `OPENAI_API_KEY` 環境變數是否填寫正確。
:::

## 為什麼 LINE 訊息中出現 400 錯誤？

在使用 LINE 聊天時，出現「400 Bad Request」的錯誤，代表訊息內容違反了 OpenAI 的安全政策。

::: tip 訣竅：

- 避免送出違反 OpenAI 安全政策的訊息。
:::

## 為什麼 LINE 訊息中出現 429 錯誤？

在使用 LINE 聊天時，出現「429 Too Many Requests」的錯誤，代表使用者一下子傳送了太多訊息。也有可能是 OpenAI 的免費方案已經到期了，或者是超過使用額度了。

::: tip 訣竅：

- 過一陣子再傳送訊息。
- 使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。
- 訂閱 OpenAI 的付費方案。
:::

## 為什麼 LINE 訊息中出現 500 錯誤？

在使用 LINE 聊天時，出現「500 Internal Server Error」的錯誤，代表 OpenAI 的伺服器可能出現問題。

::: tip 訣竅：

- 過一陣子再傳送訊息。
:::

## 為什麼 Vercel 平台中出現 500 錯誤？

在 Vercel 平台，出現「500 Internal Server Error」的錯誤，代表 Vercel 相關的環境變數不正確。

::: tip 訣竅：

- 在 Vercel 平台檢查專案名稱是否與 GitHub 專案名稱一致，不一致時必須使用 `VERCEL_PROJECT_NAME` 指定。
:::

## 為什麼 Vercel 平台中出現 504 錯誤？

在 Vercel 平台，出現「504 Gateway Timeout」的錯誤，代表 AI 的處理時間太久，無法取得回應。

::: tip 訣竅：

- 訂閱 Vercel 的付費方案，並在 Vercel 平台新增 `VERCEL_TEAM_ID` 環境變數。
- 使用虛擬專用伺服器進行部署。
:::

## 為什麼 AI 回覆的日期是錯的？

因為 OpenAI 目前提供的模型資料只有訓練到 2021 年，因此 AI 對於 2021 年之後的世界認識有限。

::: tip 訣竅：

- 使用「查詢」指令，讓 AI 連網查詢資料。
:::

## 可以將 AI 加到群組中嗎？

可以。

::: tip 訣竅：

- 在 LINE 平台將「Allow bot to join group chats」功能開啟。
- 在 Vercel 平台提高 `APP_MAX_GROUPS` 環境變數的值。
- 在 Vercel 平台提高 `APP_MAX_USERS` 環境變數的值。
:::

## 可以修改 Webhook URL 的路徑嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_WEBHOOK_PATH` 環境變數的值。
:::

## 可以修改 API 超時時間嗎？

可以，但是只有在使用虛擬專用伺服器進行部署時才有用。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_API_TIMEOUT` 環境變數的值。
:::

## 可以修改介面語言嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_LANG` 環境變數的值。
:::

## 可以修改群組數量上限嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_MAX_GROUPS` 環境變數的值。
:::

## 可以修改用戶數量上限嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_MAX_USERS` 環境變數的值。
:::

## 上下文是什麼？

上下文指的是 AI 與使用者的對話語境，是使 AI 理解對話脈絡的秘密。

::: tip 訣竅：

- 當上下文愈豐富時，AI 回應的效果愈好、記住的內容也愈多；但是相對的，處理的時間也愈久、費用也愈貴。
:::

## 上下文單詞怎麼計算？

單詞（Tokens）指的是 GPT 語言模型所處理的文本內容。

::: tip 訣竅：

- 可以使用 OpenAI 提供的 [Tokenizer](https://beta.openai.com/tokenizer) 進行計算。
:::

## 可以修改上下文語句的數量上限嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_MAX_PROMPT_MESSAGES` 環境變數的值。
:::

## 可以修改上下文單詞的數量上限嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `APP_MAX_PROMPT_TOKENS` 環境變數的值。
:::

## 可以設定自己的人物設定嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `HUMAN_NAME` 環境變數的值。
- 在 Vercel 平台修改 `HUMAN_INIT_PROMPT` 環境變數的值。
- 在 Vercel 平台修改 `BOT_INIT_PROMPT` 環境變數的值。
:::

## 可以設定 AI 的人物設定嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `HUMAN_INIT_PROMPT` 環境變數的值。
- 在 Vercel 平台修改 `BOT_NAME` 環境變數的值。
- 在 Vercel 平台修改 `BOT_INIT_PROMPT` 環境變數的值。
:::

## 可以修改 AI 的回覆語氣嗎？

可以。

::: tip 訣竅：

- 在 Vercel 平台修改 `BOT_TONE` 環境變數的值。
:::
