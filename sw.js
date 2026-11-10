/* memo punch · Service Worker
   - Netz zuerst: neue Versionen und Texte kommen sofort an
   - Ohne Netz kommt alles aus dem Speicher (offline spielbar)
   - Neue Versionen übernehmen sofort, die Seite lädt sich danach selbst neu */
const CACHE = 'memo-punch-3.2.0';
const ASSETS = ["./","./index.html","./strings.js","./content.js","./manifest.webmanifest","./img/t1.webp","./img/t2.webp","./img/t3.webp","./img/t4.webp","./img/t5.webp","./img/t6.webp","./img/t7.webp","./img/t8.webp","./img/t9.webp","./img/t10.webp","./fonts/inter-400.woff2","./fonts/inter-600.woff2","./deko/spirale.svg","./deko/blatt.svg","./deko/blatt.svg","./deko/zweige.svg","./deko/stern.svg","./deko/beeren.svg","./deko/schnecke.svg","./deko/tropfen.svg","./deko/schleife.svg","./deko/ranke.svg","./deko/auge.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png"];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const timeout = ms => new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin) return;
  // Schlüssel ohne ?v=…; Seitenaufrufe je Ordner (Haupt-App und /punch/ getrennt)
  const key = u.origin + (req.mode === 'navigate' && u.pathname.endsWith('/') ? u.pathname + 'index.html' : u.pathname);
  e.respondWith(
    Promise.race([fetch(req, { cache: 'no-cache' }), timeout(4000)])
      .then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(key, copy)); } return r; })
      .catch(() => caches.match(key, { ignoreSearch: true }).then(hit => hit || caches.match(req, { ignoreSearch: true })))
  );
});
