<script setup>
import { withBase } from '@vuepress/client'
</script>

# Update

On your own `gpt-ai-assistant` project page, you can click on the "Sync fork" menu and then click on either the "Update branch" or "Discard commit" button to synchronize the latest code to your repository.

When the Vercel bot detects a change in the code, it will automatically redeploy.

<div align="center">
  <img :src="withBase('/images/github-sync-fork.png')" width="600"/>
</div>
