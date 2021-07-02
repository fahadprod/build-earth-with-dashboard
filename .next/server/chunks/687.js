exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 1875:
/***/ (function(module) {

module.exports = {
  API_SERVER: "http://localhost:3000"
};

/***/ }),

/***/ 244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YR": function() { return /* binding */ authenticate; },
/* harmony export */   "$D": function() { return /* binding */ isAuth; },
/* harmony export */   "kS": function() { return /* binding */ logout; }
/* harmony export */ });
/* unused harmony exports setCookie, removeCookie, getCookie, getCookieFromBrowser, getCookieFromServer, setLocalStorage, removeLocalStorage */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

 // set in cookie

const setCookie = (key, value) => {
  if (false) {}
}; // remove from cookie

const removeCookie = key => {
  if (false) {}
}; // get from cookie such as stored token
// will be useful when we need to make request to server with auth token

const getCookie = (key, req) => {
  // if (process.browser) {
  //     return cookie.get(key);
  // }
  return  false ? 0 : getCookieFromServer(key, req);
};
const getCookieFromBrowser = key => {
  return cookie.get(key);
};
const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  console.log('req.headers.cookie', req.headers.cookie);
  let token = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!token) {
    return undefined;
  }

  let tokenValue = token.split('=')[1];
  console.log('getCookieFromServer', tokenValue);
  return tokenValue;
}; // set in localstoarge

const setLocalStorage = (key, value) => {
  if (false) {}
}; // remove from localstorage

const removeLocalStorage = key => {
  if (false) {}
}; // authenticate user by passing data to cookie and localstorage during signin

const authenticate = (response, next) => {
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  next();
}; // access user info from localstorage

const isAuth = () => {
  if (false) {}
}; // Logout

const logout = () => {
  removeCookie('token');
  removeLocalStorage('user');
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/find-properties");
};

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;