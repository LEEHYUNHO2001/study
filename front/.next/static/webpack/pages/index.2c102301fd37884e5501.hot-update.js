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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostsLoading = _useSelector2.loadPostsLoading,
      retweetError = _useSelector2.retweetError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]); //main 페이지 불러올때 LOAD_MY_INFO_REQUEST, LOAD_POST_REQUEST해줌

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 20
    }, _this), mainPosts.map(function (post, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 41
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, _this);
};

_s(Home, "JJ35pOdX8A/2C+Dk8f/4zfUIIwQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsInVzZUVmZmVjdCIsImFsZXJ0IiwidHlwZSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFpRUgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBNUU7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGlCQUFrQkEsV0FBbEI7QUFBQSxNQUErQkMsZ0JBQS9CLGlCQUErQkEsZ0JBQS9CO0FBQUEsTUFBaURDLFlBQWpELGlCQUFpREEsWUFBakQ7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdELFlBQUgsRUFBZ0I7QUFDWkUsV0FBSyxDQUFDRixZQUFELENBQUw7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFDQSxZQUFELENBSk0sQ0FBVCxDQUxlLENBV2Y7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaWCxZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFQyxtRUFBb0JBO0FBRHJCLEtBQUQsQ0FBUjtBQUdBZCxZQUFRLENBQUM7QUFDTGEsVUFBSSxFQUFFRSxpRUFBa0JBO0FBRG5CLEtBQUQsQ0FBUjtBQUdILEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQUoseURBQVMsQ0FBQyxZQUFNO0FBQ1osYUFBU0ssUUFBVCxHQUFtQjtBQUNmLFVBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUNHRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBRDlDLEVBQ2tEO0FBQzFDLFlBQUdkLFdBQVcsSUFBSSxDQUFDQyxnQkFBbkIsRUFBb0M7QUFDaENULGtCQUFRLENBQUM7QUFDTGEsZ0JBQUksRUFBRUUsaUVBQWtCQTtBQURuQixXQUFELENBQVI7QUFHSDtBQUNKO0FBQ1I7O0FBQ0RFLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBZlEsRUFlTixDQUFDUixXQUFELEVBQWNDLGdCQUFkLENBZk0sQ0FBVDtBQWlCQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLGVBQ0tKLEVBQUUsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURYLEVBRUtFLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBYyxVQUFDbkIsSUFBRCxFQUFPb0IsQ0FBUDtBQUFBLDBCQUFhLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRXBCO0FBQTlCLFNBQWVBLElBQUksQ0FBQ3FCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYjtBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBNUNEOztHQUFNNUIsSTtVQUNlRSx1RCxFQUNKQyx1RCxFQUNvREEsdUQ7OztLQUgvREgsSTtBQThDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmMxMDIzMDFmZDM3ODg0ZTU1MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7bWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyZXR3ZWV0RXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChyZXR3ZWV0RXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZXR3ZWV0RXJyb3JdKTtcclxuXHJcbiAgICAvL21haW4g7Y6Y7J207KeAIOu2iOufrOyYrOuVjCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9QT1NUX1JFUVVFU1TtlbTspIxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCBcclxuICAgICAgICAgICAgICAgID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QsIGkpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=