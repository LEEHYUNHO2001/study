webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); //main 페이지 불러올때 LOAD_POST_REQUEST해줌

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
        });
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 20
    }, _this), mainPosts.map(function (post, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 41
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(Home, "B3wsxv8J5zxgQ7xJevTRz/D+wdo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwibWFwIiwiaSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRGUsQ0FFZjs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pGLFlBQVEsQ0FBQztBQUNMRyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEbkIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRix5REFBUyxDQUFDLFlBQU07QUFDWixhQUFTRyxRQUFULEdBQW1CO0FBQ2YsVUFBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEtBQ0tGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFEakMsRUFDOEM7QUFDdENYLGdCQUFRLENBQUM7QUFDTEcsY0FBSSxFQUFFQyxpRUFBa0JBO0FBRG5CLFNBQUQsQ0FBUjtBQUdIO0FBQ1I7O0FBQ0RFLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBYlEsRUFhTixFQWJNLENBQVQ7O0FBZUEscUJBQWFTLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBb0JILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQS9CO0FBQUEsTUFBT0MsU0FBUCxpQkFBT0EsU0FBUDs7QUFDQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLGVBQ0tGLEVBQUUsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUtFLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNGLElBQUQsRUFBT0csQ0FBUDtBQUFBLDBCQUFhLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUg7QUFBOUIsU0FBZUEsSUFBSSxDQUFDSSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWI7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWhDRDs7R0FBTXZCLEk7VUFDZUUsdUQsRUF1QkphLHVELEVBQ09BLHVEOzs7S0F6QmxCZixJO0FBa0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42N2E5ODcxNGVlM2VlZmE5NzNlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvL21haW4g7Y6Y7J207KeAIOu2iOufrOyYrOuVjCBMT0FEX1BPU1RfUkVRVUVTVO2VtOykjFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICAgICAgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHN9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCwgaSkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==