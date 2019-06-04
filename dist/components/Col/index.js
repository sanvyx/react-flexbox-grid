"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var breakpoints = {
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px"
};

var makeWidthRule = function makeWidthRule(width) {
  return "width: ".concat(+width ? 100 * width + "%" : width, "; flex: none;");
};

var standardBreakpoints = function standardBreakpoints(xs, sm, md, lg, xl) {
  var css = "";
  if (xs) css += makeWidthRule(xs / 12);
  if (sm) css += "@media (min-width: ".concat(breakpoints.sm, ") {").concat(makeWidthRule(sm / 12), "}");
  if (md) css += "@media (min-width: ".concat(breakpoints.md, ") {").concat(makeWidthRule(md / 12), "}");
  if (lg) css += "@media (min-width: ".concat(breakpoints.lg, ") {").concat(makeWidthRule(lg / 12), "}");
  if (xl) css += "@media (min-width: ".concat(breakpoints.xl, ") {").concat(makeWidthRule(xl / 12), "}");
  return css;
};

var customBreakpoints = function customBreakpoints(width) {
  var isObject = _typeof(width) === "object";
  return isObject ? Object.entries(width).sort(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
        thA = _ref3[0];

    var _ref4 = _slicedToArray(_ref2, 1),
        thB = _ref4[0];

    if (thA === "all") return -1;
    if (thB === "all") return 1;
    return parseInt(thA) < parseInt(thB) ? 1 : -1;
  }).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        th = _ref6[0],
        value = _ref6[1];

    if (th === "all") return makeWidthRule(value);
    return "@media (max-width: ".concat(th, ") {").concat(makeWidthRule(value), "}");
  }).join("\n") : makeWidthRule(width);
};

var width = function width(_ref7) {
  var width = _ref7.width,
      xs = _ref7.xs,
      sm = _ref7.sm,
      md = _ref7.md,
      lg = _ref7.lg,
      xl = _ref7.xl;
  if (xs || sm || md || lg || xl) return standardBreakpoints(xs, sm, md, lg, xl);
  if (width) return customBreakpoints(width);
  return "";
};

var Col = _styledComponents.default.div.withConfig({
  displayName: "Col",
  componentId: "sc-1vdm2jz-0"
})(["& > *{box-sizing:border-box;}flex:1 1 0%;max-height:100%;", ";margin-left:", ";", ";"], width, function (_ref8) {
  var offset = _ref8.offset;
  return offset / 12 * 100 + "%";
}, function (_ref9) {
  var alignSelf = _ref9.alignSelf;
  return alignSelf ? "align-self: ".concat(alignSelf) : "";
});

var _default = Col;
exports.default = _default;