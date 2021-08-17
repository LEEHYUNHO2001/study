webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();










var Profile = function Profile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //로그아웃하는 경우
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        header: "\uD314\uB85C\uC789",
        data: me.Followings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: me.Followers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Profile, "tUE0tHh/zbmWdL3Fa1LDnnM01f4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLHFCQUFhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBRyxFQUFFRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0UsRUFBWCxDQUFILEVBQWtCO0FBQ2RDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLEdBTFEsRUFLUCxDQUFDSixFQUFFLElBQUlBLEVBQUUsQ0FBQ0UsRUFBVixDQUxPLENBQVQ7O0FBTUEsTUFBRyxDQUFDRixFQUFKLEVBQU87QUFDSCxXQUFPLElBQVA7QUFDSDs7QUFBQTtBQUVELHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRUEsRUFBRSxDQUFDSztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSSxxRUFBQyw4REFBRDtBQUFZLGNBQU0sRUFBQyxvQkFBbkI7QUFBeUIsWUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBWUgsQ0F6QkQ7O0dBQU1WLE87VUFDV0MsdUQ7OztLQURYRCxPO0FBMkJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjUxZGNlOTUwYzlkNTE3ZjI5ZjRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL+uhnOq3uOyVhOybg+2VmOuKlCDqsr3smrBcclxuICAgICAgICBpZighKG1lICYmIG1lLmlkKSl7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbbWUgJiYgbWUuaWRdKTtcclxuICAgIGlmKCFtZSl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17bWUuRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiIGRhdGE9e21lLkZvbGxvd2Vyc30gLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9