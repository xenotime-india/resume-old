if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-7640c2d5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/resume/_next/static/chunks/466-2a40ace3e30fcbe759b5.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/946-27a7f45ae3c80e96ee95.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/cb1608f2-5c27abc6677b98dc361e.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/main-d66ac585a6a8d50791fd.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/pages/_app-627d180bcd09a97d9251.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/pages/index-fe58a22688f42ec3a685.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/pages/pdf-931cad11c631796a5d0f.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/polyfills-6198bdb39fe83c470908.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/chunks/webpack-377d9957422d331503bc.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/css/7498a229d30e5e5a06ea.css",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/css/7876ec57b06600d3ba85.css",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/css/bd33338cd255a054b98c.css",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/smT_ciQc_52yFmjjotnL_/_buildManifest.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/_next/static/smT_ciQc_52yFmjjotnL_/_ssgManifest.js",revision:"smT_ciQc_52yFmjjotnL_"},{url:"/resume/favicon.ico",revision:"e29fd1e5812d597a72ab00d06687940c"},{url:"/resume/img/icons/favicon-192.png",revision:"dd22c4bd79767b6c8b9a1e63bb839543"},{url:"/resume/img/icons/favicon-512.png",revision:"f10d159308be0b1aa3069a44380180a9"},{url:"/resume/manifest.json",revision:"85e651b4f43978554ef9021700436ab9"},{url:"/resume/robots.txt",revision:"32941d64268ae57b00cb4e1633c4c564"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/resume",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));
