"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Col = _interopRequireDefault(require("./components/Col"));

var _Grid = _interopRequireDefault(require("./components/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<div>React App</div>, document.getElementById('root'));
var _default = {
  Col: _Col.default,
  Grid: _Grid.default
};
exports.default = _default;