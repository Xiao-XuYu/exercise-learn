import{o as e}from"./useAiStreamWakeLock-Cz3Fcm_6.js";import{d as t,n,s as r}from"./selectionBridgeScript-C_V7e3SK.js";import{Q as i}from"./idb-DtVwKPyj.js";import{E as a,c as o,t as s}from"./cardTypes-qiIZvHgo.js";function c(e){return Array.isArray(e)?{set:null,cards:e}:{set:e.set??null,cards:Array.isArray(e.cards)?e.cards:[]}}function l(e,t=`Untitled set`,n={}){let{set:r,cards:o}=c(e),s=n.setId??r?.id??`s-${i()}`,l=n.now??Date.now(),u={id:s,title:r?.title??t,description:r?.description??``,cover:r?.cover,source:n.source??r?.source??`kb`},d=[],f=[];return o.forEach((e,t)=>{let n=a(e);if(n.length>0){d.push(`Card #${t+1} skipped: ${n.join(`; `)}`);return}f.push({...e,id:e.id??`c-${s}-${t}`,setId:s,index:t,ease:2.5,interval:0,reps:0,due:l,lapses:0,createdAt:l})}),{set:{meta:u,cards:f,initialFolderId:n.initialFolderId??null},warnings:d}}async function u(e,t){let n=await fetch(e);if(!n.ok)throw Error(`Failed to load ${e}: ${n.status} ${n.statusText}`);let r=await n.json(),i=e.split(`/`).pop()??``;return l(r,i.replace(/\.json$/i,``),{setId:t?`s-${t}`:`s-${i.replace(/\W+/g,`-`)}`})}function d(e,t,n,r){let i=n(e);if(!i)throw r(e);let a=(typeof i.title==`string`?i.title.trim():``)||`AI 生成的卡片集`,o=typeof i.description==`string`&&i.description.trim()?i.description.trim():void 0,s=typeof i.cover==`string`&&i.cover.trim()?i.cover.trim():void 0,c=Array.isArray(i.cards)?i.cards:[];if(c.length===0)throw Error(`AI 没有生成任何卡片，请换个资料再试`);let l=new Set(t),u=[],d=[],m=0;if(c.forEach(e=>{if(!e||typeof e!=`object`){m++;return}let t=f(e,l);if(!t){m++;return}let n=p(t,l);if(d.push(...n.warnings),n.drop){m++;return}u.push(n.fixedCard)}),u.length===0){let e=d.length>0?d.slice(0,8).map(e=>`\n  · ${e}`).join(``):``;throw Error(`AI 生成的卡片都不合法（共 ${c.length} 条原始卡片全部被过滤）。`+(e?`丢弃原因：${e}\n请据此调整资料或题目类型后重试。`:`请换个资料再试。`))}return{meta:{title:a,description:o,cover:s},cards:u,warnings:d,droppedCount:m}}function f(e,t){let n=typeof e.front==`string`?e.front.trim():typeof e.question==`string`?String(e.question).trim():``,r=typeof e.back==`string`?e.back.trim():typeof e.answer==`string`?String(e.answer).trim():``;if(!n)return null;let i,a=e.type;if(typeof a==`string`&&t.has(a))i=a;else if(Array.isArray(e.types))for(let n of e.types){if(typeof n!=`string`)continue;let e=n;if(t.has(e)){i=e;break}}if(!i)return null;let o={type:i,front:n,back:r},s=new Set([i]);if(s.has(`mc`)&&Array.isArray(e.mcOptions)&&(o.mcOptions=e.mcOptions.map(e=>String(e)).filter(Boolean),typeof e.mcCorrectIndex==`number`&&(o.mcCorrectIndex=e.mcCorrectIndex)),s.has(`tf`)&&typeof e.tfAnswer==`boolean`&&(o.tfAnswer=e.tfAnswer),s.has(`matching`)&&Array.isArray(e.matchingPairs)){let t=e.matchingPairs.filter(e=>e&&typeof e.left==`string`&&typeof e.right==`string`).map(e=>({left:e.left.trim(),right:e.right.trim()})).filter(e=>e.left&&e.right),n=new Map,i=[],a=!1;for(let e of t){let t=n.get(e.right)??0;if(t>0){a=!0;let r=`${e.right}·${t+1}`;i.push({left:e.left,right:r}),n.set(e.right,t+1)}else i.push(e),n.set(e.right,1)}let s=new Map,c=[];for(let e of i){let t=s.get(e.left)??0;if(t>0){a=!0;let n=`${e.left}·${t+1}`;c.push({left:n,right:e.right}),s.set(e.left,t+1)}else c.push(e),s.set(e.left,1)}if(a){let e=t.map((e,t)=>`${t+1}. ${e.left} → ${e.right}`).join(`；`);o.type=`text`,o.front=o.front||`请为以下人物配对各自的流派/风格`,o.back=r||`原 matching 配对（含重复，已降级为文本）：${e}。`,delete o.matchingPairs}else o.matchingPairs=c}return s.has(`ordering`)&&Array.isArray(e.orderingAnswer)&&(o.orderingAnswer=e.orderingAnswer.map(e=>String(e).trim()).filter(Boolean),Array.isArray(e.orderingItems)?(o.orderingItems=e.orderingItems.map(e=>String(e).trim()).filter(Boolean),(o.orderingItems.length!==o.orderingAnswer.length||[...o.orderingItems].sort().join(`|`)!==[...o.orderingAnswer].sort().join(`|`))&&(o.orderingItems=[...o.orderingAnswer].sort(()=>Math.random()-.5))):o.orderingItems=[...o.orderingAnswer].sort(()=>Math.random()-.5)),s.has(`fill`)&&Array.isArray(e.fillBlanks)&&(o.fillBlanks=e.fillBlanks.map(e=>String(e).trim()).filter(Boolean),typeof e.front==`string`&&e.front.includes(`____`)&&(o.front=e.front.trim())),s.has(`multi`)&&Array.isArray(e.multiOptions)&&(o.multiOptions=e.multiOptions.map(e=>String(e).trim()).filter(Boolean),Array.isArray(e.multiCorrectIndexes)&&(o.multiCorrectIndexes=e.multiCorrectIndexes.map(e=>Number(e)).filter(e=>Number.isFinite(e)&&e>=0&&e<o.multiOptions.length))),s.has(`find_error`)&&typeof e.findErrorCode==`string`&&(o.findErrorCode=e.findErrorCode,typeof e.findErrorLine==`number`&&(o.findErrorLine=e.findErrorLine)),s.has(`scenario`)&&Array.isArray(e.scenarioOptions)&&(o.scenarioOptions=e.scenarioOptions.map(e=>String(e).trim()).filter(Boolean),typeof e.scenarioCorrectIndex==`number`&&(o.scenarioCorrectIndex=e.scenarioCorrectIndex),typeof e.scenarioExplanation==`string`&&(o.scenarioExplanation=e.scenarioExplanation)),o}function p(e,t){if(!t.has(e.type)||o(e,e.type)===`missing`)return{drop:!0,warnings:[`已丢弃主类型字段缺失的卡片：${m(e.front)}`],fixedCard:e};let n={...e};return delete n.types,{drop:!1,warnings:[],fixedCard:n}}function m(e){let t=e.trim();return t.length>30?`${t.slice(0,30)}…`:t}var h={text:`text（文本问答）`,mc:`mc（单选）`,tf:`tf（判断）`,matching:`matching（配对：matchingPairs，每对 { left, right }）`,ordering:`ordering（排序：orderingAnswer 正确顺序）`,fill:`fill（填空：在正面用 ____ 表示空位，fillBlanks 给出每个空位的答案）`,multi:`multi（多选：multiOptions + multiCorrectIndexes 数组）`,find_error:`find_error（找错：findErrorCode 多行代码/文本 + findErrorLine 错误行号）`,scenario:`scenario（场景：scenarioOptions + scenarioCorrectIndex + scenarioExplanation）`};function g(e){return`\n题型白名单（用户已勾选）：${e.map(e=>h[e]).join(`、`)}

【每张卡只选一种题型（同一个问题不要生成多个题型）】
- 每张卡只输出**一种**题型，写在 \`type\` 字段；**不要在一张卡上列出多个题型，不要使用 \`types\` 数组**。
- 从白名单里为该问题挑最合适的一种题型即可；不同卡片可以选不同题型。
- 不要为了展示题型多样性而把同一知识点用多种题型重复出题。
- \`type\` 对应的字段必须填齐；否则整张卡会被丢弃。`}function _(){return`3. 题型选择：
   - 概念/定义/问答 → text
   - 有明确唯一答案的事实比较 → mc（干扰项要合理）
   - 真伪二选一的陈述 → tf
   - 配对关系（如术语 ↔ 释义、人物 ↔ 贡献）→ matching
   - 有顺序的内容（流程、年代、因果）→ ordering
   - 主动回忆关键术语/数值/语法成分 → fill（在正面用 ____ 表示空位）
   - 一组相关知识点需要同时掌握 → multi（多个正确答案）
   - 代码 / 公式 / 语法 → find_error（让用户找出错误行）
   - 真实场景 + 决策 / 排查 → scenario（让用户选最佳应对）
   - 仅输出题型白名单内的题型；其它题型不输出。`}function v(){return`8. matching 配对硬性约束（违反的卡片会被系统丢弃，请务必遵守）：
   - 同一张卡的 matchingPairs 里，所有 left 必须互不相同；所有 right 也必须互不相同；
   - 如果资料中出现了多对一关系（例如多位词人都属「婉约派」），不要硬塞进同一张 matching 卡，应拆成多张 text/mc 卡，或让每条 right 加上更具体的限定（例如「婉约派·女词人」与「婉约派·男词人」）。`}function y(e){return`【答案解析详细程度（当前：${r[e]}）】
本批卡片每张的 "back"（答案解析）字段必须严格达到此详细程度：
${{simple:`—— 用 1–2 句话直接点明正确答案 / 结论即可，不展开推理过程，不举例。`,medium:`—— 先给出正确答案，再用 2–5 句话简要说明理由，点出关键考点；选择题可顺带用一句话点明干扰项错在哪里。`,detailed:`—— 完整解析：先给出正确答案，再逐条拆解题意与推理依据；选择题逐个说明每个错误选项错在哪里；可补充相关的例子、易错点与延伸知识点，把这道题讲透为止（篇幅不限）。`}[e]}
scenario 题的 "scenarioExplanation"、find_error 题的 "back"（错误解析）同样遵循此详细程度。`}var b=`"front": "正面 / 题目",
      "back": "答案"`;function x(e){switch(e){case`mc`:return`"mcOptions": ["选项A", "选项B", "选项C", "选项D"],
      "mcCorrectIndex": 0`;case`tf`:return`"tfAnswer": true`;case`matching`:return`"matchingPairs": [
        { "left": "术语A", "right": "释义A" },
        { "left": "术语B", "right": "释义B" },
        { "left": "术语C", "right": "释义C" }
      ]`;case`ordering`:return`"orderingAnswer": ["步骤三", "步骤一", "步骤二"]`;case`fill`:return`"fillBlanks": ["答案一", "答案二"]`;case`multi`:return`"multiOptions": ["选项A", "选项B", "选项C"],
      "multiCorrectIndexes": [0, 2]`;case`find_error`:return`"findErrorCode": "function f() {\\n  let x = ;\\n  return x;\\n}",
      "findErrorLine": 2`;case`scenario`:return`"scenarioOptions": ["做法A", "做法B", "做法C"],
      "scenarioCorrectIndex": 1,
      "scenarioExplanation": "为什么选 B"`;case`text`:return``}return``}function S(e){let t=x(e);return t?`${b},\n      ${t}`:b}function C(e){return`  {
      "type": "${e}",
      ${S(e)}
    }`}function w(e=s){let t=e.length>0?e:s,n=t.includes(`text`)?`text`:t[0],r=[n];for(let e of t)e!==n&&r.length<3&&r.push(e);return r.length===1&&r.push(n),`{
  "title": "卡片集标题（简短，<= 30 字）",
  "description": "一句话简介（可省略）",
  "cover": "单个 emoji（可选，省略则不输出该字段）",
  "cards": [
    ${r.map(C).join(`,
    `)}
  ]
}`}function T(e,n,r=s,i,a){let o=`\n${y(a?.explanationDetail??t.getConfig().explanationDetail)}\n`,c=n?.trim()?`\n用户建议的标题：「${n.trim()}」，请优先使用（或在更合适时微调）。`:``,l=g(r),u=e.trim()?`资料：
"""${e.slice(0,16e3)}"""`:`资料：（用户未提供）
请根据下面的「标题提示」自由发挥，围绕该主题挑选适合记忆的知识点。`,d=i&&i>0?`\n用户要求生成的卡片数量：${i} 张。请务必生成**正好 ${i} 张**卡片，不要少于 ${i} 张，也不要多于 ${i} 张。
如果资料确实不足以支撑 ${i} 张不重复的卡片，请采取以下任一策略凑足 ${i} 张：
  - 拆解同一知识点的不同侧面（例如：先问「定义」再问「例子」再问「对比」）；
  - 引入与该主题紧密相关的常识性关联知识（前提是用户没禁止）；
绝对不要因为「资料不够」就少生成。少生成卡片是严重的产出不足。`:`
题目数量根据资料长度自适应：建议 5–25 张。`,f=a&&a.batchCount&&a.batchCount>1?`\n这是第 ${a.batchIndex}/${a.batchCount} 批：本次只生成 ${a.batchSize} 张；前序已生成 ${a.existingTitles?.length??0} 张；本次主题与前序保持一致，但题目内容**必须不同**。`:``,p=a&&a.existingTitles&&a.existingTitles.length>0?`\n已生成的卡片题目（请避免重复或过于相似）：\n${a.existingTitles.slice(-30).map((e,t)=>`${t+1}. ${e}`).join(`
`)}\n`:``,m=a&&a.existingFrontsFromSet&&a.existingFrontsFromSet.length>0?`\n该卡片集已有以下卡片正面（用户已开启「跟已有不重复」开关）。请**严格避免**生成问题相同或语义高度相似的卡片；可以围绕同一知识点的不同侧面（定义/例子/对比/反例/应用）出题：\n${a.existingFrontsFromSet.slice(-60).map((e,t)=>`${t+1}. ${e}`).join(`
`)}\n`:``;return`你是一名教学设计师。把下面提供的「资料」拆解成适合间隔重复记忆的卡片集。

${u}
${c}
${a?.styleHint?`\n【出题风格指引】\n${a.styleHint}\n请严格按此风格出题，不要偏向其它模式。\n`:``}
${a?.customInstruction?.trim()?`\n【自定义要求】（最高优先级，必须严格遵守）\n${a.customInstruction.trim()}\n`:``}
${l}
${d}
${f}
${p}
${m}
${o}
要求：
1. 输出一张完整的卡片集 JSON，结构严格如下（不要任何额外解释、不要 markdown 代码块标记）：
${w(r)}

2. 题目数量已在开头说明，按要求输出即可。
${_()}
4. 每张卡片正面清晰、独立、可单独记忆；避免过长的题干。
5. 语言保持与资料一致（中文资料 → 中文；英文 → 英文）。
6. 仅输出合法 JSON。
${v()}`}function E(e,t){let n=/<think>/i.test(e),r=e.includes(`<think>`)&&!e.includes(`</think>`),i=!e.includes(`{`),a=n&&!i&&r,o=``,s=``;r&&!a?(o=`AI 在输出「思考链」后被截断（未生成 JSON）。`,s=t?`建议：在 Settings 里**关闭「启用思考模式」**后重试；或换用支持 JSON 直出的模型。`:`建议：换用支持 JSON 直出的模型（部分模型即便未开启也会默认输出思考链），或减少资料长度。`):a?(o=`AI 在「思考链 + JSON」双输出时被 max_tokens 截断。`,s=t?`建议：在 Settings 里**关闭「启用思考模式」**后重试；或减少生成的卡片数量（每张卡 ~700 tokens）。`:`建议：减少生成的卡片数量（如先试 5–10 张验证模型可用），或换用支持 JSON 直出的模型。`):n&&i?(o=`AI 只输出了思考过程，未生成 JSON。`,s=t?`建议：在 Settings 里**关闭「启用思考模式」**后重试。`:`建议：换用支持 JSON 直出的模型。`):i?(o=`AI 没有返回 JSON，只返回了普通文字说明。`,s=`建议：换用支持 JSON 直出的模型，或检查 baseUrl/模型名是否正确。`):(o=`AI 返回的 JSON 不完整（可能被截断）。`,s=`建议：减少资料长度 / 减少生成的卡片数量 / 关闭思考模式后重试。`);let c=e.slice(0,300).replace(/\s+/g,` `);return`${o}${s}\n原回复前 300 字：「${c}」`}function D(e,r=s){let i=d(e,r,n,e=>{let n=t.getConfig().thinking===!0;return Error(E(e,n))});return{meta:i.meta,cards:i.cards,warnings:i.warnings,droppedCount:i.droppedCount}}var O=25,k=20;function A(e){if(e<=O)return[{batchSize:e,startIndex:0}];let t=[],n=e,r=0;for(;n>0;){let e=Math.min(k,n);t.push({batchSize:e,startIndex:r}),r+=e,n-=e}return t}async function j(e,n,r,i,a,o,s,c={}){let l=c.report??(()=>{}),u=c.progressStart??.1,d=c.progressEnd??.85,f=T(e,n,r,i,{batchIndex:a,batchCount:o,batchSize:i,existingTitles:s,existingFrontsFromSet:c.existingFrontsFromSet,styleHint:c.styleHint,customInstruction:c.customInstruction});l({stage:`requesting`,progress:u,message:`第 ${a}/${o} 批：向 AI 发送请求（${i} 张）…`});let p=0,m=!0;return D((await t.chatCompletion({stream:!0,_module:`aiGenerateSet`,messages:[{role:`system`,content:`你是教学设计师。严格按用户要求的 JSON 结构输出。
【绝对禁止】任何形式的思考过程、计划、解释、注释、Markdown 代码块标记（\`\`\`）。
【绝对禁止】<think>...</think>、<reasoning>、<plan> 等任何思考标签。
【必须】第一个字符必须是 { 或 [，最后一个字符必须是 } 或 ]。
【必须】本次只输出 cards 字段，且 cards 数组长度必须等于用户指定的批次大小。`},{role:`user`,content:f}],temperature:.4,max_tokens:Math.max(8192,i*(t.getConfig().explanationDetail===`detailed`?1400:700)+4096),thinking:c.thinking,onDelta:(e,t)=>{let n=Date.now();if(m){m=!1,p=n,l({stage:`streaming`,progress:u+.05,message:`第 ${a}/${o} 批：AI 开始返回内容…`,receivedChars:t.length});return}if(n-p<250)return;p=n;let r=Math.min(1,t.length/(i*400));l({stage:`streaming`,progress:u+.05+r*(d-u-.15),message:`第 ${a}/${o} 批：接收中（${t.length} 字）…`,receivedChars:t.length})}},{signal:c.signal,timeoutMs:18e4})).text,r)}async function M(e,n,r=s,a){if(!t.isConfigured(`aiGenerateSet`))throw Error(`AI 未配置：请先在 Settings 中填写 API Key`);let o=e.trim();if(!o&&!n?.trim())throw Error(`资料文本或标题提示至少填一项`);let c=a?.onProgress,u=e=>c?.(e),d=a?.cardCount&&a.cardCount>0?a.cardCount:void 0,f=d?A(d):[{batchSize:0,startIndex:0}],p=f.length>1;u({stage:`preparing`,progress:.05,message:p?`计划分 ${f.length} 批生成 ${d} 张卡片…`:`准备提示词…`});let m=[],h=[],g,_,v,y=[];for(let e=0;e<f.length&&!a?.signal?.aborted;e++){let t=f[e],i=e+1,s=f.length,c=p?.1+e/s*.75:.1,l=p?.1+(e+1)/s*.75:.85;try{let e=await j(o,n,r,t.batchSize,i,s,y,{signal:a?.signal,report:u,progressStart:c,progressEnd:l,thinking:a?.thinking,existingFrontsFromSet:a?.existingFrontsFromSet,styleHint:a?.styleHint,customInstruction:a?.customInstruction});m.push(...e.cards),e.warnings&&e.warnings.length>0&&h.push(...e.warnings),e.meta.title&&!g&&(g=e.meta.title),e.meta.description&&!_&&(_=e.meta.description),e.meta.cover&&!v&&(v=e.meta.cover);for(let t of e.cards){let e=(t.front??``).trim();e&&y.push(e)}u({stage:`validating`,progress:l,message:p?`第 ${i}/${s} 批完成：累计 ${m.length}/${d} 张`:`校验 ${e.cards.length} 张卡片…`})}catch(e){let t=e instanceof Error?e.message:String(e);if(a?.signal?.aborted)break;h.push(`第 ${i}/${s} 批失败：${t}`),u({stage:`validating`,progress:l,message:`第 ${i}/${s} 批失败，将跳过该批`})}}if(a?.signal?.aborted)throw Error(`已取消本次请求`);if(m.length===0)throw Error(h[0]??`AI 生成的卡片都不合法，请换个资料再试`);u({stage:`parsing`,progress:.9,message:`共解析到 ${m.length} 张卡片，正在落库…`});let b=`s-ai-${i()}`,x=g??n?.trim()??`AI 生成的卡片集`,S=l({set:{id:b,title:x,description:_??``,cover:v,source:`ai`},cards:m},x,{setId:b,source:`ai`});return S.warnings=[...h,...S.warnings],u({stage:`done`,progress:1,message:`完成（${S.set.cards.length} 张卡片）`}),S}var N=e(),P={visibility:`M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z`,visibility_off:`M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z`,arrow_forward:`M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z`,call_made:`M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`,edit:`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z`,more_horiz:`M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`};function F({name:e,size:t=16,className:n=``}){let r=P[e];return r?(0,N.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,className:n,focusable:`false`,children:(0,N.jsx)(`path`,{d:r})}):null}export{w as a,_ as c,l as d,y as i,d as l,E as n,v as o,M as r,g as s,F as t,u};