// CycloneGuard GVMC Service Worker
// Implements offline caching, background sync, and push notifications

const CACHE_NAME = 'cycloneguard-v1';
const STATIC_CACHE = 'cycloneguard-static-v1';
const API_CACHE = 'cycloneguard-api-v1';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.js'
];

// API endpoints to cache with network-first strategy
const API_ENDPOINTS = [
  '/api/v1/assets',
  '/api/v1/incidents',
  '/api/v1/shelters/occupancy',
  '/api/v1/alerts'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== API_CACHE && cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Old caches cleaned up');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Strategy 1: Cache-first for static assets
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy 2: Network-first for API calls
  if (isAPIRequest(request.url)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Strategy 3: Network-first for HTML pages
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Default: Network-first
  event.respondWith(networkFirst(request));
});

// Cache-first strategy for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('[SW] Serving from cache:', request.url);
      return cachedResponse;
    }
    
    console.log('[SW] Cache miss, fetching from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cache the response
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first failed:', error);
    throw error;
  }
}

// Network-first strategy for API calls and dynamic content
async function networkFirst(request) {
  const cache = await caches.open(API_CACHE);
  
  try {
    console.log('[SW] Fetching from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback for HTML requests
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline.html') || new Response('Offline', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({ 'Content-Type': 'text/html' })
      });
    }
    
    throw error;
  }
}

// Stale-while-revalidate strategy for frequently updated data
async function staleWhileRevalidate(request) {
  const cache = await caches.open(API_CACHE);
  const cachedResponse = await cache.match(request);
  
  const networkFetch = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  // Return cached response immediately if available
  if (cachedResponse) {
    networkFetch; // Update cache in background
    return cachedResponse;
  }
  
  return networkFetch;
}

// Helper functions
function isStaticAsset(url) {
  return url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/) ||
         url.includes('/static/');
}

function isAPIRequest(url) {
  return url.includes('/api/');
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-inspections') {
    event.waitUntil(syncInspections());
  } else if (event.tag === 'sync-incidents') {
    event.waitUntil(syncIncidents());
  }
});

async function syncInspections() {
  // Sync offline inspection data
  try {
    const offlineData = await getOfflineData('inspections');
    for (const inspection of offlineData) {
      await fetch('/api/v1/inspections/' + inspection.id + '/submit', {
        method: 'POST',
        body: JSON.stringify(inspection.data),
        headers: { 'Content-Type': 'application/json' }
      });
    }
    await clearOfflineData('inspections');
    console.log('[SW] Inspections synced successfully');
  } catch (error) {
    console.error('[SW] Failed to sync inspections:', error);
  }
}

async function syncIncidents() {
  // Sync offline incident reports
  try {
    const offlineData = await getOfflineData('incidents');
    for (const incident of offlineData) {
      await fetch('/api/v1/incidents/ingest', {
        method: 'POST',
        body: JSON.stringify(incident.data),
        headers: { 'Content-Type': 'application/json' }
      });
    }
    await clearOfflineData('incidents');
    console.log('[SW] Incidents synced successfully');
  } catch (error) {
    console.error('[SW] Failed to sync incidents:', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data?.text() || 'New update from CycloneGuard',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'view',
        title: 'View Details',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/icon-96x96.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('CycloneGuard Alert', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// IndexedDB helpers for offline data storage
async function getOfflineData(storeName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('CycloneGuardOfflineDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const getAll = store.getAll();
      
      getAll.onsuccess = () => resolve(getAll.result);
      getAll.onerror = () => reject(getAll.error);
    };
  });
}

async function clearOfflineData(storeName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('CycloneGuardOfflineDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const clear = store.clear();
      
      clear.onsuccess = () => resolve();
      clear.onerror = () => reject(clear.error);
    };
  });
}

// Message handling for manual cache updates
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CACHE_UPDATE') {
    event.waitUntil(updateCache());
  }
});

async function updateCache() {
  try {
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(PRECACHE_ASSETS);
    console.log('[SW] Cache updated successfully');
  } catch (error) {
    console.error('[SW] Failed to update cache:', error);
  }
}
