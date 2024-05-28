/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");

document.addEventListener("DOMContentLoaded", function () {
  // Navbar container
  var navbarContainer = document.createElement("div");
  navbarContainer.classList.add("container");

  // Navbar flex container
  var navbarFlex = document.createElement("div");
  navbarFlex.classList.add("navbar-flex");

  // Logo container
  var logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  var logoImg = document.createElement("img");
  logoImg.src = "dist/images/favicon.png";
  console.log("Image....", logoImg.src);
  logoImg.alt = "Uflicks";
  logoContainer.appendChild(logoImg);

  // Navigation
  var nav = document.createElement("nav");
  var menuList = document.createElement("ul");
  menuList.id = "menuitem";
  var menuItems = [{
    text: "Home",
    href: "index.html"
  }, {
    text: "Movies",
    href: "movies.html"
  }, {
    text: "Tv Shows",
    href: "tvshows.html"
  }, {
    text: "Documentaries",
    href: "documentaries.html"
  }, {
    text: "Contact",
    href: "contact.html"
  }];
  menuItems.forEach(function (item) {
    var menuItem = document.createElement("li");
    var link = document.createElement("a");
    link.classList.add("nav-link");
    link.href = item.href;
    link.textContent = item.text;
    menuItem.appendChild(link);
    menuList.appendChild(menuItem);
  });
  nav.appendChild(menuList);

  // Hamburger icon
  var hamburgerIcon = document.createElement("i");
  hamburgerIcon.classList.add("fa", "fa-bars");

  // Subscribe section
  var subscribeDiv = document.createElement("div");
  subscribeDiv.classList.add("nav-toolbar", "subscribe", "flex");
  var searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search");
  var userIcon = document.createElement("i");
  userIcon.id = "playbtn";
  userIcon.classList.add("fas", "fa-user");
  var subscribeBtn = document.createElement("button");
  subscribeBtn.classList.add("btn", "subscribe-btn");
  subscribeBtn.textContent = "SUBSCRIBE";
  subscribeDiv.appendChild(searchIcon);
  subscribeDiv.appendChild(userIcon);
  subscribeDiv.appendChild(subscribeBtn);
  subscribeDiv.appendChild(hamburgerIcon);
  var mobileNavContainer = document.createElement("div");
  mobileNavContainer.classList.add("mobile-menu-container");
  mobileNavContainer.classList.add("mobile-nav-closed");
  var mobileMenuHeader = document.createElement("div");
  mobileMenuHeader.classList.add("mob-menu-header");
  var cloneLogoContainer = logoContainer.cloneNode(true);
  mobileMenuHeader.appendChild(cloneLogoContainer);
  var closeIcon = document.createElement("i");
  closeIcon.classList.add("close-icon", "fa", "fa-close");
  closeIcon.id = "close-icon-mobile-nav";
  mobileMenuHeader.appendChild(closeIcon);
  mobileNavContainer.appendChild(mobileMenuHeader);
  var clonedNav = nav.cloneNode(true);
  mobileNavContainer.appendChild(clonedNav);
  var mobileNavBackdrop = document.createElement("div");
  mobileNavBackdrop.classList.add("mobile-nav-backdrop");
  subscribeDiv.appendChild(mobileNavBackdrop);
  subscribeDiv.appendChild(mobileNavContainer);

  // Assemble the navbar
  navbarFlex.appendChild(logoContainer);
  navbarFlex.appendChild(nav);
  navbarFlex.appendChild(subscribeDiv);
  navbarContainer.appendChild(navbarFlex);

  // Add the navbar to the body
  var header = document.getElementById("header");
  header.innerHTML = navbarContainer.outerHTML;

  // Navbar links
  var navLinks = document.querySelectorAll(".nav-link");

  // Function to handle click event on navbar links
  function handleNavClick(event) {
    // event.preventDefault();
    navLinks.forEach(function (link) {
      return link.classList.remove("active");
    });

    // Add 'active' class to the clicked link
    this.classList.add("active");
    localStorage.setItem("activeLink", this.getAttribute("href"));
  }

  // Add click event listener to each navbar link
  navLinks.forEach(function (link) {
    link.addEventListener("click", handleNavClick);
    var storedActiveLink = localStorage.getItem("activeLink");
    if (link.getAttribute("href") === storedActiveLink) {
      link.classList.add("active");
    }
  });
  var mobileNavBackdropInstance = document.querySelector(".mobile-nav-backdrop");
  var mobileNavContainerInstance = document.querySelector(".mobile-menu-container");
  var hamburgerIconInstance = document.querySelector(".fa-bars");
  hamburgerIconInstance.addEventListener("click", function () {
    mobileNavContainerInstance.classList.remove("mobile-nav-closed");
    mobileNavContainerInstance.classList.add("mobile-nav-open");
    mobileNavBackdropInstance.classList.add("visible");
  });
  // Add event listener to mobile nav close icon

  var closeIconMobileNav = document.getElementById("close-icon-mobile-nav");
  closeIconMobileNav.addEventListener("click", function () {
    mobileNavContainerInstance.classList.remove("mobile-nav-open");
    mobileNavBackdropInstance.classList.remove("visible");
    mobileNavContainerInstance.classList.add("mobile-nav-closed");
  });
});

