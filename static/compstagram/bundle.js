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

/***/ "./src/Filter.ts":
/*!***********************!*\
  !*** ./src/Filter.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Filter = void 0;\n/**\n * The Filter superclass outlines the shared features of all Filters in our project.\n *\n * The `name` of a filter is what is shown to the user to describe the filter in the user interface.\n *\n * The `amount` of a filter is a value between 0.0 and 1.0, inclusive, that specifies the level at which\n * a filter is applied. For example, a brightness filter at amount 0.0 may indicate 0% brightness or a\n * completely black image, while at 1.0 would indicate 100% brighter than the original.\n *\n * The `constructor` and `process` method must be overridden (redefined) in every subclass.\n *\n * The `process` method is where a Filter's algorithmic work will be performed. It takes an Image object\n * as an input and returns a filtered (\"processed\") Image object. In this generic Filter superclass, no\n * processing work is done so the original Image is returned untouched.\n *\n * Note: You should not modify this file.\n */\nclass Filter {\n    constructor() {\n        this.process = (input) => {\n            return input;\n        };\n        this.name = \"<INITIALIZE name IN SUBCLASS' CONSTRUCTOR>\";\n        this.amount = 0.0;\n    }\n}\nexports.Filter = Filter;\n\n\n//# sourceURL=webpack://compstagram/./src/Filter.ts?");

  /***/ }),
  
  /***/ "./src/index.ts":
  /*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************/
  /***/ (function(__unused_webpack_module, exports, __webpack_require__) {
  
  eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst View_1 = __webpack_require__(/*! ./support/View */ \"./src/support/View.ts\");\nconst Model_1 = __webpack_require__(/*! ./support/Model */ \"./src/support/Model.ts\");\nconst Controller_1 = __webpack_require__(/*! ./support/Controller */ \"./src/support/Controller.ts\");\nlet main = () => __awaiter(void 0, void 0, void 0, function* () {\n    let model = new Model_1.Model();\n    // // TODO: As you work begin work on each filter, comment it out.\n    // model.filterClasses = [\n    //     // SaturationFilter,\n    //     // ContrastFilter,\n    //     // ColorizeFilter,\n    //     // BrightnessFilter,\n    //     // BorderFilter,\n    //     InvertFilter\n    // ];\n    let view = new View_1.View(model);\n    let controller = new Controller_1.Controller(model, view);\n});\nwindow.addEventListener('load', main);\n\n\n//# sourceURL=webpack://compstagram/./src/index.ts?");
  
  /***/ }),
  
  /***/ "./src/support/Controller.ts":
  /*!***********************************!*\
    !*** ./src/support/Controller.ts ***!
    \***********************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\nconst Filter_1 = __webpack_require__(/*! ../Filter */ \"./src/Filter.ts\");\nconst ImageLoader_1 = __webpack_require__(/*! ./ImageLoader */ \"./src/support/ImageLoader.ts\");\nconst bridge_1 = __webpack_require__(/*! ./bridge */ \"./src/support/bridge.ts\");\nclass Controller {\n    constructor(model, view) {\n        this.model = model;\n        this.view = view;\n        this.initEventHandlers();\n    }\n    initEventHandlers() {\n        this.loadFilters();\n        this.loader = new ImageLoader_1.ImageLoader(this.view.imageSelect, this.view.imgWidth(), this.view.imgWidth());\n        this.loader.onload = this.loadImage.bind(this);\n        this.loader.img.src = this.view.defaultImage;\n        this.view.onfilterchange = this.update.bind(this);\n        this.view.onremovefilter = this.removeFilter.bind(this);\n        this.view.save.addEventListener(\"click\", this.save.bind(this));\n    }\n    loadFilters() {\n        (0, bridge_1.executeCode)(`get_filter_types()`).then(value => {\n            let availableFilters = value.map((settings) => {\n                let filter = new Filter_1.Filter();\n                filter.name = settings.name;\n                filter.amount = settings.amount;\n                return filter;\n            });\n            this.model.availableFilters = availableFilters;\n            this.view.updateFiltersSelect();\n            this.view.filterSelect.addObserver(this.addFilter.bind(this));\n        });\n    }\n    loadImage(image64) {\n        this.model.image64 = image64;\n        this.process();\n    }\n    process() {\n        let payload = {\n            \"filters\": this.model.filters,\n            \"image\": this.model.image64\n        };\n        let filters = this.model.filters.map((filter) => filter.name + \"(amount=\" + filter.amount + \")\");\n        let payloadPython = 'main(Request(image=\"' + this.model.image64 + '\", filters=[' + filters.join(\", \") + ']))';\n        (0, bridge_1.executeCode)(payloadPython).then((data) => {\n            let image = document.createElement(\"img\");\n            image.onload = () => {\n                let ctx = this.view.imageCanvas.canvas.getContext(\"2d\");\n                ctx.clearRect(0, 0, image.width, image.height);\n                ctx.drawImage(image, 0, 0);\n            };\n            image.src = data;\n        });\n    }\n    addFilter(filter) {\n        this.model.filters.push(filter);\n        this.view.updateFilters();\n        this.update();\n    }\n    removeFilter(filter) {\n        let index = this.model.filters.indexOf(filter);\n        this.model.filters.splice(index, 1);\n        this.view.updateFilters();\n        this.update();\n    }\n    update() {\n        if (this.model.image64 !== undefined) {\n            this.process();\n        }\n    }\n    save(event) {\n        let filename = prompt(\"What filename?\", \"compstagram\");\n        if (filename !== null) {\n            this.view.save.href = this.view.viewport.toDataURL();\n            this.view.save.download = filename + \".png\";\n        }\n        else {\n            event.preventDefault();\n        }\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://compstagram/./src/support/Controller.ts?");
  
  /***/ }),
  
  /***/ "./src/support/ImageLoader.ts":
  /*!************************************!*\
    !*** ./src/support/ImageLoader.ts ***!
    \************************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ImageLoader = void 0;\nclass ImageLoader {\n    constructor(input, width, height) {\n        this.input = input;\n        this.reader = new FileReader();\n        this.img = document.createElement(\"img\");\n        this.canvas = document.createElement(\"canvas\");\n        this.canvas.width = width;\n        this.canvas.height = height;\n        this.input.onchange = this.readFile.bind(this);\n        this.reader.onload = this.createImage.bind(this);\n        this.img.onload = this.loadImage.bind(this);\n    }\n    readFile() {\n        let files = this.input.files;\n        if (files === null) {\n            return;\n        }\n        let file = files[0];\n        loadImage(file, (img) => {\n            this.img = img;\n            this.loadImage();\n        }, {\n            maxWidth: 600,\n            orientation: true\n        });\n    }\n    createImage() {\n        this.img.src = this.reader.result;\n    }\n    loadImage() {\n        let srcX = 0;\n        let srcY = 0;\n        let constraint;\n        if (this.img.height > this.img.width) {\n            constraint = this.img.width;\n            srcY = (this.img.height - this.img.width) / 2;\n        }\n        else {\n            constraint = this.img.height;\n            srcX = (this.img.width - this.img.height) / 2;\n        }\n        let ctx = this.canvas.getContext(\"2d\");\n        ctx.drawImage(this.img, srcX, srcY, constraint, constraint, 0, 0, this.canvas.width, this.canvas.height);\n        if (this.onload !== undefined) {\n            this.onload(this.canvas.toDataURL(\"image/png\"));\n        }\n    }\n}\nexports.ImageLoader = ImageLoader;\n\n\n//# sourceURL=webpack://compstagram/./src/support/ImageLoader.ts?");
  
  /***/ }),
  
  /***/ "./src/support/Model.ts":
  /*!******************************!*\
    !*** ./src/support/Model.ts ***!
    \******************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Model = void 0;\nclass Model {\n    constructor() {\n        this.filterClasses = [];\n        this.availableFilters = [];\n        this.filters = [];\n    }\n    process(input) {\n        return this.filters.reduce(function (memo, filter) {\n            return filter.process(memo);\n        }, input);\n    }\n}\nexports.Model = Model;\n\n\n//# sourceURL=webpack://compstagram/./src/support/Model.ts?");
  
  /***/ }),
  
  /***/ "./src/support/View.ts":
  /*!*****************************!*\
    !*** ./src/support/View.ts ***!
    \*****************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.View = void 0;\nconst FilterSelect_1 = __webpack_require__(/*! ./components/FilterSelect */ \"./src/support/components/FilterSelect.ts\");\nconst FilterControl_1 = __webpack_require__(/*! ./components/FilterControl */ \"./src/support/components/FilterControl.ts\");\nconst ImageCanvas_1 = __webpack_require__(/*! ./components/ImageCanvas */ \"./src/support/components/ImageCanvas.ts\");\nclass View {\n    constructor(model) {\n        this.defaultImage = 'default.jpg';\n        this.filterControls = [];\n        this.onremovefilter = null;\n        this.onfilterchange = null;\n        this.model = model;\n        this.imageSelect = document.getElementById(\"imageSelect\");\n        this.viewport = document.getElementById(\"viewport\");\n        this.filters = document.getElementById(\"filters\");\n        this.imageCanvas = new ImageCanvas_1.ImageCanvas(this.viewport);\n        this.save = document.getElementById(\"save\");\n    }\n    updateFilters() {\n        // Add New Filters\n        this.model.filters.forEach((filter, index) => {\n            if (this.filterControls[index] !== undefined) {\n                if (this.filterControls[index].filter === filter) {\n                    // FilterControl already correctly configured\n                    return;\n                }\n                else {\n                    this.filters.removeChild(this.filterControls[index].element);\n                    this.filterControls.splice(index, 1);\n                }\n            }\n            let control = new FilterControl_1.FilterControl(this.filters, filter);\n            control.onremove = this.onremovefilter;\n            control.addObserver(this.filterChanged.bind(this));\n            this.filterControls.push(control);\n        });\n        // Remove Deleted Filters\n        for (let i = this.filterControls.length - 1; i >= this.model.filters.length; i--) {\n            this.filters.removeChild(this.filterControls[i].element);\n            this.filterControls.splice(i, 1);\n        }\n    }\n    imgWidth() {\n        return window.innerWidth - 32 < 500 ? window.innerWidth - 32 : 500;\n    }\n    filterChanged(amount) {\n        if (this.onfilterchange !== null) {\n            this.onfilterchange(amount);\n        }\n    }\n    updateFiltersSelect() {\n        let select = document.getElementById(\"filterSelect\");\n        let add = document.getElementById(\"filterAddButton\");\n        this.filterSelect = new FilterSelect_1.FilterSelect(this.model.availableFilters, select, add);\n    }\n}\nexports.View = View;\n\n\n//# sourceURL=webpack://compstagram/./src/support/View.ts?");
  
  /***/ }),
  
  /***/ "./src/support/bridge.ts":
  /*!*******************************!*\
    !*** ./src/support/bridge.ts ***!
    \*******************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.executeCode = void 0;\nconst messageQueue = [];\nlet readyToSend = false;\nfunction waitForReady(event) {\n    if (event.data.source !== \"gui-template-parent\" || event.data.payload !== \"ready\")\n        return;\n    window.removeEventListener(\"message\", waitForReady);\n    window.addEventListener(\"message\", waitForMessage);\n    readyToSend = true;\n    setTimeout(sendMessage, 0);\n}\nfunction waitForMessage(event) {\n    if (event.data.source !== \"gui-template-parent\")\n        return;\n    readyToSend = true;\n    if (messageQueue.length > 0) {\n        const message = messageQueue.shift();\n        message.handler(event.data.payload);\n        setTimeout(sendMessage, 0);\n    }\n}\nwindow.addEventListener(\"message\", waitForReady);\nfunction sendMessage() {\n    var _a;\n    if (!readyToSend || messageQueue.length == 0)\n        return;\n    readyToSend = false;\n    window.parent.postMessage({\n        source: \"gui-template-child\",\n        payload: (_a = messageQueue[0]) === null || _a === void 0 ? void 0 : _a.code,\n    }, \"*\");\n}\nfunction executeCode(code) {\n    return new Promise((resolve, _) => {\n        messageQueue.push({ code: code, handler: resolve });\n        setTimeout(sendMessage, 0);\n    });\n}\nexports.executeCode = executeCode;\n\n\n//# sourceURL=webpack://compstagram/./src/support/bridge.ts?");
  
  /***/ }),
  
  /***/ "./src/support/components/FilterControl.ts":
  /*!*************************************************!*\
    !*** ./src/support/components/FilterControl.ts ***!
    \*************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FilterControl = void 0;\nconst Slider_1 = __webpack_require__(/*! ./Slider */ \"./src/support/components/Slider.ts\");\nclass FilterControl {\n    constructor(parent, filter) {\n        this.observers = [];\n        this.onremove = null;\n        this.parent = parent;\n        this.filter = filter;\n        this.element = this.initElement();\n    }\n    addObserver(o) {\n        this.observers.push(o);\n    }\n    initElement() {\n        let div = document.createElement(\"div\");\n        div.setAttribute(\"class\", \"filter\");\n        let text = document.createElement(\"h2\");\n        text.setAttribute(\"class\", \"title\");\n        text.innerText = this.filter.name;\n        div.appendChild(text);\n        this.amount = document.createElement(\"span\");\n        this.amount.setAttribute(\"class\", \"amount\");\n        this.updateAmountSpan();\n        text.appendChild(this.amount);\n        let svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n        svg.setAttribute(\"class\", \"slider\");\n        this.slider = new Slider_1.Slider(svg);\n        div.appendChild(svg);\n        this.removeButton = document.createElement(\"button\");\n        this.removeButton.setAttribute(\"class\", \"btn btn-sm btn-dark\");\n        this.removeButton.innerText = \"X\";\n        this.removeButton.onclick = this.remove.bind(this);\n        div.appendChild(this.removeButton);\n        // Finally, append to parent element and initialize slider value\n        this.parent.appendChild(div);\n        this.slider.value = this.filter.amount;\n        this.slider.addObserver(this.changeAmount.bind(this));\n        return div;\n    }\n    changeAmount(amount) {\n        this.filter.amount = amount;\n        this.updateAmountSpan();\n        this.observers.forEach((o) => o(amount));\n    }\n    updateAmountSpan() {\n        this.amount.innerHTML = \" \" + Math.round(this.filter.amount * 100) + \"%\";\n    }\n    remove() {\n        if (this.onremove !== null) {\n            this.onremove(this.filter);\n        }\n    }\n}\nexports.FilterControl = FilterControl;\n\n\n//# sourceURL=webpack://compstagram/./src/support/components/FilterControl.ts?");
  
  /***/ }),
  
  /***/ "./src/support/components/FilterSelect.ts":
  /*!************************************************!*\
    !*** ./src/support/components/FilterSelect.ts ***!
    \************************************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FilterSelect = void 0;\nconst Filter_1 = __webpack_require__(/*! ../../Filter */ \"./src/Filter.ts\");\nclass FilterSelect {\n    constructor(filters, select, button) {\n        this.observers = [];\n        this.filters = filters;\n        this.names = filters.map((f) => f.name);\n        this.select = select;\n        this.button = button;\n        this.initOptions();\n        this.initEvents();\n    }\n    addObserver(o) {\n        this.observers.push(o);\n    }\n    click(event) {\n        if (this.select.value === \"\") {\n            // Nothing is selected.\n            return;\n        }\n        // Clone the filter settings...\n        let filterSettings = this.filters[parseInt(this.select.value, 10)];\n        let filter = new Filter_1.Filter();\n        filter.name = filterSettings.name;\n        filter.amount = filterSettings.amount;\n        this.observers.forEach((o) => {\n            o(filter);\n        });\n    }\n    initEvents() {\n        this.button.onclick = this.click.bind(this);\n    }\n    initOptions() {\n        this.names\n            .map((name, index) => {\n            let option = document.createElement(\"option\");\n            option.innerText = name;\n            option.value = String(index);\n            return option;\n        })\n            .forEach((option) => this.select.appendChild(option));\n    }\n}\nexports.FilterSelect = FilterSelect;\n\n\n//# sourceURL=webpack://compstagram/./src/support/components/FilterSelect.ts?");
  
  /***/ }),
  
  /***/ "./src/support/components/ImageCanvas.ts":
  /*!***********************************************!*\
    !*** ./src/support/components/ImageCanvas.ts ***!
    \***********************************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ImageCanvas = void 0;\nclass ImageCanvas {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.canvas.width = window.innerWidth - 32 < 500 ? window.innerWidth - 32 : 500;\n        this.canvas.height = this.canvas.width;\n    }\n    update(image) {\n        let ctx = this.canvas.getContext(\"2d\");\n        let target = ctx.createImageData(image.width, image.height);\n        for (let i = 0; i < target.data.length; i += 4) {\n            let row = Math.floor(i / 4 / target.width);\n            let col = i / 4 % target.width;\n            target.data[i] = Math.floor(image.pixels[row][col].red * 255);\n            target.data[i + 1] = Math.floor(image.pixels[row][col].green * 255);\n            target.data[i + 2] = Math.floor(image.pixels[row][col].blue * 255);\n            target.data[i + 3] = 255;\n        }\n        ctx.putImageData(target, 0, 0, 0, 0, image.width, image.height);\n        ctx.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);\n    }\n}\nexports.ImageCanvas = ImageCanvas;\n\n\n//# sourceURL=webpack://compstagram/./src/support/components/ImageCanvas.ts?");
  
  /***/ }),
  
  /***/ "./src/support/components/Slider.ts":
  /*!******************************************!*\
    !*** ./src/support/components/Slider.ts ***!
    \******************************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Slider = void 0;\nclass Slider {\n    constructor(parent) {\n        this.isDragging = false;\n        this._value = 0.0;\n        this._observers = [];\n        this.parent = parent;\n        this.initShapes();\n        this.initEventHandlers();\n        this.emit = this.emit.bind(this);\n        this.emit = this.throttle(this.emit, 250);\n    }\n    addObserver(o) {\n        this._observers.push(o);\n    }\n    initShapes() {\n        let guide = document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\");\n        guide.setAttribute(\"class\", \"guide\");\n        guide.setAttribute(\"x\", \"10\");\n        guide.setAttribute(\"y\", \"14\");\n        guide.setAttribute(\"stroke-linecap\", \"round\");\n        guide.setAttribute(\"stroke-linejoin\", \"round\");\n        this.parent.appendChild(guide);\n        let handle = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n        handle.setAttribute(\"class\", \"handle\");\n        handle.setAttribute(\"r\", \"10\");\n        handle.setAttribute(\"cy\", \"15\");\n        handle.setAttribute(\"cx\", \"10\");\n        this.parent.appendChild(handle);\n        this.handle = handle;\n    }\n    initEventHandlers() {\n        this.handle.parentElement.onmousedown = this.mousedown.bind(this);\n        this.handle.parentElement.onmousemove = this.mousemove.bind(this);\n        this.handle.parentElement.onmouseup = this.mouseup.bind(this);\n        this.handle.parentElement.onmouseleave = this.mouseup.bind(this);\n        this.handle.parentElement.onclick = this.click.bind(this);\n    }\n    mousedown(event) {\n        this.isDragging = true;\n        this.mousemove(event);\n    }\n    mousemove(event) {\n        if (this.isDragging) {\n            this.updateValue(event);\n            event.preventDefault();\n        }\n    }\n    updateValue(event) {\n        let radius = parseInt(this.handle.getAttribute(\"r\"), 10);\n        let width = this.parent.clientWidth - 2 * radius;\n        let offset = (event.offsetX - radius) / width;\n        if (offset < 0) {\n            offset = 0;\n        }\n        else if (offset > 1.0) {\n            offset = 1;\n        }\n        this.value = offset;\n    }\n    click(event) {\n        this.updateValue(event);\n    }\n    mouseup() {\n        this.isDragging = false;\n    }\n    set value(value) {\n        this._value = value;\n        let radius = parseInt(this.handle.getAttribute(\"r\"), 10);\n        let width = this.parent.clientWidth - 2 * radius;\n        let cx = radius + width * this._value;\n        this.handle.setAttribute(\"cx\", \"\" + cx);\n        this.emit();\n    }\n    get value() {\n        return this._value;\n    }\n    emit() {\n        this._observers.forEach((o) => o(this._value));\n    }\n    throttle(mainFunction, delay) {\n        let timerFlag = null; // Variable to keep track of the timer\n        // Returning a throttled version \n        return (...args) => {\n            if (timerFlag === null) { // If there is no timer currently running\n                mainFunction(...args); // Execute the main function \n                timerFlag = setTimeout(() => {\n                    timerFlag = null; // Clear the timerFlag to allow the main function to be executed again\n                }, delay);\n            }\n        };\n    }\n}\nexports.Slider = Slider;\n\n\n//# sourceURL=webpack://compstagram/./src/support/components/Slider.ts?");
  
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
  /******/ 			// no module.id needed
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
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module is referenced by other modules so it can't be inlined
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
  /******/ 	
  /******/ })()
  ;