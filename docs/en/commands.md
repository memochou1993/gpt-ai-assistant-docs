<script setup>
import { withBase } from '@vuepress/client'
</script>

# Introduction

Send commands using the LINE mobile app to perform specific functions.

## General Commands

Name | Alias | Description
--- | --- | ---
`Talk` | `/talk` | Talk with AI Assistant.
`Draw` | `/draw` | Ask AI Assistant to draw a picture.
`Continue` | `/continue` | Ask AI Assistant to continue the conversation.
`Activate` | `/activate` | Activate auto-reply. The `VERCEL_ACCESS_TOKEN` environment variable is required.
`Deactivate` | `/deactivate` | Deactivate auto-reply. The `VERCEL_ACCESS_TOKEN` environment variable is required.
`Retry` | `/retry` | Resend prompt。
`Forget` | `/forget` | Clear the previous conversation.

## Search Commands

Name | Alias | Description
--- | --- | ---
`Search` | `/search` | Ask AI Assistant to search on Google. The `SERPAPI_API_KEY` environment variable is required.

## System Commands

Name | Alias | Description
--- | --- | ---
`Command` | `/command` | Show the application commands.
`Version` | `/version` | Show the application version.
`Documentation` | `/doc` | Show the documentation.
`Report` | `/report` | Report issues.
`Restart` | `/restart` | Deploy the application. The `VERCEL_DEPLOY_HOOK_URL` environment variable is required.

## Sum Commands

Name | Alias | Description
--- | --- | ---
`Sum` | `/sum` | Ask AI Assistant to give a "summarize" response
`Advise` | `/advise` | Ask AI Assistant to give a "advise" response
`Apologize` | `/apologize` | Ask AI Assistant to give a "apologize" response
`Blame` | `/blame` | Ask AI Assistant to give a "blame" response
`Comfort` | `/comfort` | Ask AI Assistant to give a "comfort" response
`Complain` | `/complain` | Ask AI Assistant to give a "complain" response
`Laugh` | `/laugh` | Ask AI Assistant to give a "laugh" response
`Encourage` | `/encourage` | Ask AI Assistant to give a "encourage" response

## Analyze Commands

Name | Alias | Description
--- | --- | ---
`Analyze` | `/analyze` | Ask AI Assistant to analyze
`Analyze literarily` | `/analyze-literarily` | Ask AI Assistant to analyze literarily
`Analyze mathematically` | `/analyze-mathematically` | Ask AI Assistant to analyze mathematically
`Analyze numerologically` | `/analyze-numerologically` | Ask AI Assistant to analyze numerologically
`Analyze philosophically` | `/analyze-philosophically` | Ask AI Assistant to analyze philosophically
`Analyze psychologically` | `/analyze-psychologically` | Ask AI Assistant to analyze psychologically

## Translate Commands

Name | Alias | Description
--- | --- | ---
`Translate to English` | `/translate-to-en` | Ask AI Assistant to translate text to English
`Translate to Japanese` | `/translate-to-ja` | Ask AI Assistant to translate text to Japanese