/***/ }),

/***/ "./src/services/movieCards.js":
/*!************************************!*\
  !*** ./src/services/movieCards.js ***!
  \************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
var moviesBtn = document.getElementById("movies-btn");
var tvshowsBtn = document.getElementById("tvshows-btn");
var documentariesBtn = document.getElementById("documentaries-btn");

// Function to fetch movie data from API
function fetchMovieData() {
  return _fetchMovieData.apply(this, arguments);
} // Function to update movie cards with fetched data
function _fetchMovieData() {
  _fetchMovieData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var options, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // const options = {
          //   method: "GET",
          //   headers: {
          //     "X-RapidAPI-Key": "b59a6d9f3cmsh28955d6aaab4c90p15867bjsn84ab70cf077d",
          //     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          //   },
          // };
          options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRiMDRkZTNhYThhMzBmOGUzMzExODFiNTA3ZjVlMyIsInN1YiI6IjY2Mzg3ZmNjMzU4ZGE3MDEyNDU2ZGY2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iORKLg5dC3haEexcC7ewLzVJ08UKzxaEiaQ3ehLABRg"
            }
          };
          _context.prev = 1;
          _context.next = 4;
          return fetch(url, options);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.error("Error fetching movie data:", _context.t0);
          return _context.abrupt("return", []);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _fetchMovieData.apply(this, arguments);
}
function updateMovieCards() {
  return _updateMovieCards.apply(this, arguments);
} // Call the function to populate movie cards
function _updateMovieCards() {
  _updateMovieCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _movieData$results;
    var baseUrl, movieData, movieDataPart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          baseUrl = "https://image.tmdb.org/t/p/w500";
          _context2.next = 3;
          return fetchMovieData();
        case 3:
          movieData = _context2.sent;
          movieDataPart = document.querySelector(".movie-data-part"); // Clear existing movie cards
          movieDataPart.innerHTML = "";
          console.log(movieData);
          // Iterate through movie data and update each card
          movieData === null || movieData === void 0 || (_movieData$results = movieData.results) === null || _movieData$results === void 0 || _movieData$results.forEach(function (movie, index) {
            var movieCard = document.createElement("div");
            movieCard.classList.add("movie-".concat(index + 1), "movie-card");

            // swiperCardImages[index].src = `${baseUrl}/${movie.poster_path}`;

            movieCard.innerHTML = "\n        <img src=\"".concat(baseUrl, "/").concat(movie.poster_path, "\" alt=\"movie-img\" class=\"movie-img\" />\n        <div class=\"movie-details\">\n          <title class=\"movie-title\">").concat(movie.title || movie.name, "</title>\n          <span class=\"movie-year\">").concat(movie.release_date || movie.first_air_date || "Upcoming", "</span>\n        </div>\n        <div class=\"movie-info\">\n          <span class=\"movie-quality\">HD</span>\n          <div class=\"duration-and-rating\">\n            <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n            <span class=\"rating\">").concat(movie.vote_count, "</span>\n          </div>\n        </div>\n      ");
            movieDataPart.appendChild(movieCard);
          });
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _updateMovieCards.apply(this, arguments);
}
document.addEventListener("DOMContentLoaded", function () {
  moviesBtn.addEventListener("click", function () {
    url = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
    updateMovieCards();
  });
  tvshowsBtn.addEventListener("click", function () {
    url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1";
    updateMovieCards();
  });
  documentariesBtn.addEventListener("click", function () {
    url = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1";
    updateMovieCards();
  });
  updateMovieCards();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/global.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/global.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Screen size breakpoints */
