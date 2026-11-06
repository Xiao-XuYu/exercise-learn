var e=`(function(){
  var MAXC = 1200;
  var timer = null;
  function post(msg){ try { parent.postMessage(msg, '*'); } catch(_){} }
  function el(node){
    if (!node) return null;
    return node.nodeType === 1 ? node : (node.parentElement || null);
  }
  function rootOf(range){
    try {
      var e = el(range.commonAncestorContainer);
      return (e && (
        e.closest('p,li,dt,dd,blockquote,td,th,h1,h2,h3,h4,h5,h6,pre,figcaption,summary,label') ||
        e.closest('[data-cl-context],.md-preview,article,main,section,[role="article"]')
      )) || document.body;
    } catch(_) { return document.body; }
  }
  function contextOf(range){
    try {
      var root = rootOf(range);
      var fullRange = document.createRange();
      fullRange.selectNodeContents(root);
      var full = fullRange.toString();
      var a = document.createRange();
      a.setStart(root, 0);
      a.setEnd(range.startContainer, range.startOffset);
      var start = a.toString().length;
      var b = document.createRange();
      b.setStart(root, 0);
      b.setEnd(range.endContainer, range.endOffset);
      var end = b.toString().length;
      return {
        before: full.slice(Math.max(0, start - MAXC), Math.max(0, start)),
        after: full.slice(Math.min(full.length, end), Math.min(full.length, end + MAXC))
      };
    } catch(_) { return { before: '', after: '' }; }
  }
  function rectObj(r){
    return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
  }
  function report(){
    try {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { post({ type: 'cl-sel-clear' }); return; }
      var text = String(sel.toString() || '').trim();
      if (!text || !/[A-Za-z]/.test(text)) { post({ type: 'cl-sel-clear' }); return; }
      var range = sel.getRangeAt(0);
      var ctx = contextOf(range);
      var rects = range.getClientRects();
      var first = rects.length ? rects[0] : range.getBoundingClientRect();
      var last = rects.length ? rects[rects.length - 1] : first;
      post({
        type: 'cl-sel',
        text: text,
        before: ctx.before,
        after: ctx.after,
        rect: rectObj(first),
        lastRect: rectObj(last)
      });
    } catch(_) {}
  }
  function later(){ clearTimeout(timer); timer = setTimeout(report, 0); }
  document.addEventListener('mouseup', later, true);
  document.addEventListener('touchend', later, true);
  document.addEventListener('keyup', function(ev){ if (ev.shiftKey || ev.key === 'Shift') later(); }, true);
  document.addEventListener('scroll', function(){ post({ type: 'cl-sel-clear' }); }, true);
  // 在 iframe 里按下鼠标 / 手指 = 点了父页面翻译面板的外部 → 让父页面收起面板
  document.addEventListener('pointerdown', function(){ post({ type: 'cl-sel-outside' }); }, true);
  var clearTimer = null;
  document.addEventListener('selectionchange', function(){
    clearTimeout(clearTimer);
    clearTimer = setTimeout(function(){
      try {
        var sel = window.getSelection();
        if (!sel || sel.isCollapsed) post({ type: 'cl-sel-clear' });
      } catch(_) {}
    }, 120);
  });
})();`;function t(e){if(!e)return null;let t=e.replace(/﻿/g,``).replace(/[-‍﻿]/g,``).replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g,``),r=t.replace(/<think>[\s\S]*?<\/think>/gi,``),i=r.indexOf(`<think>`),a;if(i===-1)a=r;else{let e=r.slice(i),t=e.indexOf(`{`);a=t===-1?r.slice(0,i):r.slice(0,i)+e.slice(t)}if(a.trim().length<20&&/<think>/.test(t))return null;let o=[],s=a.match(/```(?:json|JSON|js|javascript|ts|typescript)?\s*([\s\S]*?)```/);s&&s[1]&&o.push(s[1].trim()),o.push(a.trim()),o.push(t.trim());{let e=a.indexOf(`{`),t=a.lastIndexOf(`}`);e!==-1&&t!==-1&&t>e&&o.push(a.slice(e,t+1))}{let e=a.indexOf(`{`);if(e!==-1){let t=[],n=!1,r=!1,i=!1;for(let o=e;o<a.length;o++){let e=a[o];if(r){r=!1;continue}if(n){e===`\\`?r=!0:e===`"`&&(n=!1);continue}if(e===`"`){n=!0;continue}if(e===`{`)t.push(`}`);else if(e===`[`)t.push(`]`);else if((e===`}`||e===`]`)&&(t.pop(),t.length===0)){i=!0;break}}if(!i&&t.length>0){let n=``;for(let e=t.length-1;e>=0;e--)n+=t[e];o.push(a.slice(e)+n)}}}{let e=a.indexOf(`[`),t=a.lastIndexOf(`]`);e!==-1&&t!==-1&&t>e&&o.push(a.slice(e,t+1))}for(let e of o){let t=n(e);if(t!==null)return t}return null}function n(e){try{return JSON.parse(e)}catch{return null}}export{e as n,t};