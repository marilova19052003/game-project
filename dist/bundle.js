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

/***/ "./src/extractSpecialAttacks.js":
/*!**************************************!*\
  !*** ./src/extractSpecialAttacks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractSpecialAttacks: () => (/* binding */ extractSpecialAttacks)\n/* harmony export */ });\nfunction extractSpecialAttacks({\n  special\n}) {\n  return special.map(({\n    id,\n    name,\n    icon,\n    description = \"Описание недоступно\"\n  }) => ({\n    id,\n    name,\n    icon,\n    description\n  }));\n}\n\n//# sourceURL=webpack:///./src/extractSpecialAttacks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _orderByProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderByProps */ \"./src/orderByProps.js\");\n/* harmony import */ var _extractSpecialAttacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractSpecialAttacks */ \"./src/extractSpecialAttacks.js\");\n\n\n\n// Пример использования orderByProps\nconst obj = {\n  name: \"мечник\",\n  health: 10,\n  level: 2,\n  attack: 80,\n  defence: 40\n};\nconst order = [\"name\", \"level\"];\nconsole.log((0,_orderByProps__WEBPACK_IMPORTED_MODULE_0__.orderByProps)(obj, order));\n\n// Пример использования extractSpecialAttacks\nconst character = {\n  name: \"Лучник\",\n  type: \"Bowman\",\n  health: 50,\n  level: 3,\n  attack: 40,\n  defence: 10,\n  special: [{\n    id: 8,\n    name: \"Двойной выстрел\",\n    icon: \"http://...\",\n    description: \"Двойной выстрел наносит двойной урон\"\n  }, {\n    id: 9,\n    name: \"Нокаутирующий удар\",\n    icon: \"http://...\"\n  }]\n};\nconsole.log((0,_extractSpecialAttacks__WEBPACK_IMPORTED_MODULE_1__.extractSpecialAttacks)(character));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/orderByProps.js":
/*!*****************************!*\
  !*** ./src/orderByProps.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orderByProps: () => (/* binding */ orderByProps)\n/* harmony export */ });\nfunction orderByProps(obj, order) {\n  const result = [];\n\n  // Сначала добавляем свойства из order\n  for (const key of order) {\n    if (key in obj) {\n      result.push({\n        key,\n        value: obj[key]\n      });\n    }\n  }\n\n  // Затем добавляем остальные свойства, сортируя их по алфавиту\n  const remainingKeys = Object.keys(obj).filter(key => !order.includes(key)).sort();\n  for (const key of remainingKeys) {\n    result.push({\n      key,\n      value: obj[key]\n    });\n  }\n  return result;\n}\n\n//# sourceURL=webpack:///./src/orderByProps.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;