import{w as o}from"./app-9749b0f5.js";import{_ as r,M as u,p as s,q as c,R as l,t as e,z as d,N as n}from"./framework-5866ffd3.js";const a=l("h1",{id:"environment-variables",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#environment-variables","aria-hidden":"true"},"#"),e(" Environment Variables")],-1),_=l("p",null,"Set environment variables to change program settings.",-1),i=l("thead",null,[l("tr",null,[l("th",null,"Name"),l("th",null,"Default Value"),l("th",null,"Description")])],-1),h=l("tr",null,[l("td",null,[l("code",null,"APP_DEBUG")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("Print prompt to console. The value must be "),l("code",null,"true"),e(" of "),l("code",null,"false"),e(".")])],-1),p=l("tr",null,[l("td",null,[l("code",null,"APP_WEBHOOK_PATH")]),l("td",null,[l("code",null,"/webhook")]),l("td",null,"Custom webhook path.")],-1),E=l("tr",null,[l("td",null,[l("code",null,"APP_API_TIMEOUT")]),l("td",null,[l("code",null,"9000")]),l("td",null,"Timeout for API calls.")],-1),m=l("tr",null,[l("td",null,[l("code",null,"APP_LANG")]),l("td",null,[l("code",null,"zh")]),l("td",null,[e("Application language. The value must be one of "),l("code",null,"zh_TW"),e(", "),l("code",null,"zh_CN"),e(", "),l("code",null,"en"),e(" or "),l("code",null,"ja"),e(".")])],-1),f=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_GROUPS")]),l("td",null,[l("code",null,"1")]),l("td",null,[e("Maximum groups. The "),l("code",null,"VERCEL_ACCESS_TOKEN"),e(" environment variable is required.")])],-1),A=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_USERS")]),l("td",null,[l("code",null,"5")]),l("td",null,[e("Maximum users. The "),l("code",null,"VERCEL_ACCESS_TOKEN"),e(" environment variable is required.")])],-1),P=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_PROMPT_MESSAGES")]),l("td",null,[l("code",null,"12")]),l("td",null,"Maximum prompt sentences.")],-1),I=l("tr",null,[l("td",null,[l("code",null,"APP_MAX_PROMPT_TOKENS")]),l("td",null,[l("code",null,"1024")]),l("td",null,"Maximum prompt tokens.")],-1),T=l("tr",null,[l("td",null,[l("code",null,"APP_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"Initial prompt of system.")],-1),O=l("tr",null,[l("td",null,[l("code",null,"HUMAN_NAME")]),l("td",null,[l("code",null,"''")]),l("td",null,"Name of user.")],-1),N=l("tr",null,[l("td",null,[l("code",null,"HUMAN_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"Initial prompt of user.")],-1),g=l("tr",null,[l("td",null,[l("code",null,"BOT_NAME")]),l("td",null,[l("code",null,"AI")]),l("td",null,"Name of AI Assistant. This is used to call AI Assistant when auto-reply is deactivated.")],-1),M=l("tr",null,[l("td",null,[l("code",null,"BOT_INIT_PROMPT")]),l("td",null,[l("code",null,"''")]),l("td",null,"Initial prompt of AI Assistant.")],-1),R=l("tr",null,[l("td",null,[l("code",null,"BOT_TONE")]),l("td",null,[l("code",null,"''")]),l("td",null,"Tone of AI Assistant.")],-1),L=l("tr",null,[l("td",null,[l("code",null,"BOT_DEACTIVATED")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("Deactivate auto-reply at the beginning. The value must be "),l("code",null,"true"),e(" of "),l("code",null,"false"),e(".")])],-1),b=l("tr",null,[l("td",null,[l("code",null,"ERROR_TIMEOUT_DISABLED")]),l("td",null,[l("code",null,"false")]),l("td",null,[e("Disable timeout error. The value must be "),l("code",null,"true"),e(" of "),l("code",null,"false"),e(".")])],-1),k=l("tr",null,[l("td",null,[l("code",null,"VERCEL_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"Timeout for Vercel API calls.")],-1),C=l("tr",null,[l("td",null,[l("code",null,"VERCEL_PROJECT_NAME")]),l("td",null,[l("code",null,"gpt-ai-assistant")]),l("td",null,"Vercel project name. You can use this environment variable when the Vercel project name differs from the GitHub project name.")],-1),v=l("tr",null,[l("td",null,[l("code",null,"VERCEL_TEAM_ID")]),l("td",null,[l("code",null,"null")]),l("td",null,"Vercel team ID. You must use this environment variable when using Vercel's Pro plan.")],-1),S=l("td",null,[l("code",null,"VERCEL_ACCESS_TOKEN")],-1),y=l("td",null,[l("code",null,"null")],-1),U=["href"],V=l("td",null,[l("code",null,"VERCEL_DEPLOY_HOOK_URL")],-1),x=l("td",null,[l("code",null,"null")],-1),D=["href"],B=l("tr",null,[l("td",null,[l("code",null,"OPENAI_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"Timeout for OpenAI API calls.")],-1),G=l("td",null,[l("code",null,"OPENAI_API_KEY")],-1),K=l("td",null,[l("code",null,"null")],-1),w=["href"],Y=l("tr",null,[l("td",null,[l("code",null,"OPENAI_BASE_URL")]),l("td",null,[l("code",null,"https://api.openai.com")]),l("td",null,"OpenAI API Endpoint.")],-1),H=l("td",null,[l("code",null,"OPENAI_COMPLETION_MODEL")],-1),q=l("td",null,[l("code",null,"gpt-3.5-turbo")],-1),z={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-model",target:"_blank",rel:"noopener noreferrer"},X=l("td",null,[l("code",null,"OPENAI_COMPLETION_TEMPERATURE")],-1),j=l("td",null,[l("code",null,"0.9")],-1),Q={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature",target:"_blank",rel:"noopener noreferrer"},W=l("td",null,[l("code",null,"OPENAI_COMPLETION_MAX_TOKENS")],-1),F=l("td",null,[l("code",null,"160")],-1),J={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-max_tokens",target:"_blank",rel:"noopener noreferrer"},Z=l("td",null,[l("code",null,"OPENAI_COMPLETION_FREQUENCY_PENALTY")],-1),$=l("td",null,[l("code",null,"0")],-1),ll={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-frequency_penalty",target:"_blank",rel:"noopener noreferrer"},el=l("td",null,[l("code",null,"OPENAI_COMPLETION_PRESENCE_PENALTY")],-1),tl=l("td",null,[l("code",null,"0.6")],-1),nl={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-presence_penalty",target:"_blank",rel:"noopener noreferrer"},ol=l("td",null,[l("code",null,"OPENAI_COMPLETION_STOP_SEQUENCES")],-1),dl=l("td",null,[l("code",null,"assistant:,user:")],-1),rl={href:"https://platform.openai.com/docs/api-reference/chat/create#chat-create-stop",target:"_blank",rel:"noopener noreferrer"},ul=l("td",null,[l("code",null,"OPENAI_IMAGE_GENERATION_MODEL")],-1),sl=l("td",null,[l("code",null,"dall-e-2")],-1),cl={href:"https://platform.openai.com/docs/api-reference/images/create#images-create-model",target:"_blank",rel:"noopener noreferrer"},al=l("td",null,[l("code",null,"OPENAI_IMAGE_GENERATION_SIZE")],-1),_l=l("td",null,[l("code",null,"256x256")],-1),il={href:"https://platform.openai.com/docs/api-reference/images/create#images-create-size",target:"_blank",rel:"noopener noreferrer"},hl=l("td",null,[l("code",null,"OPENAI_IMAGE_GENERATION_QUALITY")],-1),pl=l("td",null,[l("code",null,"standard")],-1),El={href:"https://platform.openai.com/docs/api-reference/images/create#images-create-quality",target:"_blank",rel:"noopener noreferrer"},ml=l("tr",null,[l("td",null,[l("code",null,"LINE_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"Timeout for LINE Messaging API calls.")],-1),fl=l("td",null,[l("code",null,"LINE_CHANNEL_ACCESS_TOKEN")],-1),Al=l("td",null,[l("code",null,"null")],-1),Pl=["href"],Il=l("td",null,[l("code",null,"LINE_CHANNEL_SECRET")],-1),Tl=l("td",null,[l("code",null,"null")],-1),Ol=["href"],Nl=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_TIMEOUT")]),l("td",null,[l("code",null,"<APP_API_TIMEOUT>")]),l("td",null,"Timeout for SerpApi API calls.")],-1),gl=l("td",null,[l("code",null,"SERPAPI_API_KEY")],-1),Ml=l("td",null,[l("code",null,"null")],-1),Rl=["href"],Ll=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_LOCATION")]),l("td",null,[l("code",null,"tw")]),l("td",null,"Location of search。")],-1),bl=l("tr",null,[l("td",null,[l("code",null,"SERPAPI_LANG")]),l("td",null,[l("code",null,"lang_zh-TW")]),l("td",null,"Language of search。")],-1),kl=l("p",null,'Click the "Redeploy" button to redeploy if there are any changes.',-1),Cl={align:"center"},vl=["src"],Sl={__name:"environments.html",setup(yl){return(Ul,Vl)=>{const t=u("ExternalLinkIcon");return s(),c("div",null,[a,_,l("table",null,[i,l("tbody",null,[h,p,E,m,f,A,P,I,T,O,N,g,M,R,L,b,k,C,v,l("tr",null,[S,y,l("td",null,[e("Vercel "),l("a",{href:d(o)("/images/vercel-access-token.png"),target:"_blank"},"access token",8,U)])]),l("tr",null,[V,x,l("td",null,[e("Vercel "),l("a",{href:d(o)("/images/vercel-deploy-hook-url.png"),target:"_blank"},"deploy hook URL",8,D)])]),B,l("tr",null,[G,K,l("td",null,[e("OpenAI "),l("a",{href:d(o)("/images/openai-api-key.png"),target:"_blank"},"API key",8,w)])]),Y,l("tr",null,[H,q,l("td",null,[e("Refer to "),l("a",z,[e("model"),n(t)]),e(" parameter for details.")])]),l("tr",null,[X,j,l("td",null,[e("Refer to "),l("a",Q,[e("temperature"),n(t)]),e(" parameter for details.")])]),l("tr",null,[W,F,l("td",null,[e("Refer to "),l("a",J,[e("max_tokens"),n(t)]),e(" parameter for details.")])]),l("tr",null,[Z,$,l("td",null,[e("Refer to "),l("a",ll,[e("frequency_penalty"),n(t)]),e(" parameter for details.")])]),l("tr",null,[el,tl,l("td",null,[e("Refer to "),l("a",nl,[e("presence_penalty"),n(t)]),e(" parameter for details.")])]),l("tr",null,[ol,dl,l("td",null,[e("Refer to "),l("a",rl,[e("stop"),n(t)]),e(" parameter for details.")])]),l("tr",null,[ul,sl,l("td",null,[e("Refer to "),l("a",cl,[e("model"),n(t)]),e(" parameter for details.")])]),l("tr",null,[al,_l,l("td",null,[e("Refer to "),l("a",il,[e("size"),n(t)]),e(" parameter for details.")])]),l("tr",null,[hl,pl,l("td",null,[e("Refer to "),l("a",El,[e("quality"),n(t)]),e(" parameter for details.")])]),ml,l("tr",null,[fl,Al,l("td",null,[e("LINE "),l("a",{href:d(o)("/images/line-channel-access-token.png"),target:"_blank"},"channel access token",8,Pl)])]),l("tr",null,[Il,Tl,l("td",null,[e("LINE "),l("a",{href:d(o)("/images/line-channel-secret.png"),target:"_blank"},"channel secret",8,Ol)])]),Nl,l("tr",null,[gl,Ml,l("td",null,[e("SerpApi "),l("a",{href:d(o)("/images/serpapi-api-key.png"),target:"_blank"},"API key",8,Rl)])]),Ll,bl])]),kl,l("div",Cl,[l("img",{src:d(o)("/images/vercel-redeploy.png"),width:"600"},null,8,vl)])])}}},Bl=r(Sl,[["__file","environments.html.vue"]]);export{Bl as default};
