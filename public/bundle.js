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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/HelloWorld */ \"./src/components/HelloWorld.ts\");\n/* harmony import */ var _src_core_domdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/core/domdom */ \"./src/core/domdom.ts\");\n\n\n(() => {\n    const root = document.getElementById(\"root\");\n    if (!root) {\n        throw new Error(\"root element not found\");\n    }\n    (0,_src_core_domdom__WEBPACK_IMPORTED_MODULE_1__.setUp)(root, { date: new Date() }, (state) => {\n        const helloWorldRenderingTree = (0,_src_components_HelloWorld__WEBPACK_IMPORTED_MODULE_0__.HelloWorld)({ date: state.date });\n        return helloWorldRenderingTree;\n    }, (state, action) => { });\n})();\n\n\n//# sourceURL=webpack://webpack/./index.ts?");

/***/ }),

/***/ "./src/components/HelloWorld.ts":
/*!**************************************!*\
  !*** ./src/components/HelloWorld.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HelloWorld: () => (/* binding */ HelloWorld)\n/* harmony export */ });\n/* harmony import */ var _core_TagHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/TagHelper */ \"./src/core/TagHelper.ts\");\n\nconst { h1 } = _core_TagHelper__WEBPACK_IMPORTED_MODULE_0__.tagHelper;\nconst HelloWorld = ({ date }) => h1([\"Hello world!\"]);\n\n\n//# sourceURL=webpack://webpack/./src/components/HelloWorld.ts?");

/***/ }),

/***/ "./src/core/TagHelper.ts":
/*!*******************************!*\
  !*** ./src/core/TagHelper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateTagHelper: () => (/* binding */ generateTagHelper),\n/* harmony export */   tagHelper: () => (/* binding */ tagHelper)\n/* harmony export */ });\n/* harmony import */ var _domdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domdom */ \"./src/core/domdom.ts\");\n\nfunction generateTagHelper() {\n    const htmlTags = [\n        \"div\",\n        \"span\",\n        \"h1\",\n        \"h2\",\n        \"p\",\n        \"a\",\n        \"img\",\n        \"button\",\n        \"ul\",\n        \"li\",\n        \"input\",\n        \"form\",\n    ];\n    const helper = {};\n    htmlTags.forEach((tag) => {\n        helper[tag] = (first, second) => {\n            if (!first) {\n                return (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.$)(tag);\n            }\n            else if (Array.isArray(first)) {\n                return (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.$)(tag, first);\n            }\n            else if (second) {\n                return (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.$)(tag, first, second);\n            }\n            else {\n                return (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.$)(tag, first);\n            }\n        };\n    });\n    return helper;\n}\nconst tagHelper = generateTagHelper();\n\n\n//# sourceURL=webpack://webpack/./src/core/TagHelper.ts?");

/***/ }),

