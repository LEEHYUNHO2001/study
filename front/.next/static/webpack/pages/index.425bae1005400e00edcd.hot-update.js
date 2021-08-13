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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '이현호'
    },
    content: 'first comment #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://nodebird.com/favicon.ico'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: 'hoho'
      },
      content: '개정판?'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostDone: true,
        addPostLoading: false
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case REMOVE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: true,
        removePostDone: false,
        removePostError: null
      });

    case REMOVE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: state.mainPosts.filter(function (v) {
          return v.id !== action.data;
        }),
        removePostDone: true,
        removePostLoading: false
      });

    case REMOVE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      {
        //mainPosts에서 id가 action.data.postId와 같은 인덱스 찾기
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        }); //mainPosts[postIndex]가 변경될 포스트이므로 얕은복사

        var post = _objectSpread({}, state.mainPosts[postIndex]); //Comments 얕은복사하면서 댓글 넣어주기


        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments)); //Comments가 얕은복사되어 새로운 객체가 생겼으니 mainPosts도 새로운 객체로 만듬

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts); //원래포스트 있던 자리에 post 넣어줌


        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          //메인포스트 변경된값 추가
          mainPosts: mainPosts,
          addCommentDone: true,
          addCommentLoading: false
        });
      }

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }

  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwicG9zdElkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGRTtBQU1SQyxXQUFPLEVBQUUsNEJBTkQ7QUFPUkMsVUFBTSxF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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsnbTtmITtmLgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAnZmlyc3QgY29tbWVudCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nsb3VkZnJvbnQtYXAtbm9ydGhlYXN0LTEuaW1hZ2VzLmFyY3B1Ymxpc2hpbmcuY29tL2Nob3N1bmJpei9YR1A3Q1VHTEc1SEZOTzNXQjI1QzZENlZZNC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOidodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljbydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9jZG4uY21zLXR3ZGlnaXRhbGFzc2V0cy5jb20vY29udGVudC9kYW0vYmxvZy10d2l0dGVyL29mZmljaWFsL2tvX2tyL3Byb2R1Y3RzLzIwMTkvdG9waWNzL0NCLTE0NDQ0X1RvcGljc0NPTU1TXzdfMjAxOTExMDcucG5nLmltZy5mdWxsaGQubWVkaXVtLnBuZydcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdob2hvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+qwnOygle2MkD8nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAneXl6eicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsgqzqs6Dsi7bri6QnLFxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG4vL+uPmeyggSBhY3Rpb24gY3JlYXRlcijslaHshZjsnYQg6re465WM6re465WMIOyDneyEsSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7J207ZiE7Zi4JyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnbTtmITtmLgnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAvL21haW5Qb3N0c+yXkOyEnCBpZOqwgCBhY3Rpb24uZGF0YS5wb3N0SWTsmYAg6rCZ7J2AIOyduOuNseyKpCDssL7quLBcclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgLy9tYWluUG9zdHNbcG9zdEluZGV4XeqwgCDrs4Dqsr3rkKAg7Y+s7Iqk7Yq47J2066+A66GcIOyWleydgOuzteyCrFxyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgICAgICAgLy9Db21tZW50cyDslpXsnYDrs7XsgqztlZjrqbTshJwg64yT6riAIOuEo+yWtOyjvOq4sFxyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgIC8vQ29tbWVudHPqsIAg7JaV7J2A67O17IKs65CY7Ja0IOyDiOuhnOyatCDqsJ3ssrTqsIAg7IOd6rK87Jy864uIIG1haW5Qb3N0c+uPhCDsg4jroZzsmrQg6rCd7LK066GcIOunjOuTrFxyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgLy/sm5Drnpjtj6zsiqTtirgg7J6I642YIOyekOumrOyXkCBwb3N0IOuEo+yWtOykjFxyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL+uplOyduO2PrOyKpO2KuCDrs4Dqsr3rkJzqsJIg7LaU6rCAXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9