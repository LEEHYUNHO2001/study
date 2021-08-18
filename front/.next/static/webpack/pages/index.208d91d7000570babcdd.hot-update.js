webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\components\\FollowButton.js",
    _this = undefined;






var FollowButton = function FollowButton(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    children: "\uD314\uB85C\uC6B0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, _this);
};

_c = FollowButton;
FollowButton.propTtpes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();














var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var id = me === null || me === void 0 ? void 0 : me.id; //me.id가 있으면 id가 생성됨

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 38
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 23
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 22
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              loading: removePostLoading,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)],
      exrta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 20
      }, _this),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 36
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 57
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: "".concat(post.Comments.length, " \uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "6nNMA1GNGZIfE/34dINlYnTk9ls=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmQuanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInByb3BUdHBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJQb3N0Q2FyZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwibWUiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQVk7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDN0Isc0JBQU8scUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNILENBRkQ7O0tBQU1ELFk7QUFJTkEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCO0FBQ3JCRCxNQUFJLEVBQUVFLG9EQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREYsQ0FBekI7QUFJZUwsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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d2VicGFjay9wYWdlcy9pbmRleC4yMDhkOTFkNzAwMDU3MGJhYmNkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHtwb3N0fSkgPT4ge1xyXG4gICAgcmV0dXJuIDxCdXR0b24+7YyU66Gc7JqwPC9CdXR0b24+XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR0cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLFxyXG4gICAgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlkID0gbWU/LmlkOyAgLy9tZS5pZOqwgCDsnojsnLzrqbQgaWTqsIAg7IOd7ISx65CoXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgbGlrZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6PEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmVQb3N0fSBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBleHJ0YT17PEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfSBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyID17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh9IOqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6UHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==