/***/ "./src/core/apply.ts":
/*!***************************!*\
  !*** ./src/core/apply.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyRenderingTreeToDom: () => (/* binding */ applyRenderingTreeToDom)\n/* harmony export */ });\n/* harmony import */ var _domdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domdom */ \"./src/core/domdom.ts\");\n\nfunction applyRenderingTreeToDom(root, renderingTree, prevRenderingTree) {\n    sync({\n        target: root.firstChild,\n        replace: (newNode) => {\n            root.replaceChildren(newNode);\n        },\n        renderingTree,\n        prevRenderingTree,\n    });\n}\nfunction dispose(renderingTree) {\n    var _a;\n    if (typeof renderingTree === \"string\") {\n        return;\n    }\n    if (renderingTree.type === \"use\") {\n        (_a = renderingTree.dispose) === null || _a === void 0 ? void 0 : _a.call(renderingTree);\n    }\n    if (\"children\" in renderingTree) {\n        renderingTree.children.forEach(dispose);\n    }\n}\nfunction sync({ target, replace, renderingTree, prevRenderingTree, }) {\n    var _a;\n    if (prevRenderingTree &&\n        (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.getTypeOfRenderingTree)(prevRenderingTree) !==\n            (0,_domdom__WEBPACK_IMPORTED_MODULE_0__.getTypeOfRenderingTree)(renderingTree)) {\n        dispose(prevRenderingTree);\n    }\n    if (typeof renderingTree === \"string\") {\n        if ((target === null || target === void 0 ? void 0 : target.nodeType) !== Node.TEXT_NODE) {\n            return replace(createNode(renderingTree, prevRenderingTree));\n        }\n        if (target.textContent !== renderingTree) {\n            target.textContent = renderingTree;\n        }\n        return;\n    }\n    switch (renderingTree.type) {\n        case \"element\":\n            {\n                if (!(target instanceof HTMLElement) ||\n                    target.tagName !== renderingTree.tagName) {\n                    return replace(createNode(renderingTree, prevRenderingTree));\n                }\n                syncElement(target, renderingTree, prevRenderingTree);\n            }\n            break;\n        case \"use\": {\n            if (prevRenderingTree instanceof Object &&\n                (prevRenderingTree === null || prevRenderingTree === void 0 ? void 0 : prevRenderingTree.type) === \"use\") {\n                const isDependenciesChanged = prevRenderingTree.dependencies.length !==\n                    renderingTree.dependencies.length ||\n                    prevRenderingTree.dependencies.some((d, i) => d !== renderingTree.dependencies[i]);\n                if (isDependenciesChanged) {\n                    (_a = prevRenderingTree.dispose) === null || _a === void 0 ? void 0 : _a.call(prevRenderingTree);\n                    renderingTree.dispose = renderingTree.useFn() || undefined;\n                }\n                else {\n                    renderingTree.dispose = prevRenderingTree.dispose;\n                }\n            }\n            else {\n                renderingTree.dispose = renderingTree.useFn() || undefined;\n            }\n            renderingTree.children.forEach((child, index) => {\n                sync({\n                    target,\n                    replace,\n                    renderingTree: child,\n                    prevRenderingTree: prevRenderingTree instanceof Object &&\n                        \"children\" in prevRenderingTree\n                        ? prevRenderingTree.children[index]\n                        : undefined,\n                });\n            });\n        }\n    }\n}\nfunction createNode(renderingTree, prevRenderingTree) {\n    if (typeof renderingTree === \"string\") {\n        return document.createTextNode(renderingTree);\n    }\n    switch (renderingTree.type) {\n        case \"element\": {\n            const element = document.createElement(renderingTree.tagName);\n            syncElement(element, renderingTree, prevRenderingTree);\n            return element;\n        }\n    }\n}\nfunction syncElement(element, renderingTree, prevRenderingTree) {\n    syncAttributes(element, renderingTree.attrs);\n    syncChildren(element, renderingTree.children, prevRenderingTree instanceof Object && \"children\" in prevRenderingTree\n        ? prevRenderingTree.children\n        : undefined);\n}\nfunction syncAttributes(target, attrs) {\n    for (const [key, value] of Object.entries(attrs)) {\n        if (target.getAttribute(key) !== value) {\n            target.setAttribute(key, value);\n        }\n    }\n}\nfunction syncChildren(target, children, prevChildren) {\n    const removingChildrenCount = target.children.length - children.length;\n    for (let i = 0; i < removingChildrenCount; i++) {\n        target.lastChild.remove();\n    }\n    for (let i = 0; i < children.length; i++) {\n        const childNode = target.childNodes[i];\n        const renderingTree = children[i];\n        if (!renderingTree) {\n            continue;\n        }\n        sync({\n            target: childNode,\n            replace: (newNode) => {\n                if (childNode) {\n                    target.replaceChild(newNode, childNode);\n                }\n                else {\n                    target.appendChild(newNode);\n                }\n            },\n            renderingTree,\n            prevRenderingTree: prevChildren === null || prevChildren === void 0 ? void 0 : prevChildren[i],\n        });\n    }\n}\n\n\n//# sourceURL=webpack://webpack/./src/core/apply.ts?");

/***/ }),

/***/ "./src/core/domdom.ts":
/*!****************************!*\
  !*** ./src/core/domdom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $: () => (/* binding */ $),\n/* harmony export */   getTypeOfRenderingTree: () => (/* binding */ getTypeOfRenderingTree),\n/* harmony export */   onAction: () => (/* binding */ onAction),\n/* harmony export */   setUp: () => (/* binding */ setUp),\n/* harmony export */   use: () => (/* binding */ use)\n/* harmony export */ });\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply */ \"./src/core/apply.ts\");\n\nfunction getTypeOfRenderingTree(renderingTree) {\n    return typeof renderingTree === \"string\"\n        ? \"text\"\n        : \"type\" in renderingTree\n            ? renderingTree.type\n            : \"use\";\n}\nlet onAction = (_action) => {\n    throw new Error(\"onAction is not set yet\");\n};\nfunction setUp(root, state, stateToRenderingTree, updateStateOnAction) {\n    let prevRenderingTree;\n    const onStateChanged = () => {\n        const renderingTree = stateToRenderingTree(state);\n        (0,_apply__WEBPACK_IMPORTED_MODULE_0__.applyRenderingTreeToDom)(root, renderingTree, prevRenderingTree);\n        prevRenderingTree = renderingTree;\n    };\n    onAction = (action) => {\n        updateStateOnAction(state, action);\n        onStateChanged();\n    };\n    onStateChanged();\n}\nfunction use(fn, dependencies) {\n    return {\n        type: \"use\",\n        dependencies,\n        useFn: fn,\n        children: [],\n        use,\n        render(renderingTree) {\n            this.children = [renderingTree];\n            return this;\n        },\n    };\n}\nfunction $(tagName, attrsOrChildren, children) {\n    let attrs = {};\n    let childrenList = [];\n    if (attrsOrChildren) {\n        if (Array.isArray(attrsOrChildren)) {\n            childrenList = attrsOrChildren;\n        }\n        else {\n            attrs = attrsOrChildren;\n            childrenList = children || [];\n        }\n    }\n    return {\n        type: \"element\",\n        tagName: tagName || \"DIV\",\n        attrs,\n        children: childrenList,\n    };\n}\n\n\n//# sourceURL=webpack://webpack/./src/core/domdom.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;