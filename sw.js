const CACHE='gym-plan-v8-4-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./audio/1.mp3','./audio/2.mp3','./audio/3.mp3','./audio/4.mp3','./audio/5.mp3','./audio/6.mp3','./audio/7.mp3','./audio/8.mp3','./audio/9.mp3','./audio/10.mp3','./audio/go.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gym-plan-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===self.location.origin){let copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request)))});