/* Small mobile devices */
/* Portrait mode tablets */
/* Landscape mode tablets */
/* Standard desktops */
/* Large desktops */
/* Screens which are much more larger than regular dekstop */
.home {
  color: var(--white);
  background-image: url("https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  width: 100%;
}
.home .headerbg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgb(34, 31, 31) 0%, rgba(34, 31, 31, 0.4) 100%);
}
.home .headerbg .banner-wrapper {
  width: 80%;
  margin: auto;
  padding: 10rem 0rem;
  /* 6. Banner */
}
@media (max-width: 1280px) {
  .home .headerbg .banner-wrapper {
    width: 90%;
  }
}
.home .headerbg .banner-wrapper .banner {
  font-size: 100%;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2666666667);
}
.home .headerbg .banner-wrapper .banner .sub-title {
  color: var(--customYellow);
  font-size: 1.5em;
  margin-bottom: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.home .headerbg .banner-wrapper .banner h1,
.home .headerbg .banner-wrapper .banner h2,
.home .headerbg .banner-wrapper .banner div,
.home .headerbg .banner-wrapper .banner .banner-btn {
  transform: translateY(20px);
  opacity: 0;
  animation: showBannerContent 1s linear 1 forwards;
}
@keyframes showBannerContent {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.home .headerbg .banner-wrapper .banner h2 {
  animation-delay: 0.5s;
}
.home .headerbg .banner-wrapper .banner h1 {
  animation-delay: 0.7s;
}
.home .headerbg .banner-wrapper .banner div {
  animation-delay: 0.9s;
}
.home .headerbg .banner-wrapper .banner .banner-btn {
  animation-delay: 1.1s;
}
.home .headerbg .banner-wrapper .banner .title {
  font-size: clamp(24px, 3vw + 1rem, 60px);
  line-height: 1.2;
  margin-bottom: 29px;
}
.home .headerbg .banner-wrapper .banner .title span {
  color: var(--customYellow);
}
.home .headerbg .banner-wrapper .banner-meta {
  margin-bottom: 35px;
}
.home .headerbg .banner-wrapper .banner-meta ul {
  display: flex;
  flex-wrap: wrap;
}
.home .headerbg .banner-wrapper .banner-meta ul li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-right: 18px;
}
.home .headerbg .banner-wrapper .banner-meta ul li.quality > span {
  font-size: 11px;
  text-transform: uppercase;
  color: #21232b;
  background: #fff;
  font-weight: 700;
  padding: 7px 11px;
  line-height: 1;
}
.home .headerbg .banner-wrapper .banner-meta ul li.quality > span:last-child {
  background: transparent;
  color: #fff;
  margin-left: 9px;
  border: 2px solid #fff;
  padding: 5px 10px;
}
.home .headerbg .banner-wrapper .banner-meta ul li.category {
  display: flex;
  gap: 5px;
}
.home .headerbg .banner-wrapper .banner-meta ul li.category > a {
  font-size: var(--mainFontSize);
  font-weight: 500;
  color: #e3dfdf;
  text-transform: none;
}
.home .headerbg .banner-wrapper .banner-meta ul li.category > a:hover {
  color: var(--customYellow);
}
.home .headerbg .banner-wrapper .banner-meta ul li.release-time {
  display: flex;
  gap: 1rem;
}
.home .headerbg .banner-wrapper .banner-meta ul li.release-time > span {
  font-size: var(--mainFontSize);
  font-weight: 500;
  color: #e3dfdf;
}
.home .headerbg .banner-wrapper .banner-meta ul li.release-time > span > i {
  color: var(--customYellow);
  font-size: 12px;
  margin-right: 5px;
}

.latest-movies-section {
  display: flex;
  min-height: 840px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--darkBg);
}
.latest-movies-section .content-container {
  width: 80%;
  margin: auto;
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 1600px) {
  .latest-movies-section .content-container {
    width: 90%;
  }
}
@media (max-width: 576px) {
  .latest-movies-section .content-container {
    width: 90%;
  }
}
.latest-movies-section .content-container .content-header-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  gap: 1rem;
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .content-header-part {
    flex-direction: column;
    align-items: center;
  }
}
.latest-movies-section .content-container .content-header-part h2 {
  color: var(--white);
  font-size: 36px;
  text-wrap: nowrap;
}
.latest-movies-section .content-container .content-header-part .content-type-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
@media (max-width: 576px) {
  .latest-movies-section .content-container .content-header-part .content-type-buttons {
    flex-wrap: wrap;
  }
}
.latest-movies-section .content-container .content-header-part .content-type-buttons button {
  border: 2px solid var(--darkBorder);
  background-color: var(--darkBg);
}
.latest-movies-section .content-container .content-header-part .content-type-buttons button:hover {
  border-color: var(--customYellow);
  color: var(--white);
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons {
  display: flex;
  flex-direction: row;
  border: 2px solid var(--darkBorder);
  background-color: var(--darkBg);
  border-radius: 20px;
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons {
    display: none;
  }
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons:hover {
  border-color: var(--customYellow);
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons .left-slide,
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons .right-slide {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--white);
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons .left-slide {
  padding: 10px 8px 10px 24px;
  border-radius: 20px 0px 0px 20px;
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons .right-slide {
  padding: 10px 24px 10px 8px;
  border-radius: 0px 20px 20px 0px;
}
.latest-movies-section .content-container .content-header-part .content-type-buttons .swiper-buttons span {
  border-left: 2px solid var(--darkBorder);
  margin: 10px;
}
.latest-movies-section .content-container .movie-data-part {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: baseline;
  justify-items: center;
  gap: 2rem;
}
@media (max-width: 1440px) {
  .latest-movies-section .content-container .movie-data-part {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .movie-data-part {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .latest-movies-section .content-container .movie-data-part {
    grid-template-columns: repeat(1, 1fr);
  }
}
.latest-movies-section .content-container .movie-data-part .movie-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.latest-movies-section .content-container .movie-data-part .movie-card img {
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 100%;
  max-width: 300px;
  max-height: 420px;
  object-fit: cover;
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .movie-data-part .movie-card img {
    max-width: 350px;
    max-height: 470px;
  }
}
@media (max-width: 768px) {
  .latest-movies-section .content-container .movie-data-part .movie-card img {
    max-width: 440px;
    max-height: 645px;
  }
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .movie-data-part .movie-card .movie-details {
    max-width: 350px;
    max-height: 470px;
  }
}
@media (max-width: 768px) {
  .latest-movies-section .content-container .movie-data-part .movie-card .movie-details {
    max-width: 440px;
    max-height: 645px;
  }
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-details .movie-title {
  display: block;
  color: var(--white);
  font-weight: bold;
  letter-spacing: 1px;
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-details .movie-year {
  color: var(--customYellow);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-wrap: nowrap;
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
}
@media (max-width: 1024px) {
  .latest-movies-section .content-container .movie-data-part .movie-card .movie-info {
    max-width: 350px;
    max-height: 470px;
  }
}
@media (max-width: 768px) {
  .latest-movies-section .content-container .movie-data-part .movie-card .movie-info {
    max-width: 440px;
    max-height: 645px;
  }
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-info .movie-quality {
  color: var(--customYellow);
  border: 2px solid var(--white);
  font-size: 11px;
  padding: 5px 10px;
  font-weight: bold;
  line-height: 1;
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-info .duration-and-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-info .duration-and-rating .fa-thumbs-up {
  color: var(--customYellow);
}
.latest-movies-section .content-container .movie-data-part .movie-card .movie-info .duration-and-rating .rating {
  color: #e3dfdf;
}

header .container {
  color: var(--white);
  width: 80%;
  margin: auto;
  padding: 3rem 0rem;
}
@media (max-width: 1280px) {
  header .container {
    width: 90%;
  }
}

.navbar-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-flex .logo-container img {
  font-weight: bold;
  color: var(--customYellow);
  font-size: 30px;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.navbar-flex .fa-bars {
  display: none;
}
@media (max-width: 1280px) {
  .navbar-flex .fa-bars {
    display: block;
    cursor: pointer;
  }
  .navbar-flex .fa-bars:hover {
    color: var(--customYellow);
  }
}
.navbar-flex .nav-toolbar {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.navbar-flex .nav-toolbar .fa-search,
.navbar-flex .nav-toolbar .fa-user {
  font-size: 17px;
}
.navbar-flex .nav-toolbar .fa-search:hover,
.navbar-flex .nav-toolbar .fa-user:hover {
  color: var(--customYellow);
}
@media (max-width: 1280px) {
  .navbar-flex .nav-toolbar .subscribe-btn {
    display: none;
  }
}
.navbar-flex .nav-toolbar .mobile-menu-container {
  width: 300px;
  max-width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  background-color: var(--darkBg);
}
@media (max-width: 1280px) {
  .navbar-flex .nav-toolbar .mobile-menu-container {
    display: flex;
    flex-direction: column;
    z-index: 99;
  }
  .navbar-flex .nav-toolbar .mobile-menu-container nav {
    display: flex;
  }
  .navbar-flex .nav-toolbar .mobile-menu-container nav ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .navbar-flex .nav-toolbar .mobile-menu-container nav ul li {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-right: 0;
  }
  .navbar-flex .nav-toolbar .mobile-menu-container nav ul li a {
    padding: 10px 25px;
    line-height: 24px;
    font-size: 15px;
    position: relative;
    display: block;
    font-weight: 500;
    text-transform: capitalize;
  }
}
.navbar-flex .nav-toolbar .mobile-menu-container .mob-menu-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px;
}
.navbar-flex .nav-toolbar .mobile-menu-container .mob-menu-header .logo-container img {
  font-size: 24px;
}
.navbar-flex .nav-toolbar .mobile-menu-container .mob-menu-header .close-icon {
  font-size: 20px;
}
.navbar-flex .nav-toolbar .mobile-nav-backdrop {
  display: none;
}
.navbar-flex .nav-toolbar .mobile-nav-backdrop.visible {
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.8;
  background: var(--darkBg);
  transition: 0.6s;
}
.navbar-flex .nav-toolbar .mobile-nav-open {
  transition: 0.6s;
  transform: translateX(0%);
}
.navbar-flex .nav-toolbar .mobile-nav-closed {
  transition: 0.6s;
  transform: translateX(101%);
  opacity: 0;
}

header nav ul {
  display: inline-block;
  font-size: var(--mainFontSize);
}
header nav ul li {
  display: inline-block;
  margin-right: 20px;
}
header nav ul li a {
  color: var(--white);
  transition: all 300ms ease-in-out;
}
header nav ul li a:hover {
  color: var(--customYellow);
}
header nav ul li .active {
  color: var(--customYellow);
}
@media (max-width: 1280px) {
  header nav ul {
    display: none;
  }
}

:root {
  --customYellow: #e4d804;
  --darkBg: #171d22;
  --white: #fff;
  --mainFont: "Poppins";
  --mainFontSize: 14px;
  --buttonBg: #20212b;
  --darkBorder: #2d303d;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  min-height: 100vh;
}

body {
  background-color: var(--darkBg);
  margin: 0;
  font-family: var(--mainFont);
  min-height: s 100vh;
  transition: 0.5s;
}

h1 {
  font-size: 3em;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  transition: 0.5s;
  font-weight: bold;
  text-transform: uppercase;
}

i {
  cursor: pointer;
  transition: 0.5s;
}

.btn {
  font-family: inherit;
  user-select: none;
  -moz-user-select: none;
  background: #12151e none repeat scroll 0 0;
  border: 2px solid var(--customYellow);
  border-radius: 50px;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 0;
  padding: 10px 24px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  white-space: nowrap;
  max-width: 200px;
}

.btn:hover {
  background-color: var(--customYellow);
  color: var(--darkBg);
}
.btn:hover i {
  color: var(--darkBg);
}

.btn > i {
  margin-right: 7px;
}

img {
  display: block;
}`, "",{"version":3,"sources":["webpack://./src/styles/global.scss","webpack://./src/styles/_home.scss","webpack://./src/styles/_nav.scss"],"names":[],"mappings":"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","sourcesContent":["/* Screen size breakpoints */\n$breakpoint-mobile: 576px; /* Small mobile devices */\n$breakpoint-tablet-portrait: 768px; /* Portrait mode tablets */\n$breakpoint-tablet-landscape: 1024px; /* Landscape mode tablets */\n$breakpoint-desktop: 1280px; /* Standard desktops */\n$breakpoint-large-desktop: 1440px; /* Large desktops */\n$breakpoint-very-large-desktop: 1600px; /* Screens which are much more larger than regular dekstop */\n\n@mixin legacyMobile {\n  @media (max-width: $breakpoint-mobile) {\n    @content;\n  }\n}\n@mixin premiumMobile {\n  @media (max-width: $breakpoint-tablet-portrait) {\n    @content;\n  }\n}\n@mixin tabletPortrait {\n  @media (max-width: $breakpoint-tablet-landscape) {\n    @content;\n  }\n}\n@mixin tabletLandscape {\n  @media (max-width: $breakpoint-desktop) {\n    @content;\n  }\n}\n@mixin desktop {\n  @media (max-width: $breakpoint-large-desktop) {\n    @content;\n  }\n}\n@mixin veryLargeDesktop {\n  @media (min-width: $breakpoint-very-large-desktop) {\n    @content;\n  }\n}\n\n// @import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400;1,700;1,900&family=Teko:wght@300..700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n@import \"home\";\n@import \"movies\";\n@import \"tvshows\";\n@import \"contact\";\n@import \"documentaries\";\n@import \"nav\";\n\n// Common value declaration\n:root {\n  --customYellow: #e4d804;\n  --darkBg: #171d22;\n  --white: #fff;\n  --mainFont: \"Poppins\";\n  --mainFontSize: 14px;\n  --buttonBg: #20212b;\n  --darkBorder: #2d303d;\n}\n\n// All elements standart styling\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n// html initial height setting\nhtml {\n  min-height: 100vh;\n}\n\nbody {\n  background-color: var(--darkBg);\n  margin: 0;\n  font-family: var(--mainFont);\n  min-height: s 100vh;\n  transition: 0.5s;\n}\n\nh1 {\n  font-size: 3em;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  transition: 0.5s;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ni {\n  cursor: pointer;\n  transition: 0.5s;\n}\n.btn {\n  font-family: inherit;\n  user-select: none;\n  -moz-user-select: none;\n  background: #12151e none repeat scroll 0 0;\n  border: 2px solid var(--customYellow);\n  border-radius: 50px;\n  color: var(--white);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  line-height: 1.5;\n  margin-bottom: 0;\n  padding: 10px 24px;\n  text-align: center;\n  text-transform: uppercase;\n  touch-action: manipulation;\n  transition: all 0.3s ease 0s;\n  vertical-align: middle;\n  white-space: nowrap;\n  max-width: 200px;\n}\n.btn:hover {\n  background-color: var(--customYellow);\n  i {\n    color: var(--darkBg);\n  }\n  color: var(--darkBg);\n}\n.btn > i {\n  margin-right: 7px;\n}\nimg {\n  // max-width: 100%;\n  display: block;\n}\n","//------- Section 1 -----------\n.home {\n  color: var(--white);\n  background-image: url(\"https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 80vh;\n  width: 100%;\n  .headerbg {\n    width: 100%;\n    height: 100vh;\n    background: linear-gradient(\n      to right,\n      rgba(34, 31, 31, 1) 0%,\n      rgba(34, 31, 31, 0.4) 100%\n    );\n    .banner-wrapper {\n      width: 80%;\n      margin: auto;\n      padding: 10rem 0rem;\n      @include tabletLandscape {\n        width: 90%;\n      }\n      /* 6. Banner */\n\n      .banner {\n        font-size: 100%;\n        text-shadow: 0 5px 10px #0004;\n        .sub-title {\n          color: var(--customYellow);\n          font-size: 1.5em;\n          margin-bottom: 10px;\n          letter-spacing: 4px;\n          text-transform: uppercase;\n        }\n        //  Banner content initial load animation\n        h1,\n        h2,\n        div,\n        .banner-btn {\n          transform: translateY(20px);\n          // filter: blur(20px);\n          opacity: 0;\n          animation: showBannerContent 1s linear 1 forwards;\n        }\n\n        @keyframes showBannerContent {\n          to {\n            opacity: 1;\n            // filter: blur(0);\n            transform: translateY(0);\n          }\n        }\n        h2 {\n          animation-delay: 0.5s;\n        }\n        h1 {\n          animation-delay: 0.7s;\n        }\n        div {\n          animation-delay: 0.9s;\n        }\n        .banner-btn {\n          animation-delay: 1.1s;\n        }\n\n        // End of initial load animation\n\n        .title {\n          span {\n            color: var(--customYellow);\n          }\n          font-size: clamp(24px, 3vw + 1rem, 60px);\n          line-height: 1.2;\n          margin-bottom: 29px;\n        }\n        // .banner-btn {\n        //   .play-icon:hover {\n        //     transform: rotate(360deg);\n        //   }\n        // }\n      }\n\n      .banner-meta {\n        margin-bottom: 35px;\n        ul {\n          display: flex;\n          flex-wrap: wrap;\n          li {\n            display: flex;\n            align-items: center;\n            margin-bottom: 15px;\n            margin-right: 18px;\n\n            &.quality > span {\n              font-size: 11px;\n              text-transform: uppercase;\n              color: #21232b;\n              background: #fff;\n              font-weight: 700;\n              padding: 7px 11px;\n              line-height: 1;\n              &:last-child {\n                background: transparent;\n                color: #fff;\n                margin-left: 9px;\n                border: 2px solid #fff;\n                padding: 5px 10px;\n              }\n            }\n            &.category {\n              display: flex;\n              gap: 5px;\n\n              > a {\n                font-size: var(--mainFontSize);\n                font-weight: 500;\n                color: #e3dfdf;\n                text-transform: none;\n                &:hover {\n                  color: var(--customYellow);\n                }\n              }\n            }\n            &.release-time {\n              display: flex;\n              gap: 1rem;\n              > span {\n                font-size: var(--mainFontSize);\n                font-weight: 500;\n                color: #e3dfdf;\n                > i {\n                  color: var(--customYellow);\n                  font-size: 12px;\n                  margin-right: 5px;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n// Section 2 - Latest movies section\n.latest-movies-section {\n  display: flex;\n  min-height: 840px;\n  max-width: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--darkBg);\n  .content-container {\n    width: 80%;\n    margin: auto;\n    padding: 4rem 0rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    @include veryLargeDesktop {\n      width: 90%;\n    }\n    @include legacyMobile {\n      width: 90%;\n    }\n    .content-header-part {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      padding: 3rem 0;\n      gap: 1rem;\n      @include tabletPortrait {\n        flex-direction: column;\n        align-items: center;\n      }\n\n      h2 {\n        color: var(--white);\n        font-size: 36px;\n        text-wrap: nowrap;\n      }\n      .content-type-buttons {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 1rem;\n        @include legacyMobile {\n          flex-wrap: wrap;\n        }\n        button {\n          border: 2px solid var(--darkBorder);\n          background-color: var(--darkBg);\n          &:hover {\n            border-color: var(--customYellow);\n            color: var(--white);\n          }\n        }\n        .swiper-buttons {\n          display: flex;\n          flex-direction: row;\n          border: 2px solid var(--darkBorder);\n          background-color: var(--darkBg);\n          border-radius: 20px;\n          @include tabletPortrait {\n            display: none;\n          }\n          &:hover {\n            border-color: var(--customYellow);\n          }\n          .left-slide,\n          .right-slide {\n            height: 100%;\n            width: 100%;\n            background-color: transparent;\n            border: none;\n            color: var(--white);\n          }\n          .left-slide {\n            padding: 10px 8px 10px 24px;\n            border-radius: 20px 0px 0px 20px;\n          }\n          .right-slide {\n            padding: 10px 24px 10px 8px;\n            border-radius: 0px 20px 20px 0px;\n          }\n          span {\n            border-left: 2px solid var(--darkBorder);\n            margin: 10px;\n          }\n        }\n      }\n    }\n\n    // ----------------------------\n\n    .movie-data-part {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      align-items: baseline;\n      justify-items: center;\n      gap: 2rem;\n      @include desktop {\n        grid-template-columns: repeat(3, 1fr);\n      }\n      @include tabletPortrait {\n        grid-template-columns: repeat(2, 1fr);\n      }\n      @include premiumMobile {\n        grid-template-columns: repeat(1, 1fr);\n      }\n      .movie-card {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        img {\n          border-radius: 5px;\n          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n            rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n          width: 100%;\n          max-width: 300px;\n          max-height: 420px;\n          object-fit: cover;\n          @include tabletPortrait {\n            max-width: 350px;\n            max-height: 470px;\n          }\n          @include premiumMobile {\n            max-width: 440px;\n            max-height: 645px;\n          }\n        }\n        .movie-details {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          gap: 1rem;\n          width: 100%;\n          max-width: 300px;\n          @include tabletPortrait {\n            max-width: 350px;\n            max-height: 470px;\n          }\n          @include premiumMobile {\n            max-width: 440px;\n            max-height: 645px;\n          }\n          .movie-title {\n            display: block;\n            color: var(--white);\n            font-weight: bold;\n            letter-spacing: 1px;\n          }\n          .movie-year {\n            color: var(--customYellow);\n            font-size: 14px;\n            font-weight: bold;\n            letter-spacing: 1px;\n            text-wrap: nowrap;\n          }\n        }\n        .movie-info {\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          max-width: 300px;\n          @include tabletPortrait {\n            max-width: 350px;\n            max-height: 470px;\n          }\n          @include premiumMobile {\n            max-width: 440px;\n            max-height: 645px;\n          }\n          .movie-quality {\n            color: var(--customYellow);\n            border: 2px solid var(--white);\n            font-size: 11px;\n            padding: 5px 10px;\n            font-weight: bold;\n            line-height: 1;\n          }\n          .duration-and-rating {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            font-weight: 400;\n            font-size: 12px;\n            letter-spacing: 1px;\n            .fa-thumbs-up {\n              color: var(--customYellow);\n            }\n            .rating {\n              color: #e3dfdf;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n// .movie-swipe-section {\n//   max-width: 80%;\n//   background-color: rgba(150, 143, 238, 0.072);\n//   margin: auto;\n//   padding: 2rem 2.5rem;\n//   .slick-slide img {\n//     display: block;\n//     object-fit: cover;\n//     height: 300px;\n//   }\n//   .slick-next:before,\n//   .slick-prev:before {\n//     font-size: 40px;\n//     position: absolute;\n//   }\n//   .slick-prev:before {\n//     right: 2rem;\n//   }\n//   .slick-next:before {\n//     left: 2rem;\n//   }\n// }\n","// Header/Navbar styling\n// Common value declaration\n\nheader .container {\n  // background-color: #171d22;\n  color: var(--white);\n  width: 80%;\n  margin: auto;\n  padding: 3rem 0rem;\n  @include tabletLandscape {\n    width: 90%;\n  }\n}\n.navbar-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .logo-container {\n    img {\n      font-weight: bold;\n      color: var(--customYellow);\n      font-size: 30px;\n      letter-spacing: 4px;\n      text-transform: uppercase;\n    }\n  }\n  .fa-bars {\n    display: none;\n    @include tabletLandscape {\n      display: block;\n      cursor: pointer;\n      &:hover {\n        color: var(--customYellow);\n      }\n    }\n  }\n  .nav-toolbar {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n\n    .fa-search,\n    .fa-user {\n      font-size: 17px;\n      &:hover {\n        color: var(--customYellow);\n      }\n    }\n    .subscribe-btn {\n      @include tabletLandscape {\n        display: none;\n      }\n    }\n    //mobile menu styling\n\n    .mobile-menu-container {\n      width: 300px;\n      max-width: 100%;\n      height: 100%;\n      display: none;\n      position: fixed;\n      right: 0;\n      top: 0;\n      background-color: var(--darkBg);\n\n      @include tabletLandscape {\n        display: flex;\n        flex-direction: column;\n        z-index: 99;\n\n        nav {\n          display: flex;\n          ul {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            li {\n              border-top: 1px solid rgb(255 255 255 / 10%);\n              margin-right: 0;\n              a {\n                padding: 10px 25px;\n                line-height: 24px;\n                font-size: 15px;\n                position: relative;\n                display: block;\n                font-weight: 500;\n                text-transform: capitalize;\n              }\n            }\n          }\n        }\n      }\n      .mob-menu-header {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 30px 25px;\n        .logo-container {\n          img {\n            font-size: 24px;\n          }\n        }\n        .close-icon {\n          font-size: 20px;\n        }\n      }\n    }\n    .mobile-nav-backdrop {\n      display: none;\n    }\n\n    .mobile-nav-backdrop.visible {\n      display: block;\n      position: fixed;\n      right: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n      opacity: 0.8;\n      background: var(--darkBg);\n      transition: 0.6s;\n    }\n    .mobile-nav-open {\n      transition: 0.6s;\n      transform: translateX(0%);\n    }\n    .mobile-nav-closed {\n      transition: 0.6s;\n      transform: translateX(101%);\n      opacity: 0;\n    }\n  }\n}\nheader nav ul {\n  display: inline-block;\n  font-size: var(--mainFontSize);\n  li {\n    display: inline-block;\n    margin-right: 20px;\n\n    a {\n      color: var(--white);\n      transition: all 300ms ease-in-out;\n      &:hover {\n        color: var(--customYellow);\n      }\n    }\n    .active {\n      color: var(--customYellow);\n    }\n  }\n  @include tabletLandscape {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/global.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$":
/*!*******************************************************************************!*\
  !*** ./src/assets/icons/ sync \.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$ ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bars-solid.svg": "./src/assets/icons/bars-solid.svg",
	"./favicon.ico": "./src/assets/icons/favicon.ico",
	"./xmark-solid.svg": "./src/assets/icons/xmark-solid.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$";

/***/ }),

/***/ "./src/assets/images sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$":
/*!********************************************************************************!*\
  !*** ./src/assets/images/ sync \.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$ ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./favicon.png": "./src/assets/images/favicon.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$";

/***/ }),

/***/ "./src/assets/icons/bars-solid.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/bars-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bars-solid.svg";

/***/ }),

/***/ "./src/assets/icons/favicon.ico":
/*!**************************************!*\
  !*** ./src/assets/icons/favicon.ico ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/favicon.ico";

/***/ }),

/***/ "./src/assets/icons/xmark-solid.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/xmark-solid.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/xmark-solid.svg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/favicon.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _services_movieCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movieCards */ "./src/services/movieCards.js");
/* harmony import */ var _services_movieCards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services_movieCards__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



// Example of automated import script for images from multiple directories
var imageFiles1 = __webpack_require__("./src/assets/images sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$");
var imagePaths1 = imageFiles1.keys();
var imageFiles2 = __webpack_require__("./src/assets/icons sync recursive \\.(svg%7Cpng%7Cjpg%7Cjpeg%7Cgif%7Cwebp%7Cico)$");
var imagePaths2 = imageFiles2.keys();
var imagePaths = [].concat(_toConsumableArray(imagePaths1), _toConsumableArray(imagePaths2));
imagePaths.forEach(function (path) {
  var img = new Image();
  if (path.includes("images")) {
    img.src = imageFiles1(path)["default"];
  }
  if (path.includes("icons")) {
    img.src = imageFiles2(path)["default"];
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle8eef833e840ce3953cf9.js.map