module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dva/fetch.js":
/*!***********************************!*\
  !*** ./node_modules/dva/fetch.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nmodule.exports = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\n\n//# sourceURL=webpack:///./node_modules/dva/fetch.js?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// the whatwg-fetch polyfill installs the fetch() function\n// on the global object (window or self)\n//\n// Return that as the export for use in Webpack, Browserify etc.\n__webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = self.fetch.bind(self);\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-fetch/fetch-npm-browserify.js?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(self) {\n  'use strict';\n\n  if (self.fetch) {\n    return\n  }\n\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob: 'FileReader' in self && 'Blob' in self && (function() {\n      try {\n        new Blob()\n        return true\n      } catch(e) {\n        return false\n      }\n    })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ]\n\n    var isDataView = function(obj) {\n      return obj && DataView.prototype.isPrototypeOf(obj)\n    }\n\n    var isArrayBufferView = ArrayBuffer.isView || function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name)\n    }\n    if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value)\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift()\n        return {done: value === undefined, value: value}\n      }\n    }\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      }\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {}\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value)\n      }, this)\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1])\n      }, this)\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name])\n      }, this)\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name)\n    value = normalizeValue(value)\n    var oldValue = this.map[name]\n    this.map[name] = oldValue ? oldValue+','+value : value\n  }\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)]\n  }\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name)\n    return this.has(name) ? this.map[name] : null\n  }\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  }\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value)\n  }\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this)\n      }\n    }\n  }\n\n  Headers.prototype.keys = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push(name) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.values = function() {\n    var items = []\n    this.forEach(function(value) { items.push(value) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.entries = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push([name, value]) })\n    return iteratorFor(items)\n  }\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result)\n      }\n      reader.onerror = function() {\n        reject(reader.error)\n      }\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsArrayBuffer(blob)\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsText(blob)\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf)\n    var chars = new Array(view.length)\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i])\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength)\n      view.set(new Uint8Array(buf))\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false\n\n    this._initBody = function(body) {\n      this._bodyInit = body\n      if (!body) {\n        this._bodyText = ''\n      } else if (typeof body === 'string') {\n        this._bodyText = body\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString()\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer)\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer])\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body)\n      } else {\n        throw new Error('unsupported BodyInit type')\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8')\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type)\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n        }\n      }\n    }\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this)\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      }\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      }\n    }\n\n    this.text = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    }\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      }\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    }\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase()\n    return (methods.indexOf(upcased) > -1) ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {}\n    var body = options.body\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url\n      this.credentials = input.credentials\n      if (!options.headers) {\n        this.headers = new Headers(input.headers)\n      }\n      this.method = input.method\n      this.mode = input.mode\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit\n        input.bodyUsed = true\n      }\n    } else {\n      this.url = String(input)\n    }\n\n    this.credentials = options.credentials || this.credentials || 'omit'\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers)\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET')\n    this.mode = options.mode || this.mode || null\n    this.referrer = null\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body)\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, { body: this._bodyInit })\n  }\n\n  function decode(body) {\n    var form = new FormData()\n    body.trim().split('&').forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers()\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        headers.append(key, value)\n      }\n    })\n    return headers\n  }\n\n  Body.call(Request.prototype)\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {}\n    }\n\n    this.type = 'default'\n    this.status = options.status === undefined ? 200 : options.status\n    this.ok = this.status >= 200 && this.status < 300\n    this.statusText = 'statusText' in options ? options.statusText : 'OK'\n    this.headers = new Headers(options.headers)\n    this.url = options.url || ''\n    this._initBody(bodyInit)\n  }\n\n  Body.call(Response.prototype)\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  }\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''})\n    response.type = 'error'\n    return response\n  }\n\n  var redirectStatuses = [301, 302, 303, 307, 308]\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  }\n\n  self.Headers = Headers\n  self.Request = Request\n  self.Response = Response\n\n  self.fetch = function(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init)\n      var xhr = new XMLHttpRequest()\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        }\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n        var body = 'response' in xhr ? xhr.response : xhr.responseText\n        resolve(new Response(body, options))\n      }\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.open(request.method, request.url, true)\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob'\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n    })\n  }\n  self.fetch.polyfill = true\n})(typeof self !== 'undefined' ? self : this);\n\n\n//# sourceURL=webpack:///./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "./src/log/Log.ts":
/*!************************!*\
  !*** ./src/log/Log.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typing/LogTyping */ \"./src/typing/LogTyping.ts\");\n\nvar OUT_FORMAT = '{time} {type} {content} xxx test {time}';\nvar Log = /** @class */ (function () {\n    function Log(level, format) {\n        if (level === void 0) { level = _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.INFO; }\n        if (format === void 0) { format = OUT_FORMAT; }\n        this.level = _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.INFO;\n        this.format = OUT_FORMAT;\n        this.level = level;\n        this.format = format;\n    }\n    Log.prototype.getMessageFormat = function (type) {\n        // 提取内容位置\n        var outputStr = '';\n        var output = [];\n        // TODO: 日期格式化\n        outputStr = this.format.replace(/\\{time\\}/ig, '2018-10-30 21:11.332');\n        outputStr = outputStr.replace(/\\{type\\}/ig, \"[\" + type + \"]\");\n        outputStr = outputStr.replace(/\\{content\\}/ig, \"%c\");\n        //\n        // const strArray = outputStr.split('{content}');\n        //\n        // strArray.map( (item) => {\n        //   output.push(item);\n        //   output.push(msg);\n        // });\n        return outputStr;\n    };\n    Log.prototype.error = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        if (this.level > _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR) {\n            return false;\n        }\n        var message = this.getMessageFormat(_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level[_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR]);\n        console.error.apply(console, [message].concat(msg));\n    };\n    Log.prototype.info = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        if (this.level > _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.INFO) {\n            return false;\n        }\n        var message = this.getMessageFormat(_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level[_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR]);\n        console.info.apply(console, [message].concat(msg));\n    };\n    Log.prototype.fatal = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        if (this.level > _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.FATAL) {\n            return false;\n        }\n        var message = this.getMessageFormat(_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level[_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR]);\n        console.log.apply(console, [message].concat(msg));\n    };\n    Log.prototype.warn = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        if (this.level > _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.WARN) {\n            return false;\n        }\n        var message = this.getMessageFormat(_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level[_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR]);\n        console.warn.apply(console, [message].concat(msg));\n    };\n    Log.prototype.debug = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        if (this.level > _typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.DEBUG) {\n            return false;\n        }\n        var message = this.getMessageFormat(_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level[_typing_LogTyping__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Level.ERROR]);\n        console.debug.apply(console, [message].concat(msg));\n    };\n    return Log;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Log);\n\n\n//# sourceURL=webpack:///./src/log/Log.ts?");

