// Service Worker Básico para permitir instalação PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Apenas deixa a requisição passar normalmente
    e.respondWith(fetch(e.request));
});