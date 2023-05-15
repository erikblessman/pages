const CACHE_NAME = 'codcompanionapp-v1';

// Use Network-First caching strategy
self.addEventListener('fetch', function (event) {
  event.respondWith(
      fetch(event.request).catch(function() {
          caches.open(CACHE_NAME)
          .then(cache => cache.match(event.request, {ignoreSearch: true}))
      })
  )
})
