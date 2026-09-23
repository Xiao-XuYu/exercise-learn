import{O as e}from"./idb-jk9e6Kq1.js";import{i as t,t as n}from"./aiJson-CmtCqDsV.js";var r=e({buildLearningCardPrompt:()=>f,extractPlainTextFromAiOutput:()=>o,extractPlainTextFromHtml:()=>s,generateLearningCardBatch:()=>w,generateLearningCardFromMarkdown:()=>h,generateLearningCardModes:()=>j,generateLearningCardSet:()=>_,getMode:()=>D,getModeHtml:()=>E,getModePlainText:()=>O,getRenderedPlainText:()=>k,normalizeLearningBatchReply:()=>C,stripPlainTextBlockFromHtml:()=>a,tryRepairHtml:()=>p,validateLearningCardHtml:()=>m,withUpdatedMode:()=>A}),i=/<!--\s*CARD_PLAINTEXT_START\s*-->([\s\S]*?)<!--\s*CARD_PLAINTEXT_END\s*-->/i;function a(e){return e&&e.replace(/\s*<!--\s*CARD_PLAINTEXT_START\s*-->[\s\S]*?<!--\s*CARD_PLAINTEXT_END\s*-->/gi,``)}function o(e){if(!e)return;let t=e.match(i);if(t)return t[1].replace(/^\s+|\s+$/g,``).replace(/\n{3,}/g,`

`)||void 0}function s(e){if(!e||typeof DOMParser>`u`)return``;try{let t=a(e),n=new DOMParser().parseFromString(t,`text/html`);return n.querySelectorAll(`script, style, noscript`).forEach(e=>e.remove()),(n.body?.textContent??``).replace(/\s+/g,` `).trim()}catch{return``}}var c=`【角色】你是教学写作助手。根据用户提供的「学习卡片 markdown 素材」生成一段高质量 markdown 文本。
【绝对禁止】任何解释、注释、思考过程、<think> 标签。
【绝对禁止】JSON 输出、HTML 输出（除非 markdown 内部的 \`code\` 块）、任何非 markdown 包装。
【必须】第一个字符必须是 markdown 字符（# / > / - / 数字 等），最后一个字符是普通字符（不要带"结尾标记"）。
【必须】所有 CSS / JS / 主题切换都不要做——纯文本 markdown 即可。
【必须】结构清晰：使用 # ## ### 分级标题 + 列表 + 引用 + 表格 + 代码块，让内容易读。`,l={ppt:()=>`【任务】把这段 markdown 素材整理成一份简短 PPT。
【分页建议】3-7 张幻灯片；每页 = 一个核心要点 / 一个例子 / 一个总结；不要每行素材都做一页。
【样式】键盘左右键切换；底部显示页码指示器；ESC 退出全屏；每页一个标题 + 2-4 行要点 + 大字号（48px+）。
【不要】装饰性图片、外部资源、复杂动画。`,reveal:()=>`【任务】把这段 markdown 素材组织成一个滚动揭露网页。
【结构】按核心要点分章节（每个要点 = 一个 <section>），章节标题用「📚 要点 N：XXX」格式。
【实现】使用 IntersectionObserver 实现滚动逐步揭露（.reveal class + opacity/translate transition）。
【导航】含顶部章节目录 + 当前章节高亮；可用 emoji 或 inline SVG 作配图占位；不要外部图片。`,pretty:()=>`【任务】把这段 markdown 素材做成一个炫彩主题页（视觉冲击力优先）。
【结构】每个核心要点 = 一个炫彩卡片 / 视觉组件；色彩与动画为「要点」服务，不是为「素材」服务。
【视觉风格】根据下面的主题色板设计：色彩、字体、背景纹理、装饰元素。必须有动画效果（CSS keyframes 或 JS）。主标题字号 64px+。`,eli5:()=>`【任务】把这段 markdown 素材讲给 5 岁小孩听。
【实现】每个核心要点 = 一个生活故事 / 类比（积木 / 糖果 / 玩具 / 小动物等）。
【要求】不出现任何专业术语；遇到必须翻译成生活词；反复重复同一比喻。
【收尾】每个要点用「所以，X 就是 Y！」做小结。`,eli_ms:()=>`【任务】把这段 markdown 素材讲给中学生。
【实现】每个核心要点 = 一段讲解；正式术语 + 通俗解释并列（如「力矩（你可以理解为……）」）。
【要求】用日常物理/数学/历史类比；段落清晰；可偶尔引用历史典故。`,eli_eng:()=>`【任务】把这段 markdown 素材讲给工程师。
【实现】每个核心要点 = 一段技术讲解 + 伪代码 / ASCII 图 / 状态机；引用算法名称（Big-O、DFS、BFS 等）。
【要求】关键算法用代码块演示；可用 MathML 写数学公式；附性能数据 / 边界用例。`,parable:()=>`【任务】把这段 markdown 素材的核心概念写成一篇完整寓言（≥ 800 字中文），间接讲清这个概念。
【结构】① 寓言正文（≥ 800 字）；②「## 概念解释」（学术定义 + 与素材对应）；③「## 隐喻对应」（逐段对应表：寓言人物/情节 → 概念要素）。
【约束】寓言中不要说概念名，留悬念；用户在「## 概念解释」里才能看到。`,feynman:()=>`【任务】用「费曼学习法」把这组素材讲给一个完全不懂的人听 —— 假设读者从来没接触过这个领域。
【核心原则】如果你不能用最简单的语言讲清楚，说明你自己也没真懂；所以要彻底简化。
【结构】按以下四步组织整个网页：
  ① 选概念（Choose）：一句话点明今天要讲什么、为什么重要；
  ② 教小孩（Teach）：把这个概念拆成 3-5 个递进的「最小步骤」，每步用「生活类比 + 极简例子」讲，不出现任何专业术语；术语必须翻译成大白话（例如「函数 → 加工厂」「变量 → 收纳盒」）；
  ③ 找漏洞（Review）：列出 2-3 个"如果对方问这个问题你会卡住"的地方（这些就是原素材里没说清、需要回查的漏洞），用「你可能想问」的小问答形式；
  ④ 简化复述（Simplify）：用 3-5 句话把整个概念重新讲一遍，让一个 12 岁孩子能复述。
【视觉风格】友好、温暖、像老师一对一辅导：用大字号、emoji 配图、对比色块、留白；主标题 64px+；每个最小步骤一个独立卡片；整页要做出"网页式教学"的好看感，不是干巴巴的 markdown。
【绝对禁止】长篇大论的术语堆砌、保持"高深莫测"的口吻、把概念讲复杂。`},u=`【任务】基于用户提供的 markdown 素材，做「精炼 / 改写 / 润色」——
- 删去冗余
- 突出核心观点
- 用清晰的 # ## ### 标题结构
- 必要时用列表 / 表格 / 引用让可读性更高
【输出】纯 markdown 文本。不要写"以下是改写后的内容"等元说明。`;function d(e,t){return e?e.length>t?e.slice(0,t)+`…`:e:``}function f(e,t,n={}){let{title:r,theme:i,conceptHint:a,sourceCards:o}=n,s=d(t,6e3),c=r?.trim()??``,f=``;if(e===`markdown`)f=`# 学习卡片原始 markdown

${s||(c?`（用户未提供 markdown，以下为卡片标题：\n> ${c}\n请基于该主题写一篇高质量学习笔记。）`:`（空）`)}

# 任务
${u}`;else{let t=o&&o.length>0?`\n# 同集内其它学习卡片（作为追加素材参考）\n${o.map((e,t)=>`${t+1}. 《${e.title}》\n${d(e.markdown,1200)}`).join(`

`)}\n`:``,n=s;!n&&c?n=`（用户未提供 markdown，以下为卡片标题：\n> ${c}\n请基于该主题生成内容。）`:n||=`（空）`;let r=l[e],u=r?r(s):``,p=``;i&&(p=`
# 主题（${i}）
- 这是一个独特的主题场景描述（从 67 万主题池中随机抽取）；请围绕这个主题自由发挥视觉风格
- 配色 / 字体 / 背景纹理 / 装饰元素 / 动画风格都按你的判断决定，不局限于固定色板
- 在生成的 HTML <head> 里加 <meta name="theme" content="${i}"> 把这个主题名报回来
- 如 kind=parable：concept 由用户单独提示（见下方），主题只决定视觉风格与叙事氛围`);let m=a?`\n（用户提示的概念方向：${a}，仅作参考）`:``;f=`# 学习卡片原始 markdown${s?`（基础素材，必须基于它）`:`（用户未填写，以下为卡片标题，仅作参考）`}

${n}${t}

# kind 专属要求
${u}${m}
${p}`.trim()}return f}function p(e){if(!e)return{html:e,repairs:[],changed:!1};let t=[],n=e,r=n.match(/^\s*```(?:html|HTML)?\s*\n?([\s\S]*?)\n?\s*```\s*$/);r&&(n=r[1],t.push(`strip-markdown-fence`)),/&lt;\/?(?:!doctype|html|head|body|style|script|div|section|article|header|footer|nav|main|aside|h[1-6]|p|ul|ol|li|table|tr|td|th|form|input|button|span|a|img|svg|canvas)\b/i.test(n)&&(n=n.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&#39;/g,`'`),t.push(`unescape-html-entities`));let i=n;n=a(n),n!==i&&t.push(`strip-plaintext-block`);let o=/^\s*<!doctype\s+html/i.test(n),s=/<\/html>/i.test(n),c=/<\/body>/i.test(n);return o?s||(n+=c?`
</html>`:`
</body>
</html>`,t.push(`append-</html>`)):s?(n=`<!doctype html>
`+n.trimStart(),t.push(`prepend-doctype`)):(n=`<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body>
`+n.trim()+`
</body>
</html>`,t.push(`wrap-outer-shell`)),{html:n,repairs:t,changed:n!==e}}function m(e){let t=new Blob([e]).size;return e.length<200?{ok:!1,reason:`内容过短（少于 200 字）`,bytes:t}:t>1e6?{ok:!1,reason:`内容过大（${(t/1024).toFixed(0)} KB > 1 MB 上限），无法保存`,bytes:t}:t>5e5?{ok:!0,reason:`内容较大（> 500KB），建议简化`,bytes:t}:/^\s*<!doctype\s+html/i.test(e)?/<\/html>/i.test(e)?{ok:!0,bytes:t}:{ok:!1,reason:`未闭合 </html>`,bytes:t}:{ok:!1,reason:`缺少 <!doctype html>`,bytes:t}}async function h(e){if(!t.isConfigured())throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let n=e.kind===`markdown`,r=n?c:`【角色】你是教学前端工程师。根据用户提供的「学习卡片 markdown 素材」生成一个完整、自包含的 HTML 文档。
【绝对禁止】任何解释、注释、Markdown 代码块标记（\`\`\`html）、思考过程、<think> 标签。
【绝对禁止】JSON 输出。
【必须】第一个字符必须是 <（建议以 <!doctype html> 开头），最后一个字符必须是 >。
【必须】所有 CSS 与 JS 必须 inline 在 <style>/<script> 标签内，不允许任何外部依赖（CDN、字体、图片 URL 都不行；emoji 可用）。
【必须】不使用 alert/confirm/prompt；不弹窗、不跳转、不访问 location/document.cookie/localStorage。
【必须】移动端友好：响应式布局 + 不依赖鼠标 hover 的关键交互。
【必须】首次输出必须是 <!doctype html>，避免任何前缀空白或注释。
【必须】HTML 文档输出完毕后，必须紧跟一段 HTML 注释包裹的纯文本素材，供后续生成测试题使用。格式：
<!--CARD_PLAINTEXT_START-->
{保留原始段落结构与标题层级（# / ## / ### / 列表 / 表格 / 引用），1500-4000 字}
<!--CARD_PLAINTEXT_END-->
纯文本内容应与 HTML 主体严格对应（不能包含 HTML 里没有的新信息），但去掉视觉装饰、动画、JS 代码块外的源码、emoji 装饰；保留 markdown 风格以便后续被题目生成复用。
`,i=f(e.kind,e.markdown,{title:e.title,theme:e.theme,conceptHint:e.conceptHint,sourceCards:e.sourceCards});e.onProgress?.({stage:`requesting`,progress:.1,message:`向 AI 发送请求…`,accumulated:``});let s=0,l=!0,u=``,d=await t.chatCompletion({stream:!0,messages:[{role:`system`,content:r},{role:`user`,content:i}],temperature:.7,max_tokens:n?65536:131072,thinking:e.thinking,onDelta:(t,n)=>{u=n;let r=Date.now();if(l){l=!1,s=r,e.onProgress?.({stage:`streaming`,progress:.2,message:`AI 开始返回…`,accumulated:u});return}if(r-s<300)return;s=r;let i=Math.min(1,u.length/16e3);e.onProgress?.({stage:`streaming`,progress:.2+i*.7,message:`接收中（${u.length} 字）…`,accumulated:u})}},{signal:e.signal,timeoutMs:9e5});u=d.text;let h=d.finishReason;if(e.onProgress?.({stage:`validating`,progress:.95,message:`校验输出…`,accumulated:u}),n){if(u.trim().length<10)throw Error(`AI 改写后的 markdown 过短（少于 10 字）`);let t=new Blob([u]).size;if(t>1e6)throw Error(`AI 改写后的 markdown 过大（${(t/1024).toFixed(0)} KB > 1 MB 上限），无法保存`);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:u}),{markdown:u}}let g=p(u);g.changed&&(u=g.html,(h===`length`||h===`max_tokens`)&&console.warn(`[learningCard] AI 输出被 max_tokens 截断（finish_reason=${h}），自动修补：${g.repairs.join(`, `)}`));let _=m(u);if(!_.ok){let e=h===`length`||h===`max_tokens`?`（输出被 max_tokens 截断，自动修补未救回）`:``;throw Error(`AI 输出的 HTML 不合法：${_.reason}${e}`)}let v;if(e.kind===`parable`){let e=u.match(/<meta\s+name=["']concept["']\s+content=["']([^"']+)["']/i);e&&(v=e[1].trim())}let y,b=u.match(/<meta\s+name=["']theme["']\s+content=["']([^"']+)["']/i);if(b){let e=b[1].trim();e&&(y=e)}!y&&e.theme&&(y=e.theme);let x=o(u);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:u}),{markdown:e.markdown,html:a(u),concept:v,theme:y,plainText:x,repair:g.changed?{truncated:h===`length`||h===`max_tokens`,repairs:g.repairs}:void 0}}var g=`你是教学助手。根据用户提供的资料，生成一个学习卡片集的元数据 + 第一张 markdown 学习卡片。
【输出格式】严格 JSON 对象，不要任何解释、不要 Markdown 代码块、不要<think> 标签。
字段：
  - title: string（卡片集标题，简短、有吸引力）
  - description: string（一句话描述，说明这个卡片集讲什么）
  - firstCard: { title: string, markdown: string }
    - firstCard.title：第一张学习卡片的标题
    - firstCard.markdown：纯 markdown 内容（用 # ## ### 分级 + 列表 + 引用 + 表格等），150-600 字
【绝对禁止】JSON 之外的内容、注释、思考过程。
【必须】第一个字符是 {，最后一个字符是 }。`;async function _(e){if(!t.isConfigured())throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let n=d(e.sourceText,8e3),r=e.titleHint?`\n【用户提示的标题方向】${e.titleHint}（仅作参考）`:``,i=`# 资料\n\n${n||`（空）`}${r}\n\n请按 system prompt 严格输出 JSON。`;e.onProgress?.({stage:`requesting`,progress:.1,message:`向 AI 发送请求…`,accumulated:``});let a=0,o=!0,s=``;s=(await t.chatCompletion({stream:!0,messages:[{role:`system`,content:g},{role:`user`,content:i}],temperature:.6,max_tokens:4096,thinking:e.thinking,onDelta:(t,n)=>{s=n;let r=Date.now();if(o){o=!1,a=r,e.onProgress?.({stage:`streaming`,progress:.2,message:`AI 开始返回…`,accumulated:s});return}if(r-a<300)return;a=r;let i=Math.min(1,s.length/8e3);e.onProgress?.({stage:`streaming`,progress:.2+i*.7,message:`接收中（${s.length} 字）…`,accumulated:s})}},{signal:e.signal,timeoutMs:12e4})).text,e.onProgress?.({stage:`validating`,progress:.95,message:`解析 JSON…`,accumulated:s});let c=T(s),l=null;try{let e=JSON.parse(c);e&&typeof e==`object`&&typeof e.title==`string`&&e.firstCard&&typeof e.firstCard.title==`string`&&typeof e.firstCard.markdown==`string`&&(l=e)}catch{}if(!l)throw Error(`AI 返回的 JSON 不合法，无法解析为学习卡片集`);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:s}),l}var v=new Set([`pretty`,`reveal`,`parable`]),y=`parable`,b=[`markdown`,`ppt`,`reveal`,`pretty`,`eli5`,`eli_ms`,`eli_eng`,`parable`,`feynman`],x=`你是教学写作助手。根据用户提供的「资料」和「可选标题」，生成 N 张 markdown 学习卡片。
【输出格式】严格 JSON 对象，不要任何解释、不要 Markdown 代码块、不要 标签。
JSON 顶层结构：
  { "cards": [ { "title": "...", "kind": "...", "markdown": "..." }, ... ] }
每张卡片字段：
  - title: string，<= 30 字，简明扼要，避免与已有卡片标题重复
  - kind: 枚举值之一（见下方 kind 白名单）；可省略，省略时按 markdown 处理
  - markdown: 纯 markdown 文本（# ## ### 分级 + 列表 + 引用 + 表格等），150–600 字
  - theme: 可选；仅在 kind ∈ {pretty, reveal, parable} 时有意义。**自由给一个独特的主题名**（中英文皆可，2-6 个词，描述一种独特的视觉/场景氛围），查看页会按主题名渲染视觉风格；不要从几个固定值里挑，要尽量发散。
  - concept: 可选；仅在 kind=parable 时有意义
【kind 白名单】用户已限定：\${enabledKindsLabel}。不要输出白名单外的 kind。
【卡片数量】请生成**正好 \${cardCount} 张**卡片。资料不足时围绕同一主题的不同侧面（定义/例子/对比/应用/反例/常见误区）展开，绝不偷工减料。
【避免重复】以下是目标学习卡片集已有卡片标题，请避免标题或语义高度相似：
\${existingTitlesBlock}【绝对禁止】JSON 之外的内容、注释、思考过程。
【必须】第一个字符是 {，最后一个字符是 }。`;function S(e){let t=(e.enabledKinds?.length?e.enabledKinds:b).join(`、`),n=Math.max(1,Math.min(25,Math.floor(e.cardCount)||1)),r=(e.existingTitles??[]).slice(-60),i=r.length>0?r.map((e,t)=>`${t+1}. ${e}`).join(`
`)+`
`:`（无）
`,a=x.replace("${enabledKindsLabel}",t).replace("${cardCount}",String(n)).replace("${existingTitlesBlock}",i),o=(e.sourceText??``).trim(),s=e.titleHint?.trim()?`\n【用户提示的标题方向】${e.titleHint.trim()}（仅作参考）`:``;return`${a}\n\n${o?`# 资料\n\n"""${o.slice(0,16e3)}"""`:`# 资料
（用户未提供）
请根据下面的「标题提示」自由发挥，围绕该主题挑选适合学习的知识点作为卡片。`}${s}\n\n请严格按 system prompt 输出 JSON。`}function C(e,t){let r=n(e);if(!r){let t=e.slice(0,300).replace(/\s+/g,` `);throw Error(`无法解析为 JSON。原回复前 300 字：「${t}」`)}let i=new Set(t),a=Array.isArray(r.cards)?r.cards:[],o=[],s=[];if(a.forEach((e,t)=>{let n=t+1;if(!e||typeof e!=`object`){o.push(`第 ${n} 张卡片不是有效对象，已跳过`);return}let r=e,a=typeof r.title==`string`?r.title.trim():``;if(!a){o.push(`第 ${n} 张卡片 title 为空，已跳过`);return}let c=typeof r.markdown==`string`?r.markdown.trim():``;if(!c){o.push(`第 ${n} 张「${a}」markdown 为空，已跳过`);return}let l=r.kind,u;if(typeof l==`string`&&i.has(l))u=l;else if(i.has(`markdown`))u=`markdown`;else{o.push(`第 ${n} 张「${a}」kind 不在白名单，已跳过`);return}let d={title:a,kind:u,markdown:c};if(v.has(u)){let e=r.theme;typeof e==`string`&&e.trim()&&(d.theme=e.trim())}if(u===y){let e=r.concept;typeof e==`string`&&e.trim()&&(d.concept=e.trim())}s.push(d)}),s.length===0)throw Error(`AI 返回的批次没有任何有效卡片（共 ${a.length} 条原始条目被过滤）`);return{cards:s,warnings:o}}async function w(e){if(!t.isConfigured())throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let n=Math.max(1,Math.min(25,Math.floor(e.cardCount)||1)),r=e.enabledKinds?.length?e.enabledKinds:b;if(!(e.sourceText??``).trim()&&!e.titleHint?.trim())throw Error(`资料文本或标题提示至少填一项`);let i=S({...e,enabledKinds:r,cardCount:n});e.onProgress?.({stage:`requesting`,progress:.1,message:`向 AI 发送请求…`,accumulated:``});let a=0,o=!0,s=``;s=(await t.chatCompletion({stream:!0,messages:[{role:`system`,content:x},{role:`user`,content:i}],temperature:.7,max_tokens:65536,thinking:e.thinking,onDelta:(t,n)=>{s=n;let r=Date.now();if(o){o=!1,a=r,e.onProgress?.({stage:`streaming`,progress:.2,message:`AI 开始返回…`,accumulated:s});return}if(r-a<300)return;a=r;let i=Math.min(1,s.length/16e3);e.onProgress?.({stage:`streaming`,progress:.2+i*.7,message:`接收中（${s.length} 字）…`,accumulated:s})}},{signal:e.signal,timeoutMs:9e5})).text,e.onProgress?.({stage:`validating`,progress:.95,message:`解析 JSON…`,accumulated:s});let c=C(s,r);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:s}),c}function T(e){let t=e.indexOf(`{`);if(t<0)return e;let n=0,r=!1,i=!1;for(let a=t;a<e.length;a++){let o=e[a];if(i){i=!1;continue}if(o===`\\`&&r){i=!0;continue}if(o===`"`){r=!r;continue}if(!r){if(o===`{`)n++;else if(o===`}`&&(n--,n===0))return e.slice(t,a+1)}}return e.slice(t)}function E(e,t){if(t===`markdown`)return;let n=e.modes?.[t]?.html;if(n)return a(n);if(e.kind===t&&e.html)return a(e.html)}function D(e,t){if(t!==`markdown`)return e.modes?.[t]}function O(e,t){if(t===`markdown`)return e.markdown??``;let n=e.modes?.[t];return n?.plainText&&n.plainText.trim()?n.plainText:n?.html?s(n.html):``}function k(e,t){if(t===`markdown`)return e.markdown??``;let n=e.modes?.[t];return n?.html?s(n.html):``}function A(e,t,n){let r={...e.modes??{},[t]:n},i=e.kind===t,a={...e,modes:r,updatedAt:Date.now()};return i&&(a.html=n.html,n.theme===void 0?t!==`pretty`&&t!==`reveal`&&t!==`parable`&&delete a.theme:a.theme=n.theme,n.concept===void 0?t!==`parable`&&delete a.concept:a.concept=n.concept),a}async function j(e){if(!t.isConfigured())throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let n=new Set,r=[];for(let t of e.kinds)n.has(t)||(n.add(t),r.push(t));if(r.length===0)throw Error(`至少选择 1 种非 markdown 的 kind`);let i=r.length,a={value:0},o=t=>{a.value++;let n=a.value/i;e.onProgress?.({progress:Math.min(1,.2+n*.7),message:`已生成 ${a.value} / ${i} 个模式${t?`（`+t+`）`:``}`})},s=r.map(t=>new Promise(n=>{let r=new AbortController,i=()=>r.abort();e.signal&&(e.signal.aborted?r.abort():e.signal.addEventListener(`abort`,i)),h({kind:t,markdown:e.markdown,title:e.title,theme:e.theme,conceptHint:e.conceptHint,sourceCards:e.sourceCards,signal:r.signal}).then(r=>{n({kind:t,ok:!0,mode:{html:r.html??``,generatedAt:Date.now(),...r.plainText?{plainText:r.plainText}:{},...r.concept?{concept:r.concept}:{},...e.theme&&(t===`pretty`||t===`reveal`||t===`parable`)?{theme:e.theme}:{}},repair:r.repair})}).catch(e=>{n({kind:t,ok:!1,error:e instanceof Error?e.message:String(e)})}).finally(()=>{e.signal&&e.signal.removeEventListener(`abort`,i),o(t)})})),c=await Promise.all(s),l={},u={},d={};for(let t of c)t.ok?(l[t.kind]=t.mode,t.repair&&(d[t.kind]=t.repair),e.onKindComplete?.(t.kind,{ok:!0,mode:t.mode})):(u[t.kind]=t.error,e.onKindComplete?.(t.kind,{ok:!1,error:t.error}));return e.onProgress?.({progress:1,message:`完成`}),{modes:l,errors:u,...Object.keys(d).length>0?{repairs:d}:{}}}export{E as a,r as c,A as d,D as i,C as l,j as n,O as o,_ as r,k as s,w as t,p as u};