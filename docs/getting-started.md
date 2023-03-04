<script setup>
import { withBase } from '@vuepress/client'
</script>

# 安裝步驟

## 介紹

本專案是一個實驗性質的開源專案，目的是建立一個可以與 AI 互動的 LINE 聊天機器人。適合「想要從無到有建立屬於自己的 AI 聊天機器人」的一般大眾、行銷人員或學術人員使用。

::: tip 提示：

- 在安裝過程中，會需要使用到開發人員的操作介面，但是不需要撰寫程式碼、翻閱程式碼。
:::

## 影音教學

適合一般人，大約可以在 15 至 20 分鐘完成安裝。

- 「[如何創建類似 ChatGPT 的 Line Bot 聊天機器人！](https://www.youtube.com/watch?v=uHsCou1AfEU)」by [程式猿](https://www.youtube.com/@appfromape)
- 「[真的是 ChatGPT！GPT AI Assistant 4.0 聊天機器人升級版！](https://www.youtube.com/watch?v=77ggAZPy0mI)」by [程式猿](https://www.youtube.com/@appfromape)

## 圖文教學

適合一般人，大約可以在 20 至 30 分鐘完成安裝。

- 「[ChatGPT LINE 機器人創建教學，教你打造個人專屬 LINE AI 助理隨時都能聊](https://mrmad.com.tw/chatgpt-line-robot-creation-teaching)」 by [瘋先生](https://mrmad.com.tw/)

## 文字教學

適合工程師，大約可以在 5 至 10 分鐘完成安裝。

- 登入 [OpenAI](https://beta.openai.com/) 平台。
  - 生成一個 OpenAI 的 <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>。
- 登入 [LINE](https://developers.line.biz/zh-hant/) 平台。
  - 新增一個提供者（Provider），例如「My Provider」。
  - 在「My Provider」新增一個類型為「Messaging API」的頻道（Channel），例如「My AI Assistant」。
  - 進到「My AI Assistant」頻道頁面，點選「Messaging API」頁籤，生成一個頻道的 <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>。
- 登入 [GitHub](https://github.com/) 平台。
  - 進到 [gpt-ai-assistant](https://github.com/memochou1993/gpt-ai-assistant) 專案頁面。
  - 點選「Star」按鈕，支持這個專案與開發者。
  - 點選「Fork」按鈕，將原始碼複製到自己的儲存庫。
- 登入 [Vercel](https://vercel.com/) 平台。
  - 點選「Create a New Project」按鈕，建立一個新專案。
  - 點選「Import」按鈕，將 `gpt-ai-assistant` 專案匯入。
  - 點選「Environment Variables」頁籤，新增以下環境變數：
    - `OPENAI_API_KEY`：將值設置為 OpenAI 的 <a :href="withBase('/images/openai-api-key.png')" target="_blank">API key</a>。
    - `LINE_CHANNEL_ACCESS_TOKEN`：將值設置為 LINE 的 <a :href="withBase('/images/line-channel-access-token.png')" target="_blank">channel access token</a>。
    - `LINE_CHANNEL_SECRET`：將值設置為 LINE 的 <a :href="withBase('/images/line-channel-secret.png')" target="_blank">channel secret</a>。
  - 點選「Deploy」按鈕，等待部署完成。
  - 回到專案首頁，複製應用程式網址（Domains），例如「<https://gpt-ai-assistant.vercel.app/>」。
- 回到 [LINE](https://developers.line.biz/zh-hant/) 平台。
  - 進到「My AI Assistant」頻道頁面，點選「Messaging API」頁籤，設置「Webhook URL」，填入應用程式網址並加上「`/webhook`」路徑，例如「<https://gpt-ai-assistant.vercel.app/webhook>」，點選「Update」按鈕。
  - 點選「Verify」按鈕，驗證是否呼叫成功。
  - 將「Use webhook」功能開啟。
  - 將「Auto-reply messages」功能關閉。
  - 將「Greeting messages」功能關閉。
  - 使用 LINE 手機應用程式掃描 QR code，加入好友。
- 開始與你專屬的 AI 助理聊天！

## 檢查錯誤

在 Vercel 平台，進到專案首頁，點選「View Function Logs」按鈕。

<div align="center">
  <img :src="withBase('/images/vercel-view-logs.png')" width="600"/>
</div>

可以查看應用程式的錯誤訊息。

<div align="center">
  <img :src="withBase('/images/vercel-logs.png')" width="600"/>
</div>

## 問題回報

請到 GitHub 平台的「[Issues](https://github.com/memochou1993/gpt-ai-assistant/issues)」頁面，點選「New issue」按鈕，描述你的問題，並且附上螢幕截圖。
