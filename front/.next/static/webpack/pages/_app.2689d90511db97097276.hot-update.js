webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  logInLoading: false,
  //로그인 시도중(true면 로딩창)
  logInDone: false,
  logInError: null,
  logOutLoding: false,
  //로그아웃 시도중(true면 로딩창)
  logOutDone: false,
  logOutError: null,
  signUpLoding: false,
  //회원가입 시도중(true면 로딩창)
  signUpDone: false,
  signUpFailure: null,
  changeNicknameLoding: false,
  //닉네임 변경 시도중(true면 로딩창)
  changeNicknameDone: false,
  changeNicknameFailure: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '이현호',
    id: 1,
    //시퀄라이징에서 합쳐주기 때문에 대문자
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: 'zerocho'
    }, {
      nickname: 'LEEHYUNHO2001'
    }],
    Followers: [{
      nickname: 'nodebird'
    }]
  });
};

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        //me: null, //로딩창에서 데이터 없애고 보여줌
        logInError: null,
        logInDone: false
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoding: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoding: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoding: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoding: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoding: false,
        signUpDone: true,
        me: null
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoding: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoding: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoding: false,
        changeNicknameDone: true,
        me: null
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoding: false,
        changeNicknameError: action.error
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9kaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9kaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRmFpbHVyZSIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8s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QUFKUjs7QUFNSixTQUFLYyx1QkFBTDtBQUNJLDZDQUNPa0IsS0FEUDtBQUVJbkMsNEJBQW9CLEVBQUUsS0FGMUI7QUFHSXVDLDJCQUFtQixFQUFFSCxNQUFNLENBQUNDO0FBSGhDOztBQUtKO0FBQ0ksYUFBT0YsS0FBUDtBQW5GUjtBQXVGSCxDQXhGRDs7QUEwRmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjY4OWQ5MDUxMWRiOTcwOTcyNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAgLy/roZzqt7jsnbgg7Iuc64+E7KSRKHRydWXrqbQg66Gc65Sp7LC9KVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXRMb2Rpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJEodHJ1ZeuptCDroZzrlKnssL0pXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9kaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRKHRydWXrqbQg66Gc65Sp7LC9KVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBGYWlsdXJlOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2Rpbmc6IGZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRKHRydWXrqbQg66Gc65Sp7LC9KVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ydtO2YhO2YuCcsXHJcbiAgICBpZDogMSxcclxuICAgIC8v7Iuc7YCE65287J207KeV7JeQ7IScIO2VqeyzkOyjvOq4sCDrlYzrrLjsl5Ag64yA66y47J6QXHJcbiAgICBQb3N0czogW3tpZCA6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICd6ZXJvY2hvJ30sIHtuaWNrbmFtZTogJ0xFRUhZVU5ITzIwMDEnfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7bmlja25hbWU6ICdub2RlYmlyZCd9XSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvL21lOiBudWxsLCAvL+uhnOuUqeywveyXkOyEnCDrjbDsnbTthLAg7JeG7JWg6rOgIOuztOyXrOykjFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0TG9kaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRMb2Rpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcExvZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwTG9kaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2Rpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==