const appCacheName = "time-zones-manager-app-v1";
const assets = [
    "/",
    "/index.html",
    //   "/css/style.css",
    "/scripts/clock.js",
    "/scripts/main.js",
    "/scripts/time_zone_manager.js",
    "/scripts/view_controller.js",
];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(appCacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
