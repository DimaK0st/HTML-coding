/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.scss */ \"./src/styles/reset.scss\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_main__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/styles/header.scss\");\n/* harmony import */ var _styles_water_suyum_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/water-suyum.scss */ \"./src/styles/water-suyum.scss\");\n/* harmony import */ var _styles_accessories_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/accessories.scss */ \"./src/styles/accessories.scss\");\n/* harmony import */ var _styles_healthy_water_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/healthy-water.scss */ \"./src/styles/healthy-water.scss\");\n/* harmony import */ var _styles_suyum_blob_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/suyum-blob.scss */ \"./src/styles/suyum-blob.scss\");\n/* harmony import */ var _styles_manufacturing_process_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/manufacturing-process.scss */ \"./src/styles/manufacturing-process.scss\");\n/* harmony import */ var _styles_water_sales_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/water-sales.scss */ \"./src/styles/water-sales.scss\");\n/* harmony import */ var _styles_delivery_regions_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/delivery-regions.scss */ \"./src/styles/delivery-regions.scss\");\n/* harmony import */ var _styles_purchase_features_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/purchase-features.scss */ \"./src/styles/purchase-features.scss\");\n/* harmony import */ var _styles_article_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/article.scss */ \"./src/styles/article.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/footer.scss */ \"./src/styles/footer.scss\");\n/* harmony import */ var _styles_animate_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/animate.scss */ \"./src/styles/animate.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://fourth/./src/index.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("const animItems = document.querySelectorAll(\"._anim-items\");\n\nif (animItems.length > 0) {\n  window.addEventListener('scroll', animOnScroll);\n\n  function animOnScroll() {\n    for (let index = 0; index < animItems.length; index++) {\n      const animItem = animItems[index];\n      const animItemHeight = animItem.offsetHeight;\n      const animItemOffset = offset(animItem).top;\n      const animStart = 4;\n      let animItemPoint = window.innerHeight - animItemHeight / animStart;\n\n      if (animItemHeight > window.innerHeight) {\n        animItemPoint = window.innerHeight - window.innerHeight / 4;\n      }\n\n      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {\n        animItem.classList.add('_active');\n      } else {\n        if (!animItem.classList.contains('_anim-no-hide')) {\n          animItem.classList.remove('_active');\n        }\n      }\n    }\n  }\n\n  function offset(el) {\n    const rect = el.getBoundingClientRect(),\n          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\n          scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    return {\n      top: rect.top + scrollTop,\n      left: rect.left + scrollLeft\n    };\n  }\n\n  setTimeout(function () {\n    animOnScroll();\n  }, 300);\n}\n\n//# sourceURL=webpack://fourth/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/accessories.scss":
/*!*************************************!*\
  !*** ./src/styles/accessories.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/accessories.scss?");

/***/ }),

/***/ "./src/styles/animate.scss":
/*!*********************************!*\
  !*** ./src/styles/animate.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/animate.scss?");

/***/ }),

/***/ "./src/styles/article.scss":
/*!*********************************!*\
  !*** ./src/styles/article.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/article.scss?");

/***/ }),

/***/ "./src/styles/delivery-regions.scss":
/*!******************************************!*\
  !*** ./src/styles/delivery-regions.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/delivery-regions.scss?");

/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/footer.scss?");

/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/header.scss?");

/***/ }),

/***/ "./src/styles/healthy-water.scss":
/*!***************************************!*\
  !*** ./src/styles/healthy-water.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/healthy-water.scss?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/main.scss?");

/***/ }),

/***/ "./src/styles/manufacturing-process.scss":
/*!***********************************************!*\
  !*** ./src/styles/manufacturing-process.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/manufacturing-process.scss?");

/***/ }),

/***/ "./src/styles/purchase-features.scss":
/*!*******************************************!*\
  !*** ./src/styles/purchase-features.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/purchase-features.scss?");

/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/reset.scss?");

/***/ }),

/***/ "./src/styles/suyum-blob.scss":
/*!************************************!*\
  !*** ./src/styles/suyum-blob.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/suyum-blob.scss?");

/***/ }),

/***/ "./src/styles/water-sales.scss":
/*!*************************************!*\
  !*** ./src/styles/water-sales.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/water-sales.scss?");

/***/ }),

/***/ "./src/styles/water-suyum.scss":
/*!*************************************!*\
  !*** ./src/styles/water-suyum.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fourth/./src/styles/water-suyum.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;