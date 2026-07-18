/* ================================================
   Dünya Kupası 2026 — Service Worker
   Strateji:
     index.html  → network-first  (her zaman taze HTML)
     data.js     → network-first  (her zaman taze veri, çevrimdışıysa cache)
     diğerleri   → cache-first    (ikon, manifest)
   ================================================ */

const CACHE = 'dk2026-v1';
const BASE  = '/dunya-kupasi-2026';

const SHELL = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/data.js',
  BASE + '/manifest.json',
  BASE + '/icon-512.png',
];

/* ---------- KURULUM ---------- */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

/* ---------- AKTİVASYON (eski cache temizle) ---------- */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const path = url.pathname;

  /* data.js ve index.html: önce network, hata olursa cache */
  if (path.endsWith('/data.js') || path === BASE + '/' || path === BASE + '/index.html') {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          /* Başarılı yanıtı cache'e de yaz */
          if (res.ok) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* Diğerleri (ikon, manifest): cache varsa ver, yoksa network */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      });
    })
  );
});
