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
/*!********************************!*\
  !*** multi ./src/log/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/log/index.ts */\"./src/log/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/log/index.ts?");

/***/ })

/******/ });