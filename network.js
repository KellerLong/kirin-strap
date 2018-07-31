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
eval("__webpack_require__.r(__webpack_exports__);\nvar Network = /** @class */ (function () {\n    function Network() {\n    }\n    Network.prototype.getNetworkConfig = function (configName) {\n    };\n    // 请求方式\n    Network.post = function (url, sendData, network) { };\n    Network.put = function (url, sendData, network) { };\n    Network.get = function (url, sendData, network) { };\n    Network.delete = function (url, sendData, network) { };\n    Network.head = function (url, sendData, network) { };\n    return Network;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Network);\n\n\n//# sourceURL=webpack:///./src/network/Network.ts?");

/***/ }),

/***/ "./src/network/Service.ts":
/*!********************************!*\
  !*** ./src/network/Service.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { });\n\n\n//# sourceURL=webpack:///./src/network/Service.ts?");

/***/ }),

/***/ "./src/network/index.ts":
/*!******************************!*\
  !*** ./src/network/index.ts ***!
  \******************************/
/*! exports provided: default, Define, Service, Get, Post, Put, Delete, Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Define\", function() { return Define; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Service\", function() { return Service; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Get\", function() { return Get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Put\", function() { return Put; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Delete\", function() { return Delete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony import */ var _Define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Define */ \"./src/network/Define.ts\");\n/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service */ \"./src/network/Service.ts\");\n/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Network */ \"./src/network/Network.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar Define = _Define__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar Service = _Service__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar Get = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get;\nvar Post = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post;\nvar Put = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put;\nvar Delete = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete;\nvar Head = _Network__WEBPACK_IMPORTED_MODULE_2__[\"default\"].head;\n\n\n//# sourceURL=webpack:///./src/network/index.ts?");

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