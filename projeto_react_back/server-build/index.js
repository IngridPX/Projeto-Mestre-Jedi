/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  // Renderiza o componente para string\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estilo.css */ \"./src/estilo.css\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Componentes_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Componentes/header */ \"./src/Componentes/header.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rotas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rotas */ \"./src/rotas.js\");\n/* harmony import */ var _Componentes_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/footer */ \"./src/Componentes/footer.js\");\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(_Componentes_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    fluid: true\n  }, /*#__PURE__*/React.createElement(_rotas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))), /*#__PURE__*/React.createElement(\"footer\", null, /*#__PURE__*/React.createElement(_Componentes_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Componentes/Logo.png":
/*!**********************************!*\
  !*** ./src/Componentes/Logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Componentes/Logo.png?");

/***/ }),

/***/ "./src/Componentes/footer.js":
/*!***********************************!*\
  !*** ./src/Componentes/footer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Historia; });\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../estilo.css */ \"./src/estilo.css\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _forma_pagamento_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forma_pagamento.jpg */ \"./src/Componentes/forma_pagamento.jpg\");\n/* harmony import */ var _forma_pagamento_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_forma_pagamento_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Historia() {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(\"h6\", null, /*#__PURE__*/React.createElement(\"em\", null, \"Formas de Pagamento:\"), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"img\", {\n    src: _forma_pagamento_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"Formas de Pagamento\"\n  }), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"\\xA9Todos os direitos reservados.\"))));\n}\n\n//# sourceURL=webpack:///./src/Componentes/footer.js?");

/***/ }),

/***/ "./src/Componentes/forma_pagamento.jpg":
/*!*********************************************!*\
  !*** ./src/Componentes/forma_pagamento.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/Componentes/forma_pagamento.jpg?");

/***/ }),

/***/ "./src/Componentes/header.js":
/*!***********************************!*\
  !*** ./src/Componentes/header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../estilo.css */ \"./src/estilo.css\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_estilo_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.png */ \"./src/Componentes/Logo.png\");\n/* harmony import */ var _Logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Logo_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction menu(props) {\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"], {\n    className: \"navbar\",\n    expand: \"lg\",\n    bg: \"white\",\n    fixed: \"top\"\n  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"Historia\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    className: \"logo\",\n    src: _Logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Delicious Cakes\"\n  })), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"].Toggle, {\n    \"aria-controls\": \"item-menu\"\n  }), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Navbar\"].Collapse, {\n    id: \"item-menu\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"], {\n    activeKey: props.location.pathname,\n    className: \"ml-auto mr-3 menu\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"Historia\",\n    to: \"Historia\"\n  }, \"A Delicious Cakes\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"Bolo\",\n    to: \"Bolo\"\n  }, \"Bolos\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"Lojas\",\n    to: \"Lojas\"\n  }, \"Nossas Lojas\")), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Item, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__[\"Nav\"].Link, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    href: \"Contato\",\n    to: \"Contato\"\n  }, \"Contatos\")))));\n}\n\nvar Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(menu);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/Componentes/header.js?");

/***/ }),

/***/ "./src/estilo.css":
/*!************************!*\
  !*** ./src/estilo.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .nav-item{\\n|   display: flex;\\n|   justify-content: center;\");\n\n//# sourceURL=webpack:///./src/estilo.css?");

/***/ }),

/***/ "./src/rotas.js":
/*!**********************!*\
  !*** ./src/rotas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estilo.css */ \"./src/estilo.css\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_estilo_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Historia = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./paginas/historia */ \"./src/paginas/historia.js\"));\n});\nvar Bolos = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Componentes/bolo */ \"./src/Componentes/bolo.js\"));\n});\nvar Lojas = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./paginas/lojas */ \"./src/paginas/lojas.js\"));\n});\nvar Contato = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./paginas/contato */ \"./src/paginas/contato.js\"));\n});\n\nfunction Rotas() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      className: \"carregamento\"\n    }, \"Carregando...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/historia\",\n    component: Historia\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/bolo\",\n    component: Bolos\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/lojas\",\n    component: Lojas\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/contato\",\n    component: Contato\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rotas);\n\n//# sourceURL=webpack:///./src/rotas.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });