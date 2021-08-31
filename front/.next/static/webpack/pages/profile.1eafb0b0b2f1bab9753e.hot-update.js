webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\components\\NicknameEditForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var NicknameEditForm = function NicknameEditForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
      value: nickname,
      onChange: onChangeNickname,
      onSearch: onSubmit,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(NicknameEditForm, "WWSXYapHomVONQ+JoEUC/m/b47E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImRhdGEiLCJzdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUMzQixxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLGtCQUFxQ0MsK0RBQVEsQ0FBQyxDQUFBRCxFQUFFLFNBQUYsSUFBQUEsRUFBRSxXQUFGLFlBQUFBLEVBQUUsQ0FBRUUsUUFBSixLQUFnQixFQUFqQixDQUE3QztBQUFBO0FBQUEsTUFBT0EsUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CSCxZQUFRLENBQUM7QUFDTEksVUFBSSxFQUFFQyxzRUFERDtBQUVMQyxVQUFJLEVBQUVSO0FBRkQsS0FBRCxDQUFSO0FBSUgsR0FMMkIsRUFLekIsQ0FBQ0EsUUFBRCxDQUx5QixDQUE1QjtBQU9BLE1BQU1TLEtBQUssR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU87QUFDekJDLGtCQUFZLEVBQUMsTUFEWTtBQUV6QkMsWUFBTSxFQUFDLG1CQUZrQjtBQUd6QkMsYUFBTyxFQUFFO0FBSGdCLEtBQVA7QUFBQSxHQUFELEVBSWpCLEVBSmlCLENBQXJCO0FBS0Esc0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUVKLEtBQWI7QUFBQSwyQkFDSSxxRUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxXQUFLLEVBQUVULFFBQXJCO0FBQStCLGNBQVEsRUFBRUMsZ0JBQXpDO0FBQTJELGNBQVEsRUFBRUcsUUFBckU7QUFDQSxpQkFBVyxFQUFDLG9CQURaO0FBQ2tCLGlCQUFXLEVBQUM7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBeEJEOztHQUFNVixnQjtVQUNhQyx1RCxFQUNzQkksdUQsRUFDcEJJLHVEOzs7S0FIZlQsZ0I7QUEwQlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMWVhZmIwYjBiMmYxYmFiOTc1M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChtZT8ubmlja25hbWUgfHwgJycpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW25pY2tuYW1lXSk7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOicyMHB4JyxcclxuICAgICAgICBib3JkZXI6JzFweCBzb2xpZCAjZDlkOWQ5JyxcclxuICAgICAgICBwYWRkaW5nOiAnMjBweCdcclxuICAgIH0pLCBbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHZhbHVlPXtuaWNrbmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IG9uU2VhcmNoPXtvblN1Ym1pdH1cclxuICAgICAgICAgICAgYWRkb25CZWZvcmU9XCLri4nrhKTsnoRcIiBlbnRlckJ1dHRvbj1cIuyImOyglVwiLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==