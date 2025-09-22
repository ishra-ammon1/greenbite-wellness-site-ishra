const CACHE_NAME = 'greenbite-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/calculator.html',
    '/recipes.html',
    '/workouts.html',
    '/contact.html',
    '/mindfulness.html'
];
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
    self.skipWaiting();
});
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});