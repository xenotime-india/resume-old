if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-7640c2d5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/resume/_next/static/chunks/466-2a40ace3e30fcbe759b5.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/800-524d6674be7a2e071b6e.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/cb1608f2-31767bd8558f8d8842e5.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/main-d66ac585a6a8d50791fd.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/pages/_app-fde826cf78b6729a6178.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/pages/index-457064cc88534ab16ba1.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/pages/pdf-821c284a20d84c7a8339.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/polyfills-6198bdb39fe83c470908.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/chunks/webpack-377d9957422d331503bc.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/css/6053538ffb5b38be75bb.css",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/css/b15fa6a1afcf11f4c579.css",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/css/eb230c302dc5c91bb1f4.css",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/x_P3xdYVa9w0x_I0wZ_nT/_buildManifest.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/_next/static/x_P3xdYVa9w0x_I0wZ_nT/_ssgManifest.js",revision:"x_P3xdYVa9w0x_I0wZ_nT"},{url:"/resume/favicon.ico",revision:"e29fd1e5812d597a72ab00d06687940c"},{url:"/resume/img/icons/favicon-192.png",revision:"dd22c4bd79767b6c8b9a1e63bb839543"},{url:"/resume/img/icons/favicon-512.png",revision:"f10d159308be0b1aa3069a44380180a9"},{url:"/resume/manifest.json",revision:"85e651b4f43978554ef9021700436ab9"},{url:"/resume/robots.txt",revision:"32941d64268ae57b00cb4e1633c4c564"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/resume",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));
