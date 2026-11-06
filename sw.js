/* Memo Punch Service Worker: alles vorab cachen, offline aus dem Cache spielen. */
const CACHE = 'memo-punch-2.0.2';
const ASSETS = [
  './', './index.html', './i18n.js', './content.js', './manifest.webmanifest',
  './img/t1.svg', './img/t2.svg', './img/t3.svg', './img/t4.svg', './img/t5.svg', './img/t6.svg', './img/t7.svg', './img/t8.svg', './img/t9.svg', './img/t10.svg',
  './fonts/archivo-black.woff2', './fonts/space-grotesk-500.woff2', './fonts/space-grotesk-700.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // Seite: erst Netz (frische Version), sonst Cache
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
