<script setup>
import { withBase } from '@vuepress/client'
</script>

# 指令

## 介紹

在 LINE 手機應用程式輸入以下不同的指令，即可以執行特定的功能。

## 一般指令

指令 | 別名 | 說明
--- | --- | ---
`請問` | `/talk` | 與 AI 進行對話。
`請畫` | `/draw` | 請 AI 生成圖像。
`繼續` | `/continue` | 請 AI 繼續回覆。
`開啟自動回覆` | `/activate` | 將 AI 自動回覆設為開啟，<br>需要設置 `VERCEL_ACCESS_TOKEN` 環境變數。
`關閉自動回覆` | `/deactivate` | 將 AI 自動回覆設為關閉，<br>需要設置 `VERCEL_ACCESS_TOKEN` 環境變數。
`重試` | `/retry` | 重新發送對話。
`忘記` | `/forget` | 清除歷史對話。

## 查詢指令

指令 | 別名 | 說明
--- | --- | ---
`查詢` | `/search` | 請 AI 在 Google 上查詢資料，<br>需要設置 `SERPAPI_API_KEY` 環境變數。

## 系統指令

指令 | 別名 | 說明
--- | --- | ---
`指令` | `/command` | 取得應用程式的指令。
`版本` | `/version` | 取得應用程式的版本。
`文件` | `/doc` | 取得應用程式的文件。
`回報問題` | `/report` | 回報問題。
`重新啟動` | `/restart` | 重新部署應用程式，<br>需要設置 `VERCEL_DEPLOY_HOOK_URL` 環境變數。

## 總結指令

指令 | 別名 | 說明
--- | --- | ---
`總結` | `/sum` | 請 AI 做出「總結」總結。
`建議` | `/advise` | 請 AI 做出「建議」總結。
`道歉` | `/apologize` | 請 AI 做出「道歉」總結。
`譴責` | `/blame` | 請 AI 做出「譴責」總結。
`安慰` | `/comfort` | 請 AI 做出「安慰」總結。
`抱怨` | `/complain` | 請 AI 做出「抱怨」總結。
`鼓勵` | `/encourage` | 請 AI 做出「鼓勵」總結。
`嘲諷` | `/laugh` | 請 AI 做出「嘲諷」總結。

## 分析指令

指令 | 別名 | 說明
--- | --- | ---
`分析` | `/analyze` | 請 AI 分析。
`文學分析` | `/analyze-literarily` | 請 AI 以文學角度分析。
`數學分析` | `/analyze-mathematically` | 請 AI 以數學角度分析。
`命理學分析` | `/analyze-numerologically` | 請 AI 以命理學角度分析。
`哲學分析` | `/analyze-philosophically` | 請 AI 以哲學角度分析。
`心理學分析` | `/analyze-psychologically` | 請 AI 以心理學角度分析。

## 翻譯指令

指令 | 別名 | 說明
--- | --- | ---
`翻成英文` | `/translate-to-en` | 請 AI 將文字翻譯成英文。
`翻成日文` | `/translate-to-ja` | 請 AI 將文字翻譯成日文。
