if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LOGO-100X100.svg",revision:"189e07cfd385c7d252b748f2b42737e4"},{url:"/Logo.png",revision:"0d4c4a17a974fdfa7b707979ea4560bd"},{url:"/Logo_BBD-150x150.svg",revision:"8de1571f8c23417fa7d095b659908d20"},{url:"/Logo_BBD-256x256.svg",revision:"3e55590822070bb712844507dae15d4f"},{url:"/Logo_BBD-384x384.svg",revision:"999b46a15a58b2b5731c600da67281b9"},{url:"/Logo_BBD-512x512.svg",revision:"d3d84fc0e808cf72e2784380e065ff42"},{url:"/Logo_BBD.svg",revision:"d3344c4d1b0485b8ad3147bbc34cd712"},{url:"/_next/static/KozME3nUWyIByZ0NJPhPl/_buildManifest.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/KozME3nUWyIByZ0NJPhPl/_middlewareManifest.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/KozME3nUWyIByZ0NJPhPl/_ssgManifest.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/0c428ae2-665d915b49574868.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/137-467e8d67d96c2708.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/1bfc9850-3bd8d872b38d587f.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/252f366e-e32b5a26966bbb1b.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/669-d5c0ade339f9c837.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/675-a0e7bc4ebaaecba0.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/926-0b1304d04dae3e9c.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/d7eeaac4-542b6d99be97cef7.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/framework-e70c6273bfe3f237.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/main-50770868367ef490.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/404-19e29050a19d8ce1.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/_app-9cd1d19dd7237c4c.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/about-f609822b30941d3d.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/acara/%5Bnama_acara%5D-f42300e156cbbbbc.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/agenda-d761667c7aa8e86a.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/contact-d7c9eecfa37e84f7.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/daftar-36faa514b76df560.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/dokumentasi/%5Btitle%5D-4ef245de4cd1500f.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/dokumentasiAcara-53d7612beec479ab.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/editProfile-75c230253398aa03.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/home-5b54debe4a7d0205.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/index-47ac9f8b3ae15e6f.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/login-aa7595bae342bd99.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/maintenance-8f6a3a8628fb84e6.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/pengumanAcara-f68c5ed1e2625ccf.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/pages/profile-2cd0b82d079517f4.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/css/33ba9ad3e896e230.css",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/css/a9bf3b6d4dffe9d0.css",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/media/pablita-595.98b7a821.gif",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/media/pablita-finance.c8fc5d8d.gif",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/_next/static/media/splash.34c3740d.jpg",revision:"KozME3nUWyIByZ0NJPhPl"},{url:"/icon-192x192.png",revision:"f140bffaa0b03be49e56d161b245b074"},{url:"/icon-256x256.png",revision:"74f9b10983fb84e243da398e1e2dfa99"},{url:"/icon-384x384.png",revision:"93f0f7779b528fb46704af9ec1acd6b1"},{url:"/icon-512x512.png",revision:"f637a20492971a62d77751ab26572bbc"},{url:"/logoBBD-50x39.svg",revision:"fd422a8a75ac84cdaf29157b5ba37e85"},{url:"/logoipsum-logo-35.svg",revision:"444904716738d639c2b9775cf95be77f"},{url:"/manifest.json",revision:"4450c108cec1973f11b529d7f6f58336"},{url:"/pattern.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
