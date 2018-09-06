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

/***/ "./mock sync \\.ts$":
/*!**************************************!*\
  !*** ./mock sync nonrecursive \.ts$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./HomeMock.ts\": \"./mock/HomeMock.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./mock sync \\\\.ts$\";\n\n//# sourceURL=webpack:///./mock_sync_nonrecursive_\\.ts$?");

/***/ }),

/***/ "./mock/HomeMock.ts":
/*!**************************!*\
  !*** ./mock/HomeMock.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kirin-strap/mock */ \"./node_modules/kirin-strap/mock.js\");\n/* harmony import */ var kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nvar HomeMock = /** @class */ (function () {\n    function HomeMock() {\n    }\n    HomeMock.prototype.login = function (res, req) {\n        // Mock 数据\n        return {\n            'sss': 'xx2312312'\n        };\n    };\n    HomeMock.prototype.login2 = function (res, req) {\n        // Mock 数据\n        return {\n            'title': 'Syntax Demo',\n        };\n    };\n    __decorate([\n        Object(kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0__[\"Post\"])(/account\\/login/)\n    ], HomeMock.prototype, \"login\", null);\n    __decorate([\n        Object(kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0__[\"Get\"])(/v1\\/login\\.do/)\n    ], HomeMock.prototype, \"login2\", null);\n    HomeMock = __decorate([\n        kirin_strap_mock__WEBPACK_IMPORTED_MODULE_0__[\"Mock\"]\n    ], HomeMock);\n    return HomeMock;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeMock);\n;\n\n\n//# sourceURL=webpack:///./mock/HomeMock.ts?");

/***/ }),

/***/ "./node_modules/kirin-strap/build/mock-entry.ts":
/*!******************************************************!*\
  !*** ./node_modules/kirin-strap/build/mock-entry.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar context = __webpack_require__(\"./mock sync \\\\.ts$\");\nvar mock = [];\ncontext.keys().map(function (path) {\n    mock = mock.concat([new (context(path).default)()]);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mock);\n\n\n//# sourceURL=webpack:///./node_modules/kirin-strap/build/mock-entry.ts?");

/***/ }),

/***/ "./node_modules/kirin-strap/mock.js":
/*!******************************************!*\
  !*** ./node_modules/kirin-strap/mock.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports =\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"./\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/mock/index.ts\":\n/*!***************************!*\\\n  !*** ./src/mock/index.ts ***!\n  \\***************************/\n/*! exports provided: Mock, Get, Post, Put, Delete, Head */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Mock\\\", function() { return Mock; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Get\\\", function() { return Get; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Post\\\", function() { return Post; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Put\\\", function() { return Put; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Delete\\\", function() { return Delete; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Head\\\", function() { return Head; });\\nvar request = function (type) { return function (urlExp) {\\n    return function (mock, name) {\\n        mock[\\\"__\\\" + name + \\\"__\\\"] = urlExp;\\n    };\\n}; };\\nvar Mock = function (Mock) { return Mock; };\\nvar Get = request('get');\\nvar Post = request('post');\\nvar Put = request('put');\\nvar Delete = request('delete');\\nvar Head = request('head');\\n\\n\\n//# sourceURL=webpack:///./src/mock/index.ts?\");\n\n/***/ }),\n\n/***/ 0:\n/*!*********************************!*\\\n  !*** multi ./src/mock/index.ts ***!\n  \\*********************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\neval(\"module.exports = __webpack_require__(/*! ./src/mock/index.ts */\\\"./src/mock/index.ts\\\");\\n\\n\\n//# sourceURL=webpack:///multi_./src/mock/index.ts?\");\n\n/***/ })\n\n/******/ });\n\n//# sourceURL=webpack:///./node_modules/kirin-strap/mock.js?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./node_modules/kirin-strap/build/mock-entry.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/kellerlong/project/kirin-template/demo/node_modules/kirin-strap/build/mock-entry.ts */\"./node_modules/kirin-strap/build/mock-entry.ts\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/kirin-strap/build/mock-entry.ts?");

/***/ })

/******/ });