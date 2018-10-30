webpackJsonp([7],{

/***/ 144:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_css_animation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_create_react_class__);
/* eslint no-console:0 */








function handleSelect(info) {
  console.log(info);
  console.log('selected ' + info.key);
}

var animation = {
  enter: function enter(node, done) {
    var height = void 0;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_css_animation__["b" /* default */])(node, 'menu5-fix-collapse', {
      start: function start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active: function active() {
        node.style.height = height + 'px';
      },
      end: function end() {
        node.style.height = '';
        done();
      }
    });
  },
  appear: function appear() {
    return this.enter.apply(this, arguments);
  },
  leave: function leave(node, done) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_css_animation__["b" /* default */])(node, 'menu5-fix-collapse', {
      start: function start() {
        node.style.height = node.offsetHeight + 'px';
      },
      active: function active() {
        node.style.height = 0;
      },
      end: function end() {
        node.style.height = '';
        done();
      }
    });
  }
};

var reactContainer = document.getElementById('__react-content');

var nestSubMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
  { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      null,
      'sub menu 2'
    ), key: '4' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { key: '4-1' },
    'inner inner'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Divider"], null),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
    {
      key: '4-2',
      title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        'sub menu 3'
      )
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
      { title: 'sub 4-2-0', key: '4-2-0' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-0-1' },
        'inner inner'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-0-2' },
        'inner inner2'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '4-2-1' },
      'inn'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
      { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          'sub menu 4'
        ), key: '4-2-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-2-1' },
        'inner inner'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-2-2' },
        'inner inner2'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
      { title: 'sub 4-2-3', key: '4-2-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-3-1' },
        'inner inner'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
        { key: '4-2-3-2' },
        'inner inner2'
      )
    )
  )
);

function onOpenChange(value) {
  console.log('onOpenChange', value);
}
var commonMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default.a,
  { onSelect: handleSelect, onOpenChange: onOpenChange },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
    { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        'sub menu'
      ), key: '1' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '1-1' },
      '0-1'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '1-2' },
      '0-2'
    )
  ),
  nestSubMenu,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { key: '2' },
    '1'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { key: '3' },
    'outer'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { disabled: true },
    'disabled'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
    { key: '5' },
    'outer3'
  )
);

var subMenus = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_menu5_fix___default.a,
  { onSelect: handleSelect },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
    { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        'sub menu'
      ), key: '1' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '1-1' },
      '0-1'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '1-2' },
      '0-2'
    )
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["SubMenu"],
    { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        'sub menu 1'
      ), key: '2' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '2-1' },
      '2-1'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_menu5_fix__["Item"],
      { key: '2-2' },
      '2-2'
    )
  ),
  nestSubMenu
);

function render(container) {
  var horizontalMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(commonMenu, {
    mode: 'horizontal',
    // use openTransition for antd
    openAnimation: 'slide-up'
  });

  var horizontalMenu2 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(commonMenu, {
    mode: 'horizontal',
    openAnimation: 'slide-up',
    closeSubMenuOnMouseLeave: false
  });

  var verticalMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(commonMenu, {
    mode: 'vertical',
    openAnimation: 'zoom'
  });

  var inlineMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(commonMenu, {
    mode: 'inline',
    defaultOpenKeys: ['1'],
    openAnimation: animation
  });

  var ClickToHideMenu = __WEBPACK_IMPORTED_MODULE_5_create_react_class___default()({
    displayName: 'ClickToHideMenu',
    getInitialState: function getInitialState() {
      return {
        openKeys: []
      };
    },
    onOpenChange: function onOpenChange(openKeys) {
      this.setState({
        openKeys: openKeys
      });
    },
    render: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(subMenus, {
        onOpenChange: this.onOpenChange,
        openKeys: this.state.openKeys,
        mode: 'horizontal',
        openAnimation: 'slide-up',
        openSubMenuOnMouseEnter: false,
        closeSubMenuOnMouseLeave: false
      });
    }
  });

  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { margin: 20 } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'antd menu'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        'horizontal'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 800 } },
        horizontalMenu
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        'horizontal keep open'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 800 } },
        horizontalMenu2
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        'horizontal and click'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 800 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ClickToHideMenu, null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        'vertical'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 200 } },
        verticalMenu
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        'inline'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { margin: 20, width: 400 } },
        inlineMenu
      )
    )
  ), container);
}

render(reactContainer);

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ })

},[319]);
//# sourceMappingURL=antd.js.map