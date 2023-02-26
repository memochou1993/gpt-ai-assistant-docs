<script setup>
import { withBase } from '@vuepress/client'
</script>

# 程式版本

## 介紹

本專案遵循語意化版本管理，以版本 `3.2.1` 為例：

- 大版號「`3`」代表程式做了不向下相容的更新，需要檢查環境變數名稱是否異動。
- 中版號「`2`」代表程式做了向下相容的功能新增，可以直接更新應用程式。
- 小版號「`1`」代表程式做了向下相容的問題修復，可以直接更新應用程式。

## 更新步驟

在 GitHub 平台，進到自己的 `gpt-ai-assistant` 專案頁面，點選「Sync fork」選單，再點選「Update branch」或「Discard commit」按鈕，就可以同步最新的程式碼到自己的儲存庫。

::: tip 提示：

- 每當 Vercel 機器人偵測到程式碼有變更，就會立即自動重新部署。
:::

<div align="center">
  <img :src="withBase('/images/github-sync-fork.png')" width="600"/>
</div>
