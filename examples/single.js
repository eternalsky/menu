webpackJsonp([4],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
throw new Error("Cannot find module \"rc-menu\"");
throw new Error("Cannot find module \"rc-menu/assets/index.less\"");
/* eslint no-console:0 */






function handleSelect(info) {
  console.log('selected ', info);
}

function handleClick(info) {
  console.log('click ', info);
}

var titleRight = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'span',
  null,
  'sub menu'
);
var titleRight1 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'span',
  null,
  'sub menu 1'
);
var titleRight2 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'span',
  null,
  'sub menu 2'
);
var titleRight3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'span',
  null,
  'sub menu 3'
);

function render(container) {
  function destroy() {
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(container);
  }

  var leftMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_rc_menu___default.a,
    {
      onSelect: handleSelect,
      defaultActiveFirst: true,
      onClick: handleClick
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["SubMenu"],
      { title: titleRight, key: '1' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
        { key: '1-1' },
        '0-1'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
        { key: '1-2' },
        '0-2'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'http://taobao.com', target: '_blank' },
        'i do not need key'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
      { key: '3' },
      'outer'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["SubMenu"],
      { title: titleRight1, key: '4' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
        { key: '4-1' },
        'inner inner'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_menu__["Divider"], null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rc_menu__["SubMenu"],
        {
          key: '4-2',
          title: titleRight2
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
          { key: '4-2-1' },
          'inn'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_rc_menu__["SubMenu"],
          { title: titleRight3, key: '4-2-2' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
            { key: '4-2-2-1' },
            'inner inner'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
            { key: '4-2-2-2' },
            'inner inner2'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
      { disabled: true },
      'disabled'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_rc_menu__["Item"],
      { key: '4-3' },
      'outer3'
    )
  );
  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'single selectable menu'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: destroy },
        'destroy'
      ),
      '\xA0',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: '#' },
        'archor'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: { width: 400 } },
      leftMenu
    )
  ), container);
}

var container = document.getElementById('__react-content');

render(container);

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ })

},[270]);
//# sourceMappingURL=single.js.map