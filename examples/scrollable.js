webpackJsonp([2],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_menu5_fix__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_menu5_fix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_menu5_fix_assets_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_menu5_fix_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_menu5_fix_assets_index_less__);
/* eslint no-console:0 */







var children = [];
for (var i = 0; i < 20; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { key: String(i) },
    i
  ));
}

var menuStyle = {
  width: 200,
  height: 200,
  overflow: 'auto'
};
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'keyboard scrollable menu'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default.a,
    { style: menuStyle },
    children
  )
), document.getElementById('__react-content'));

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })

},[324]);
//# sourceMappingURL=scrollable.js.map