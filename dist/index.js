/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 254:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 561:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 849:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 286:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ 411:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 742:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 492:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 477:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ 41:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 261:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 628:
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ 267:
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nccwpck_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__nccwpck_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__nccwpck_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__nccwpck_require__.f).reduce((promises, key) => {
/******/ 				__nccwpck_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__nccwpck_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nccwpck_require__.o(moreModules, moduleId)) {
/******/ 					__nccwpck_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__nccwpck_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__nccwpck_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __nccwpck_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const component = process.env.INPUT_COMPONENT;
const versionname = process.env.INPUT_VERSIONNAME;
const description = process.env.INPUT_DESCRIPTION;
const type = process.env.INPUT_TYPE;

const hostname = process.env.INPUT_HOSTNAME;
const username = process.env.INPUT_USERNAME;
const password = process.env.INPUT_PASSWORD;
const disableSSLVerification = process.env.INPUT_DISABLESSLVERIFICATION === 'true';
const port = process.env.INPUT_PORT;
const https = __nccwpck_require__(687);

__nccwpck_require__.e(/* import() */ 589).then(__nccwpck_require__.bind(__nccwpck_require__, 589))
  .then((module) => {
    const fetch = module.default;
    const apiUrl = 'https://' + hostname + ':' + port + '/cli/version/request?component=' + component + '&name=' + versionname;

    console.log("Triggering creation of new UCD component version with " + apiUrl);

    const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');


    const httpsAgent = new https.Agent({
      rejectUnauthorized: disableSSLVerification === 'true'
    });

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader // Include the basic authentication header
      },
      agent: httpsAgent
    })
      .then(response => response.json())
      .then(result => {
        console.log('API response:', result);
        versionId = result.id;
        console.log('Component Version ID:', versionId);
      })
      .catch(error => {
        console.error('Unable to create component version in UCD : ', error);
        throw new Error("Terminating!! ");
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });





})();

module.exports = __webpack_exports__;
/******/ })()
;
