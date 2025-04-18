import"./app-9749b0f5.js";import{_ as d,M as l,p as r,q as t,R as n,t as e,N as a,a1 as i}from"./framework-5866ffd3.js";const c=i(`<h1 id="開發" tabindex="-1"><a class="header-anchor" href="#開發" aria-hidden="true">#</a> 開發</h1><h2 id="介紹" tabindex="-1"><a class="header-anchor" href="#介紹" aria-hidden="true">#</a> 介紹</h2><p>本專案是一個使用 JavaScript 開發的開源專案，歡迎自行修改，或發送合併請求（PR）。</p><h2 id="建立專案" tabindex="-1"><a class="header-anchor" href="#建立專案" aria-hidden="true">#</a> 建立專案</h2><p>下載專案。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:memochou1993/gpt-ai-assistant.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>進到專案目錄。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gpt-ai-assistant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安裝依賴套件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="執行測試" tabindex="-1"><a class="header-anchor" href="#執行測試" aria-hidden="true">#</a> 執行測試</h2><p>建立 <code>.env.test</code> 檔。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>運行測試。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看結果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> gpt-ai-assistant@0.0.0 <span class="token builtin class-name">test</span>
<span class="token operator">&gt;</span> jest

  console.info
    <span class="token operator">==</span><span class="token operator">=</span> 000001 <span class="token operator">==</span><span class="token operator">=</span>

    Human: 嗨！
    AI: 好的！

Test Suites: <span class="token number">1</span> passed, <span class="token number">1</span> total
Tests:       <span class="token number">1</span> passed, <span class="token number">1</span> total
Snapshots:   <span class="token number">0</span> total
Time:        <span class="token number">1</span> s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用代理伺服器" tabindex="-1"><a class="header-anchor" href="#使用代理伺服器" aria-hidden="true">#</a> 使用代理伺服器</h2><p>建立 <code>.env</code> 檔。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>設置環境變數。</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=&lt;your_vercel_access_token&gt;

OPENAI_API_KEY=&lt;your_openai_api_key&gt;

LINE_CHANNEL_ACCESS_TOKEN=&lt;your_line_channel_access_token&gt;
LINE_CHANNEL_SECRET=&lt;your_line_channel_secret&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>啟動一個本地伺服器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>開啟另一個終端機，啟動一個代理伺服器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngrok http <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),o={href:"https://developers.line.biz/zh-hant/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://0000.jp.ngrok.io/webhook",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>使用 LINE 手機應用程式發送訊息。</p><p>查看結果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> gpt-ai-assistant@0.0.0 dev
<span class="token operator">&gt;</span> <span class="token function">node</span> api/index.js

<span class="token operator">==</span><span class="token operator">=</span> 0x1234 <span class="token operator">==</span><span class="token operator">=</span>

Memo: 嗨
AI: 你好嗎？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={__name:"development.html",setup(m){return(b,h)=>{const s=l("ExternalLinkIcon");return r(),t("div",null,[c,n("p",null,[e("在 "),n("a",o,[e("LINE"),a(s)]),e(" 平台，修改「Webhook URL」，例如「"),n("a",p,[e("https://0000.jp.ngrok.io/webhook"),a(s)]),e("」，點選「Update」按鈕。")]),v])}}},k=d(u,[["__file","development.html.vue"]]);export{k as default};
