webpackHotUpdate_N_E("pages/index",{

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
      removePostLoading = _useSelector.removePostLoading,
      retweetError = _useSelector.retweetError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var id = me === null || me === void 0 ? void 0 : me.id; //me.id가 있으면 id가 생성됨

  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인하지 않고 게시글을 삭제할 수 없습니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인하지 않고 리트윗할 수 없습니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 38
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 22
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              loading: removePostLoading,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 26
      }, _this),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 36
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 57
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
                lineNumber: 112,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "TczBGIDGDoXIQuPzlI0yoCQCrKo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEVycm9yIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlciIsIm1lIiwiaWQiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2IiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvbkxpa2UiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUEwQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSixJQUFqQjtB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QUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9ESCxDQTNHRDs7R0FBTXBDLFE7VUFDZUcsdUQsRUFDeUJDLHVELEVBRzdCQSx1RDs7O0tBTFhKLFE7QUE2R05BLFFBQVEsQ0FBQ3dDLFNBQVQsR0FBcUI7QUFDakJ2QyxNQUFJLEVBQUN3QyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2pCN0IsTUFBRSxFQUFFNEIsaURBQVMsQ0FBQ0UsTUFERztBQUVqQlQsUUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUZDO0FBR2pCUixXQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEY7QUFJakJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0ksTUFKSjtBQUtqQlIsWUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxPO0FBTWpCWCxVQUFNLEVBQUVRLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTlM7QUFPakI3QixVQUFNLEVBQUUwQixpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtBQVBTLEdBQWhCLEVBUUZJO0FBVGMsQ0FBckI7QUFZZWhELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzNTg3ODU0MDc1NzYzM2ZlZTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLFxyXG4gICAgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge3JlbW92ZVBvc3RMb2FkaW5nLCByZXR3ZWV0RXJyb3J9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaWQgPSBtZT8uaWQ7ICAvL21lLmlk6rCAIOyeiOycvOuptCBpZOqwgCDsg53shLHrkKhcclxuICAgIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocmV0d2VldEVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZighaWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduO2VmOyngCDslYrqs6Ag6rKM7Iuc6riA7J2EIOyCreygnO2VoCDsiJgg7JeG7Iq164uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247ZWY7KeAIOyViuqzoCDrpqztirjsnJftlaAg7IiYIOyXhuyKteuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uUmV0d2VldH0vPixcclxuICAgICAgICAgICAgICAgIGxpa2VkIFxyXG4gICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVuTGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6PEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmVQb3N0fSBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfSBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyID17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh9IOqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6UHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9