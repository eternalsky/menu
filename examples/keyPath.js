webpackJsonp([6],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_menu5_fix__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_menu5_fix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_menu5_fix_assets_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_menu5_fix_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_menu5_fix_assets_index_less__);
/* eslint no-console:0 */








var Test = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'Test',
  onClick: function onClick(info) {
    console.log('click ', info);
  },
  getMenu: function getMenu() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default.a,
      {
        onClick: this.onClick,
        mode: 'inline'
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
        { key: '1', title: 'submenu1' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
          { key: '1-1' },
          'item1-1'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
          { key: '1-2' },
          'item1-2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
        { key: '2', title: 'submenu2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
          { key: '2-1' },
          'item2-1'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
          { key: '2-2' },
          'item2-2'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
          { key: '2-3', title: 'submenu2-3' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
            { key: '2-3-1' },
            'item2-3-1'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
            { key: '2-3-2' },
            'item2-3-2'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '3' },
        'item3'
      )
    );
  },
  render: function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 400 } },
        this.getMenu()
      )
    );
  }
});

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ })

},[320]);
//# sourceMappingURL=keyPath.js.map