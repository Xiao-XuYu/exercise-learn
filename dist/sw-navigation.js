/**
 * 入口 HTML 的导航缓存策略（由 vite.config.ts 的 workbox.importScripts 引入）。
 *
 * 为什么不用 Workbox 的 runtimeCaching + NetworkFirst：Workbox 对 navigate 请求会
 * 忽略 fetchOptions（node_modules/workbox-strategies/StrategyHandler.js 里
 * `fetch(request, request.mode === 'navigate' ? undefined : this.fetchOptions)`），
 * 所以改不了 cache 模式。GitHub Pages 给 index.html 发 Cache-Control: max-age=600，
 * SW 内部的 fetch 会直接吃浏览器 HTTP 缓存 → 发版后 10 分钟内新开标签/刷新还是旧入口。
 * 这里自己接管导航请求，用 cache: 'no-store' 强制走网络。
 *
 * 离线兜底：上一次成功导航的 HTML 存在 app-shell 里（最多 8 个 URL）。
 */
const CACHE = 'app-shell';
const NETWORK_TIMEOUT_MS = 4000;
const MAX_ENTRIES = 8;

self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;
  event.respondWith(navigationNetworkFirst(event.request));
});

async function navigationNetworkFirst(request) {
  const cache = await caches.open(CACHE);
  const key = request.url;

  const network = fetch(request.url, {
    cache: 'no-store',
    credentials: 'same-origin',
  }).then(async (response) => {
    if (response.ok) {
      await cache.put(key, response.clone());
      await trim(cache);
    }
    return response;
  });
  network.catch(() => {});

  try {
    return await withTimeout(network, NETWORK_TIMEOUT_MS);
  } catch {
    const cached = await cache.match(key);
    if (cached) return cached;
    return network;
  }
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('navigation timeout')), ms);
    }),
  ]);
}

async function trim(cache) {
  const keys = await cache.keys();
  if (keys.length <= MAX_ENTRIES) return;
  for (const key of keys.slice(0, keys.length - MAX_ENTRIES)) {
    await cache.delete(key);
  }
}
