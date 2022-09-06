"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

var _firebaseConfig = _interopRequireDefault(require("./firebase.config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initializeAuthentication = function initializeAuthentication() {
  (0, _app.initializeApp)(_firebaseConfig["default"]);
};

var _default = initializeAuthentication;
exports["default"] = _default;