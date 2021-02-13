exports.ids = [0];
exports.modules = {

/***/ "./src/Componentes/bolo.js":
/*!*********************************!*\
  !*** ./src/Componentes/bolo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bolo; });\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../estilo.css */ \"./src/estilo.css\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Bolo(props) {\n  function show_info(event) {\n    var target = event.currentTarget;\n    var elemento = target.getElementsByTagName(\"figcaption\")[0];\n    elemento.style.visibility = \"initial\";\n  }\n\n  function hide_info(event) {\n    var target = event.currentTarget;\n    var elemento = target.getElementsByTagName(\"figcaption\")[0];\n    elemento.style.visibility = \"hidden\";\n  }\n\n  return /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, /*#__PURE__*/React.createElement(\"h2\", {\n    className: \"titulo\"\n  }, \" Bolos \"), /*#__PURE__*/React.createElement(\"figure\", {\n    className: props.categoria + \"produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto\",\n    onMouseOver: show_info,\n    onMouseOut: hide_info\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    className: \"logo\",\n    src: __webpack_require__(\"./src/paginas/Imagens sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(props.nome_imagem)).default,\n    alt: \"Imagem de Produtos\"\n  }), /*#__PURE__*/React.createElement(\"figcaption\", null, /*#__PURE__*/React.createElement(\"p\", {\n    className: \"nome-prod\"\n  }, props.categoria), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"promocao\"\n  }, \"R$\", props.preco), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"preco-prod\"\n  }, \"R$\", props.preco_desconto), /*#__PURE__*/React.createElement(\"button\", {\n    class: \"btnComprar\",\n    id: \"btnComprar\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"pedidos.php\"\n  }, \"Encomendar\")))));\n}\n\n//# sourceURL=webpack:///./src/Componentes/bolo.js?");

/***/ }),

/***/ "./src/paginas/Imagens sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./src/paginas/Imagens sync ^\.\/.*$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Bolo-pote-morango.png\": \"./src/paginas/Imagens/Bolo-pote-morango.png\",\n\t\"./Bolo_baunilha.png\": \"./src/paginas/Imagens/Bolo_baunilha.png\",\n\t\"./Bolocomcafé.png\": \"./src/paginas/Imagens/Bolocomcafé.png\",\n\t\"./Cheesecake.png\": \"./src/paginas/Imagens/Cheesecake.png\",\n\t\"./Desconto.png\": \"./src/paginas/Imagens/Desconto.png\",\n\t\"./DescontoPote.png\": \"./src/paginas/Imagens/DescontoPote.png\",\n\t\"./Logo (2).png\": \"./src/paginas/Imagens/Logo (2).png\",\n\t\"./Logo.png\": \"./src/paginas/Imagens/Logo.png\",\n\t\"./bolo de pote-paçoca.jpg\": \"./src/paginas/Imagens/bolo de pote-paçoca.jpg\",\n\t\"./bolo.jpg\": \"./src/paginas/Imagens/bolo.jpg\",\n\t\"./bolo1.jpg\": \"./src/paginas/Imagens/bolo1.jpg\",\n\t\"./bolo2.jpg\": \"./src/paginas/Imagens/bolo2.jpg\",\n\t\"./bolo_aipim_cremoso_kg_86042.jpg.jpg\": \"./src/paginas/Imagens/bolo_aipim_cremoso_kg_86042.jpg.jpg\",\n\t\"./bolo_cenoura.png\": \"./src/paginas/Imagens/bolo_cenoura.png\",\n\t\"./bolo_formiga.png\": \"./src/paginas/Imagens/bolo_formiga.png\",\n\t\"./bolo_queijo.png\": \"./src/paginas/Imagens/bolo_queijo.png\",\n\t\"./bolo_red.png\": \"./src/paginas/Imagens/bolo_red.png\",\n\t\"./bolofuncional.png\": \"./src/paginas/Imagens/bolofuncional.png\",\n\t\"./floresta_negra.png\": \"./src/paginas/Imagens/floresta_negra.png\",\n\t\"./limao.png\": \"./src/paginas/Imagens/limao.png\",\n\t\"./maracuja.png\": \"./src/paginas/Imagens/maracuja.png\",\n\t\"./o-email.png\": \"./src/paginas/Imagens/o-email.png\",\n\t\"./rocambole-creme.jpg\": \"./src/paginas/Imagens/rocambole-creme.jpg\",\n\t\"./rocambole_de_prestigio.jpg\": \"./src/paginas/Imagens/rocambole_de_prestigio.jpg\",\n\t\"./telefone.png\": \"./src/paginas/Imagens/telefone.png\",\n\t\"./whatsapp.png\": \"./src/paginas/Imagens/whatsapp.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/paginas/Imagens sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/paginas/Imagens_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/paginas/Imagens/Bolo-pote-morango.png":
/*!***************************************************!*\
  !*** ./src/paginas/Imagens/Bolo-pote-morango.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Bolo-pote-morango.png?");

/***/ }),

