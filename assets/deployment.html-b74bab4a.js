import"./app-9749b0f5.js";import{_ as e,p as n,q as a,a1 as s}from"./framework-5866ffd3.js";const i=s(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="使用-docker-容器" tabindex="-1"><a class="header-anchor" href="#使用-docker-容器" aria-hidden="true">#</a> 使用 Docker 容器</h2><p>建立 <code>.env</code> 檔。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>設置環境變數。</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=&lt;your_vercel_access_token&gt;

OPENAI_API_KEY=&lt;your_openai_api_key&gt;

LINE_CHANNEL_ACCESS_TOKEN=&lt;your_line_channel_access_token&gt;
LINE_CHANNEL_SECRET=&lt;your_line_channel_secret&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>啟動一個本地伺服器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),d=[i],l={__name:"deployment.html",setup(c){return(r,t)=>(n(),a("div",null,d))}},_=e(l,[["__file","deployment.html.vue"]]);export{_ as default};
