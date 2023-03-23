'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fad8456d685d5fb307fdaa16f631003f",
".git/config": "cc732f50cbb747d93fb036b0d7f0a207",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f96e42f05312b7cd9cf0db9b383fb05e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93ebb02a2dd0358fd5469c66839bc1fa",
".git/logs/refs/heads/master": "7c5e73840e88f78c2b5ed6f9de058a6a",
".git/logs/refs/remotes/origin/master": "a019cb92fc73b5a356bff13e51d1a2ce",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0a/d76ef0eb8844be22b099cd351b3af62dea0b08": "f4b5ce5ea8e5e1e12d6be3421f4d122e",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/22/80d9798a8dc312f23ae3237362f7ba5ed37c2a": "7a9efe115c9359cc4ebccf1bda03716a",
".git/objects/25/e9d26df56bc0bcc6894ec9334aea883345e3b9": "d8e2381b97d404ce88bdbca89e2370ab",
".git/objects/28/ba7b8e4033b2354ac071c3268ae517ffcb03b1": "0dd54a1f4bf8cc9465205e92c0ede954",
".git/objects/2f/e5896f1db8ebb60441a4a22a1138944b62de79": "3363fb7b8fb6ce88725a281a9d2b72c0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/248cc28651cb6fc0ffebfd013ef49fc61be957": "e7c66e88518a7995a4de6a56aca8d6a9",
".git/objects/48/801288b4e97f2cc27786a3fb7fe4cd2ec18c12": "91bb163b55f93f0de0dbb5054f4942aa",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/53/6be0be5e6040e0258bf3591c9e1577e65b5d59": "6d137bb9bf96cefbfb7d78060bb84618",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/67/3c88ab3a6fe44fa05dc81379499b97a3e95e5d": "1b3e6a088b8dfd7c8c45d23049d1d7b4",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/7490ab82606a85f91a0a027bbbd91f0ae899a9": "faa4aaddfe51330aaaf305d9e644bc25",
".git/objects/6c/302a19e5bff29c8b778cfb4ef742f79f332f43": "98bbbf10e9078ccb26fa978b1c7b45e0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/4971a3a6017eb46cb7503638b27641d4304d83": "d988bac1087214434c20fcd1c5631bb8",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/83/20a6030f72c6ce98d778d89b65f5f7eac9ba2c": "823cd4552ef0af7b77697a8f76537f5f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/b4bb7d9778c98481df182566a821e18700bfca": "26b5ad0420cea4ea387a0dcae72f7358",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/9b/72fb4486e8dbac63d3d9ab001c08da2cfb81fd": "b25a53d8be6743408a94d4b59f27b403",
".git/objects/9e/109d573c3dc4940dbad8fcd43f9c2eaf33813d": "9e89faca9d754a8b813cf6706a55d196",
".git/objects/9f/cb9ef0b0e638881d0fc4db218f7ebfa36149aa": "803b6f3cbba04aab7689e206c243b080",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/01c1db4876247c9415373e315cdeb389c24b3e": "45e182c83cc301124c7e3fcdddcf56d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/eb2a38675b6a96c1e9ad001a4f2da363149e3f": "01fa8a115e8ba8b50157793f4e74fa29",
".git/objects/cd/f3e7fea00e875f4cd4da98a7c178719b5ba843": "ed2926722ef2c51de02d2260393e67b0",
".git/objects/ce/eb6355fb972b12ea891b8d9adc5db17de05c82": "85490484fbb6f9a2a29d2ee8ff500b23",
".git/objects/d3/d21d7dea250aaf686e8727d8a6d49a97e67abd": "50a29e1e41cad5b5a89ded17b3191888",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/0016507cbefce99e79552536d655a17d3074aa": "a1fb16bac0418f96010589d10958bad3",
".git/objects/dd/77f53b4907ce47e536531abd70a6707eb5934c": "3e32ca4eb7ca5ee2e7d345378bd66f20",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c946e16edabd5ebc7cde6415557a5a045b68ea": "5df765cfbbf56911bbcd79ac6bcc207d",
".git/objects/e9/c32ba40dd7a1eeb209949525781c42e82db13f": "d96f295c8470de00b9af406e507b65ed",
".git/objects/ea/f755b60fb50440ff241fbaf4a605190356dbf6": "1cf2add70b0fd68fb8fd95493a0e6b7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/e020862a37a9e0301c53dbda02c16db7f30c5e": "ed2ee3b567f434f6cf82ba1c73fd274c",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/ff/f513fa0dd72be8d13a99b44608ea57d28a63b2": "d1789fbf7a4857b6ed8f0db4f41e13d9",
".git/refs/heads/master": "8ab47bd6b1244aeb78d4e965eb8623f3",
".git/refs/remotes/origin/master": "8ab47bd6b1244aeb78d4e965eb8623f3",
"assets/AssetManifest.json": "0868494ed138661cdafa83f93f6e50a1",
"assets/assets/217x0w.png": "dbbc0053332601cdbad80b640c655257",
"assets/assets/kitn.ttf": "50a3ec8140c0cfac5b08bda7f0385b55",
"assets/assets/me.jpg": "33dcd5bc5dfd6ebeab071505e42a2617",
"assets/assets/NewRudaw-Regular.ttf": "b725b9cd9cb1ff0d79a3d9a3ed4018ea",
"assets/FontManifest.json": "92d03637501f0efd52953347d393b7be",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a37f47826793314b619a144737cbc1c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/iconforest_flat_icons_social/assets/fonts/flat_icons_social.ttf": "bfd49182b9ca024d5a0348652126c9e5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "33dcd5bc5dfd6ebeab071505e42a2617",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e4686fd1e04a09db3ca848d8994e2ab",
"/": "9e4686fd1e04a09db3ca848d8994e2ab",
"main.dart.js": "f1133039cd601e38112c1b5a0c70fa3a",
"manifest.json": "b2e8df88e2b525552967f9a0bdd21edc",
"version.json": "9aec8d698ac186cb9794472215aaaaec"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
