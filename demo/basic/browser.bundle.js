/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Router = t() : e.Router = t();
}(undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.i = function (e) {
      return e;
    }, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 0);
  }([function (e, t) {
    function r(e) {
      var t = [];return e = e.replace(s[0], "\\$&").replace(s[1], "(?:$1)?").replace(s[2], function (e, r) {
        return e && t.push(e.replace(":", "")), r ? e : "([^/?]+)";
      }).replace(s[3], function (e, r) {
        return e && t.push(e.replace("*", "")), "([^?]*?)";
      }), { regexp: new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$"), matchs: t };
    }function n(e, t) {
      for (var r = e.exec(t).slice(1), n = [], o = 0; o < r.length; o++) {
        n.push(decodeURIComponent(r[o]) || null);
      }return n;
    }function o() {
      var e = location.search,
          t = /(\w+)=([^\?|^\&]+)/gi,
          r = {};return e.replace(t, function (e, t, n) {
        r[t] = n;
      }), r;
    }function u() {
      for (var e = 0; e < p.routes.length; e++) {
        var t = r(p.routes[e].path);if (t.regexp.test(p.req.path)) {
          var o = n(t.regexp, p.req.path);p.req.params = p.req.params || {};for (var u = 0; u < t.matchs.length; u++) {
            p.req.params[t.matchs[u]] = o[u];
          }p.routes[e].fn.call(p, p.req, p.res, p.next);
        }
      }
    }function a() {
      p.req.path !== location.pathname && (p.req.path = location.pathname, p.req.query = o(), u());
    }function c(e, t, r) {
      "object" == (typeof document === "undefined" ? "undefined" : _typeof(document)) ? (p.env = "browser", p.req = { query: {} }, p.res = {}, window.addEventListener("popstate", a, !1)) : r ? (p.req = e, p.res = t, p.next = r, p.env = "express") : (p.ctx = e, p.req = p.ctx.request, p.req.path = p.req.url, p.res = p.ctx.response, p.next = t, p.env = "koa");for (var n in p.resMethods) {
        p.res[n] = p.resMethods[n].bind(p);
      }"browser" === p.env ? a() : u();
    }var s = [/[\-{}\[\]+?.,\\\^$|#\s]/g, /\((.*?)\)/g, /(\(\?)?:\w+/g, /\*\w+/g],
        p = { routes: [], resMethods: {} };c.get = function (e, t) {
      p.routes.push({ path: e, fn: t });
    }, c.addResMethod = function (e, t) {
      p.resMethods[e] = t;
    }, c.go = function (e, t) {
      t ? history.replaceState({ path: e }, null, e) : history.pushState({ path: e }, null, e), a();
    }, c.back = function () {
      history.back();
    }, c.proxyLinks = function (e) {
      for (var t = 0; t < e.length; t++) {
        e[t].addEventListener("click", function (e) {
          c.go(e.target.href), e.preventDefault();
        });
      }
    }, e.exports = c;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var router = __webpack_require__(1);

router.get('/', function (req, res) {
  res.view('Hello MinRouter');
});

router.get('/hello/:name', function (req, res) {
  res.view('Hello: ' + req.params.name + ', ' + req.query.name);
});

router.get('/open/:document/:file', function (req, res) {
  res.view('opening file:' + req.params.document + '/' + req.params.file);
});

router.get('/pages/p:page', function (req, res) {
  res.view('book\'s page is:' + req.params.page);
});

router.get('/files/*path', function (req, res) {
  res.view('files path:' + req.params.path);
});

module.exports = router;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var router = __webpack_require__(4);

router.addResMethod('view', function (content) {
  console.log(content);
  document.getElementById('content').innerText = content;
});

router();

router.proxyLinks(document.querySelectorAll('a'));

/***/ })
/******/ ]);