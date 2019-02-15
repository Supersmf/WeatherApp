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

/***/ "./node_modules/css-loader/index.js!./src/style/main.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/style/main.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\nbutton,\ninput {\n  outline: none;\n}\nbutton {\n  cursor: pointer;\n}\nhtml,\nbody {\n  height: 100%;\n}\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nheader {\n  min-height: 60px;\n  background-color: #1d365d;\n}\n.content {\n  flex: 1 0 auto;\n  background-color: #f0ffff;\n}\n.footer {\n  flex: 0 0 auto;\n  background-color: #a9a9a9;\n  min-height: 80px;\n}\n.searchForm {\n  margin: 15px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n}\n.searchForm input {\n  border-radius: 10px 0 0 10px;\n  border: 1px solid #1d365d;\n  margin-right: 0;\n  padding: 2px 10px;\n}\n.btnSearch {\n  border-radius: 0 10px 10px 0;\n  height: 25px;\n  margin-left: 0;\n  padding-left: 5px;\n  padding-right: 8px;\n  border: 1px solid #1d365d;\n  border-left: 0;\n}\n.btnSearch:hover {\n  opacity: 0.5;\n}\nsection {\n  border: 1px dotted;\n  min-height: 300px;\n  display: flex;\n}\n.localWeather,\n.currentWeather,\n.locationStory,\n.currentWeatherChart {\n  flex: 2;\n  padding: 20px;\n}\n.currentWeather {\n  border-left: 1px dotted;\n  border-right: 1px dotted;\n}\n.currentWeatherChart {\n  flex: 4;\n}\n.locationStory {\n  border-left: 1px dotted;\n}\n.weatherPanel {\n  position: relative;\n  background-color: #f5f5f5;\n  padding: 20px;\n  box-sizing: border-box;\n  border-radius: 50px;\n  height: 100%;\n  border: 1px solid silver;\n  opacity: 0.5;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.searchForm {\n  position: relative;\n}\n.btnUnit {\n  width: 30px;\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translate3d(0, -50%, 0);\n  padding: 4px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.btnUnit:hover {\n  background-color: #eceaea;\n}\n.btnRemoveItem {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 30px;\n  border-radius: 8px;\n  border: 1px solid grey;\n}\n.btnRemoveItem:hover {\n  background-color: #eceaea;\n  transform: scale(1.1);\n}\n.storageWeatherPanel {\n  position: relative;\n  background-color: #f5f5f5;\n  opacity: 0.5;\n  box-sizing: border-box;\n  border: 1px solid silver;\n  margin: 2px 0;\n  border-radius: 10px;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/google-charts/dist/googleCharts.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-charts/dist/googleCharts.esm.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* googleCharts.js Version: 1.5.0 Built On: 2018-12-30 */
var loadScript = Symbol('loadScript');
var instance = Symbol('instance');
var _instance = void 0;

var GoogleChartsManager = function () {
    _createClass(GoogleChartsManager, [{
        key: instance,
        get: function get() {
            return _instance;
        },
        set: function set(value) {
            _instance = value;
        }
    }]);

    function GoogleChartsManager() {
        _classCallCheck(this, GoogleChartsManager);

        if (this[instance]) {
            return this[instance];
        }

        this[instance] = this;
    }

    _createClass(GoogleChartsManager, [{
        key: 'reset',
        value: function reset() {
            _instance = null;
        }
    }, {
        key: loadScript,
        value: function value() {
            if (!this.scriptPromise) {
                this.scriptPromise = new Promise(function (resolve) {
                    var body = document.getElementsByTagName('body')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = function () {
                        GoogleCharts.api = window.google;
                        GoogleCharts.api.charts.load('current', {
                            packages: ['corechart', 'table']
                        });
                        GoogleCharts.api.charts.setOnLoadCallback(function () {
                            resolve();
                        });
                    };
                    script.src = 'https://www.gstatic.com/charts/loader.js';
                    body.appendChild(script);
                });
            }
            return this.scriptPromise;
        }
    }, {
        key: 'load',
        value: function load(callback, type) {
            var _this = this;

            return this[loadScript]().then(function () {
                if (type) {
                    var config = {};
                    if (type instanceof Object) {
                        config = type;
                    } else if (Array.isArray(type)) {
                        config = { packages: type };
                    } else {
                        config = { packages: [type] };
                    }
                    _this.api.charts.load('current', config);
                    _this.api.charts.setOnLoadCallback(callback);
                } else {
                    if (typeof callback != 'function') {
                        throw 'callback must be a function';
                    } else {
                        callback();
                    }
                }
            });
        }
    }]);

    return GoogleChartsManager;
}();