/***/ }),

/***/ "./src/log/index.ts":
/*!**************************!*\
  !*** ./src/log/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ \"./src/log/Log.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _Log__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n\n\n//# sourceURL=webpack:///./src/log/index.ts?");

/***/ }),

/***/ "./src/network/Define.ts":
/*!*******************************!*\
  !*** ./src/network/Define.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { });\n\n\n//# sourceURL=webpack:///./src/network/Define.ts?");

/***/ }),

/***/ "./src/network/Network.ts":
/*!********************************!*\
  !*** ./src/network/Network.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dva/fetch */ \"./node_modules/dva/fetch.js\");\n/* harmony import */ var dva_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dva_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log */ \"./src/log/index.ts\");\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar OPTION_DEFAULT = {\n    url: '/',\n    timeout: 0,\n    type: 'GET',\n    sendData: {},\n    header: {\n        'Content-Type': 'text/html;charset=utf-8'\n    }\n};\nvar Network = /** @class */ (function () {\n    function Network() {\n        // 请求方式\n        this.post = this.requestQuick('POST');\n        this.put = this.requestQuick('PUT');\n        this.get = this.requestQuick('GET');\n        this.delete = this.requestQuick('DELETE');\n        this.head = this.requestQuick('HEAD');\n    }\n    // 发起请求\n    Network.prototype.request = function (option) {\n        if (option === void 0) { option = OPTION_DEFAULT; }\n        return __awaiter(this, void 0, void 0, function () {\n            var method, fetchOption, req, e_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        method = option.type.toUpperCase();\n                        fetchOption = { method: method };\n                        // 请求前\n                        if (!this.onNetworkRequestBefore(option, this.onNetworkRequestAppBefore)) {\n                            return [2 /*return*/, false];\n                        }\n                        console.log('start request');\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, dva_fetch__WEBPACK_IMPORTED_MODULE_0___default()(option.url, fetchOption)];\n                    case 2:\n                        req = _a.sent();\n                        // 响应后\n                        return [2 /*return*/, this.onNetworkResponseAfter(option, req, this.onNetworkResponseAppAfter)];\n                    case 3:\n                        e_1 = _a.sent();\n                        this.onNetworkError(option, e_1, this.onNetworkAppError);\n                        // TODO 等薛晨阳的日志模块\n                        _log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].debug('the are debug', { a: 'test' });\n                        _log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fatal('the are debug', { a: 'test' });\n                        _log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info('the are debug', { a: 'test' });\n                        _log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].warn('the are debug', { a: 'test' });\n                        _log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"fetch error:\" + e_1.message, e_1);\n                        // console.error(`fetch error:${e.message}`, e);\n                        throw e_1;\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    // 网络请求前\n    Network.prototype.onNetworkRequestBefore = function (option, next) { return next(); };\n    Network.prototype.onNetworkRequestAppBefore = function (option) { return true; };\n    // 网络请求发生错误\n    Network.prototype.onNetworkError = function (option, e, next) { };\n    Network.prototype.onNetworkAppError = function (option, e) { };\n    // 网络响应后\n    Network.prototype.onNetworkResponseAfter = function (option, req, next) { return next(); };\n    Network.prototype.onNetworkResponseAppAfter = function (option, req, next) { return next(); };\n    Network.prototype.requestQuick = function (type) {\n        var _this = this;\n        return function (url, sendData, option) {\n            if (url === void 0) { url = '/'; }\n            if (sendData === void 0) { sendData = {}; }\n            if (option === void 0) { option = OPTION_DEFAULT; }\n            return _this.request(__assign({}, OPTION_DEFAULT, option, { url: url, sendData: sendData, type: type }));\n        };\n    };\n    return Network;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Network);\n\n\n//# sourceURL=webpack:///./src/network/Network.ts?");