/***/ "./src/paginas/Imagens/Bolo_baunilha.png":
/*!***********************************************!*\
  !*** ./src/paginas/Imagens/Bolo_baunilha.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Bolo_baunilha.png?");

/***/ }),

/***/ "./src/paginas/Imagens/Bolocomcafé.png":
/*!*********************************************!*\
  !*** ./src/paginas/Imagens/Bolocomcafé.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Bolocomcaf%C3%A9.png?");

/***/ }),

/***/ "./src/paginas/Imagens/Cheesecake.png":
/*!********************************************!*\
  !*** ./src/paginas/Imagens/Cheesecake.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Cheesecake.png?");

/***/ }),

/***/ "./src/paginas/Imagens/Desconto.png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/Desconto.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Desconto.png?");

/***/ }),

/***/ "./src/paginas/Imagens/DescontoPote.png":
/*!**********************************************!*\
  !*** ./src/paginas/Imagens/DescontoPote.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/DescontoPote.png?");

/***/ }),

/***/ "./src/paginas/Imagens/Logo (2).png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/Logo (2).png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Logo_(2).png?");

/***/ }),

/***/ "./src/paginas/Imagens/Logo.png":
/*!**************************************!*\
  !*** ./src/paginas/Imagens/Logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/Logo.png?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo de pote-paçoca.jpg":
/*!*****************************************************!*\
  !*** ./src/paginas/Imagens/bolo de pote-paçoca.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_de_pote-pa%C3%A7oca.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo.jpg":
/*!**************************************!*\
  !*** ./src/paginas/Imagens/bolo.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo1.jpg":
/*!***************************************!*\
  !*** ./src/paginas/Imagens/bolo1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo1.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo2.jpg":
/*!***************************************!*\
  !*** ./src/paginas/Imagens/bolo2.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo2.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo_aipim_cremoso_kg_86042.jpg.jpg":
/*!*****************************************************************!*\
  !*** ./src/paginas/Imagens/bolo_aipim_cremoso_kg_86042.jpg.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_aipim_cremoso_kg_86042.jpg.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo_cenoura.png":
/*!**********************************************!*\
  !*** ./src/paginas/Imagens/bolo_cenoura.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_cenoura.png?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo_formiga.png":
/*!**********************************************!*\
  !*** ./src/paginas/Imagens/bolo_formiga.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_formiga.png?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo_queijo.png":
/*!*********************************************!*\
  !*** ./src/paginas/Imagens/bolo_queijo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_queijo.png?");

/***/ }),

/***/ "./src/paginas/Imagens/bolo_red.png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/bolo_red.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolo_red.png?");

/***/ }),

/***/ "./src/paginas/Imagens/bolofuncional.png":
/*!***********************************************!*\
  !*** ./src/paginas/Imagens/bolofuncional.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/bolofuncional.png?");

/***/ }),

/***/ "./src/paginas/Imagens/floresta_negra.png":
/*!************************************************!*\
  !*** ./src/paginas/Imagens/floresta_negra.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/floresta_negra.png?");

/***/ }),

/***/ "./src/paginas/Imagens/limao.png":
/*!***************************************!*\
  !*** ./src/paginas/Imagens/limao.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/limao.png?");

/***/ }),

/***/ "./src/paginas/Imagens/maracuja.png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/maracuja.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/maracuja.png?");

/***/ }),

/***/ "./src/paginas/Imagens/o-email.png":
/*!*****************************************!*\
  !*** ./src/paginas/Imagens/o-email.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/o-email.png?");

/***/ }),

/***/ "./src/paginas/Imagens/rocambole-creme.jpg":
/*!*************************************************!*\
  !*** ./src/paginas/Imagens/rocambole-creme.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/rocambole-creme.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/rocambole_de_prestigio.jpg":
/*!********************************************************!*\
  !*** ./src/paginas/Imagens/rocambole_de_prestigio.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/rocambole_de_prestigio.jpg?");

/***/ }),

/***/ "./src/paginas/Imagens/telefone.png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/telefone.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/telefone.png?");

/***/ }),

/***/ "./src/paginas/Imagens/whatsapp.png":
/*!******************************************!*\
  !*** ./src/paginas/Imagens/whatsapp.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/paginas/Imagens/whatsapp.png?");

/***/ })

};;