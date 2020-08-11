importScripts("/precache-manifest.6ac69dce08e9b8756f1c5e1b99a6672d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')

workbox.routing.registerRoute(
  /^https?:\/\/www.themealdb.com\/images\/.*/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 20,
      }),
    ],
  })
)

workbox.routing.registerRoute(
  /^https?.*/,
  workbox.strategies.networkFirst(),
  'GET'
)



