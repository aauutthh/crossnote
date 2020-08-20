if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4f429bf5c953825aa45d691abe208cb9","url":"assets/manifest-icon-192.png"},{"revision":"e00af3595dde18bb08e737e4989ce141","url":"assets/manifest-icon-512.png"},{"revision":"a603db26591594692651f763e9f96be0","url":"deps/echarts-gl/echarts-gl.min.js"},{"revision":"96877f62ac512e6237be3ddcd61c0f9c","url":"deps/echarts/echarts.min.js"},{"revision":"655728740b80652ea50e659edb7d273c","url":"deps/marked/marked.min.js"},{"revision":"154feb66ec0f182d08bf30c76b6eb753","url":"deps/mermaid/mermaid.min.js"},{"revision":"2957bccff80a89590386430d08d0c3ce","url":"deps/plantuml-encoder/plantuml-encoder.min.js"},{"revision":"b55b886dbca1b8c934cba786de6fdcd4","url":"deps/prism/prism.css"},{"revision":"772731ba6545374bb5f259c29ff970f4","url":"deps/prism/prism.js"},{"revision":"72af3b883f97adca1ba9ab7b446f381b","url":"deps/vega-embed/vega-embed.min.js"},{"revision":"07186f4877cdd1075c9797cb54d26c71","url":"deps/vega-lite/vega-lite.min.js"},{"revision":"9df1daba283619a34c5625e0f456ba02","url":"deps/vega/vega.min.js"},{"revision":"498f6becfe4b4cd798f4e394559c9471","url":"deps/wavedrom/skins/default.js"},{"revision":"ceb32ac22d37f14433692ef3e1c83c57","url":"deps/wavedrom/wavedrom.min.js"},{"revision":"ea5de727cbca4b9176c8595a464ed6b5","url":"deps/yamljs/yaml.min.js"},{"revision":"a57327f375c46f7660314b9328886529","url":"index.html"},{"revision":"cffaa34e0894e46b4183fbda039f3a42","url":"logo.svg"},{"revision":"2e60df9f4a63707deae443598f745afc","url":"logo192.png"},{"revision":"21bd3603cdcc62f38f25a7c4ebed89f2","url":"logo512.png"},{"revision":"afe44c87aad234a741b84c00eabbaee8","url":"logo64.png"},{"revision":"c14b7204e13b1059da859acd53d324e7","url":"static/css/2.9456060e.chunk.css"},{"revision":"fdeb21e9c4534d20dccfa91a467c9ee6","url":"static/css/main.5b9df75b.chunk.css"},{"revision":"e106e9e889884492215fbe57e5271a70","url":"static/js/2.9fe38894.chunk.js"},{"revision":"fa0180453bdc8a9ddce517ca110bc635","url":"static/js/main.fd0c2705.chunk.js"},{"revision":"3c31cbb68559eb33697471c326be7c90","url":"static/js/runtime-main.6a2fbfda.js"},{"revision":"e78e28b4834954df047e4925e9dbf354","url":"static/media/KaTeX_AMS-Regular.e78e28b4.woff2"},{"revision":"4ec58befa687e9752c3c91cd9bcf1bcb","url":"static/media/KaTeX_Caligraphic-Bold.4ec58bef.woff2"},{"revision":"7edb53b6693d75b8a2232481eea1a52c","url":"static/media/KaTeX_Caligraphic-Regular.7edb53b6.woff2"},{"revision":"d5b59ec9764e10f4a82369ae29f3ac58","url":"static/media/KaTeX_Fraktur-Bold.d5b59ec9.woff2"},{"revision":"32a5339eb809f381a7357ba56f82aab3","url":"static/media/KaTeX_Fraktur-Regular.32a5339e.woff2"},{"revision":"8e1e01c4b1207c0a383d9a2b4f86e637","url":"static/media/KaTeX_Main-Bold.8e1e01c4.woff2"},{"revision":"284a17fe5baf72ff8217d4c7e70c0f82","url":"static/media/KaTeX_Main-BoldItalic.284a17fe.woff2"},{"revision":"e533d5a2506cf053cd671b335ec04dde","url":"static/media/KaTeX_Main-Italic.e533d5a2.woff2"},{"revision":"5c734d78610fa35282f3379f866707f2","url":"static/media/KaTeX_Main-Regular.5c734d78.woff2"},{"revision":"d747bd1e7a6a43864285edd73dcde253","url":"static/media/KaTeX_Math-BoldItalic.d747bd1e.woff2"},{"revision":"4ad08b826b8065e1eab85324d726538c","url":"static/media/KaTeX_Math-Italic.4ad08b82.woff2"},{"revision":"6e0830bee40435e72165345e0682fbfc","url":"static/media/KaTeX_SansSerif-Bold.6e0830be.woff2"},{"revision":"fba01c9c6fb2866a0f95bcacb2c187a5","url":"static/media/KaTeX_SansSerif-Italic.fba01c9c.woff2"},{"revision":"d929cd671b19f0cfea55b6200fb47461","url":"static/media/KaTeX_SansSerif-Regular.d929cd67.woff2"},{"revision":"755e2491f13b5269f0afd5a56f7aa692","url":"static/media/KaTeX_Script-Regular.755e2491.woff2"},{"revision":"048c39cba4dfb0460682a45e84548e4b","url":"static/media/KaTeX_Size1-Regular.048c39cb.woff2"},{"revision":"81d6b8d5ca77d63d5033d6991549a659","url":"static/media/KaTeX_Size2-Regular.81d6b8d5.woff2"},{"revision":"b311ca09df2c89a10fbb914b5a053805","url":"static/media/KaTeX_Size3-Regular.b311ca09.woff2"},{"revision":"6a3255dfc1ba41c46e7e807f8ab16c49","url":"static/media/KaTeX_Size4-Regular.6a3255df.woff2"},{"revision":"6cc31ea5c223c88705a13727a71417fa","url":"static/media/KaTeX_Typewriter-Regular.6cc31ea5.woff2"},{"revision":"a323c28ecd42189e70efca274f5b7089","url":"static/media/materialdesignicons-webfont.a323c28e.woff2"},{"revision":"6101e2798b6c8452a67418653e80c4d7","url":"static/media/noto-sans-sc-latin-100.6101e279.woff2"},{"revision":"4e6f8c63184559a58f70fe8c9bf9535f","url":"static/media/noto-sans-sc-latin-300.4e6f8c63.woff2"},{"revision":"08984ba2bd9e0fdc82f3f483343beb9d","url":"static/media/noto-sans-sc-latin-400.08984ba2.woff2"},{"revision":"5450270f8f868f30791463fc865d5b9d","url":"static/media/noto-sans-sc-latin-500.5450270f.woff2"},{"revision":"41abe1847e1bb99c843d42b0f3aeb542","url":"static/media/noto-sans-sc-latin-700.41abe184.woff2"},{"revision":"3b895d2c62ca1298c8551ab9949f56f5","url":"static/media/noto-sans-sc-latin-900.3b895d2c.woff2"},{"revision":"7370c3679472e9560965ff48a4399d0b","url":"static/media/roboto-latin-100.7370c367.woff2"},{"revision":"f8b1df51ba843179fa1cc9b53d58127a","url":"static/media/roboto-latin-100italic.f8b1df51.woff2"},{"revision":"ef7c6637c68f269a882e73bcb57a7f6a","url":"static/media/roboto-latin-300.ef7c6637.woff2"},{"revision":"14286f3ba79c6627433572dfa925202e","url":"static/media/roboto-latin-300italic.14286f3b.woff2"},{"revision":"479970ffb74f2117317f9d24d9e317fe","url":"static/media/roboto-latin-400.479970ff.woff2"},{"revision":"51521a2a8da71e50d871ac6fd2187e87","url":"static/media/roboto-latin-400italic.51521a2a.woff2"},{"revision":"020c97dc8e0463259c2f9df929bb0c69","url":"static/media/roboto-latin-500.020c97dc.woff2"},{"revision":"db4a2a231f52e497c0191e8966b0ee58","url":"static/media/roboto-latin-500italic.db4a2a23.woff2"},{"revision":"2735a3a69b509faf3577afd25bdf552e","url":"static/media/roboto-latin-700.2735a3a6.woff2"},{"revision":"da0e717829e033a69dec97f1e155ae42","url":"static/media/roboto-latin-700italic.da0e7178.woff2"},{"revision":"9b3766ef4a402ad3fdeef7501a456512","url":"static/media/roboto-latin-900.9b3766ef.woff2"},{"revision":"ebf6d1640ccddb99fb49f73c052c55a8","url":"static/media/roboto-latin-900italic.ebf6d164.woff2"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/vickymd@^0.2.4/common/color.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/vickymd@^0.2.4/common/constant.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/vickymd@^0.2.4/common/math.css"},{"revision":"7b05658abd1f9ab5449d93616542c609","url":"styles/vickymd@^0.2.4/editor_themes/dark.css"},{"revision":"fd12ea514a520525403e9b9be909efb6","url":"styles/vickymd@^0.2.4/editor_themes/light.css"},{"revision":"80ed6e9363a18cf7959fd7f269f9de58","url":"styles/vickymd@^0.2.4/editor_themes/one-dark.css"},{"revision":"b0134801114630a537cec5fe0d6b9284","url":"styles/vickymd@^0.2.4/editor_themes/solarized-light.css"},{"revision":"12e606bb79eeac273af437d4e2f4b066","url":"styles/vickymd@^0.2.4/index.js"},{"revision":"5c0cd29f557ea33c2a58e5ae59e7a852","url":"styles/vickymd@^0.2.4/preview_themes/github-dark.css"},{"revision":"d1c0a3c339e15ceb0b0dccbf61b60e8a","url":"styles/vickymd@^0.2.4/preview_themes/github-light.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/vickymd@^0.2.4/preview_themes/github.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"styles/vickymd@^0.2.4/preview_themes/math.css"},{"revision":"5d928de80518becc6e1dab1ef3093dd7","url":"styles/vickymd@^0.2.4/preview_themes/one-dark.css"},{"revision":"cb9b2df5f3fc477ef28b75e2ae08cfee","url":"styles/vickymd@^0.2.4/preview_themes/solarized-light.css"},{"revision":"b1aba04470f34c403092b5834dd9c605","url":"styles/vickymd@^0.2.4/prism_themes/github.css"},{"revision":"05a887fe7bd1ef42dfd82e67b116c847","url":"styles/vickymd@^0.2.4/prism_themes/monokai.css"},{"revision":"41dd6125efb6b516970f63d9a7e8bb10","url":"styles/vickymd@^0.2.4/prism_themes/one-dark.css"},{"revision":"3e19271e6e917500a0c0d3e7f379c6d1","url":"styles/vickymd@^0.2.4/prism_themes/solarized-light.css"}]);

    /* custom cache rules*/
    const handler = workbox.precaching.createHandlerBoundToURL("./index.html");
    const navigationRoute = new workbox.routing.NavigationRoute(handler, {
      denylist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp("^/_"),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp("/[^/?]+\\.[^/]+$"),
      ],
    });
    workbox.routing.registerRoute(navigationRoute);

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    );

    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
