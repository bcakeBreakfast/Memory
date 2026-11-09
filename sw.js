/* Memo Punch Service Worker
   - Netz zuerst: neue Versionen und Texte kommen sofort an
   - Fällt das Netz aus, kommt alles aus dem Speicher (offline spielbar)
   - Neue Versionen übernehmen sofort (skipWaiting), die Seite lädt sich selbst neu */
const CACHE = 'memo-punch-2.1.1';
const ASSETS = [
  './', './index.html', './i18n.js', './content.js', './manifest.webmanifest',
  './img/t1.webp', './img/t2.webp', './img/t3.webp', './img/t4.webp', './img/t5.webp', './img/t6.webp', './img/t7.webp', './img/t8.webp', './img/t9.webp', './img/t10.webp',
  './fonts/archivo-black.woff2', './fonts/space-grotesk-500.woff2', './fonts/space-grotesk-700.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'
];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
const timeout = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req.url.split('?')[0];
  e.respondWith(
    Promise.race([fetch(req, { cache: 'no-cache' }), timeout(4000)])
      .then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(key, copy)); } return r; })
      .catch(() => caches.match(key, { ignoreSearch: true }).then(hit => hit || caches.match(req, { ignoreSearch: true })))
  );
});
