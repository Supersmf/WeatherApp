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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addData.js":
/*!************************!*\
  !*** ./src/addData.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var fillWeatherData = function fillWeatherData(data, element) {

    var container = document.createElement('div');
    var location = document.createElement('h3');
    var temp = document.createElement('p');
    var weather = document.createElement('p');
    var pressure = document.createElement('p');

    location.innerHTML = data.name + ',' + data.sys.country;
    temp.innerHTML = 'Temperature: ' + data.main.temp + ' F';
    weather.innerHTML = 'Weather: ' + data.weather[0].description;
    pressure.innerHTML = 'Pressure: ' + data.main.pressure;

    container.appendChild(location);
    container.appendChild(temp);
    container.appendChild(weather);
    container.appendChild(pressure);

    element.appendChild(container);
};

exports.fillWeatherData = fillWeatherData;

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getData;
function getData(url, appid, city) {

  return fetch(url + "q=" + city + "&appid=" + appid).then(function (response) {
    return response.json();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(/*! ./getData */ "./src/getData.js");

var _getData2 = _interopRequireDefault(_getData);

var _addData = __webpack_require__(/*! ./addData */ "./src/addData.js");

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './style/style.less'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonSearch = document.querySelector('.btnSearch');
// import './style/style.scss';

var inputSearch = document.querySelector('.inputSearch');
var localWeather = document.querySelector('.localWeather');
var currentWeather = document.querySelector('.currentWeather');

var url = 'http://api.openweathermap.org/data/2.5/weather?';
var ipUrl = "https://ipinfo.io/json";
var corst = 'https://cors.io/?';
var appid = '361769565b95b84393f71027df69289e';

window.addEventListener('load', function () {

    fetch(corst + ipUrl).then(function (response) {
        return response.json();
    }).then(function (_ref) {
        var city = _ref.city;
        return (0, _getData2.default)(corst + url, appid, city);
    }).then(function (data) {
        return (0, _addData.fillWeatherData)(data, localWeather);
    });
});

buttonSearch.addEventListener('click', function (e) {
    var city = inputSearch.value;
    inputSearch.value = '';
    (0, _getData2.default)(corst + url, appid, city).then(function (data) {
        return (0, _addData.fillWeatherData)(data, currentWeather);
    });;
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map