(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-lineto", ["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-lineto"] = factory(require("prop-types"), require("react"));
	else
		root["react-lineto"] = factory(root["prop-types"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__229__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 229:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__229__;

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__297__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineTo),
/* harmony export */   "SteppedLineTo": () => (/* binding */ SteppedLineTo),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "SteppedLine": () => (/* binding */ SteppedLine)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var defaultAnchor = {
  x: 0.5,
  y: 0.5
};
var defaultBorderColor = '#f00';
var defaultBorderStyle = 'solid';
var defaultBorderWidth = 1;
var optionalStyleProps = {
  borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  borderStyle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  borderWidth: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  zIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
};

var LineTo = /*#__PURE__*/function (_Component) {
  _inherits(LineTo, _Component);

  var _super = _createSuper(LineTo);

  function LineTo() {
    _classCallCheck(this, LineTo);

    return _super.apply(this, arguments);
  }

  _createClass(LineTo, [{
    key: "UNSAFE_componentWillMount",
    value: // eslint-disable-next-line camelcase
    function UNSAFE_componentWillMount() {
      this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
      this.toAnchor = this.parseAnchor(this.props.toAnchor);
      this.delay = this.parseDelay(this.props.delay);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.delay = this.parseDelay(this.props.delay);

      if (typeof this.delay !== 'undefined') {
        this.deferUpdate(this.delay);
      }
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.fromAnchor !== this.props.fromAnchor) {
        this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
      }

      if (nextProps.toAnchor !== this.props.toAnchor) {
        this.toAnchor = this.parseAnchor(this.props.toAnchor);
      }

      this.delay = this.parseDelay(nextProps.delay);

      if (typeof this.delay !== 'undefined') {
        this.deferUpdate(this.delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.t) {
        clearTimeout(this.t);
        this.t = null;
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // Always update component if the parent component has been updated.
      // The reason for this is that we would not only like to update
      // this component when the props have changed, but also when
      // the position of our target elements has changed.
      // We could return true only if the positions of `from` and `to` have
      // changed, but that may be expensive and unnecessary.
      return true;
    } // Forced update after delay (MS)

  }, {
    key: "deferUpdate",
    value: function deferUpdate(delay) {
      var _this = this;

      if (this.t) {
        clearTimeout(this.t);
      }

      this.t = setTimeout(function () {
        return _this.forceUpdate();
      }, delay);
    }
  }, {
    key: "parseDelay",
    value: function parseDelay(value) {
      if (typeof value === 'undefined') {
        return value;
      } else if (typeof value === 'boolean' && value) {
        return 0;
      }

      var delay = parseInt(value, 10);

      if (isNaN(delay) || !isFinite(delay)) {
        throw new Error("LinkTo could not parse delay attribute \"".concat(value, "\""));
      }

      return delay;
    }
  }, {
    key: "parseAnchorPercent",
    value: function parseAnchorPercent(value) {
      var percent = parseFloat(value) / 100;

      if (isNaN(percent) || !isFinite(percent)) {
        throw new Error("LinkTo could not parse percent value \"".concat(value, "\""));
      }

      return percent;
    }
  }, {
    key: "parseAnchorText",
    value: function parseAnchorText(value) {
      // Try to infer the relevant axis.
      switch (value) {
        case 'top':
          return {
            y: 0
          };

        case 'left':
          return {
            x: 0
          };

        case 'middle':
          return {
            y: 0.5
          };

        case 'center':
          return {
            x: 0.5
          };

        case 'bottom':
          return {
            y: 1
          };

        case 'right':
          return {
            x: 1
          };
      }

      return null;
    }
  }, {
    key: "parseAnchor",
    value: function parseAnchor(value) {
      if (!value) {
        return defaultAnchor;
      }

      var parts = value.split(' ');

      if (parts.length > 2) {
        throw new Error('LinkTo anchor format is "<x> <y>"');
      }

      var _parts = _slicedToArray(parts, 2),
          x = _parts[0],
          y = _parts[1];

      return Object.assign({}, defaultAnchor, x ? this.parseAnchorText(x) || {
        x: this.parseAnchorPercent(x)
      } : {}, y ? this.parseAnchorText(y) || {
        y: this.parseAnchorPercent(y)
      } : {});
    }
  }, {
    key: "findElement",
    value: function findElement(className) {
      return document.getElementsByClassName(className)[0];
    }
  }, {
    key: "detect",
    value: function detect() {
      var _this$props = this.props,
          from = _this$props.from,
          to = _this$props.to,
          _this$props$within = _this$props.within,
          within = _this$props$within === void 0 ? '' : _this$props$within;
      var a = this.findElement(from);
      var b = this.findElement(to);

      if (!a || !b) {
        return false;
      }

      var anchor0 = this.fromAnchor;
      var anchor1 = this.toAnchor;
      var box0 = a.getBoundingClientRect();
      var box1 = b.getBoundingClientRect();
      var offsetX = window.pageXOffset;
      var offsetY = window.pageYOffset;

      if (within) {
        var p = this.findElement(within);
        var boxp = p.getBoundingClientRect();
        offsetX -= boxp.left + (window.pageXOffset || document.documentElement.scrollLeft) - p.scrollLeft;
        offsetY -= boxp.top + (window.pageYOffset || document.documentElement.scrollTop) - p.scrollTop;
      }

      var x0 = box0.left + box0.width * anchor0.x + offsetX;
      var x1 = box1.left + box1.width * anchor1.x + offsetX;
      var y0 = box0.top + box0.height * anchor0.y + offsetY;
      var y1 = box1.top + box1.height * anchor1.y + offsetY;
      return {
        x0: x0,
        y0: y0,
        x1: x1,
        y1: y1
      };
    }
  }, {
    key: "render",
    value: function render() {
      var points = this.detect();
      return points ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, points, this.props)) : null;
    }
  }]);

  return LineTo;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);


LineTo.propTypes = _objectSpread({
  from: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  within: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  fromAnchor: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  toAnchor: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  delay: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)])
}, optionalStyleProps);
var SteppedLineTo = /*#__PURE__*/function (_LineTo) {
  _inherits(SteppedLineTo, _LineTo);

  var _super2 = _createSuper(SteppedLineTo);

  function SteppedLineTo() {
    _classCallCheck(this, SteppedLineTo);

    return _super2.apply(this, arguments);
  }

  _createClass(SteppedLineTo, [{
    key: "render",
    value: function render() {
      var points = this.detect();
      return points ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SteppedLine, _extends({}, points, this.props)) : null;
    }
  }]);

  return SteppedLineTo;
}(LineTo);
var Line = /*#__PURE__*/function (_PureComponent) {
  _inherits(Line, _PureComponent);

  var _super3 = _createSuper(Line);

  function Line() {
    _classCallCheck(this, Line);

    return _super3.apply(this, arguments);
  }

  _createClass(Line, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Append rendered DOM element to the container the
      // offsets were calculated for
      this.within.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.within.removeChild(this.el);
    }
  }, {
    key: "findElement",
    value: function findElement(className) {
      return document.getElementsByClassName(className)[0];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          x0 = _this$props2.x0,
          y0 = _this$props2.y0,
          x1 = _this$props2.x1,
          y1 = _this$props2.y1,
          _this$props2$within = _this$props2.within,
          within = _this$props2$within === void 0 ? '' : _this$props2$within;
      this.within = within ? this.findElement(within) : document.body;
      var dy = y1 - y0;
      var dx = x1 - x0;
      var angle = Math.atan2(dy, dx) * 180 / Math.PI;
      var length = Math.sqrt(dx * dx + dy * dy);
      var positionStyle = {
        position: 'absolute',
        top: "".concat(y0, "px"),
        left: "".concat(x0, "px"),
        width: "".concat(length, "px"),
        zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex) : '1',
        transform: "rotate(".concat(angle, "deg)"),
        // Rotate around (x0, y0)
        transformOrigin: '0 0'
      };
      var defaultStyle = {
        borderTopColor: this.props.borderColor || defaultBorderColor,
        borderTopStyle: this.props.borderStyle || defaultBorderStyle,
        borderTopWidth: this.props.borderWidth || defaultBorderWidth
      };
      var props = {
        className: this.props.className,
        style: Object.assign({}, defaultStyle, positionStyle)
      }; // We need a wrapper element to prevent an exception when then
      // React component is removed. This is because we manually
      // move the rendered DOM element after creation.

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "react-lineto-placeholder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", _extends({
        ref: function ref(el) {
          _this2.el = el;
        }
      }, props)));
    }
  }]);

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
Line.propTypes = _objectSpread({
  x0: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  y0: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  x1: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  y1: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired)
}, optionalStyleProps);
var SteppedLine = /*#__PURE__*/function (_PureComponent2) {
  _inherits(SteppedLine, _PureComponent2);

  var _super4 = _createSuper(SteppedLine);

  function SteppedLine() {
    _classCallCheck(this, SteppedLine);

    return _super4.apply(this, arguments);
  }

  _createClass(SteppedLine, [{
    key: "render",
    value: function render() {
      if (this.props.orientation === 'h') {
        return this.renderHorizontal();
      }

      return this.renderVertical();
    }
  }, {
    key: "renderVertical",
    value: function renderVertical() {
      var x0 = Math.round(this.props.x0);
      var y0 = Math.round(this.props.y0);
      var x1 = Math.round(this.props.x1);
      var y1 = Math.round(this.props.y1);
      var dx = x1 - x0;

      if (Math.abs(dx) <= 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
          x0: x0,
          y0: y0,
          x1: x0,
          y1: y1
        }));
      }

      if (dx === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, this.props);
      }

      var borderWidth = this.props.borderWidth || defaultBorderWidth;
      var y2 = Math.round((y0 + y1) / 2);
      var xOffset = dx > 0 ? borderWidth : 0;
      var minX = Math.min(x0, x1) - xOffset;
      var maxX = Math.max(x0, x1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "react-steppedlineto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: x0,
        y0: y0,
        x1: x0,
        y1: y2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: x1,
        y0: y1,
        x1: x1,
        y1: y2
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: minX,
        y0: y2,
        x1: maxX,
        y1: y2
      })));
    }
  }, {
    key: "renderHorizontal",
    value: function renderHorizontal() {
      var x0 = Math.round(this.props.x0);
      var y0 = Math.round(this.props.y0);
      var x1 = Math.round(this.props.x1);
      var y1 = Math.round(this.props.y1);
      var dy = y1 - y0;

      if (Math.abs(dy) <= 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
          x0: x0,
          y0: y0,
          x1: x1,
          y1: y0
        }));
      }

      if (dy === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, this.props);
      }

      var borderWidth = this.props.borderWidth || defaultBorderWidth;
      var x2 = Math.round((x0 + x1) / 2);
      var yOffset = dy < 0 ? borderWidth : 0;
      var minY = Math.min(y0, y1) - yOffset;
      var maxY = Math.max(y0, y1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "react-steppedlineto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: x0,
        y0: y0,
        x1: x2,
        y1: y0
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: x1,
        y0: y1,
        x1: x2,
        y1: y1
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Line, _extends({}, this.props, {
        x0: x2,
        y0: minY,
        x1: x2,
        y1: maxY
      })));
    }
  }]);

  return SteppedLine;
}(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
SteppedLine.propTypes = _objectSpread({
  x0: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  y0: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  x1: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  y1: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['h', 'v'])
}, optionalStyleProps);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});