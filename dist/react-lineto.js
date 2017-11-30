(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-lineto", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-lineto"] = factory(require("react"));
	else
		root["react-lineto"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Line = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAnchor = { x: 0.5, y: 0.5 };

var optionalStyleProps = {
    className: _react.PropTypes.string,
    border: _react.PropTypes.string,
    zIndex: _react.PropTypes.number,
    style: _react.PropTypes.object
};

var LineTo = function (_Component) {
    _inherits(LineTo, _Component);

    function LineTo() {
        _classCallCheck(this, LineTo);

        return _possibleConstructorReturn(this, (LineTo.__proto__ || Object.getPrototypeOf(LineTo)).apply(this, arguments));
    }

    _createClass(LineTo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
            this.toAnchor = this.parseAnchor(this.props.toAnchor);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (typeof this.props.delay !== 'undefined') {
                this.deferUpdate(this.props.delay);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.fromAnchor !== this.props.fromAnchor) {
                this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
            }
            if (nextProps.toAnchor !== this.props.toAnchor) {
                this.toAnchor = this.parseAnchor(this.props.toAnchor);
            }
            if (typeof nextProps.delay !== 'undefined') {
                this.deferUpdate(nextProps.delay);
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            // Always update component if the parent component has been updated.
            // The reason for this is that we would not only like to update
            // this component when the props have changed, but also when
            // the position of our target elements has changed.
            // We could return true only if the positions of `from` and `to` have
            // changed, but that may be expensive and unnecessary.
            return true;
        }

        // Forced update after delay (MS)

    }, {
        key: 'deferUpdate',
        value: function deferUpdate(delay) {
            var _this2 = this;

            clearTimeout(this.t);
            this.t = setTimeout(function () {
                return _this2.forceUpdate();
            }, delay);
        }
    }, {
        key: 'parseAnchorPercent',
        value: function parseAnchorPercent(value) {
            var percent = parseFloat(value) / 100;
            if (isNaN(percent) || !isFinite(percent)) {
                throw new Error('LinkTo could not parse percent value "' + value + '"');
            }
            return percent;
        }
    }, {
        key: 'parseAnchorText',
        value: function parseAnchorText(value) {
            // Try to infer the relevant axis.
            switch (value) {
                case 'top':
                    return { y: 0 };
                case 'left':
                    return { x: 0 };
                case 'middle':
                    return { y: 0.5 };
                case 'center':
                    return { x: 0.5 };
                case 'bottom':
                    return { y: 1 };
                case 'right':
                    return { x: 1 };
            }
            return null;
        }
    }, {
        key: 'parseAnchor',
        value: function parseAnchor(value) {
            if (!value) {
                return defaultAnchor;
            }
            var parts = value.split(' ');
            if (parts.length !== 2) {
                throw new Error('LinkTo anchor format is "<x> <y>"');
            }

            var _parts = _slicedToArray(parts, 2),
                x = _parts[0],
                y = _parts[1];

            return Object.assign({}, defaultAnchor, this.parseAnchorText(x) || { x: this.parseAnchorPercent(x) }, this.parseAnchorText(y) || { y: this.parseAnchorPercent(y) });
        }
    }, {
        key: 'findElement',
        value: function findElement(className) {
            return document.getElementsByClassName(className)[0];
        }
    }, {
        key: 'detect',
        value: function detect() {
            var _props = this.props,
                from = _props.from,
                to = _props.to;


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

            var x0 = box0.left + box0.width * anchor0.x + offsetX;
            var x1 = box1.left + box1.width * anchor1.x + offsetX;
            var y0 = box0.top + box0.height * anchor0.y + offsetY;
            var y1 = box1.top + box1.height * anchor1.y + offsetY;

            return { x0: x0, y0: y0, x1: x1, y1: y1 };
        }
    }, {
        key: 'render',
        value: function render() {
            var points = this.detect();
            return points ? _react2.default.createElement(Line, _extends({}, points, this.props)) : null;
        }
    }]);

    return LineTo;
}(_react.Component);

exports.default = LineTo;


LineTo.propTypes = Object.assign({}, {
    from: _react.PropTypes.string.isRequired,
    to: _react.PropTypes.string.isRequired,
    fromAnchor: _react.PropTypes.string,
    toAnchor: _react.PropTypes.string,
    delay: _react.PropTypes.number
}, optionalStyleProps);

var Line = exports.Line = function (_PureComponent) {
    _inherits(Line, _PureComponent);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
    }

    _createClass(Line, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Append rendered DOM element to body so we don't have
            // to factor in element offsets.
            document.body.appendChild(this.el);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeChild(this.el);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                x0 = _props2.x0,
                y0 = _props2.y0,
                x1 = _props2.x1,
                y1 = _props2.y1;


            var dy = y1 - y0;
            var dx = x1 - x0;

            var angle = Math.atan2(dy, dx) * 180 / Math.PI;
            var length = Math.sqrt(dx * dx + dy * dy);

            var positionStyle = {
                position: 'absolute',
                top: y0 + 'px',
                left: x0 + 'px',
                width: length + 'px',
                zIndex: this.props.zIndex || '1',
                transform: 'rotate(' + angle + 'deg)',
                // Rotate around (x0, y0)
                transformOrigin: '0 0'
            };

            var defaultStyle = {
                height: '1px',
                borderTop: this.props.border || '1px solid #f00'
            };

            var props = {
                className: this.props.className,
                style: Object.assign({}, defaultStyle, this.props.style, positionStyle)

                // We need a wrapper element to prevent an exception when then
                // React component is removed. This is because we manually
                // move the rendered DOM element after creation.
            };return _react2.default.createElement(
                'div',
                { className: 'react-lineto-placeholder' },
                _react2.default.createElement('div', _extends({
                    ref: function ref(el) {
                        _this4.el = el;
                    }
                }, props))
            );
        }
    }]);

    return Line;
}(_react.PureComponent);

Line.propTypes = Object.assign({}, {
    x0: _react.PropTypes.number.isRequired,
    y0: _react.PropTypes.number.isRequired,
    x1: _react.PropTypes.number.isRequired,
    y1: _react.PropTypes.number.isRequired
}, optionalStyleProps);

/***/ })
/******/ ]);
});