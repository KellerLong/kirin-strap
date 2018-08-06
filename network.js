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
eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// import fetch from 'dva/fetch';\nvar OPTION_DEFAULT = {\n    url: '/',\n    timeout: 0,\n    type: 'GET',\n    sendData: {},\n    header: {\n        'Content-Type': 'text/html;charset=utf-8'\n    }\n};\nvar Network = /** @class */ (function () {\n    function Network() {\n    }\n    // 发起请求\n    Network.prototype.request = function (option) {\n        if (option === void 0) { option = OPTION_DEFAULT; }\n        return __awaiter(this, void 0, void 0, function () {\n            var method, fetchOption;\n            return __generator(this, function (_a) {\n                method = option.type.toUpperCase();\n                fetchOption = { method: method };\n                // 请求前\n                if (!this.onNetworkRequestBefore(option, this.onNetworkRequestAppBefore)) {\n                    return [2 /*return*/, false];\n                }\n                console.log('start request');\n                return [2 /*return*/];\n            });\n        });\n    };\n    Network.prototype.onNetworkRequestBefore = function (option, next) { return next(); };\n    Network.prototype.onNetworkRequestAppBefore = function (option) {\n        console.log('app start for network');\n        return true;\n    };\n    ;\n    Network.prototype.getNetworkConfig = function (option) {\n        if (option === void 0) { option = OPTION_DEFAULT; }\n    };\n    // 请求方式\n    Network.post = function (url) {\n        return function (a, b) {\n            console.log('-----post');\n        };\n    };\n    Network.put = function (url, sendData, network) { };\n    Network.get = function (url, sendData, network) { };\n    Network.delete = function (url, sendData, network) { };\n    Network.head = function (url, sendData, network) { };\n    return Network;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Network);\n\n\n//# sourceURL=webpack:///./src/network/Network.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Define\", function() { return Define; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Service\", function() { return Service; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Get\", function() { return Get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Put\", function() { return Put; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Delete\", function() { return Delete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony import */ var _Define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Define */ \"./src/network/Define.ts\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ \"./src/network/Service.ts\");\n/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Network */ \"./src/network/Network.ts\");\nvar _this = undefined;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar Define = _Define__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar Service = _Service__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar Get = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get;\nvar Post = function (url) {\n    return function (service, name) {\n        service[\"__\" + name + \"__\"] = function (sendData) {\n            console.log('111111');\n            _this.request();\n        };\n    };\n};\nvar Put = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put;\nvar Delete = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete;\nvar Head = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].head;\n\n\n//# sourceURL=webpack:///./src/network/index.ts?");

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