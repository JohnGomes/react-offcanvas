"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OffCanvasMenu = function OffCanvasMenu(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 250 : _ref$width,
      _ref$transitionDurati = _ref.transitionDuration,
      transitionDuration = _ref$transitionDurati === undefined ? 250 : _ref$transitionDurati,
      _ref$isMenuOpened = _ref.isMenuOpened,
      isMenuOpened = _ref$isMenuOpened === undefined ? false : _ref$isMenuOpened,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? "left" : _ref$position,
      _ref$effect = _ref.effect,
      effect = _ref$effect === undefined ? "push" : _ref$effect,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style;


  // closed state style
  var left = position === "left" ? -1 * width + "px" : "auto";
  var right = position === "left" ? "auto" : -1 * width + "px";
  var translateX = position === "left" ? -1 * width : 0;
  var closedStyle = {
    width: width + "px",
    position: "fixed",
    top: "0px",
    left: left,
    right: right,
    transform: "translate(" + translateX + "px, 0px)",
    transitionDuration: transitionDuration + "ms",
    backfaceVisibility: "hidden"
  };

  // open state style
  var translateOpenX = position === "left" ? width : -1 * width;
  var openStyle = {
    transform: "translate(" + translateOpenX + "px, 0px)"
  };

  // create current state styles
  var currStyle = Object.assign({}, closedStyle);
  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return _react2.default.createElement(
    "div",
    { style: _extends({}, currStyle, style), className: className },
    children
  );
};

OffCanvasMenu.propTypes = {
  width: _propTypes2.default.number,
  transitionDuration: _propTypes2.default.number,
  isMenuOpened: _propTypes2.default.bool,
  position: _propTypes2.default.oneOf(["left", "right"]),
  effect: _propTypes2.default.oneOf(["push", "parallax", "overlay"]),
  style: _propTypes2.default.object
};

exports.default = OffCanvasMenu;