/***/ }),

/***/ "./src/network/Service.ts":
/*!********************************!*\
  !*** ./src/network/Service.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Service) {\n    for (var key in Service.prototype) {\n        if (Service.prototype[\"__\" + key + \"__\"]) {\n            Service.prototype[key] = Service.prototype[\"__\" + key + \"__\"];\n            delete Service.prototype[\"__\" + key + \"__\"];\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/network/Service.ts?");

/***/ }),

/***/ "./src/network/index.ts":
/*!******************************!*\
  !*** ./src/network/index.ts ***!
  \******************************/
/*! exports provided: default, Define, Service, Get, Post, Put, Delete, Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Define\", function() { return Define; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Service\", function() { return Service; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Get\", function() { return Get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Put\", function() { return Put; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Delete\", function() { return Delete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony import */ var _Define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Define */ \"./src/network/Define.ts\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ \"./src/network/Service.ts\");\n/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Network */ \"./src/network/Network.ts\");\n\n\n\nvar request = function (type) { return function (url) {\n    return function (service, name) {\n        return service[\"__\" + name + \"__\"] = function (sendData) {\n            return this[type](url, sendData);\n        };\n    };\n}; };\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar Define = _Define__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar Service = _Service__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar Get = request('GET');\nvar Post = request('POST');\nvar Put = request('PUT');\nvar Delete = request('DELETE');\nvar Head = request('HEAD');\n\n\n//# sourceURL=webpack:///./src/network/index.ts?");

/***/ }),

/***/ "./src/typing/LogTyping.ts":
/*!*********************************!*\
  !*** ./src/typing/LogTyping.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar LogTyping;\n(function (LogTyping) {\n    var Level;\n    (function (Level) {\n        Level[Level[\"FATAL\"] = 0] = \"FATAL\";\n        Level[Level[\"ERROR\"] = 1] = \"ERROR\";\n        Level[Level[\"WARN\"] = 2] = \"WARN\";\n        Level[Level[\"INFO\"] = 3] = \"INFO\";\n        Level[Level[\"DEBUG\"] = 4] = \"DEBUG\";\n    })(Level = LogTyping.Level || (LogTyping.Level = {}));\n})(LogTyping || (LogTyping = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogTyping);\n\n\n//# sourceURL=webpack:///./src/typing/LogTyping.ts?");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/network/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/network/index.ts */\"./src/network/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/network/index.ts?");

/***/ })

/******/ });