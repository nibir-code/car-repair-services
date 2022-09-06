"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _AuthProvider = require("./../contexts/AuthProvider");

var useAuth = function useAuth() {
  return (0, _react.useContext)(_AuthProvider.AuthContext);
};

var _default = useAuth;
exports["default"] = _default;