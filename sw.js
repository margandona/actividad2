/**
 * Service Worker para Agencia TecnoFuturo
 * Cachea assets estáticos para funcionamiento offline básico (PWA-lite)
 */

const CACHE_NAME = 'tecnofuturo-v1';

// Lista de archivos a cachear
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    // Imágenes
    '/assets/img/bot.png',
    '/assets/img/a1.png',
    '/assets/img/a2.png',
    '/assets/img/a3.png',
    '/assets/img/a4.png',
    '/assets/img/a5.png',
    '/assets/img/a6.png',
    '/assets/img/horizontal.png',
    '/assets/img/vertical.png',
    // Audio (si existen)
    '/assets/audio/bg.mp3',
    '/assets/audio/hover.mp3',
    '/assets/audio/click.mp3',
    '/assets/audio/open.mp3'
];

/**
 * Evento de instalación
 * Cachea todos los assets estáticos
 */
self.addEventListener('install', event => {
    console.log('[SW] Instalando Service Worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cacheando archivos');
                // Usar addAll con try-catch para evitar fallos si falta algún archivo
                return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' })))
                    .catch(err => {
                        console.warn('[SW] Algunos archivos no se pudieron cachear:', err);
                        // Intentar cachear individualmente los que sí existen
                        return Promise.all(
                            urlsToCache.map(url => 
                                cache.add(url).catch(e => console.debug('[SW] No disponible:', url))
                            )
                        );
                    });
            })
            .then(() => self.skipWaiting())
    );
});

/**
 * Evento de activación
 * Limpia cachés antiguos
 */
self.addEventListener('activate', event => {
    console.log('[SW] Activando Service Worker...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Eliminando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

/**
 * Evento de fetch
 * Estrategia: Cache-first para assets estáticos
 * Si no está en caché, intenta obtener de la red
 */
self.addEventListener('fetch', event => {
    // Ignorar solicitudes que no sean GET
    if (event.request.method !== 'GET') return;
    
    // Ignorar URLs externas (CDN, APIs, etc.)
    if (!event.request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Si está en caché, devolverlo
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Si no, intentar obtener de la red
                return fetch(event.request)
                    .then(networkResponse => {
                        // Cachear la respuesta para uso futuro (solo si es exitosa)
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return networkResponse;
                    })
                    .catch(err => {
                        console.warn('[SW] Fetch failed:', err);
                        // Aquí podrías devolver una página offline personalizada
                        return new Response('Offline - contenido no disponible', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

/**
 * Evento de message
 * Permite comunicación con la app (ej: skipWaiting, update cache)
 */
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.delete(CACHE_NAME).then(() => {
                console.log('[SW] Caché eliminado');
            })
        );
    }
});
