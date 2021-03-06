'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d9376e3a248677ee528e4348bc36db5",
".git/config": "eae49ac2a160e365bcf28e7673863132",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c461231028c815f282fc14ac292efd79",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68e421b8f21427fcbaacfd951e22b82a",
".git/logs/refs/heads/master": "68e421b8f21427fcbaacfd951e22b82a",
".git/logs/refs/remotes/origin/master": "73f8d32dd167c4e3a04e9d5d1a8d5529",
".git/objects/0f/bfe2d69152678ce12fd86bf8671a1a0c5500e7": "afca6c12512f3db607a7435bdee52770",
".git/objects/14/70f336a49bd11165f781a78b0b4051c34d92fa": "55dad0f44b66f00a170e1bf67c8627be",
".git/objects/1f/c37c736bb21c435904eea88581aac28a1588e1": "12ec527e5598cffd07c5478cb5a38c10",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/e598da195e0e4fc5468884b808d3a6951b5d7a": "b5ff101672f5ad75fabe71917443a406",
".git/objects/29/cfdc84400ab8a7898075be2b8959fc1ce1326d": "f1c14b66e999957d08283625cea91d34",
".git/objects/2b/f66f53971b8263731af7f0978ef81599cabfde": "7e3c5375bd7cfb257d5d8dc5e39a1100",
".git/objects/2c/0697e9e6df10ff377ab3c1650752142fd0ea41": "994b5404c31366a7c5d43db10adba669",
".git/objects/2e/5f36d9b0860a839217fb2ace41b1eca7ee8904": "636554b5298e306672ef58178b7e5646",
".git/objects/32/a24f5dc2e58f00b6a869dd258d973d9edfcc9c": "862c2626992156e9bf5ef0d3ff6cb138",
".git/objects/3c/2062d4e4c46a2d4106d2a0d8bfef4e4242f4e9": "7eee03f6cbcdd0b24937f98cf40dd89c",
".git/objects/3d/b6d3af039558c581e019a4691a2ebe42004cc1": "a98f122c31db8d1a677579ccbe245d8c",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/48/711b1e6d0d43530b50ba69ed48593b0fa7cc5d": "2dfa1832bc76be525f870558cfcd8c0e",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4b/c6c17cde9c68526448496d8e690bb1bd67b3c6": "ef7587cf08b147579ea55a8bd6036a85",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/58/772310ae88a13a9ddb2d795072feb1e2eb3053": "0f371a0edd75a6944f82190962716757",
".git/objects/5d/97ab4fd6ec603962e903bf8351f9017bca4a3c": "2cd55641f1780e10541c91df3f958b62",
".git/objects/61/aa3ff20aff41ca79cde46785b4503ff107f43e": "4bcfccc94766e2feb87f05f025a3e07f",
".git/objects/62/123aaa89ca1309aa4c1d738cb7d861dd18c0bf": "b0b344111a22c1a8ff49cd42f2f1f233",
".git/objects/65/974e43245e649c18093403b01f0a71c5d03035": "f1a875e1831e0abfeaedf962bf0ec0a1",
".git/objects/67/1e00b863f8662b3500176c035831975303bde2": "858b5d8893bea53d69a52771578f5b98",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6c/b63b7879c717965dc32ce647e892853af7a603": "81e131ff4a9990368e23c20a1221d6c4",
".git/objects/6c/e3847230ccacfb6b89ebc6bb892faaaa083133": "646c26b68d07a4344c687c924710b1c0",
".git/objects/75/34fd80e3f9a676f762840c587aebf3f0586f37": "f5356b54514a8e3275ab5984a32a0042",
".git/objects/76/e97e94db1947316a0057e2d23d2957c21f183d": "6feed8d06e81ecf18cb0ef510e5ab81a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/760a144566453a5e5d668e7c637bdb24d9255e": "b0386ceb128b6e83c9e61add8ac7b322",
".git/objects/81/b117a560a3fbd50b873d5bf4ebfbfd6606ce0c": "3706cada96cdb4e02662cd22182c6204",
".git/objects/86/e1d1c93784f60c90c4164b09929b4269c73ad5": "f3498a6f7ab1100830e22baf51c952e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/30d4b842bb53b0f795cb143cce346e8088bcfe": "b06a0994aa0ad4d3ced49ef47e0bf36e",
".git/objects/8a/433b1f0953f2b272146f675a6dea60082b310d": "6b76b4624cf1dac29f08224ad3c6cb9a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/a1e029fa0d8c58c616f746ec917c2ae25ea021": "93f6d8a2c86b0b459d75e3b4e93ef348",
".git/objects/92/1853a29b18bd4d8e1330b3d8362ce29f684c42": "93c67f7d177948fc16473604b258a8ba",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/94/edbf3da2ae22d11a33ef0ca3a34ed1cfdd4fd9": "a6708d8932f04b909f0786cc7c03e7c5",
".git/objects/96/b7f8d971f153c186896ef7ebf4a98ffc926a6a": "5569cd32a1af286c36ccd05182afe718",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/4bc0f6ce750db5607f8724805743af1b80737b": "1798a23a54d93878197f235d238075f5",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b5/9d448f251ae858da678b7a0f4a813eec9f09d7": "5f77a4c8ada3eb11eca91f2d59f68ee9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/be65f3e4400ecf259079392f86caaee5b7aca8": "13b3eca63e6e060fccd6feb31fc8d297",
".git/objects/bd/89aba588bce56741684ef21cb40ce414ebe08b": "0468173ad2a9c188a78834f71eb8018a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/d0/18b7ba1650ead40f471fd7f58dcb68b1cfe7ae": "f94857fcadf1ed897cdd9f9e6df570ee",
".git/objects/d2/1582ddc4838e3b0896fe58584bbcaf786f38fd": "938d2ffefcb16b3d4aefb48053ab6c7a",
".git/objects/d7/aac69536257fd0c0f2d126cf8ebf9eed1a29d1": "f48f0d8cdee6ee5603f30d5f3bb58c29",
".git/objects/d8/127cfdae36a44cb2997873ec54965ea5cbe1a8": "555a5cf6867ef52b5ed69c4faa443384",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/1629fc0054fc32828a67aba65bb73f37e50bb0": "9e3495aabcc7f0a5ad1c52e323a8cf0d",
".git/objects/e2/a0fdfa9f9ee92648e692203bf0076a88169b8e": "a55c74d942fa75ea9afe24d56294dc26",
".git/objects/e4/aad2341690ab4e8c1495906eb050d9c152a603": "e4b89306338021ea550ccc93121477e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/83dfd03b67891cbb5f2b16575332c360d1b519": "fae4e4454c1afcc293c7bff21a3c77f2",
".git/objects/ed/25fc113be349f5ffaa53ecddd5bcbda3589361": "efc496e77543f160467b44218568e004",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/6efcefcfda50ab83eec895c87c5a9266a0d58a": "35f6319fffe6936ca6fea8f9fb03feba",
".git/objects/f9/08ee5d25a1ec71f5d31cce49b088c4a9708e1a": "3038913fbe1afe6b26c50a94a76c12db",
".git/objects/fd/2f2313b3c6233339e9d71407d25d708d1c972a": "0183db72a1b3c4909f31103e7f8dc98a",
".git/objects/fe/b2eb4548f07a89d22235cb4a1390db4b4b39ef": "b35a78f681d1dd2e5fcaa497e7efcee7",
".git/refs/heads/master": "112b88b3e7ded4bc98ce5fbb9728c604",
".git/refs/remotes/origin/master": "112b88b3e7ded4bc98ce5fbb9728c604",
"assets/AssetManifest.json": "f79fed2a2bf219e8a789c436e3b2d66b",
"assets/assets/images/22f4a046": "9ffa6fbfc8ff1818480dd0465027595d",
"assets/assets/images/5ba0b422": "11bb452fc40b7ae2bd55b935971454f6",
"assets/assets/images/cant_view.jpg": "9ffa6fbfc8ff1818480dd0465027595d",
"assets/assets/images/cc35418a": "8e6b94ca57de67433bd6c2f09fbb9b2c",
"assets/assets/images/e2cbbb87": "c6b7f9f4b404ab852ab9b0d9fcc12d7e",
"assets/assets/images/geersey.png": "c6b7f9f4b404ab852ab9b0d9fcc12d7e",
"assets/assets/images/geersey_1.png": "11bb452fc40b7ae2bd55b935971454f6",
"assets/assets/images/launch_image.jpg": "8e6b94ca57de67433bd6c2f09fbb9b2c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5a03be5cbe1e88af81878de042902b48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/9f217da2": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/a50eb720": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/ee699737": "19f57402a04a9d9c2bd8e667961ffaf1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0b88be2761601c126d6fc3aeba68642e",
"/": "0b88be2761601c126d6fc3aeba68642e",
"main.dart.js": "24d355c0f5162f22c565a7d21188fc3d",
"manifest.json": "413c4532dcafd9c5a1da281130bab0eb",
"version.json": "1f308f6516a18ecd7674c9a450a742cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