var GoogleCharts = new GoogleChartsManager();

exports.default = GoogleChartsManager;
exports.GoogleCharts = GoogleCharts;

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

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

    location.innerHTML = data.name + ', ' + data.sys.country;
    temp.innerHTML = 'Temperature: <span class="viewTemp">' + data.main.temp + ' \xB0C</span> ';
    weather.innerHTML = 'Weather: ' + data.weather[0].description;
    pressure.innerHTML = 'Pressure: ' + data.main.pressure;

    container.appendChild(location);
    container.appendChild(temp);
    container.appendChild(weather);
    container.appendChild(pressure);

    container.classList.add('weatherPanel');

    if (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    element.appendChild(container);
};

var fillStoryData = function fillStoryData(data, element) {
    var container = document.createElement('div');
    var temp = document.createElement('p');
    var removeItem = document.createElement('button');

    removeItem.innerHTML = 'x';

    temp.innerHTML = data.name + ', ' + data.sys.country + '  <span class="viewTemp">' + data.main.temp + ' \xB0C</span>';

    removeItem.classList.add('btnRemoveItem');
    container.classList.add('storageWeatherPanel');
    container.setAttribute('cityId', data.id);

    container.appendChild(removeItem);
    container.appendChild(temp);
    element.appendChild(container);
};

exports.fillWeatherData = fillWeatherData;
exports.fillStoryData = fillStoryData;

/***/ }),

/***/ "./src/drawChart.js":
/*!**************************!*\
  !*** ./src/drawChart.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawWeatherChart = undefined;

var _googleCharts = __webpack_require__(/*! google-charts */ "./node_modules/google-charts/dist/googleCharts.esm.js");

var element = void 0;
var info = void 0;

var drawWeatherChart = function drawWeatherChart(res, elem) {
  element = elem;
  info = res;

  if (info.cod == 200) {
    _googleCharts.GoogleCharts.load(drawCharts);
  }
};

function drawCharts() {
  var data = fillData(info).slice(0, 10);
  data = data = google.visualization.arrayToDataTable(data);

  var options = {
    title: "Weather change in " + info.city.name + ", " + info.city.country,
    vAxis: { title: "Temperature" },
    hAxis: { title: "Time" },
    seriesType: "bars",
    series: { 3: { type: "line" } }
  };

  var col_1_chart = new _googleCharts.GoogleCharts.api.visualization.ComboChart(element);
  col_1_chart.draw(data, options);
};

function fillData(_ref) {
  var list = _ref.list;

  var res = [["Time", "min", "average", "max", "wind"]];
  list.forEach(function (el) {
    var time = el.dt_txt.split(" ")[1].slice(0, -3);
    res.push([time, el.main.temp_min, el.main.temp, el.main.temp_max, el.wind.speed]);
  });
  return res;
};

exports.drawWeatherChart = drawWeatherChart;

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
var getSingleData = function getSingleData(url, appid, city, unit) {
  var type = unit ? "metric" : "imperial";

  return fetch(url + "weather?q=" + city + "&appid=" + appid + "&units=" + type).then(function (response) {
    return response.json();
  }).catch(function (e) {
    return console.log('myErr');
  });
};

