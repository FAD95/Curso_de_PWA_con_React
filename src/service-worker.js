self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')

workbox.routing.registerRoute(
  /^https?.*/,
  workbox.strategies.networkFirst(),
  'GET'
)

workbox.routing.registerRoute(
  /^https?:\/\/www.themealdb.com\/images\/.*/,
  workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 20,
      }),
    ],
  })
)
