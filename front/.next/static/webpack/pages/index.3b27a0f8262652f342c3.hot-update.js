webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '이현호'
    },
    content: 'first comment #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://nodebird.com/favicon.ico'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'hoho'
      },
      content: '개정판?'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'yyzz'
      },
      content: '사고싶다'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph,
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
    }],
    Comments: [{
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; //동적 action creater(액션을 그때그때 생성)

var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '이현호'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '이현호'
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostDone = true;
        draft.removePostLoading = false;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          //조건을 만족하는 게시글 index 찾기
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          }); //게시글에 새 댓글 넣어줌

          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }

    ;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJpbWFnZVVybCIsInNlbnRlbmNlIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUNyQyxpQkFBTixHQUEwQixLQUExQjtBQUNBcUMsYUFBSyxDQUFDbkMsZUFBTixHQUF3QmlDLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFFSixXQUFLZixtQkFBTDtBQUNJYSxhQUFLLENBQUNsQyxpQkFBTixHQUEwQixJQUExQjtBQUNBa0MsYUFBSyxDQUFDakMsY0FBTixHQUF1QixLQUF2QjtBQUNBaUMsYUFBSyxDQUFDaEMsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUVKLFdBQUtvQixtQkFBTDtBQUF5QjtBQUNyQjtBQUNBLGNBQU1pQixJQUFJLEdBQUdMLEtBQUssQ0FBQ25ELFNBQU4sQ0FBZ0J5RCxJQUFoQixDQUFxQixVQUFDRixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQ3RELEVBQUYsS0FBU2dELE1BQU0sQ0FBQ1AsSUFBUCxDQUFZZ0IsTUFBNUI7QUFBQSxXQUFyQixDQUFiLENBRnFCLENBR3JCOztBQUNBRixjQUFJLENBQUMvQyxRQUFMLENBQWMyQyxPQUFkLENBQXNCTixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZdEMsT0FBYixDQUFsQztBQUNBK0MsZUFBSyxDQUFDbEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtDLGVBQUssQ0FBQ2pDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNIOztBQUVELFdBQUtzQixtQkFBTDtBQUNJVyxhQUFLLENBQUNsQyxpQkFBTixHQUEwQixLQUExQjtBQUNBa0MsYUFBSyxDQUFDaEMsZUFBTixHQUF3QjhCLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFFSjtBQUNJO0FBekRSOztBQTBEQztBQUNKLEdBNUQ0RCxDQUE3QztBQUFBLENBQWhCOztBQThEZU4sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2IyN2EwZjgyNjI2NTJmMzQyYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7J207ZiE7Zi4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ2ZpcnN0IGNvbW1lbnQgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9jbG91ZGZyb250LWFwLW5vcnRoZWFzdC0xLmltYWdlcy5hcmNwdWJsaXNoaW5nLmNvbS9jaG9zdW5iaXovWEdQN0NVR0xHNUhGTk8zV0IyNUM2RDZWWTQuanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY28nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6J2h0dHBzOi8vY2RuLmNtcy10d2RpZ2l0YWxhc3NldHMuY29tL2NvbnRlbnQvZGFtL2Jsb2ctdHdpdHRlci9vZmZpY2lhbC9rb19rci9wcm9kdWN0cy8yMDE5L3RvcGljcy9DQi0xNDQ0NF9Ub3BpY3NDT01NU183XzIwMTkxMTA3LnBuZy5pbWcuZnVsbGhkLm1lZGl1bS5wbmcnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6W3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaG9obycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfqsJzsoJXtjJA/JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3l5enonLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7IKs6rOg7Iu264ukJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuICAgIEFycmF5KDIwKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgsXHJcbiAgICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSkpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG4vL+uPmeyggSBhY3Rpb24gY3JlYXRlcijslaHshZjsnYQg6re465WM6re465WMIOyDneyEsSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7J207ZiE7Zi4JyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnbTtmITtmLgnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+ICAgICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6eyAgXHJcbiAgICAgICAgICAgIC8v7KGw6rG07J2EIOunjOyhse2VmOuKlCDqsozsi5zquIAgaW5kZXgg7LC+6riwXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgLy/qsozsi5zquIDsl5Ag7IOIIOuMk+q4gCDrhKPslrTspIxcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=