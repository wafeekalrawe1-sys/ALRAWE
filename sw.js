/* ══════════════════════════════════════════
   WAFEEQ PPL — Service Worker v2.0 PREMIUM
   Offline-first caching strategy
══════════════════════════════════════════ */

const CACHE_NAME = 'wafeeq-premium-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap'
];

// Install — cache shell
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // Fail silently on font cache errors
      });
    })
  );
});

// Activate — purge old caches
self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
});

// Fetch — stale-while-revalidate
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchFresh = fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // fallback to cache when offline

      return cached || fetchFresh;
    })
  );
});
