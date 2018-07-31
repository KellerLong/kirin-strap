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

/***/ "./src/x-render/XRender.ts":
/*!*********************************!*\
  !*** ./src/x-render/XRender.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 编译入口\nvar XRender = /** @class */ (function () {\n    // 初始化\n    function XRender() {\n        // 初始化配置\n        // 初始路由\n        // 初始化 dva\n    }\n    // 路由跳转前 返回 true 继续跳转\n    XRender.prototype.onRouteBefore = function () {\n        return true;\n    };\n    // 路由跳转后\n    XRender.prototype.onRouteAfter = function () {\n    };\n    // 网络请求前\n    XRender.prototype.onNetWorkRequestBefore = function (url, sendData, network) {\n        return true;\n    };\n    // 网络请求后\n    XRender.prototype.onNetWorkRequestAfter = function (url, sendData, network) {\n        return true;\n    };\n    // 网络请求中发生变更\n    XRender.prototype.onNetWorkRequestChange = function (url, sendData, network) {\n        return true;\n    };\n    // 网络请求中发生错误\n    XRender.prototype.onNetWorkRequestError = function (url, sendData, network) {\n        return true;\n    };\n    // 全局 layout 路由之外 返回一个有 children 的 组件\n    XRender.prototype.returnLayout = function () {\n    };\n    return XRender;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (XRender);\n\n\n//# sourceURL=webpack:///./src/x-render/XRender.ts?");

/***/ }),

/***/ "./src/x-render/XRenderApplication.ts":
/*!********************************************!*\
  !*** ./src/x-render/XRenderApplication.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Application) { return new Application(); });\n\n\n//# sourceURL=webpack:///./src/x-render/XRenderApplication.ts?");

/***/ }),

/***/ "./src/x-render/index.ts":
/*!*******************************!*\
  !*** ./src/x-render/index.ts ***!
  \*******************************/
/*! exports provided: default, XRenderApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"XRenderApplication\", function() { return XRenderApplication; });\n/* harmony import */ var _XRenderApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XRenderApplication */ \"./src/x-render/XRenderApplication.ts\");\n/* harmony import */ var _XRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XRender */ \"./src/x-render/XRender.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_XRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar XRenderApplication = _XRenderApplication__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/x-render/index.ts?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/x-render/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/x-render/index.ts */\"./src/x-render/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/x-render/index.ts?");

/***/ })

/******/ });