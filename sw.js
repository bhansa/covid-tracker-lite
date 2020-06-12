self.importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js"
);

self.toolbox.precache([
  "/",
  "/main.js",
  "/theme-toggle.js",
  "/main.css",
  "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js",
]);

self.toolbox.router.get("/(.*)", function (request, values, options) {
  return toolbox.networkFirst(request, values, options).catch(function (error) {
    if (
      request.method === "GET" &&
      request.headers.get("accept").includes("text/html")
    ) {
      return toolbox.cacheOnly(new Request("/"), values, options);
    }
    throw error;
  });
});

// sw activated
self.addEventListener("activate", function (event) {
  // claims the sw for client after wait skipped
  return self.clients.claim();
});

self.addEventListener("install", (event) => {
  // skip wait to install a new version of service worker
  self.skipWaiting();
});
