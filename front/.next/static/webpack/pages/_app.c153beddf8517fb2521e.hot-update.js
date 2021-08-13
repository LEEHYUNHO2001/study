webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
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
      src: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg'
    }, {
      src: 'https://nodebird.com/favicon.ico'
    }, {
      src: 'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        nickname: 'hoho'
      },
      content: '개정판?'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        nickname: 'yyzz'
      },
      content: '사고싶다'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUFDO0FBQ1JDLE1BQUUsRUFBRSxDQURJO0FBRVJDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZFO0FBTVJDLFdBQU8sRUFBRSw0QkFORDtBQU9SQyxVQUFNLEVBQUUsQ0FBQztBQUNMQyxTQUFHLEVBQUM7QUFEQyxLQUFELEVBRUw7QUFDQ0EsU0FBRyxFQUFDO0FBREwsS0FGSyxFQUlMO0FBQ0NBLFNBQUcsRUFBQztBQURMLEtBSkssQ0FQQTtBQWNSQyxZQUFRLEVBQUMsQ0FBQztBQUNOTixRQUFF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QUVJaEIseUJBQWlCLEVBQUUsSUFGdkI7QUFHSUMsc0JBQWMsRUFBRSxLQUhwQjtBQUlJQyx1QkFBZSxFQUFFO0FBSnJCOztBQU1KLFNBQUtLLG1CQUFMO0FBQXlCO0FBQ3JCO0FBQ0EsWUFBTVksU0FBUyxHQUFHSCxLQUFLLENBQUM5QixTQUFOLENBQWdCa0MsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNsQyxFQUFGLEtBQVM4QixNQUFNLENBQUNQLElBQVAsQ0FBWVksTUFBNUI7QUFBQSxTQUExQixDQUFsQixDQUZxQixDQUdyQjs7QUFDQSxZQUFNQyxJQUFJLHFCQUFPUCxLQUFLLENBQUM5QixTQUFOLENBQWdCaUMsU0FBaEIsQ0FBUCxDQUFWLENBSnFCLENBS3JCOzs7QUFDQUksWUFBSSxDQUFDOUIsUUFBTCxJQUFpQnFCLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVlwQixPQUFiLENBQTdCLHNHQUF1RGlDLElBQUksQ0FBQzlCLFFBQTVELEdBTnFCLENBT3JCOztBQUNBLFlBQU1QLFNBQVMsR0FBRyw2RkFBSThCLEtBQUssQ0FBQzlCLFNBQWIsQ0FBZixDQVJxQixDQVNyQjs7O0FBQ0FBLGlCQUFTLENBQUNpQyxTQUFELENBQVQsR0FBdUJJLElBQXZCO0FBRUEsK0NBQ09QLEtBRFA7QUFFSTtBQUNBOUIsbUJBQVMsRUFBVEEsU0FISjtBQUlJZSx3QkFBYyxFQUFFLElBSnBCO0FBS0lELDJCQUFpQixFQUFFO0FBTHZCO0FBT0g7O0FBQ0QsU0FBS1EsbUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJaEIseUJBQWlCLEVBQUUsS0FGdkI7QUFHSUUsdUJBQWUsRUFBRWUsTUFBTSxDQUFDQztBQUg1Qjs7QUFLSjtBQUNJLGFBQU9GLEtBQVA7QUF2RFI7O0FBd0RDO0FBRUosQ0EzREQ7O0FBNkRlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMxNTNiZWRkZjg1MTdmYjI1MjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsnbTtmITtmLgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAnZmlyc3QgY29tbWVudCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nsb3VkZnJvbnQtYXAtbm9ydGhlYXN0LTEuaW1hZ2VzLmFyY3B1Ymxpc2hpbmcuY29tL2Nob3N1bmJpei9YR1A3Q1VHTEc1SEZOTzNXQjI1QzZENlZZNC5qcGcnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOidodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljbydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9jZG4uY21zLXR3ZGlnaXRhbGFzc2V0cy5jb20vY29udGVudC9kYW0vYmxvZy10d2l0dGVyL29mZmljaWFsL2tvX2tyL3Byb2R1Y3RzLzIwMTkvdG9waWNzL0NCLTE0NDQ0X1RvcGljc0NPTU1TXzdfMjAxOTExMDcucG5nLmltZy5mdWxsaGQubWVkaXVtLnBuZydcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hvaG8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6rCc7KCV7YyQPycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3l5enonLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7IKs6rOg7Iu264ukJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG4vL+uPmeyggSBhY3Rpb24gY3JlYXRlcijslaHshZjsnYQg6re465WM6re465WMIOyDneyEsSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7J207ZiE7Zi4JyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnbTtmITtmLgnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIC8vbWFpblBvc3Rz7JeQ7IScIGlk6rCAIGFjdGlvbi5kYXRhLnBvc3RJZOyZgCDqsJnsnYAg7J24642x7IqkIOywvuq4sFxyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAvL21haW5Qb3N0c1twb3N0SW5kZXhd6rCAIOuzgOqyveuQoCDtj6zsiqTtirjsnbTrr4DroZwg7JaV7J2A67O17IKsXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICAvL0NvbW1lbnRzIOyWleydgOuzteyCrO2VmOuptOyEnCDrjJPquIAg64Sj7Ja07KO86riwXHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgLy9Db21tZW50c+qwgCDslpXsnYDrs7XsgqzrkJjslrQg7IOI66Gc7Jq0IOqwneyytOqwgCDsg53qsrzsnLzri4ggbWFpblBvc3Rz64+EIOyDiOuhnOyatCDqsJ3ssrTroZwg66eM65OsXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAvL+ybkOuemO2PrOyKpO2KuCDsnojrjZgg7J6Q66as7JeQIHBvc3Qg64Sj7Ja07KSMXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8v66mU7J247Y+s7Iqk7Yq4IOuzgOqyveuQnOqwkiDstpTqsIBcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=