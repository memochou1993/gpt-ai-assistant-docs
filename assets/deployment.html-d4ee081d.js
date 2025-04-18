import"./app-9749b0f5.js";import{_ as e,p as n,q as a,a1 as s}from"./framework-5866ffd3.js";const i=s(`<h1 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h1><h2 id="using-docker" tabindex="-1"><a class="header-anchor" href="#using-docker" aria-hidden="true">#</a> Using Docker</h2><p>Copy <code>.env.example</code> to <code>.env</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set the environment variables as follows:</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=&lt;your_vercel_access_token&gt;

OPENAI_API_KEY=&lt;your_openai_api_key&gt;

LINE_CHANNEL_ACCESS_TOKEN=&lt;your_line_channel_access_token&gt;
LINE_CHANNEL_SECRET=&lt;your_line_channel_secret&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start a local server with Docker Compose.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),l=[i],d={__name:"deployment.html",setup(r){return(c,t)=>(n(),a("div",null,l))}},u=e(d,[["__file","deployment.html.vue"]]);export{u as default};
