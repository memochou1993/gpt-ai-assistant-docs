import"./app-9749b0f5.js";import{_ as l,M as d,p as t,q as r,R as s,t as e,N as a,a1 as i}from"./framework-5866ffd3.js";const o=i(`<h1 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h1><p>Clone the project.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:memochou1993/gpt-ai-assistant.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Go to the project directory.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gpt-ai-assistant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Install dependencies.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tests" tabindex="-1"><a class="header-anchor" href="#tests" aria-hidden="true">#</a> Tests</h2><p>Copy <code>.env.example</code> to <code>.env.test</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run the tests.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Check the results.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> gpt-ai-assistant@0.0.0 <span class="token builtin class-name">test</span>
<span class="token operator">&gt;</span> jest

  console.info
    <span class="token operator">==</span><span class="token operator">=</span> 000001 <span class="token operator">==</span><span class="token operator">=</span>

    Human: 嗨！
    AI: 好的！

Test Suites: <span class="token number">1</span> passed, <span class="token number">1</span> total
Tests:       <span class="token number">1</span> passed, <span class="token number">1</span> total
Snapshots:   <span class="token number">0</span> total
Time:        <span class="token number">1</span> s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-proxy-server" tabindex="-1"><a class="header-anchor" href="#using-proxy-server" aria-hidden="true">#</a> Using Proxy Server</h2><p>Copy <code>.env.example</code> to <code>.env</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set the environment variables as follows:</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>APP_DEBUG=true
APP_PORT=3000

VERCEL_PROJECT_NAME=gpt-ai-assistant
VERCEL_ACCESS_TOKEN=&lt;your_vercel_access_token&gt;

OPENAI_API_KEY=&lt;your_openai_api_key&gt;

LINE_CHANNEL_ACCESS_TOKEN=&lt;your_line_channel_access_token&gt;
LINE_CHANNEL_SECRET=&lt;your_line_channel_secret&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start a local server.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start a proxy server.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ngrok http <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),c={href:"https://developers.line.biz/en/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://0000.jp.ngrok.io/webhook",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>Send a message from the LINE mobile app.</p><p>Check the results.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> gpt-ai-assistant@0.0.0 dev
<span class="token operator">&gt;</span> <span class="token function">node</span> api/index.js

<span class="token operator">==</span><span class="token operator">=</span> 0x1234 <span class="token operator">==</span><span class="token operator">=</span>

Memo: 嗨
AI: 你好嗎？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={__name:"development.html",setup(m){return(b,h)=>{const n=d("ExternalLinkIcon");return t(),r("div",null,[o,s("p",null,[e("Go back to the "),s("a",c,[e("LINE"),a(n)]),e(' website, modify the "Webhook URL" to e.g. "'),s("a",p,[e("https://0000.jp.ngrok.io/webhook"),a(n)]),e('" and click the "Update" button.')]),v])}}},k=l(u,[["__file","development.html.vue"]]);export{k as default};
