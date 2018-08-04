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

/***/ "./src/model/Effect.ts":
/*!*****************************!*\
  !*** ./src/model/Effect.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/model/util.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"createNote\"])('effects'));\n\n\n//# sourceURL=webpack:///./src/model/Effect.ts?");

/***/ }),

/***/ "./src/model/Model.ts":
/*!****************************!*\
  !*** ./src/model/Model.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (obj) {\n    var object = new obj();\n    var newObj = __assign({}, object, { namespace: obj.name, state: object.state || {}, reducers: object.reducers || {}, effects: object.effects || {}, subscriptions: object.subscription || {} });\n    // 将名字给 state 传递给 调用\n    var prototypeArray = [];\n    for (var key in newObj.reducers) {\n        prototypeArray.push(key);\n    }\n    for (var key in newObj.effects) {\n        prototypeArray.push(key);\n    }\n    newObj.state = __assign({}, newObj.state, { __prototypeList__: prototypeArray.join(',') });\n    return newObj;\n});\n\n\n//# sourceURL=webpack:///./src/model/Model.ts?");

/***/ }),

/***/ "./src/model/Reducer.ts":
/*!******************************!*\
  !*** ./src/model/Reducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/model/util.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"createNote\"])('reducers'));\n\n\n//# sourceURL=webpack:///./src/model/Reducer.ts?");

/***/ }),

/***/ "./src/model/State.ts":
/*!****************************!*\
  !*** ./src/model/State.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initData) {\n    return function (object, key) {\n        var _a;\n        var initState = initData || null;\n        if (typeof initData === 'function') {\n            initState = new initData();\n        }\n        object.state = __assign({}, object.state || {}, (_a = {}, _a[key] = initState || null, _a));\n        // if (options.set) {\n        //   // 新增设置该属性的 reducers\n        //   const setFun: any  = (state: any, action: any) => {\n        //     state[key] = action.payload;\n        //     return { ...state };\n        //   };\n        //   const name: string = key.replace(/\\b(\\w)/g, (val: string) => val.toUpperCase());\n        //   object.reducers = { ...object.reducers || {}, [`set${name}`]: setFun };\n        // }\n    };\n});\n\n\n//# sourceURL=webpack:///./src/model/State.ts?");

/***/ }),

/***/ "./src/model/Subscription.ts":
/*!***********************************!*\
  !*** ./src/model/Subscription.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/model/util.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"createNote\"])('subscriptions'));\n\n\n//# sourceURL=webpack:///./src/model/Subscription.ts?");

/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/*! exports provided: Effect, Model, Reducer, State, Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Effect\", function() { return Effect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reducer\", function() { return Reducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Subscription\", function() { return Subscription; });\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect */ \"./src/model/Effect.ts\");\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ \"./src/model/Model.ts\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducer */ \"./src/model/Reducer.ts\");\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ \"./src/model/State.ts\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ \"./src/model/Subscription.ts\");\n\n\n\n\n\nvar Effect = _Effect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar Model = _Model__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar Reducer = _Reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar State = _State__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nvar Subscription = _Subscription__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n\n//# sourceURL=webpack:///./src/model/index.ts?");

/***/ }),

/***/ "./src/model/util.ts":
/*!***************************!*\
  !*** ./src/model/util.ts ***!
  \***************************/
/*! exports provided: createNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNote\", function() { return createNote; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nvar createNote = function (type) {\n    return function (object, key, content) {\n        var _a;\n        object[type] = __assign({}, object[type], (_a = {}, _a[key] = content.value, _a));\n    };\n};\n\n\n//# sourceURL=webpack:///./src/model/util.ts?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/model/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/model/index.ts */\"./src/model/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/model/index.ts?");

/***/ })

/******/ });