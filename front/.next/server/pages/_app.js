module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\user\\cmder\\projects\\nodebird\\front\\pages\\_app.js";








const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //이전상태와 액션을 이용하여 다음상태를 만듬

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }

    ;
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
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
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; //동적 action creater(액션을 그때그때 생성)

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostDone = true;
        draft.likePostLoading = false;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostDone = true;
        draft.unlikePostLoading = false;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      //기존 게시글에  concat으로 action.data 추가.
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.loadPostsDone = true;
      draft.loadPostsLoading = false; //50개까지만 더 불러오기

      draft.hasMorePost = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
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
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId); //게시글에 새 댓글 넣어줌

        post.Comments.unshift(action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadUserLoading: false,
  //유저정보 가져오기 시도중(true면 로딩창)
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  //팔로우 시도중(true면 로딩창)
  followDone: false,
  followError: null,
  unfollowLoading: false,
  //언팔로우 시도중(true면 로딩창)
  unfollowDone: false,
  unfollowError: null,
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
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadUserLoading = false;
      draft.loadUserDone = true;
      draft.me = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.me.Followings.push({
        id: action.data
      });
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true; //me: null, //로딩창에서 데이터 없애고 보여줌

      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoding = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoding = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoding = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoding = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoding = false;
      draft.signUpDone = true;
      draft.me = null;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoding = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoding = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoding = false;
      draft.changeNicknameDone = true;
      draft.me = null;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoding = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  //data가 주소에 들어가있기때문에 2번째 인자로 주지 않아도 된다.
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', {
    content: data
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/folow');
}

function* follow(action) {
  try {
    //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(followAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(unfollowAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJmaW5kIiwidiIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImVycm9yIiwiZmlsdGVyIiwiY29uY2F0IiwibGVuZ3RoIiwidW5zaGlmdCIsIkNvbW1lbnRzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBGYWlsdXJlIiwiY2hhbmdlTmlja25hbWVMb2RpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2luZ3MiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwiY29uc29sZSIsInJlc3BvbnNlIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwibG9hZFBvc3RzQVBJIiwiZ2V0IiwibG9hZFBvc3RzIiwiYWRkUG9zdEFQSSIsImNvbnRlbnQiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwibG9nIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBaUI7QUFDOUIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7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Q0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnJCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDaEosaURBQUQsRUFBVTJJLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJ4RSw4Q0FBbkIsQ0FBakI7QUFHQSxTQUFPcUUsS0FBUDtBQUNILENBWkQ7O0FBY0EsTUFBTXRNLE9BQU8sR0FBRzBNLHdFQUFhLENBQUNaLGNBQUQsRUFDekI7QUFBQ2EsT0FBSztBQUFOLENBRHlCLENBQTdCO0FBR2UzTSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy/snbTsoITsg4Htg5zsmYAg7JWh7IWY7J2EIOydtOyaqe2VmOyXrCDri6TsnYzsg4Htg5zrpbwg66eM65OsXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHsgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm57Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0OiB0cnVlLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuLy/rj5nsoIEgYWN0aW9uIGNyZWF0ZXIo7JWh7IWY7J2EIOq3uOuVjOq3uOuVjCDsg53shLEpXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiAgICAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIC8v6riw7KG0IOqyjOyLnOq4gOyXkCAgY29uY2F07Jy866GcIGFjdGlvbi5kYXRhIOy2lOqwgC5cclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vNTDqsJzquYzsp4Drp4wg642UIOu2iOufrOyYpOq4sFxyXG4gICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7ICBcclxuICAgICAgICAgICAgLy/sobDqsbTsnYQg66eM7KGx7ZWY64qUIOqyjOyLnOq4gCBpbmRleCDssL7quLBcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAvL+qyjOyLnOq4gOyXkCDsg4gg64yT6riAIOuEo+yWtOykjFxyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsICAvL+ycoOyggOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRKHRydWXrqbQg66Gc65Sp7LC9KVxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsICAvL+2MlOuhnOyasCDsi5zrj4TspJEodHJ1ZeuptCDroZzrlKnssL0pXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgIC8v7Ja47YyU66Gc7JqwIOyLnOuPhOykkSh0cnVl66m0IOuhnOuUqeywvSlcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsICAvL+uhnOq3uOyduCDsi5zrj4TspJEodHJ1ZeuptCDroZzrlKnssL0pXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvZGluZzogZmFsc2UsIC8v66Gc6re47JWE7JuDIOyLnOuPhOykkSh0cnVl66m0IOuhnOuUqeywvSlcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2lnblVwTG9kaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRKHRydWXrqbQg66Gc65Sp7LC9KVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBGYWlsdXJlOiBudWxsLFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9kaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkSh0cnVl66m0IOuhnOuUqeywvSlcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUZhaWx1cmU6IG51bGwsXHJcblxyXG4gICAgbWU6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL21lOiBudWxsLCAvL+uhnOuUqeywveyXkOyEnCDrjbDsnbTthLAg7JeG7JWg6rOgIOuztOyXrOykjFxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7YWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCB0aHJvdHRsZX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLCBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QgLFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSl7XHJcbiAgICAvL2RhdGHqsIAg7KO87IaM7JeQIOuTpOyWtOqwgOyeiOq4sOuVjOusuOyXkCAy67KI7Ke4IOyduOyekOuhnCDso7zsp4Ag7JWK7JWE64+EIOuQnOuLpC5cclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCl7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHthbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBcclxuICAgIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbG93Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy/shJzrsoTrpbwg6rWs7ZiE7ZWY6riwIOyghOq5jOyngCBkZWxheeuhnCDruYTrj5nquLDsoIHsnbgg7Zqo6rO8IOyjvOyekC5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICAvL+yEnOuyhOulvCDqtaztmITtlZjquLAg7KCE6rmM7KeAIGRlbGF566GcIOu5hOuPmeq4sOyggeyduCDtmqjqs7wg7KO87J6QLlxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIFxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCBcclxuICAgIHtkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9