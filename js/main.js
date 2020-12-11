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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img sync \\.(png|jpe?g|svg|webp)$":
/*!***********************************************************!*\
  !*** ./src/img sync nonrecursive \.(png|jpe?g|svg|webp)$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./background.png": "./src/img/background.png",
	"./background_1028.png": "./src/img/background_1028.png",
	"./clear.jpg": "./src/img/clear.jpg",
	"./clouds.jpg": "./src/img/clouds.jpg",
	"./few-clouds.jpg": "./src/img/few-clouds.jpg",
	"./landscape-photograph-of-skies-912364.jpg": "./src/img/landscape-photograph-of-skies-912364.jpg",
	"./mobileSunSet.png": "./src/img/mobileSunSet.png",
	"./mobileSunSet.webp": "./src/img/mobileSunSet.webp",
	"./mobileSunSet10.png": "./src/img/mobileSunSet10.png",
	"./mobileSunSet10.webp": "./src/img/mobileSunSet10.webp",
	"./mobileSunSet20_500_1000.webp": "./src/img/mobileSunSet20_500_1000.webp",
	"./mobileSunSetx2.png": "./src/img/mobileSunSetx2.png",
	"./rain.jpg": "./src/img/rain.jpg",
	"./search.svg": "./src/img/search.svg",
	"./sunset-img.webp": "./src/img/sunset-img.webp",
	"./sunset-img_1280_720.webp": "./src/img/sunset-img_1280_720.webp",
	"./sunset.webp": "./src/img/sunset.webp",
	"./sunsetx2.webp": "./src/img/sunsetx2.webp",
	"./sunsetx3.webp": "./src/img/sunsetx3.webp",
	"./sunsetx4.webp": "./src/img/sunsetx4.webp",
	"./thunder.jpg": "./src/img/thunder.jpg"
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
webpackContext.id = "./src/img sync \\.(png|jpe?g|svg|webp)$";

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/background.png");

/***/ }),

/***/ "./src/img/background_1028.png":
/*!*************************************!*\
  !*** ./src/img/background_1028.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/background_1028.png");

/***/ }),

/***/ "./src/img/clear.jpg":
/*!***************************!*\
  !*** ./src/img/clear.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/clear.jpg");

/***/ }),

/***/ "./src/img/clouds.jpg":
/*!****************************!*\
  !*** ./src/img/clouds.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/clouds.jpg");

/***/ }),

/***/ "./src/img/few-clouds.jpg":
/*!********************************!*\
  !*** ./src/img/few-clouds.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/few-clouds.jpg");

/***/ }),

/***/ "./src/img/landscape-photograph-of-skies-912364.jpg":
/*!**********************************************************!*\
  !*** ./src/img/landscape-photograph-of-skies-912364.jpg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/landscape-photograph-of-skies-912364.jpg");

/***/ }),

/***/ "./src/img/mobileSunSet.png":
/*!**********************************!*\
  !*** ./src/img/mobileSunSet.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSet.png");

/***/ }),

/***/ "./src/img/mobileSunSet.webp":
/*!***********************************!*\
  !*** ./src/img/mobileSunSet.webp ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSet.webp");

/***/ }),

/***/ "./src/img/mobileSunSet10.png":
/*!************************************!*\
  !*** ./src/img/mobileSunSet10.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSet10.png");

/***/ }),

/***/ "./src/img/mobileSunSet10.webp":
/*!*************************************!*\
  !*** ./src/img/mobileSunSet10.webp ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSet10.webp");

/***/ }),

/***/ "./src/img/mobileSunSet20_500_1000.webp":
/*!**********************************************!*\
  !*** ./src/img/mobileSunSet20_500_1000.webp ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSet20_500_1000.webp");

/***/ }),

/***/ "./src/img/mobileSunSetx2.png":
/*!************************************!*\
  !*** ./src/img/mobileSunSetx2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/mobileSunSetx2.png");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/rain.jpg");

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/search.svg");

/***/ }),

/***/ "./src/img/sunset-img.webp":
/*!*********************************!*\
  !*** ./src/img/sunset-img.webp ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunset-img.webp");

/***/ }),

/***/ "./src/img/sunset-img_1280_720.webp":
/*!******************************************!*\
  !*** ./src/img/sunset-img_1280_720.webp ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunset-img_1280_720.webp");

/***/ }),

/***/ "./src/img/sunset.webp":
/*!*****************************!*\
  !*** ./src/img/sunset.webp ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunset.webp");

/***/ }),

/***/ "./src/img/sunsetx2.webp":
/*!*******************************!*\
  !*** ./src/img/sunsetx2.webp ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunsetx2.webp");

/***/ }),

/***/ "./src/img/sunsetx3.webp":
/*!*******************************!*\
  !*** ./src/img/sunsetx3.webp ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunsetx3.webp");

/***/ }),

/***/ "./src/img/sunsetx4.webp":
/*!*******************************!*\
  !*** ./src/img/sunsetx4.webp ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/sunsetx4.webp");

/***/ }),

/***/ "./src/img/thunder.jpg":
/*!*****************************!*\
  !*** ./src/img/thunder.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/thunder.jpg");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(__webpack_require__("./src/img sync \\.(png|jpe?g|svg|webp)$"));



const country = document.querySelector(".country");
const tempa = document.querySelector(".temp");
const humiditi = document.querySelector(".humidity");
const conditions = document.querySelector(".conditions");
const weather = document.querySelector(".weather-display");
const mainBox = document.querySelector(".main-section");
const search = document.querySelector(".search-bar");
const form = document.querySelector(".form");
const place = document.querySelector(".place");
const errorMsg = document.querySelector(".error");
let date = document.querySelector(".date");

form.addEventListener("submit", getWeather);

function getWeather(e) {
  e.preventDefault();
  const searchText = search.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=0ffc1202718617c78ddbd4198f0575bd&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      data = data;
      if (searchText.length < 1) {
        errorMessage()
      } else {
        paintWeather(data)
      }
    });
}

function paintWeather(data) {
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const roundedTemp = temp > 5 ? Math.ceil(temp) : Math.floor(temp)
  const placeName = data.name;
  const count = data.sys.country;
  search.value = "";
  let locationIcon = document.querySelector(".weather-icon");
  const { icon } = data.weather[0];
  locationIcon.innerHTML = `<img class="icon" src="icons/${icon}.png">`;
  const weatherInformation = {
    description,
    roundedTemp,
    placeName,
    count
  }
  info(weatherInformation);
}

function errorMessage() {
  errorMsg.innerHTML = "Field cannot be empty";
  errorMsg.classList.remove("show");
}

function info(weatherInformation) {
  errorMsg.classList.add("show");
  mainBox.classList.remove("show");
  place.innerHTML = weatherInformation.placeName += ",&nbsp;";
  tempa.innerHTML = weatherInformation.roundedTemp += "°C";
  country.innerHTML = weatherInformation.count;
  conditions.innerHTML = weatherInformation.description;
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map