var getMultiData = function getMultiData(url, appid, citysId, unit) {
  var type = unit ? "metric" : "imperial";

  return fetch(url + "group?id=" + citysId + "&appid=" + appid + "&units=" + type).then(function (response) {
    return response.json();
  });
};

var getForecastData = function getForecastData(url, appid, city, unit) {
  var type = unit ? "metric" : "imperial";

  return fetch(url + "forecast?q=" + city + "&appid=" + appid + "&units=" + type).then(function (response) {
    return response.json();
  });
};

exports.getSingleData = getSingleData;
exports.getMultiData = getMultiData;
exports.getForecastData = getForecastData;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getData = __webpack_require__(/*! ./getData */ "./src/getData.js");

var _addData = __webpack_require__(/*! ./addData */ "./src/addData.js");

var _drawChart = __webpack_require__(/*! ./drawChart */ "./src/drawChart.js");

__webpack_require__(/*! ./style/main.css */ "./src/style/main.css");

var buttonSearch = document.querySelector(".btnSearch");
var inputSearch = document.querySelector(".inputSearch");
var localWeather = document.querySelector(".localWeather");
var currentWeather = document.querySelector(".currentWeather");
var locationStory = document.querySelector(".locationStory");
var btnUnit = document.querySelector(".btnUnit");
var currentWeatherChart = document.querySelector(".currentWeatherChart");

var urlWeather = "http://api.openweathermap.org/data/2.5/";
var ipUrl = "https://ipinfo.io/json";
var corst = "https://cors.io/?";
var appid = "361769565b95b84393f71027df69289e";

var storage = "";
var unit = true; // units: true - °C, false - °F

window.addEventListener("load", function () {
  storage = localStorage.getItem("city") || "";

  fetch(corst + ipUrl).then(function (response) {
    return response.json();
  }).then(function (_ref) {
    var city = _ref.city;
    return (0, _getData.getSingleData)(corst + urlWeather, appid, city, unit);
  }).then(function (data) {
    return (0, _addData.fillWeatherData)(data, localWeather);
  });

  (0, _getData.getMultiData)(corst + urlWeather, appid, storage, unit).then(function (data) {
    return data.list.forEach(function (item) {
      return (0, _addData.fillStoryData)(item, locationStory);
    });
  });
});

// buttonSearch.addEventListener("click", search);
inputSearch.addEventListener("change", search);

btnUnit.addEventListener("click", function () {
  var temp = document.querySelectorAll(".viewTemp");

  temp.forEach(function (e) {
    var t = parseFloat(e.textContent);

    if (unit) {
      t = Math.round(t * 9 / 5 + 32).toFixed(0) + " °F";
      btnUnit.innerHTML = " °C";
    } else {
      t = ((t - 32) * 5 / 9).toFixed(2) + " °C";
      btnUnit.innerHTML = " °F";
    }
    e.textContent = t;
  });
  unit = !unit;
});

function search(e) {
  var city = inputSearch.value;
  inputSearch.value = "";
  inputSearch.placeholder = "";

  (0, _getData.getSingleData)(corst + urlWeather, appid, city, unit).then(function (data) {
    (0, _addData.fillWeatherData)(data, currentWeather);
    if (!~storage.indexOf(data.id)) {
      storage[0] ? storage += "," : "";
      storage += "" + data.id;
      (0, _addData.fillStoryData)(data, locationStory);
    }
    localStorage.setItem("city", storage);
  }).catch(function (e) {
    return inputSearch.placeholder = "Wrong.Type correct place.";
  });

  (0, _getData.getForecastData)(corst + urlWeather, appid, city, unit).then(function (res) {
    return (0, _drawChart.drawWeatherChart)(res, currentWeatherChart);
  });
}

locationStory.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    var element = e.target.parentElement;
    var attrib = element.getAttribute("cityID");

    storage = storage.split(",").filter(function (e) {
      return e != attrib;
    });
    storage = storage.join(",");
    localStorage.setItem("city", storage);
    locationStory.removeChild(e.target.parentElement);
  }
});

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./src/style/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map