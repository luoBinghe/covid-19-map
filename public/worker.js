var CACHE_NAME = 'covid19-pwa';
var urlsToCache = [
  "/"
];

//install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})

//Cache and returns requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response){
        return response
      }
      return fetch(event.request)
    })
  )
})

//Update an service worker
self.addEventListener('activate', event => {
  var cacheWhiteLiast = ['pwa-task-manager']
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheNames => {
          if(cacheWhiteLiast.indexOf(cacheName) === -1){
            return cache.delete(cacheNames)
          }
        })
      )
    })
  )
})

