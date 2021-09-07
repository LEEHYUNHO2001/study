webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\pages\\about.js",
    _this = undefined,
    _s = $RefreshSig$();









var About = function About() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector.userInfo;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
          children: "LEEHYUNHO | Nodebird"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["\uC9F9\uC9F9 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 48
          }, _this), " ", userInfo.Posts, " "]
        }, "twit", true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["\uD314\uB85C\uC789 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 54
          }, _this), " ", userInfo.Followings, " "]
        }, "following", true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["\uD314\uB85C\uC6CC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 53
          }, _this), " ", userInfo.Followers, " "]
        }, "follower", true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 29
        }, _this)],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            children: userInfo.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 48
          }, _this),
          title: userInfo.nickname,
          description: "Nodebird Clone Coding"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(About, "VUf5XyzzpLtIR9MeDaWx73+wpoI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = About;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJJbmZvIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBSUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixxQkFBbUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTlCO0FBQUEsTUFBT0MsUUFBUCxnQkFBT0EsUUFBUDs7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUlLQSxRQUFRLGdCQUVELHFFQUFDLHlDQUFEO0FBQU0sZUFBTyxFQUFFLGNBQ1g7QUFBQSxtREFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkIsT0FBMEJBLFFBQVEsQ0FBQ0MsS0FBbkM7QUFBQSxXQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVyxlQUVYO0FBQUEseURBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpCLE9BQWdDRCxRQUFRLENBQUNFLFVBQXpDO0FBQUEsV0FBUyxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlcsZUFHWDtBQUFBLHlEQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF4QixPQUErQkYsUUFBUSxDQUFDRyxTQUF4QztBQUFBLFdBQVMsVUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhXLENBQWY7QUFBQSwrQkFLSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxnQkFBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsc0JBQVNILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQixDQUFsQjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5CO0FBQ0ksZUFBSyxFQUFFSixRQUFRLENBQUNJLFFBRHBCO0FBQzhCLHFCQUFXLEVBQUM7QUFEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQyxHQVdILElBZlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFxQkgsQ0F4QkQ7O0dBQU1SLEs7VUFDaUJDLHVEOzs7S0FEakJELEs7O0FBbUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC5mNDIzODc3MzZkZTE3ZDk1YTkwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge0VORH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHtMT0FEX1VTRVJfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHt1c2VySW5mb30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxFRUhZVU5ITyB8IE5vZGViaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIHt1c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgICAgID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynueynuSA8YnIvPiB7dXNlckluZm8uUG9zdHN9IDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+7YyU66Gc7J6JIDxici8+IHt1c2VySW5mby5Gb2xsb3dpbmdzfSA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2VyXCI+7YyU66Gc7JuMIDxici8+IHt1c2VySW5mby5Gb2xsb3dlcnN9IDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGF2YXRhcj17PEF2YXRhcj57dXNlckluZm8ubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX0gZGVzY3JpcHRpb249XCJOb2RlYmlyZCBDbG9uZSBDb2RpbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICBkYXRhIDogMSxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9