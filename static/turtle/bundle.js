/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/introcs/turtle/style.css":
/*!***********************************************!*\
  !*** ./node_modules/introcs/turtle/style.css ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background: gray;\n}\n\ncanvas {\n    background: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/style.css?");

    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/
    /***/ ((module) => {
    
    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://compstagram/./node_modules/css-loader/dist/runtime/api.js?");
    
    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
    /*!**************************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
      \**************************************************************/
    /***/ ((module) => {
    
    eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://compstagram/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/Context.js":
    /*!************************************************!*\
      !*** ./node_modules/introcs/turtle/Context.js ***!
      \************************************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Context = (function () {\r\n    function Context(gfx, turtle, speed) {\r\n        this.gfx = gfx;\r\n        this.turtle = turtle;\r\n        this.speed = speed;\r\n    }\r\n    return Context;\r\n}());\r\nexports.Context = Context;\r\n//# sourceMappingURL=Context.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/Context.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/Turtle.js":
    /*!***********************************************!*\
      !*** ./node_modules/introcs/turtle/Turtle.js ***!
      \***********************************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Turtle = (function () {\r\n    function Turtle() {\r\n        this.speed = 1;\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.angle = 0;\r\n        this.strokeStyle = \"black\";\r\n    }\r\n    return Turtle;\r\n}());\r\nexports.Turtle = Turtle;\r\n//# sourceMappingURL=Turtle.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/Turtle.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/TurtleProvider.js":
    /*!*******************************************************!*\
      !*** ./node_modules/introcs/turtle/TurtleProvider.js ***!
      \*******************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DOMEnvironment_1 = __webpack_require__(/*! ./dom/DOMEnvironment */ \"./node_modules/introcs/turtle/dom/DOMEnvironment.js\");\r\nvar TurtleProvider = (function () {\r\n    function TurtleProvider() {\r\n    }\r\n    TurtleProvider.instance = function () {\r\n        if (!TurtleProvider._instance) {\r\n            TurtleProvider._instance = new DOMEnvironment_1.DOMEnvironment();\r\n        }\r\n        return TurtleProvider._instance;\r\n    };\r\n    return TurtleProvider;\r\n}());\r\nexports.TurtleProvider = TurtleProvider;\r\n//# sourceMappingURL=TurtleProvider.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/TurtleProvider.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/BackwardCommand.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/BackwardCommand.js ***!
      \*****************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar min = Math.min, cos = Math.cos, sin = Math.sin;\r\nvar BackwardCommand = (function (_super) {\r\n    __extends(BackwardCommand, _super);\r\n    function BackwardCommand(amount) {\r\n        var _this = _super.call(this) || this;\r\n        _this.amount = amount;\r\n        return _this;\r\n    }\r\n    BackwardCommand.prototype.execute = function (context, amount) {\r\n        context.gfx.beginPath();\r\n        var distance = min(amount, this.amount);\r\n        var direction = context.turtle.angle + Math.PI;\r\n        var dx = cos(direction) * distance;\r\n        var dy = sin(direction) * distance;\r\n        context.gfx.lineTo(context.turtle.x, context.turtle.y);\r\n        context.turtle.x += dx;\r\n        context.turtle.y += dy;\r\n        context.gfx.lineTo(context.turtle.x, context.turtle.y);\r\n        context.gfx.stroke();\r\n        this.amount -= distance;\r\n        if (this.amount <= 0) {\r\n            this.done = true;\r\n        }\r\n        return amount - distance;\r\n    };\r\n    return BackwardCommand;\r\n}(Command_1.Command));\r\nexports.BackwardCommand = BackwardCommand;\r\n//# sourceMappingURL=BackwardCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/BackwardCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/Command.js":
    /*!*********************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/Command.js ***!
      \*********************************************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command = (function () {\r\n    function Command() {\r\n        this.done = false;\r\n        this.next = null;\r\n    }\r\n    return Command;\r\n}());\r\nexports.Command = Command;\r\n//# sourceMappingURL=Command.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/Command.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/CommandQueue.js":
    /*!**************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/CommandQueue.js ***!
      \**************************************************************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar CommandQueue = (function () {\r\n    function CommandQueue() {\r\n        this.head = null;\r\n        this.tail = null;\r\n    }\r\n    CommandQueue.prototype.current = function () {\r\n        if (this.head) {\r\n            return this.head;\r\n        }\r\n        else {\r\n            throw new Error(\"The command queue is empty!\");\r\n        }\r\n    };\r\n    CommandQueue.prototype.enqueue = function (command) {\r\n        if (this.head === null) {\r\n            this.head = command;\r\n        }\r\n        if (this.tail !== null) {\r\n            this.tail.next = command;\r\n        }\r\n        this.tail = command;\r\n    };\r\n    CommandQueue.prototype.hasNext = function () {\r\n        return this.head !== null;\r\n    };\r\n    CommandQueue.prototype.isEmpty = function () {\r\n        return this.head === null;\r\n    };\r\n    CommandQueue.prototype.next = function () {\r\n        if (this.head !== null) {\r\n            var command = this.head;\r\n            this.head = this.head.next;\r\n            return command;\r\n        }\r\n        else {\r\n            throw new Error(\"The command queue is empty\");\r\n        }\r\n    };\r\n    return CommandQueue;\r\n}());\r\nexports.CommandQueue = CommandQueue;\r\n//# sourceMappingURL=CommandQueue.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/CommandQueue.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/ForwardCommand.js":
    /*!****************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/ForwardCommand.js ***!
      \****************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar min = Math.min, cos = Math.cos, sin = Math.sin;\r\nvar ForwardCommand = (function (_super) {\r\n    __extends(ForwardCommand, _super);\r\n    function ForwardCommand(amount) {\r\n        var _this = _super.call(this) || this;\r\n        _this.amount = amount;\r\n        return _this;\r\n    }\r\n    ForwardCommand.prototype.execute = function (context, amount) {\r\n        context.gfx.beginPath();\r\n        var distance = min(amount, this.amount);\r\n        var dx = cos(context.turtle.angle) * distance;\r\n        var dy = sin(context.turtle.angle) * distance;\r\n        context.gfx.lineTo(context.turtle.x, context.turtle.y);\r\n        context.turtle.x += dx;\r\n        context.turtle.y += dy;\r\n        context.gfx.lineTo(context.turtle.x, context.turtle.y);\r\n        context.gfx.stroke();\r\n        this.amount -= distance;\r\n        if (this.amount <= 0) {\r\n            this.done = true;\r\n        }\r\n        return amount - distance;\r\n    };\r\n    return ForwardCommand;\r\n}(Command_1.Command));\r\nexports.ForwardCommand = ForwardCommand;\r\n//# sourceMappingURL=ForwardCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/ForwardCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/MoveToCommand.js":
    /*!***************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/MoveToCommand.js ***!
      \***************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar MoveToCommand = (function (_super) {\r\n    __extends(MoveToCommand, _super);\r\n    function MoveToCommand(x, y) {\r\n        var _this = _super.call(this) || this;\r\n        _this.x = x;\r\n        _this.y = y;\r\n        return _this;\r\n    }\r\n    MoveToCommand.prototype.execute = function (context, amount) {\r\n        context.gfx.moveTo(this.x, this.y);\r\n        context.turtle.x = this.x;\r\n        context.turtle.y = this.y;\r\n        this.done = true;\r\n        return amount;\r\n    };\r\n    return MoveToCommand;\r\n}(Command_1.Command));\r\nexports.MoveToCommand = MoveToCommand;\r\n//# sourceMappingURL=MoveToCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/MoveToCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/SpeedCommand.js":
    /*!**************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/SpeedCommand.js ***!
      \**************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar SpeedCommand = (function (_super) {\r\n    __extends(SpeedCommand, _super);\r\n    function SpeedCommand(speed) {\r\n        var _this = _super.call(this) || this;\r\n        _this.speed = speed;\r\n        return _this;\r\n    }\r\n    SpeedCommand.prototype.execute = function (context, amount) {\r\n        context.turtle.speed = this.speed;\r\n        this.done = true;\r\n        return amount;\r\n    };\r\n    return SpeedCommand;\r\n}(Command_1.Command));\r\nexports.SpeedCommand = SpeedCommand;\r\n//# sourceMappingURL=SpeedCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/SpeedCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/StrokeCommand.js":
    /*!***************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/StrokeCommand.js ***!
      \***************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar StrokeCommand = (function (_super) {\r\n    __extends(StrokeCommand, _super);\r\n    function StrokeCommand(stroke) {\r\n        var _this = _super.call(this) || this;\r\n        _this.stroke = stroke;\r\n        return _this;\r\n    }\r\n    StrokeCommand.prototype.execute = function (context, amount) {\r\n        context.gfx.strokeStyle = this.stroke;\r\n        context.turtle.strokeStyle = this.stroke;\r\n        this.done = true;\r\n        return amount - 1;\r\n    };\r\n    return StrokeCommand;\r\n}(Command_1.Command));\r\nexports.StrokeCommand = StrokeCommand;\r\n//# sourceMappingURL=StrokeCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/StrokeCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/TurnCommand.js":
    /*!*************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/TurnCommand.js ***!
      \*************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar abs = Math.abs, min = Math.min;\r\nvar TurnCommand = (function (_super) {\r\n    __extends(TurnCommand, _super);\r\n    function TurnCommand(amount) {\r\n        var _this = _super.call(this) || this;\r\n        _this.amount = amount;\r\n        return _this;\r\n    }\r\n    TurnCommand.prototype.execute = function (context, amount) {\r\n        var sign = this.amount / abs(this.amount);\r\n        var dr = min(this.amount * sign, amount);\r\n        if (sign < 0) {\r\n            context.turtle.angle += dr;\r\n            this.amount += dr;\r\n            if (this.amount >= 0) {\r\n                this.done = true;\r\n            }\r\n        }\r\n        else {\r\n            context.turtle.angle -= dr;\r\n            this.amount -= dr;\r\n            if (this.amount <= 0) {\r\n                this.done = true;\r\n            }\r\n        }\r\n        return amount - dr;\r\n    };\r\n    return TurnCommand;\r\n}(Command_1.Command));\r\nexports.TurnCommand = TurnCommand;\r\n//# sourceMappingURL=TurnCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/TurnCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/commands/TurnToCommand.js":
    /*!***************************************************************!*\
      !*** ./node_modules/introcs/turtle/commands/TurnToCommand.js ***!
      \***************************************************************/
    /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
    
    eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Command_1 = __webpack_require__(/*! ./Command */ \"./node_modules/introcs/turtle/commands/Command.js\");\r\nvar TurnToCommand = (function (_super) {\r\n    __extends(TurnToCommand, _super);\r\n    function TurnToCommand(angle) {\r\n        var _this = _super.call(this) || this;\r\n        _this.angle = angle;\r\n        return _this;\r\n    }\r\n    TurnToCommand.prototype.execute = function (context, amount) {\r\n        context.turtle.angle = this.angle;\r\n        this.done = true;\r\n        return amount;\r\n    };\r\n    return TurnToCommand;\r\n}(Command_1.Command));\r\nexports.TurnToCommand = TurnToCommand;\r\n//# sourceMappingURL=TurnToCommand.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/commands/TurnToCommand.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/dom/DOMEnvironment.js":
    /*!***********************************************************!*\
      !*** ./node_modules/introcs/turtle/dom/DOMEnvironment.js ***!
      \***********************************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar CommandQueue_1 = __webpack_require__(/*! ../commands/CommandQueue */ \"./node_modules/introcs/turtle/commands/CommandQueue.js\");\r\nvar Context_1 = __webpack_require__(/*! ../Context */ \"./node_modules/introcs/turtle/Context.js\");\r\nvar Turtle_1 = __webpack_require__(/*! ../Turtle */ \"./node_modules/introcs/turtle/Turtle.js\");\r\nvar MoveToCommand_1 = __webpack_require__(/*! ../commands/MoveToCommand */ \"./node_modules/introcs/turtle/commands/MoveToCommand.js\");\r\nvar DOMEnvironment = (function () {\r\n    function DOMEnvironment() {\r\n        var _this = this;\r\n        this.commands = new CommandQueue_1.CommandQueue();\r\n        this._renderRequested = false;\r\n        this._activelyRendering = false;\r\n        this._el = document.createElement(\"canvas\");\r\n        document.getElementsByTagName(\"body\")[0].appendChild(this._el);\r\n        this._el.width = window.innerWidth;\r\n        this._el.height = window.innerHeight;\r\n        this._el.onclick = function (e) { return _this._onclick ? _this._onclick(e.offsetX, e.offsetY) : null; };\r\n        this._gfx = this._el.getContext(\"2d\");\r\n        this._ctx = new Context_1.Context(this._gfx, this.initTurtle(), 1);\r\n        this.initGfx(this._gfx);\r\n        this.emit(new MoveToCommand_1.MoveToCommand(this._el.width / 2, this._el.height / 2));\r\n    }\r\n    DOMEnvironment.prototype.emit = function (command) {\r\n        this.commands.enqueue(command);\r\n        this.requestRender();\r\n    };\r\n    DOMEnvironment.prototype.setOnClick = function (handler) {\r\n        this._onclick = handler;\r\n    };\r\n    DOMEnvironment.prototype.render = function (timestamp) {\r\n        this._renderRequested = false;\r\n        if (!this._activelyRendering) {\r\n            this._activelyRendering = true;\r\n            this._lastRenderedAt = timestamp;\r\n        }\r\n        var timeSlice = (timestamp - this._lastRenderedAt) * this._ctx.turtle.speed;\r\n        this._lastRenderedAt = timestamp;\r\n        while (timeSlice > 0 && this.commands.hasNext()) {\r\n            timeSlice = this.commands.current().execute(this._ctx, timeSlice);\r\n            if (this.commands.current().done) {\r\n                this.commands.next();\r\n            }\r\n        }\r\n        if (!this.commands.isEmpty()) {\r\n            this.requestRender();\r\n        }\r\n        else {\r\n            this._activelyRendering = false;\r\n        }\r\n    };\r\n    DOMEnvironment.prototype.initGfx = function (gfx) {\r\n        gfx.fillStyle = \"black\";\r\n        gfx.strokeStyle = \"black\";\r\n    };\r\n    DOMEnvironment.prototype.initTurtle = function () {\r\n        return new Turtle_1.Turtle();\r\n    };\r\n    DOMEnvironment.prototype.requestRender = function () {\r\n        var _this = this;\r\n        if (!this._renderRequested) {\r\n            this._renderRequested = true;\r\n            requestAnimationFrame(function (timestamp) { return _this.render(timestamp); });\r\n        }\r\n    };\r\n    return DOMEnvironment;\r\n}());\r\nexports.DOMEnvironment = DOMEnvironment;\r\n//# sourceMappingURL=DOMEnvironment.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/dom/DOMEnvironment.js?");
    
    /***/ }),
    
    /***/ "./node_modules/introcs/turtle/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/introcs/turtle/index.js ***!
      \**********************************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./style.css */ \"./node_modules/introcs/turtle/style.css\");\r\nvar TurtleProvider_1 = __webpack_require__(/*! ./TurtleProvider */ \"./node_modules/introcs/turtle/TurtleProvider.js\");\r\nvar ForwardCommand_1 = __webpack_require__(/*! ./commands/ForwardCommand */ \"./node_modules/introcs/turtle/commands/ForwardCommand.js\");\r\nvar TurnCommand_1 = __webpack_require__(/*! ./commands/TurnCommand */ \"./node_modules/introcs/turtle/commands/TurnCommand.js\");\r\nvar MoveToCommand_1 = __webpack_require__(/*! ./commands/MoveToCommand */ \"./node_modules/introcs/turtle/commands/MoveToCommand.js\");\r\nvar TurnToCommand_1 = __webpack_require__(/*! ./commands/TurnToCommand */ \"./node_modules/introcs/turtle/commands/TurnToCommand.js\");\r\nvar SpeedCommand_1 = __webpack_require__(/*! ./commands/SpeedCommand */ \"./node_modules/introcs/turtle/commands/SpeedCommand.js\");\r\nvar BackwardCommand_1 = __webpack_require__(/*! ./commands/BackwardCommand */ \"./node_modules/introcs/turtle/commands/BackwardCommand.js\");\r\nvar StrokeCommand_1 = __webpack_require__(/*! ./commands/StrokeCommand */ \"./node_modules/introcs/turtle/commands/StrokeCommand.js\");\r\nexports.forward = function (amount) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new ForwardCommand_1.ForwardCommand(amount));\r\n};\r\nexports.backward = function (amount) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new BackwardCommand_1.BackwardCommand(amount));\r\n};\r\nexports.left = function (angle) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new TurnCommand_1.TurnCommand(angle));\r\n};\r\nexports.right = function (angle) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new TurnCommand_1.TurnCommand(-angle));\r\n};\r\nexports.moveTo = function (x, y) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new MoveToCommand_1.MoveToCommand(x, y));\r\n};\r\nexports.turnTo = function (angle) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new TurnToCommand_1.TurnToCommand(angle));\r\n};\r\nexports.setStroke = function (stroke) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new StrokeCommand_1.StrokeCommand(stroke));\r\n};\r\nexports.setSpeed = function (speed) {\r\n    TurtleProvider_1.TurtleProvider.instance().emit(new SpeedCommand_1.SpeedCommand(speed));\r\n};\r\nexports.setOnClick = function (handler) {\r\n    TurtleProvider_1.TurtleProvider.instance().setOnClick(handler);\r\n};\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://compstagram/./node_modules/introcs/turtle/index.js?");
    
    /***/ }),
    
    /***/ "./src/bridge.ts":
    /*!***********************!*\
      !*** ./src/bridge.ts ***!
      \***********************/
    /***/ ((__unused_webpack_module, exports) => {
    
    eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.executeCode = void 0;\nconst messageQueue = [];\nlet readyToSend = false;\nfunction waitForReady(event) {\n    if (event.data.source !== \"gui-template-parent\" || event.data.payload !== \"ready\")\n        return;\n    window.removeEventListener(\"message\", waitForReady);\n    window.addEventListener(\"message\", waitForMessage);\n    readyToSend = true;\n    setTimeout(sendMessage, 0);\n}\nfunction waitForMessage(event) {\n    if (event.data.source !== \"gui-template-parent\")\n        return;\n    readyToSend = true;\n    if (messageQueue.length > 0) {\n        const message = messageQueue.shift();\n        message.handler(event.data.payload);\n        setTimeout(sendMessage, 0);\n    }\n}\nwindow.addEventListener(\"message\", waitForReady);\nfunction sendMessage() {\n    var _a;\n    if (!readyToSend || messageQueue.length == 0)\n        return;\n    readyToSend = false;\n    window.parent.postMessage({\n        source: \"gui-template-child\",\n        payload: (_a = messageQueue[0]) === null || _a === void 0 ? void 0 : _a.code,\n    }, \"*\");\n}\nfunction executeCode(code) {\n    return new Promise((resolve, _) => {\n        messageQueue.push({ code: code, handler: resolve });\n        setTimeout(sendMessage, 0);\n    });\n}\nexports.executeCode = executeCode;\n\n\n//# sourceURL=webpack://compstagram/./src/bridge.ts?");
    
    /***/ }),
    
    /***/ "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst turtle_1 = __webpack_require__(/*! introcs/turtle */ \"./node_modules/introcs/turtle/index.js\");\nconst bridge_1 = __webpack_require__(/*! ./bridge */ \"./src/bridge.ts\");\nconst main = () => {\n    (0, bridge_1.executeCode)(\"main()\").then(draw);\n};\nconst draw = (data) => {\n    data.commands.forEach(command => {\n        switch (command.type) {\n            case 'forward':\n                (0, turtle_1.forward)(command.amount);\n                break;\n            case 'backward':\n                (0, turtle_1.backward)(command.amount);\n                break;\n            case 'left':\n                (0, turtle_1.left)(command.amount);\n                break;\n            case 'right':\n                (0, turtle_1.right)(command.amount);\n                break;\n            case 'turnTo':\n                (0, turtle_1.turnTo)(command.amount);\n                break;\n            case 'setSpeed':\n                (0, turtle_1.setSpeed)(command.amount);\n                break;\n            case 'moveTo':\n                (0, turtle_1.moveTo)(command.x, command.y);\n                break;\n        }\n    });\n};\nconst onClick = (x, y) => {\n    (0, bridge_1.executeCode)(`click(${x}, ${y})`).then(draw);\n};\n(0, turtle_1.setOnClick)(onClick);\naddEventListener(\"load\", main);\n\n\n//# sourceURL=webpack://compstagram/./src/index.ts?");
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			id: moduleId,
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	(() => {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = (module) => {
    /******/ 			var getter = module && module.__esModule ?
    /******/ 				() => (module['default']) :
    /******/ 				() => (module);
    /******/ 			__webpack_require__.d(getter, { a: getter });
    /******/ 			return getter;
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
    /******/ 	
    /******/ })()
    ;