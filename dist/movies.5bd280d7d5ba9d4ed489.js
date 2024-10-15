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
  logoImg.classList.add("logo");
  var logoText = document.createElement("span");
  logoText.textContent = "Uflicks";
  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);
  logoText.classList.add("logo-text");

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
  var searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  searchContainer.innerHTML = "\n      <input type=\"text\" name=\"search\" class=\"search-input\" placeholder=\"Search for movies...\" />\n      <i class=\"fas fa-search search-btn\" />\n    ";
  var userIcon = document.createElement("i");
  userIcon.id = "playbtn";
  userIcon.classList.add("fas", "fa-user");
  var subscribeBtn = document.createElement("button");
  subscribeBtn.classList.add("btn", "subscribe-btn");
  subscribeBtn.textContent = "SUBSCRIBE";
  subscribeDiv.appendChild(searchContainer);
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
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
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

// Call the function to populate movie cards
document.addEventListener("DOMContentLoaded", function () {
  var moviesBtn = document.getElementById("movies-btn");
  var tvshowsBtn = document.getElementById("tvshows-btn");
  var documentariesBtn = document.getElementById("documentaries-btn");

  // Function to fetch movie data from API
  function fetchMovieData() {
    return _fetchMovieData.apply(this, arguments);
  } // Function to update movie cards with fetched data
  function _fetchMovieData() {
    _fetchMovieData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var searchQuery,
        options,
        fetchUrl,
        response,
        data,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            searchQuery = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRiMDRkZTNhYThhMzBmOGUzMzExODFiNTA3ZjVlMyIsInN1YiI6IjY2Mzg3ZmNjMzU4ZGE3MDEyNDU2ZGY2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iORKLg5dC3haEexcC7ewLzVJ08UKzxaEiaQ3ehLABRg"
              }
            };
            _context.prev = 2;
            fetchUrl = url;
            if (searchQuery) {
              fetchUrl = "https://api.themoviedb.org/3/search/movie?query=".concat(searchQuery, "&language=en-US&page=1");
            }
            _context.next = 7;
            return fetch(fetchUrl, options);
          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();
          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error("Error fetching movie data:", _context.t0);
            return _context.abrupt("return", []);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 14]]);
    }));
    return _fetchMovieData.apply(this, arguments);
  }
  function updateMovieCards() {
    return _updateMovieCards.apply(this, arguments);
  }
  function _updateMovieCards() {
    _updateMovieCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _movieData$results;
      var searchQuery,
        baseUrl,
        movieData,
        movieDataPart,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            searchQuery = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
            baseUrl = "https://image.tmdb.org/t/p/w500";
            _context2.next = 4;
            return fetchMovieData(searchQuery);
          case 4:
            movieData = _context2.sent;
            movieDataPart = document.querySelector(".movie-data-part"); // Clear existing movie cards
            movieDataPart.innerHTML = "";
            console.log(movieData);
            // Iterate through movie data and update each card
            movieData === null || movieData === void 0 || (_movieData$results = movieData.results) === null || _movieData$results === void 0 || _movieData$results.forEach(function (movie, index) {
              var movieCard = document.createElement("div");
              movieCard.classList.add("movie-".concat(index + 1), "movie-card");
              movieCard.innerHTML = "\n        <img src=\"".concat(baseUrl, "/").concat(movie.poster_path, "\" alt=\"movie-img\" class=\"movie-img\" />\n        <div class=\"movie-details\">\n          <title class=\"movie-title\">").concat(movie.title || movie.name, "</title>\n          <span class=\"movie-year\">").concat(movie.release_date || movie.first_air_date || "Upcoming", "</span>\n        </div>\n        <div class=\"movie-info\">\n          <span class=\"movie-quality\">HD</span>\n          <div class=\"duration-and-rating\">\n            <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n            <span class=\"rating\">").concat(movie.vote_count, "</span>\n          </div>\n        </div>\n      ");
              movieDataPart.appendChild(movieCard);
            });
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _updateMovieCards.apply(this, arguments);
  }
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

  // Create and ssappend the search bar
  var searchContainer = document.querySelector(".search-container");
  var searchInput = searchContainer.querySelector(".search-input");
  var searchIcon = document.querySelector(".fa-search");
  searchIcon.addEventListener("click", function () {
    searchContainer.classList.toggle("visible");
    $("html, body").animate({
      scrollTop: $("#media-cards-section").offset().top
    }, 1000);
  });
  var searchBtn = searchContainer.querySelector(".search-btn");
  // update movie cards with search results when search icon is clicked
  searchBtn.addEventListener("click", function () {
    var query = searchInput.value.trim();
    if (query) {
      updateMovieCards(query);
    }
  });
  // update movie cards with search results when Enter is clicked
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var query = searchInput.value.trim();
      if (query) {
        updateMovieCards(query);
      }
    }
  });
});

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/movies.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _services_movieCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movieCards */ "./src/services/movieCards.js");
/* harmony import */ var _services_movieCards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_services_movieCards__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=movies.5bd280d7d5ba9d4ed489.js.map