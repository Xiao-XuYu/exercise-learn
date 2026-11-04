const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./adaptiveWorkerPool-BsbuOGNA.js","./rolldown-runtime-hePW80VL.js"])))=>i.map(i=>d[i]);
import{y as e}from"./cloudSyncApi-MlXq7SvT.js";import{I as t,l as n}from"./minimax-CUDKw34i.js";import{n as r,t as i}from"./selectionBridgeScript-CmOsSvYy.js";var a={markdown:{chipLabel:`Markdown`,fullLabel:`Markdown`,icon:`📝`,bg:`#e2e8f0`,color:`#0f172a`,desc:`纯文本笔记（手写或 AI 改写）`},ppt:{chipLabel:`PPT`,fullLabel:`简易 PPT`,icon:`🎞️`,bg:`#fef3c7`,color:`#92400e`,desc:`简易 PPT，键盘切换`},reveal:{chipLabel:`讲解`,fullLabel:`讲解`,icon:`📜`,bg:`#dbeafe`,color:`#1e40af`,desc:`滚动逐步揭露讲解`},pretty:{chipLabel:`视觉`,fullLabel:`主题页`,icon:`🎨`,bg:`#fce7f3`,color:`#9d174d`,desc:`主题化视觉冲击`},eli5:{chipLabel:`ELI5`,fullLabel:`ELI5`,icon:`🧒`,bg:`#dcfce7`,color:`#166534`,desc:`讲给 5 岁小孩`},eli_ms:{chipLabel:`中学生`,fullLabel:`ELI 中学生`,icon:`🎓`,bg:`#fed7aa`,color:`#9a3412`,desc:`讲给中学生`},eli_eng:{chipLabel:`工程师`,fullLabel:`ELI 工程师`,icon:`🧑‍💻`,bg:`#e0e7ff`,color:`#3730a3`,desc:`讲给工程师`},parable:{chipLabel:`寓言`,fullLabel:`寓言揭幕`,icon:`📕`,bg:`#fae8ff`,color:`#86198f`,desc:`寓言揭幕`},feynman:{chipLabel:`费曼`,fullLabel:`费曼讲解`,icon:`🧑‍🏫`,bg:`#cffafe`,color:`#155e75`,desc:`教给完全不懂的人`},custom:{chipLabel:`自定义`,fullLabel:`自定义网页`,icon:`🛠️`,bg:`#f1f5f9`,color:`#334155`,desc:`按提示词生成任意风格的网页（托业单词讲解页等）`},answer:{chipLabel:`回答`,fullLabel:`回答`,icon:`💡`,bg:`#ecfdf5`,color:`#065f46`,desc:`AI 写 Markdown 草稿，渲染成一页 HTML 讲解`},video:{chipLabel:`视频`,fullLabel:`讲解视频`,icon:`🎬`,bg:`#dbeafe`,color:`#1e3a8a`,desc:`AI 生成的视频（讲解视频 / 文生视频，成片在本地视频服务）`}},o=a,s=[`markdown`,`ppt`,`reveal`,`pretty`,`eli5`,`eli_ms`,`eli_eng`,`parable`,`feynman`,`custom`,`answer`],c=[`ppt`,`reveal`,`pretty`,`eli5`,`eli_ms`,`eli_eng`,`parable`,`feynman`],l=new Set([`pretty`,`reveal`,`parable`]),u=new Set([`pretty`,`reveal`,`parable`]),d=/<!--\s*CARD_PLAINTEXT_START\s*-->([\s\S]*?)<!--\s*CARD_PLAINTEXT_END\s*-->/i;function f(e){return e&&e.replace(/\s*<!--\s*CARD_PLAINTEXT_START\s*-->[\s\S]*?<!--\s*CARD_PLAINTEXT_END\s*-->/gi,``)}function p(e){if(!e)return;let t=e.match(d);if(t)return t[1].replace(/^\s+|\s+$/g,``).replace(/\n{3,}/g,`

`)||void 0}function m(e){if(!e||typeof DOMParser>`u`)return``;try{let t=f(e),n=new DOMParser().parseFromString(t,`text/html`);return n.querySelectorAll(`script, style, noscript`).forEach(e=>e.remove()),(n.body?.textContent??``).replace(/\s+/g,` `).trim()}catch{return``}}var h=null;function g(){if(!h){let t=new URL(`answer-engine/engine.js`,document.baseURI).href;h=e(()=>import(t).then(e=>e,e=>{throw h=null,Error(`「回答」渲染引擎加载失败（${t}）。请确认已生成 public/answer-engine/engine.js：${e instanceof Error?e.message:String(e)}`)}),[],import.meta.url)}return h}var _=[`【角色】你是「一页 HTML 讲解页」的草稿作者。你只写 Markdown 草稿，前端内置的渲染器负责排版、配色、暗色模式、图表坐标。`,`【绝对禁止】输出 HTML / CSS / SVG / JS 文档、<html>、<script>、<style>；绝对禁止 JSON、解释、思考过程、<think> 标签。`,`【绝对禁止】用代码围栏包住整份草稿；第一行必须是 ---（frontmatter）。`,`【输出语言】与用户素材/标题的语言一致（中文素材就用中文）。`,``,`【页面结构】`,`- 写 3–8 个面板，每个面板只回答一个子问题；结论先行，第一个面板或导语给出核心答案。`,`- 超过 8 个面板就合并或删减；不要为凑数加面板。`,``,`【草稿格式】`,`---`,`title: 页面标题（<= 20 字，必填）`,`subtitle: 一句话副标题（可选）`,`template: sheet        # sheet=多面板网格（默认）；doc=单列长文（有目录，适合 3+ 小节的顺序讲解）`,`cols: 3                # sheet 每行最多列数（默认 3）`,`---`,`导语：1–2 句话给出核心结论（可选）。`,``,`## A 面板标题`,`普通 Markdown：段落、列表、表格、引用、行内代码都可以。`,``,`## B 面板标题 {span=2 meta="右上角小字"}`,`…`,``,`- ## 后是面板标题，面板 ID（A、B、C…）可选，不写会自动分配；写 ID 时不要和自动字母冲突。`,`- {span=N} 让面板占 N 列（只在需要突出时写，宽表格/图不要写）；{bare} 表示不要标题栏（适合 kv 元信息块）。`,`- 表格状态列写 ok / no / warn（可带文字，如 "ok 已确认"）会渲染成 ✓ / ✗ / ! 徽章。`,`- 行内公式 $x^2$；块级公式用单独一行 $$ 包住。金钱 $5 会被当普通文本。`,``,`【组件】用围栏代码块写，语言名就是组件名：`,`| 信息形态 | 组件 | 最小语法 |`,`|---|---|---|`,`| 流程 / 架构 / 决策分支 | flow [LR] | A -> B: 标签；A --> C 虚线；A -> B & C 分叉；{判断?} (开始) [(数据库)] 形状；*节点 高亮；group 组名: A, B |`,`| 数据模型 / 实体关系 | er [LR] | 顶格写实体名，缩进写字段 name [type] [PK|FK|UK]；user_id FK -> User；User 1--* Order: places |`,`| 多方消息时序 | sequence [num] | A -> B: 请求；B --> A: 返回；note A, B: 备注；== 阶段 == |`,`| 层级 / 目录 / 分类 | tree [list] | 缩进表示层级；label \\| 说明；*高亮 |`,`| 历史 / 阶段 | timeline [h\\|v] | 时间 \\| 标题 \\| 说明（可选）；*高亮 |`,`| 数值与上限 | limits | 标签 \\| 13 / 20 \\| 单位；只有上限：标签 \\| max 20 |`,`| 数字对比 / 趋势 / 占比 | chart bar [horizontal] / line / pie [unit=ms] | 可选首行命名系列：\\| p50 \\| p95；然后 标签 \\| 12 \\| 40；*高亮 |`,`| 逐句批注 | annot | # 标题 \\| 右侧备注；正文 [片段]{备注}，[错误]{!红色备注}；> 脚注 |`,`| 元信息 / 标题块 | kv [cols=2] | key: value；*宽行: value |`,`| 结论 / 警告 | callout <info\\|ok\\|warn\\|err> 标题 | 正文 Markdown |`,`| 需要读者做决定 | ask [multi] | 第一行问题；* 推荐选项 \\| 备注；- 其它选项 |`,`| 多维对比 / 能/不能清单 | Markdown 表格 | 状态列写 ok / no / warn |`,``,`【组件硬规则】`,`- 所有组件围栏里一行一条，不要写 JSON；flow/er 不接受 Mermaid 语法（不要 A[Start]、不要 ||--o{）。`,"- 本环境没有文件系统：不要写 ```ts src=path 引用文件，不要写本地图片 ![x](/path.png)；要展示代码就把代码直接放进 ```ts 围栏。",`- 没有真实数字时不要用 chart / limits，也不要编造数据。`,"- 只有所有组件都表达不了时才用 ```html 或 ```svg 围栏（本工具里应极少用）。",``,`【文案规则】`,`- 先给答案；不要开场白（"下面我来介绍"）、不要结尾总结（"希望有帮助"）。`,`- 一句一个事实；表格/图里已经说过的，正文不重复。`,`- 步骤一条一个动作，条件在前；中文一句话尽量不超过 45 字。`,`- 拿不准的事实要说"未核实"并给出核实方法，不要用"可能"含糊带过。`].join(`
`);function v(e,t){return e.length>t?`${e.slice(0,t)}\n…（已截断）`:e}function y(e,t={}){let n=v(e.trim(),6e3),r=t.title?.trim()??``;return[`# 学习卡片素材`,``,n||(r?`（用户未提供素材，以下为卡片标题：\n> ${r}\n请围绕该主题写一页讲解。）`:`（空）`),t.sourceCards&&t.sourceCards.length>0?`\n# 同集内其它学习卡片（作为补充素材）\n${t.sourceCards.map((e,t)=>`${t+1}. 《${e.title}》\n${v(e.markdown??``,1200)}`).join(`

`)}\n`:``,`# 任务`,`把上面的素材整理成一页 HTML 讲解页的 Markdown 草稿。只输出草稿本身。`,t.customInstruction?.trim()?`\n# 用户自定义规则（最高优先级，必须严格遵守）\n${t.customInstruction.trim()}\n`:``].filter(e=>e!==``).join(`
`)}async function b(e,t,r){let i=r.progressBase??.2,a=r.progressSpan??.6,o=0,s=!0;return(await n.chatCompletion({stream:!0,_module:`learningCardContent`,messages:[{role:`system`,content:e},{role:`user`,content:t}],temperature:.5,max_tokens:65536,thinking:r.thinking,onDelta:(e,t)=>{let n=Date.now();if(s){s=!1,o=n,r.onProgress?.({stage:`streaming`,progress:i,message:r.stageMessage??`AI 开始写草稿…`,accumulated:t});return}if(n-o<300)return;o=n;let c=Math.min(1,t.length/8e3);r.onProgress?.({stage:`streaming`,progress:i+c*a,message:`写草稿中（${t.length} 字）…`,accumulated:t})}},{signal:r.signal,timeoutMs:9e5})).text??``}function x(e){let n=t(e??``).trim();n=n.replace(/^(?:以下是|这是|下面是)[^\n]*\n+/,``).trim();let r=/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```\s*$/i.exec(n);return r&&(n=r[1].trim()),n.trim()}var S=2;function C(e){let t=[e.message];return e.line&&t.push(`第 ${e.line} 行`),e.component&&t.push(`组件：${e.component}`),e.example&&t.push(`正确示例：\n${e.example}`),t.join(`
`)}function ee(e,t,n){let r=n.customInstruction?.trim()?`\n# 用户自定义规则（仍然最高优先级）\n${n.customInstruction.trim()}\n`:``;return[`下面这份草稿渲染失败了，请修正后输出完整草稿。`,``,`# 渲染错误`,C(t),``,`# 当前草稿`,"```text",e,"```",``,`# 修正要求`,`- 只改导致错误的行，其余内容尽量保留。`,`- 只输出修正后的完整草稿（从 --- 开始），不要解释，不要代码围栏包整份草稿。`,r].join(`
`)}async function w(e){if(!n.isConfigured(`learningCardContent`))throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);e.onProgress?.({stage:`requesting`,progress:.1,message:`向 AI 发送请求（回答模式）…`,accumulated:``});let t=x(await b(_,y(e.markdown,{title:e.title,sourceCards:e.sourceCards,customInstruction:e.customInstruction}),{signal:e.signal,thinking:e.thinking,onProgress:e.onProgress,progressBase:.2,progressSpan:.55}));if(!t)throw Error(`AI 返回的草稿为空`);let r=await g(),i=await T(r,t),a=0;for(;!i.ok&&a<S;){a++,e.onProgress?.({stage:`validating`,progress:.8,message:`草稿渲染失败，第 ${a}/${S} 轮修复…`,accumulated:t});let n=x(await b(_,ee(t,i.error,{title:e.title,customInstruction:e.customInstruction}),{signal:e.signal,thinking:e.thinking,onProgress:e.onProgress,progressBase:.8,progressSpan:.1,stageMessage:`AI 正在修复草稿（第 ${a} 轮）…`}));n&&(t=n,i=await T(r,t))}if(!i.ok)throw Error(`草稿渲染失败（已修复 ${a} 轮）：${C(i.error)}`);let o=i.html;return e.extraScript&&(o=r.pinScript(o,e.extraScript)),e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:o}),{draft:t,html:o,plainText:E(t),warnings:i.warnings.length,repairs:a}}async function T(e,t){return await e.prepare(t),e.render(t)}var te=new Set([`flow`,`er`,`sequence`,`tree`,`timeline`,`limits`,`chart`,`annot`,`kv`,`callout`,`ask`,`html`,`svg`]);function E(e){let t=e.trim(),n=/^---\n([\s\S]*?)\n---\n?/.exec(t),r=``;if(n){let e=/^title:\s*(.+)$/m.exec(n[1]);e&&(r=`# ${e[1].trim()}\n\n`),t=t.slice(n[0].length)}let i=t.split(`
`),a=[],o=!1,s=!1;for(let e of i){let t=/^\s*```(\S*)/.exec(e);if(t){let n=t[1].toLowerCase();if(o){o=!1;continue}if(s){s=!1,a.push(e);continue}if(te.has(n)){o=!0;continue}s=!0,a.push(e);continue}if(o)continue;let n=/^(#{2,})\s+([A-Z])\s+([\s\S]*)$/.exec(e);if(n){let e=n[3].replace(/\s*\{(?:[^}]*)\}\s*$/,``).trim();a.push(`${n[1]} ${e}`);continue}/^#{2,}\s+\{[^}]*\}\s*$/.test(e)||/^\s*!\[[^\]]*\]\([^)]*\)\s*$/.test(e)||a.push(e)}let c=a.join(`
`).replace(/\n{3,}/g,`

`).trim();return`${r}${c}`.trim()}var D=`【角色】你是教学前端工程师。根据用户提供的「学习卡片 markdown 素材」生成一个完整、自包含的 HTML 文档。
【绝对禁止】任何解释、注释、Markdown 代码块标记（\`\`\`html）、思考过程、<think> 标签。
【绝对禁止】JSON 输出。
【必须】第一个字符必须是 <（建议以 <!doctype html> 开头），最后一个字符必须是 >。
【必须】所有 CSS 与 JS 必须 inline 在 <style>/<script> 标签内，不允许任何外部依赖（CDN、字体、图片 URL 都不行；emoji 可用）。
【必须】不使用 alert/confirm/prompt；不弹窗、不跳转、不访问 location/document.cookie/localStorage。
【必须】移动端友好：响应式布局 + 不依赖鼠标 hover 的关键交互。
【必须】首次输出必须是 <!doctype html>，避免任何前缀空白或注释。`,O=`
【必须】HTML 文档输出完毕后，必须紧跟一段 HTML 注释包裹的纯文本素材，供后续生成测试题使用。格式：
<!--CARD_PLAINTEXT_START-->
{保留原始段落结构与标题层级（# / ## / ### / 列表 / 表格 / 引用），1500-4000 字}
<!--CARD_PLAINTEXT_END-->
纯文本内容应与 HTML 主体严格对应（不能包含 HTML 里没有的新信息），但去掉视觉装饰、动画、JS 代码块外的源码、emoji 装饰；保留 markdown 风格以便后续被题目生成复用。
`,k=`【角色】你是教学写作助手。根据用户提供的「学习卡片 markdown 素材」生成一段高质量 markdown 文本。
【绝对禁止】任何解释、注释、思考过程、<think> 标签。
【绝对禁止】JSON 输出、HTML 输出（除非 markdown 内部的 \`code\` 块）、任何非 markdown 包装。
【必须】第一个字符必须是 markdown 字符（# / > / - / 数字 等），最后一个字符是普通字符（不要带"结尾标记"）。
【必须】所有 CSS / JS / 主题切换都不要做——纯文本 markdown 即可。
【必须】结构清晰：使用 # ## ### 分级标题 + 列表 + 引用 + 表格 + 代码块，让内容易读。`,A={ppt:()=>`【任务】把这段 markdown 素材整理成一份简短 PPT。
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
【绝对禁止】长篇大论的术语堆砌、保持"高深莫测"的口吻、把概念讲复杂。`},j=`【任务】基于用户提供的 markdown 素材，做「精炼 / 改写 / 润色」——
- 删去冗余
- 突出核心观点
- 用清晰的 # ## ### 标题结构
- 必要时用列表 / 表格 / 引用让可读性更高
【输出】纯 markdown 文本。不要写"以下是改写后的内容"等元说明。`;function M(e,t){return e?e.length>t?e.slice(0,t)+`…`:e:``}function N(e,t,n={}){let{title:r,theme:i,conceptHint:a,sourceCards:o,customPrompt:s,customInstruction:c}=n,l=M(t,6e3),u=r?.trim()??``,d=``;if(e===`markdown`)d=`# 学习卡片原始 markdown

${l||(u?`（用户未提供 markdown，以下为卡片标题：\n> ${u}\n请基于该主题写一篇高质量学习笔记。）`:`（空）`)}

# 任务
${j}`;else if(e===`custom`)d=`# 任务（自定义要求，最高优先级）
${s?.trim()||(u?`基于卡片标题「${u}」制作一张精美、自包含的网页学习卡片。`:`根据以下素材制作一张精美、自包含的网页学习卡片。`)}

# 素材（作为网页内容依据）
${l||(u?`（用户未提供 markdown，以下为卡片标题：\n> ${u}\n请围绕该主题组织网页内容。）`:`（空）`)}${o&&o.length>0?`\n# 同集内其它学习卡片（作为素材参考）\n${o.map((e,t)=>`${t+1}. 《${e.title}》\n${M(e.markdown,1200)}`).join(`

`)}\n`:``}`;else if(e===`answer`)d=y(l,{title:u,sourceCards:o});else{let t=o&&o.length>0?`\n# 同集内其它学习卡片（作为追加素材参考）\n${o.map((e,t)=>`${t+1}. 《${e.title}》\n${M(e.markdown,1200)}`).join(`

`)}\n`:``,n=l;!n&&u?n=`（用户未提供 markdown，以下为卡片标题：\n> ${u}\n请基于该主题生成内容。）`:n||=`（空）`;let r=A[e],s=r?r(l):``,c=``;i&&(c=`
# 主题（${i}）
- 这是一个独特的主题场景描述（从 67 万主题池中随机抽取）；请围绕这个主题自由发挥视觉风格
- 配色 / 字体 / 背景纹理 / 装饰元素 / 动画风格都按你的判断决定，不局限于固定色板
- 在生成的 HTML <head> 里加 <meta name="theme" content="${i}"> 把这个主题名报回来
- 如 kind=parable：concept 由用户单独提示（见下方），主题只决定视觉风格与叙事氛围`);let f=a?`\n（用户提示的概念方向：${a}，仅作参考）`:``,p=e===`parable`?`
# 概念回报（必须）
- 在生成的 HTML <head> 里加一行 <meta name="concept" content="这里填核心概念名">
`+(a?`- content 用「${a}」（用户已指定）`:`- content 用你在「## 概念解释」里给出的学术概念名，简短即可`)+`
- 这行 meta 是前端读取 concept 字段的唯一来源，漏掉会导致概念名丢失`:``;d=`# 学习卡片原始 markdown${l?`（基础素材，必须基于它）`:`（用户未填写，以下为卡片标题，仅作参考）`}

${n}${t}

# kind 专属要求
${s}${f}
${c}${p}`.trim()}return c?.trim()&&(d+=`\n\n# 用户自定义规则（最高优先级，必须严格遵守）
${c.trim()}`),d}function P(){let e=n.getConfig(),t=e.cardMarkdownMinLength??1500,r=e.cardMarkdownMaxLength??3e3;return`内容全面详尽，${Math.max(1,Math.min(t,r))}-${Math.max(1,Math.max(t,r))} 字`}function F(e){if(!e)return{html:e,repairs:[],changed:!1};let t=[],n=e,r=n.match(/^\s*```(?:html|HTML)?\s*\n?([\s\S]*?)\n?\s*```\s*$/);if(r)n=r[1],t.push(`strip-markdown-fence`);else{let e=[],r=/```(?:html|HTML)?[ \t]*\r?\n?([\s\S]*?)```/g,i;for(;(i=r.exec(n))!==null;)e.push(i[1]);if((n.match(/```/g)||[]).length%2==1){let t=n.lastIndexOf("```"),r=n.slice(t+3);r.trim()&&e.push(r)}let a=e.filter(e=>/<html\b|<!doctype\s+html|<\/html\s*>/i.test(e));a.length>0&&(n=a.reduce((e,t)=>t.length>e.length?t:e),t.push(`extract-html-from-fence`))}/&lt;\/?(?:!doctype|html|head|body|style|script|div|section|article|header|footer|nav|main|aside|h[1-6]|p|ul|ol|li|table|tr|td|th|form|input|button|span|a|img|svg|canvas)\b/i.test(n)&&(n=n.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&#39;/g,`'`),t.push(`unescape-html-entities`));let i=n;n=f(n),n!==i&&t.push(`strip-plaintext-block`);let a=/^\s*<!doctype\s+html/i.test(n),o=/<\/html>/i.test(n),s=/<\/body>/i.test(n);return a?o||(n+=s?`
</html>`:`
</body>
</html>`,t.push(`append-</html>`)):o?(n=`<!doctype html>
`+n.trimStart(),t.push(`prepend-doctype`)):(n=`<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body>
`+n.trim()+`
</body>
</html>`,t.push(`wrap-outer-shell`)),{html:n,repairs:t,changed:n!==e}}function I(e){let t=new Blob([e]).size;return e.length<200?{ok:!1,reason:`内容过短（少于 200 字）`,bytes:t}:t>1e6?{ok:!1,reason:`内容过大（${(t/1024).toFixed(0)} KB > 1 MB 上限），无法保存`,bytes:t}:t>5e5?{ok:!0,reason:`内容较大（> 500KB），建议简化`,bytes:t}:/^\s*<!doctype\s+html/i.test(e)?/<\/html>/i.test(e)?{ok:!0,bytes:t}:{ok:!1,reason:`未闭合 </html>`,bytes:t}:{ok:!1,reason:`缺少 <!doctype html>`,bytes:t}}function L(e){if(!e)return e;let t=/<\/body>/i;return t.test(e)?e.replace(t,`<style>
.lcppt-nav{display:none;position:fixed;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:0;padding:0;background:rgba(15,23,42,0.42);color:#fff;font-size:24px;line-height:1;cursor:pointer;z-index:2147483647;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;transition:background .15s ease}
.lcppt-nav:active{background:rgba(15,23,42,0.68)}
.lcppt-prev{left:10px}
.lcppt-next{right:10px}
@media (hover:none) and (pointer:coarse){.lcppt-nav{display:block}}
</style>
<script>
(function(){
  if(!window.matchMedia||!window.matchMedia('(hover:none) and (pointer:coarse)').matches)return;
  if(document.querySelector(".lcppt-nav"))return;
  function fire(k){try{document.dispatchEvent(new KeyboardEvent('keydown',{key:k,code:k,bubbles:true,cancelable:true}))}catch(e){}}
  function mk(cls,glyph,label){var b=document.createElement('button');b.type='button';b.className='lcppt-nav '+cls;b.setAttribute('aria-label',label);b.innerHTML=glyph;return b;}
  var prev=mk('lcppt-prev','&#8249;','上一页');
  var next=mk('lcppt-next','&#8250;','下一页');
  prev.addEventListener('click',function(e){e.preventDefault();fire('ArrowLeft');});
  next.addEventListener('click',function(e){e.preventDefault();fire('ArrowRight');});
  document.body.appendChild(prev);
  document.body.appendChild(next);
})();
<\/script>
</body>`):e+`
<style>
.lcppt-nav{display:none;position:fixed;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:0;padding:0;background:rgba(15,23,42,0.42);color:#fff;font-size:24px;line-height:1;cursor:pointer;z-index:2147483647;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;transition:background .15s ease}
.lcppt-nav:active{background:rgba(15,23,42,0.68)}
.lcppt-prev{left:10px}
.lcppt-next{right:10px}
@media (hover:none) and (pointer:coarse){.lcppt-nav{display:block}}
</style>
<script>
(function(){
  if(!window.matchMedia||!window.matchMedia('(hover:none) and (pointer:coarse)').matches)return;
  if(document.querySelector(".lcppt-nav"))return;
  function fire(k){try{document.dispatchEvent(new KeyboardEvent('keydown',{key:k,code:k,bubbles:true,cancelable:true}))}catch(e){}}
  function mk(cls,glyph,label){var b=document.createElement('button');b.type='button';b.className='lcppt-nav '+cls;b.setAttribute('aria-label',label);b.innerHTML=glyph;return b;}
  var prev=mk('lcppt-prev','&#8249;','上一页');
  var next=mk('lcppt-next','&#8250;','下一页');
  prev.addEventListener('click',function(e){e.preventDefault();fire('ArrowLeft');});
  next.addEventListener('click',function(e){e.preventDefault();fire('ArrowRight');});
  document.body.appendChild(prev);
  document.body.appendChild(next);
})();
<\/script>`}async function R(e){if(!n.isConfigured(`learningCardContent`))throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);if(e.kind===`answer`){let t=await w({markdown:e.markdown,title:e.title,sourceCards:e.sourceCards,customInstruction:e.customInstruction,signal:e.signal,onProgress:e.onProgress,thinking:e.thinking,extraScript:i});return{markdown:e.markdown,html:t.html,plainText:t.plainText,draft:t.draft}}let t=e.kind===`markdown`,r=t?k:D+O,a=N(e.kind,e.markdown,{title:e.title,theme:e.theme,conceptHint:e.conceptHint,customPrompt:e.customPrompt,customInstruction:e.customInstruction,sourceCards:e.sourceCards});e.onProgress?.({stage:`requesting`,progress:.1,message:`向 AI 发送请求…`,accumulated:``});let o=0,s=!0,c=``,l=await n.chatCompletion({stream:!0,_module:`learningCardContent`,messages:[{role:`system`,content:r},{role:`user`,content:a}],temperature:.7,max_tokens:t?65536:131072,thinking:e.thinking,onDelta:(t,n)=>{c=n;let r=Date.now();if(s){s=!1,o=r,e.onProgress?.({stage:`streaming`,progress:.2,message:`AI 开始返回…`,accumulated:c});return}if(r-o<300)return;o=r;let i=Math.min(1,c.length/16e3);e.onProgress?.({stage:`streaming`,progress:.2+i*.7,message:`接收中（${c.length} 字）…`,accumulated:c})}},{signal:e.signal,timeoutMs:9e5});c=l.text;let u=l.finishReason;if(e.onProgress?.({stage:`validating`,progress:.95,message:`校验输出…`,accumulated:c}),t){if(c.trim().length<10)throw Error(`AI 改写后的 markdown 过短（少于 10 字）`);let t=new Blob([c]).size;if(t>1e6)throw Error(`AI 改写后的 markdown 过大（${(t/1024).toFixed(0)} KB > 1 MB 上限），无法保存`);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:c}),{markdown:c}}let d=F(c);d.changed&&(c=d.html,(u===`length`||u===`max_tokens`)&&console.warn(`[learningCard] AI 输出被 max_tokens 截断（finish_reason=${u}），自动修补：${d.repairs.join(`, `)}`));let m=I(c);if(!m.ok){let e=u===`length`||u===`max_tokens`?`（输出被 max_tokens 截断，自动修补未救回）`:``;throw Error(`AI 输出的 HTML 不合法：${m.reason}${e}`)}let h;if(e.kind===`parable`){let e=c.match(/<meta\s+name=["']concept["']\s+content=["']([^"']+)["']/i);e&&(h=e[1].trim())}let g,_=c.match(/<meta\s+name=["']theme["']\s+content=["']([^"']+)["']/i);if(_){let e=_[1].trim();e&&(g=e)}!g&&e.theme&&(g=e.theme);let v=p(c);return e.onProgress?.({stage:`done`,progress:1,message:`完成`,accumulated:c}),{markdown:e.markdown,html:e.kind===`ppt`?L(f(c)):f(c),concept:h,theme:g,plainText:v,repair:d.changed?{truncated:u===`length`||u===`max_tokens`,repairs:d.repairs}:void 0}}var z=`霍格沃茨城堡图书馆穹顶.中世纪炼金术士地下实验室.巨树之巅精灵弓箭手哨所.地下城 Boss 战前的篝火营地.沙漠中的玻璃城堡.哥特式大教堂彩绘玫瑰窗.维多利亚时代通灵会客厅.中世纪黑死病医官手记.雷雨中废弃修道院.古堡地牢烛火档案室.托斯卡纳乡间橄榄园厨房.京都町家清晨味噌汤.北疆禾木村图瓦人家.阿尔卑斯山小屋壁炉夜.柴犬咖啡馆午后.夏日刨冰与风铃的院子.埃菲尔铁塔下的咖啡馆.哥本哈根木质长桌与黑面包.斯德哥尔摩地铁艺术站.挪威木教堂.博德利图书馆穹顶.剑桥三一学院数学桥.巴黎高师灰走廊.庞贝古城末日最后 24 小时.宋朝汴京清明上河图清晨.古罗马图拉真市场正午.凡尔赛 1789 年 7 月 14 日.达·芬奇工作室最后的晚餐前夕.1969 伍德斯托克雨后舞台.维也纳金色大厅音乐厅.蓝调咖啡馆凌晨吉他和口琴.冰岛 Sigur Rós 录音棚.东京涩谷十字路口.纽约布鲁克林地铁涂鸦.香港旺角霓虹.首尔弘大街头滑板.柏林电子俱乐部凌晨.开普敦好望角海岸.舍夫沙万蓝色山城.肯尼亚马赛马拉草原.印尼巴厘岛梯田.菲律宾长滩岛.马尔代夫水屋.塞舌尔巨龟.毛里求斯七色土.玻利维亚乌尤尼盐沼.阿根廷冰川国家公园.智利复活节岛.安徒生海的女儿.小王子 B612 星球.夏洛的网谷仓清晨.爱丽丝兔子洞茶杯派对.宫泽贤治银河铁道之夜.切尔诺贝利普里皮亚季游乐园.和平号空间站残骸.泰坦尼克海底走廊.末世便利店最后一位顾客.沙漠中被遗忘的射电望远镜.沉没航母珊瑚花园.废弃苏联雷达站.冰封南极科考站残骸.海底人类图书馆.悬崖废弃疗养院.沙漠无人电影院.末班绿皮车站`.split(`.`),B=`黎明.黄昏.午夜.凌晨 3 点.雪夜.雨夜.风夜.雾晨.极昼.极夜.台风过境.雷暴云顶.沙漠午后.海市蜃楼中.流星雨峰.日全食.月偏食.极光下.雪崩前.冰裂前.沙暴里.大潮前.退潮时.涨潮时.樱花雨.萤火季.红叶季.梅雨季.雾凇清晨.霜降黄昏.初雪.春分.秋分.冬至.夏至.除夕夜.中秋夜.端午正午.万圣节深夜.圣诞节前夕.跨年夜`.split(`.`),V=`灯塔.旧火车站.旋转木马.钟楼.海岸栈桥.木栈道.老船坞.孤岛.玻璃温室.苔藓森林.竹林小径.云海之巅.悬崖茶亭.古桥.水车磨坊.山间驿道.渔港.老邮局.老剧场.古寺.废墟图书馆.冷库.旧仓库.候鸟观测站.无人便利店.末班列车.夜间动物园.深夜博物馆.凌晨印刷厂.午夜书店.通宵咖啡馆.24h 药房.24h 拉面馆.24h 公交站.24h 健身房.24h 报刊亭.红电话亭.旧电梯井.旋转书架.旋转楼梯.钟塔内部.灯塔内部.岗哨.议事厅.长走廊.旋转门厅.冷库.面包烤房.烘焙工坊.巧克力工厂.香水蒸馏室.玻璃工坊.铁匠铺.木匠作坊.木雕工坊.印刷厂.活字排版间.古籍修复室.档案库.地震监测台.极地科考舱`.split(`.`),H=`维多利亚.蒸汽朋克.镀金时代.1920 爵士.1950 复古.1969 嬉皮.冷战.赛博朋克 2077.末日 2099.后启示录.宋.唐.明.春秋战国.古希腊.古罗马.中世纪.拜占庭.奥斯曼.江户.明治.民国.80 年代.90 年代 Y2K.未来 3050.未来水世界.撒哈拉.塔克拉玛干.北极.南极.冰岛黑沙滩.挪威峡湾.托斯卡纳.普罗旺斯.京都.镰仓.苏州.徽州.泉州.伊斯坦布尔.摩洛哥麦地那.秘鲁马丘比丘.亚马逊雨林.加勒比海.马尔代夫.张掖丹霞.元阳梯海.阿尔卑斯山.北海道.青藏高原.罗布泊.阿塔卡马沙漠.贝加尔湖.死海.黄石公园.巨人堤.张家界.九寨沟.东非大裂谷.肯尼亚草原.马达加斯加.纳米比亚红沙漠.新西兰南岛.塔斯马尼亚.阿拉斯加冰川.敦煌.永乐宫.少林寺.布达拉宫.蓬莱.稻城亚丁.泸沽湖.婺源.黔东南.潮汕.成都.广州.上海.哈尔滨.西安.兰州.香港.澳门.台北.垦丁.花莲.克苏鲁深海石碑.北欧女武神岗哨.希腊命运三女神纺织机.苏美尔天文台.玛雅神庙金字塔.阿努纳奇神庙.敦煌飞天壁画.永乐宫三清殿.千手观音龛.孔雀明王坛城.十二生肖宫殿.埃及阿努比斯天平.冥河摆渡人.北欧雷神之锤.日本八百比丘尼.博尔赫斯盲眼图书馆长.鲁迅伏案夜.张爱玲 1943 上海寓所.钱钟书杨绛书房.杜甫草堂.苏东坡黄州雪堂.李清照归来堂.曹雪芹黄叶村.巴尔扎克咖啡馆改稿.卡夫卡布拉格巷.普鲁斯特软木衬里卧室.村上春树凌晨厨房.川端康成浅草书房.三岛由纪夫金阁寺前.那不勒斯披萨窑.寿司板前.潮汕牛肉火锅.成都苍蝇馆子.里昂 Bouchon.巴塞罗那 Tapas 吧.墨西哥玉米饼摊.土耳其烤肉转柱.印度塔利铜盘.清迈凤飞飞猪脚饭.曼谷水上市场.广州早茶笼屉.上海本帮菜灶台.哈尔滨红肠晾房.西安羊肉泡馍老店.兰州拉面汤锅前.盂兰盆灯笼河.威尼斯面具节.墨西哥亡灵节.望果节转经田.斯堪的纳维亚仲夏柱.火人节黑石沙漠.巴塞罗那叠人塔.慕尼黑啤酒节.印度洒红节.泰国水灯节.京都葵祭.高山祭屋台.京都祇园祭.东京三社祭.苗年牯藏节.彝族火把节.量子纠缠.时空裂缝.银河拱桥.黑洞档案.引力波走廊.中微子海洋.暗物质迷宫.光速壁障.熵的最终形态.秩序的起源.混沌的种子.时间的尽头.回声.回声峡谷.镜像镜像.万花筒.分形之森.极简几何.巴洛克卷轴.Art Deco 几何.孟菲斯 1980 撞色.酸性 90 镭射.苏联构成主义.立体派毕加索.新艺术 Mucha 曲线.浮世绘北斋浪.低多边形 LowPoly.8-bit 像素地下城.蒸汽波 VHS.故障艺术 Glitch.极简包豪斯.野兽派粗野混凝土.日式侘寂.北欧 Hygge.法式沙龙.南法普罗旺斯.意大利米兰设计周.时间管理员.记忆档案员.梦境导游.孤独守望者.希望灯塔人.沉默观察者.无名旅人.末班列车员.黎明号灯塔看守.午夜书店店长.凌晨电台 DJ.候鸟研究者.古地图修复师.钟表匠.宇宙信使.深海邮差.苔藓测绘员.极光猎手.星象抄写员.候鸟志编纂者.最后一位园丁.夜间面包师.沉默钟表匠.云朵命名员.雾的观察员.旧怀表内部.蒸汽邮轮.绿皮火车.老爷车.老爷巴士.U 形潜艇.齐柏林飞艇.航天飞机.轨道电梯.星际货船.鹦鹉螺号.木质帆船.热气球.摩天轮.老式升降梯.维多利亚温室.玻璃穹顶.水晶吊灯.老式打字机.留声机.黑胶唱片机.收音机.老式相机.胶片机暗房.老式放映机.电影胶片库.黑胶仓库.留声机修理铺.蜡烛铺.香水实验室.香水博物馆.玩具修理铺.老钟表铺.钢琴击弦机.小提琴共鸣箱.萨克斯风管体.大提琴琴桥.细胞分裂有丝分裂.DNA 双螺旋档案架.蝴蝶效应轨道线.神经元放电一秒钟.血液红细胞旅程.神经突触信号.白细胞吞噬细菌.毛细血管全景.视网膜感光细胞.心肌细胞同步收缩.雷暴云顶 1 万米俯瞰.台风眼内部静谧.极地破冰船驾驶舱.极光下狗拉雪橇`.split(`.`),ne=[`旧怀表`,`未寄出的 1943 年信件`,`钢琴`,`茶馆角落木雕鸟笼`,`潜水艇舱内湿度计`,`萤火虫`,`露水`,`种子`,`蝴蝶翅膀鳞片`,`邮票`,`旧钥匙`,`镜子`,`风筝`,`火柴`],U=[`一只`,`一颗`,`一封`,`一滴`,`一架`,`一面`,`一把`,`一根`,`一段`,`一幅`,`一页`,`一条`,`一块`,`一盏`,`一段慢动作中的`],W=[`立春`,`雨水`,`惊蛰`,`春分`,`清明`,`谷雨`,`立夏`,`小满`,`芒种`,`夏至`,`小暑`,`大暑`,`立秋`,`处暑`,`白露`,`秋分`,`寒露`,`霜降`,`立冬`,`小雪`,`大雪`,`冬至`,`小寒`,`大寒`],G=(()=>{let e=[];return z.forEach(t=>e.push(t)),B.forEach(t=>V.forEach(n=>e.push(`${t}的${n}`))),H.forEach(t=>V.forEach(n=>e.push(`${t}的${n}`))),H.forEach(t=>{B.forEach(n=>{V.forEach(r=>e.push(`${t} · ${n}的${r}`))})}),U.forEach(t=>ne.forEach(n=>e.push(`${t}${n}`))),W.forEach(t=>V.forEach(n=>e.push(`${t}时节的${n}`))),e})();G.length;function K(e){let t=e>>>0;return()=>(t=(t*9301+49297)%233280,t/233280)}function q(){if(G.length===0)return`清晨图书馆`;let e=K(Date.now());return G[Math.floor(e()*G.length)]??`清晨图书馆`}var J=[`定义 / 概念辨析`,`典型例子 / 应用场景`,`对比 / 分类`,`深入应用 / 实战技巧`,`反例 / 常见误区`,`总结归纳 / 速记口诀`];function Y(e){let t=e.match(/^[ \t]*#{1,6}[ \t]+([^\n]+)$/m);if(t)return t[1].replace(/[*_`~#]/g,``).trim()||void 0}async function X(e,t){if(!n.isConfigured(`aiAppendLearningCardSet`))throw Error(`AI 未配置:请先在 Settings 中填写 API Key`);let r=(t.material??``).trim(),i=t.titleHint?.trim()??``,a=t.existingTitles.length>0?t.existingTitles.slice(-60).map((e,t)=>`${t+1}. ${e}`).join(`
`)+`
`:`（无）
`,o=P(),s=re(e.kind),c=`你是教学写作助手。基于用户提供的「资料」生成 1 张学习卡片（纯 markdown）。
【输出格式】直接输出一段 markdown 学习内容。**不要 JSON、不要 HTML、不要 Markdown 代码块围栏、不要思考块、不要任何解释/元说明。**
【必须】第一行是一个 markdown 一级标题「# 标题」，这一行会被用作卡片标题；其余内容紧随其后。
【内容质量】用 # ## ### 分级 + 列表 + 引用 + 表格等把要点讲清楚，${o}。\n【绝对禁止】输出包裹用的 \`\`\`markdown 围栏，不要以任何"结尾标记"结尾。`,u=r?`# 资料\n"""${r.slice(0,8e3)}"""`:`# 资料
（用户未提供）
请根据「标题提示」自由发挥,围绕该主题写 1 张高质量学习卡片。`,d=i?`\n【用户提示的标题方向】${i}(仅作参考,可改写)`:``,f=e.title?`- 标题:已确定为「${e.title}」,第一行必须写 # ${e.title},正文严格围绕这个话题展开,不要另起炉灶、不要泛泛而谈`:`- 标题:用 markdown 一级标题「# ...」给出,简洁(<= 30 字)、独特,避免与已有卡片标题重复`,p=e.title?`- 角度:聚焦「${e.angle}」这个侧面`:`- 角度建议:聚焦「${e.angle}」这个侧面`,m=t.customInstruction?.trim()?`\n# 用户自定义规则（最高优先级，必须严格遵守）\n${t.customInstruction.trim()}\n`:``,h=`${u}${d}

# 本卡片要求
- 卡片序号:第 ${e.index} / ${e.total} 张
- 卡片类型:${s}(锁死,不要改成其它)
- ${p}
- ${f}

# 避免重复
以下是目标学习卡片集已有卡片标题,请避免标题或语义高度相似:
${a}
${m}
请直接输出 markdown 内容。`;t.onProgress?.({stage:`requesting`,progress:.1,message:`第 ${e.index}/${e.total} 张:向 AI 发送请求…`,accumulated:``});let g=0,_=!0,v=``;v=(await n.chatCompletion({stream:!0,_module:`aiAppendLearningCardSet`,messages:[{role:`system`,content:c},{role:`user`,content:h}],temperature:.7,max_tokens:65536,thinking:t.thinking,onDelta:(n,r)=>{v=r;let i=Date.now();if(_){_=!1,g=i,t.onProgress?.({stage:`streaming`,progress:.2,message:`第 ${e.index}/${e.total} 张:AI 开始返回…`,accumulated:v});return}if(i-g<300)return;g=i;let a=Math.min(1,v.length/8e3);t.onProgress?.({stage:`streaming`,progress:.2+a*.7,message:`第 ${e.index}/${e.total} 张:接收中（${v.length} 字）…`,accumulated:v})}},{signal:t.signal,timeoutMs:9e5})).text,t.onProgress?.({stage:`validating`,progress:.95,message:`第 ${e.index}/${e.total} 张:校验输出…`,accumulated:v});let y=v.trim();if(y.length<30)throw Error(`第 ${e.index} 张 AI 输出的 markdown 过短(${y.length} 字)`);let b=new Blob([y]).size;if(b>1e6)throw Error(`第 ${e.index} 张「${y.slice(0,8)}…」markdown 过大(${(b/1024).toFixed(0)} KB)`);let x=e.title??Y(y)??`学习卡片 ${e.index}`;if(t.onProgress?.({stage:`done`,progress:1,message:`第 ${e.index}/${e.total} 张:完成`,accumulated:v}),e.kind===`markdown`)return{title:x,kind:`markdown`,markdown:y};let S=l.has(e.kind)?q():void 0,C=await R({kind:e.kind,markdown:y,title:x,theme:S,signal:t.signal,thinking:t.thinking});return{title:x,kind:e.kind,markdown:y,html:C.html,theme:C.theme,concept:C.concept,plainText:C.plainText,draft:C.draft}}function re(e){return a[e]?.fullLabel??e}function Z(e,t=`markdown`){let n=[];for(let r=0;r<e;r++)n.push({index:r+1,total:e,kind:t,angle:J[r%J.length]});for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n.forEach((e,t)=>e.index=t+1),n}function Q(e,t=[]){let n=r(e);if(!n){let t=e.slice(0,300).replace(/\s+/g,` `);throw Error(`无法解析为 JSON。原回复前 300 字：「${t}」`)}let i=Array.isArray(n.cards)?n.cards:[],a=new Set(t.map(e=>e.trim()).filter(Boolean)),o=new Set,s=[];return i.forEach(e=>{if(!e||typeof e!=`object`)return;let t=e,n=typeof t.title==`string`?t.title.trim():``;if(!n||o.has(n)||a.has(n))return;o.add(n);let r=typeof t.angle==`string`&&t.angle.trim()?t.angle.trim().slice(0,40):J[s.length%J.length];s.push({title:n,angle:r})}),s}var ie=`你是教学规划助手。用户要根据一段「资料」把内容拆成 N 张学习卡片，请先规划每张卡片的「标题」。
【输出格式】严格 JSON 对象，不要任何解释、不要 Markdown 代码块、不要 thinking 标签。
JSON 顶层结构：
  { "cards": [ { "title": "..." }, ... ] }
每张卡片字段：
  - title: string，<= 30 字，简明扼要，两两互不重复
【卡片数量】请恰好输出 \${cardCount} 个条目，不要多也不要少。
【避免批次内重复】这 N 张卡片的 title 与主题必须两两互不相同、互不相似；每张聚焦资料的不同侧面，不要重复规划同一个知识点。
【避免与已有重复】以下是该学习卡片集已有标题，请不要规划出标题或语义高度相似的卡片：
\${existingTitlesBlock}【资料不足时】围绕资料主题的不同侧面（定义/例子/对比/应用/反例/误区/总结）展开，不要重复规划同一知识点。
【绝对禁止】JSON 之外的内容、注释、思考过程。
【必须】第一个字符是 {，最后一个字符是 }。`;async function $(e){if(!n.isConfigured(`aiAppendLearningCardSet`))throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let t=Math.max(1,Math.min(25,Math.floor(e.cardCount)||1)),r=(e.sourceText??``).trim(),i=(e.existingTitles??[]).slice(-60),a=i.length>0?i.map((e,t)=>`${t+1}. ${e}`).join(`
`)+`
`:`（无）
`,o=ie.replace("${cardCount}",String(t)).replace("${existingTitlesBlock}",a),s=e.titleHint?.trim()?`\n【用户提示的标题方向】${e.titleHint.trim()}（仅作参考）`:``,c=`${r?`# 资料\n"""${r.slice(0,12e3)}"""`:`# 资料
（用户未提供）
请根据「标题提示」围绕该主题规划不同侧面的卡片。`}${s}
${e.customInstruction?.trim()?`\n【用户自定义规则】（最高优先级，必须严格遵守）\n${e.customInstruction.trim()}\n`:``}
请按 system prompt 规划**正好 ${t} 个互不重复**的卡片标题。`;e.onProgress?.(`正在规划 N 个不重复的卡片标题…`);let l=0,u=!0,d=``;return d=(await n.chatCompletion({stream:!0,_module:`aiAppendLearningCardSet`,messages:[{role:`system`,content:o},{role:`user`,content:c}],temperature:.7,max_tokens:4096,thinking:e.thinking,onDelta:(t,n)=>{d=n;let r=Date.now();if(u){u=!1,l=r,e.onProgress?.(`规划中:AI 返回标题…`);return}r-l<300||(l=r,e.onProgress?.(`规划中:接收标题（${d.length} 字）…`))}},{signal:e.signal,timeoutMs:12e4})).text,e.onProgress?.(`规划校验完成,开始逐张生成…`),Q(d,i)}async function ae(t){if(!n.isConfigured(`aiAppendLearningCardSet`))throw Error(`AI 未配置:请先在 Settings 中填写 API Key`);let r=Math.max(1,Math.min(25,Math.floor(t.cardCount)||1));if(!(t.sourceText??``).trim()&&!t.titleHint?.trim())throw Error(`资料文本或标题提示至少填一项`);let i=(t.existingTitles??[]).slice(),a=t.kind??`markdown`,o=(e,n)=>{t.onProgress?.({doneCount:e,totalCount:r,message:n})};o(0,`准备生成 ${r} 张学习卡片${r>=2?`(两阶段)`:`(单卡直接生成)`}…`);let{adaptiveRunWorkerPool:s}=await e(async()=>{let{adaptiveRunWorkerPool:e}=await import(`./adaptiveWorkerPool-BsbuOGNA.js`).then(e=>e.n);return{adaptiveRunWorkerPool:e}},__vite__mapDeps([0,1]),import.meta.url),c;if(r<=1)c=Z(1,a).map(e=>({title:``,angle:e.angle})),o(0,`单张卡片无需规划,直接生成…`);else try{c=await $({sourceText:t.sourceText,titleHint:t.titleHint,cardCount:r,existingTitles:i,signal:t.signal,...t.thinking===void 0?{}:{thinking:t.thinking},...t.customInstruction===void 0?{}:{customInstruction:t.customInstruction},onProgress:e=>o(0,e)})}catch(e){if(t.signal.aborted)throw e;let n=e instanceof Error?e.message:String(e);console.warn(`[learningCardsInParallel] Phase-1 规划失败,退回自动角度分配:${n}`),c=Z(r,a).map(e=>({title:``,angle:e.angle})),o(0,`AI 规划失败(${n.split(`
`)[0].slice(0,30)}),退回自动角度分配…`)}if(c.length===0)throw Error(`无法规划卡片标题，请换一段资料或调整标题后重试`);let l=c.map((e,t)=>({index:t+1,total:Math.min(r,c.length),kind:a,title:e.title||void 0,angle:e.angle||J[t%J.length]}));o(0,r<=1?`开始生成单张学习卡片…`:`已规划 ${l.length} 个互不重复的标题,开始逐张生成…`);let u={count:0},d=t.onBackoff??(e=>{u.count=e.attempt,console.warn(`[learningCardsInParallel] ${e.reason}`)}),{settled:f}=await s({items:l,signal:t.signal,startConcurrency:t.startConcurrency??5,maxConcurrency:t.maxConcurrency??10,onBackoff:d,onItemError:(e,t,n)=>{let r=n instanceof Error?n.message:String(n);console.warn(`[learningCardsInParallel] 第 ${e.index} 张失败:${r}`)},onProgress:(e,t)=>{o(e,`进度 ${e}/${t}${u.count>0?`(已自适应 ${u.count} 次)`:``}`)},worker:(e,n,r)=>X(e,{material:t.sourceText,titleHint:t.titleHint,existingTitles:i,signal:r,...t.thinking===void 0?{}:{thinking:t.thinking},...t.customInstruction===void 0?{}:{customInstruction:t.customInstruction}})}),p=[],m=[];for(let e of f){if(!e.result.ok){let t=e.result.error instanceof Error?e.result.error.message:String(e.result.error);m.push(`第 ${e.item.index} 张生成失败:${t}`);continue}let t=e.result.result;if(!t.title||!t.markdown){m.push(`第 ${e.item.index} 张产物字段缺失(title/markdown 为空)`);continue}p.push({title:t.title,kind:t.kind??`markdown`,markdown:t.markdown,html:t.html,theme:t.theme,concept:t.concept,plainText:t.plainText})}if(p.length===0)throw Error(m[0]??`AI 生成的所有卡片都失败,请换个资料或检查网络`);return{cards:p,warnings:m}}export{f as C,c as D,o as E,l as O,m as S,s as T,M as _,X as a,g as b,R as c,I as d,O as f,P as g,N as h,J as i,u as k,L as l,k as m,$ as n,Z as o,D as p,Q as r,q as s,ae as t,F as u,_ as v,a as w,p as x,y};