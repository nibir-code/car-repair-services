"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = require("firebase/auth");

var _react = require("react");

var _firebase = _interopRequireDefault(require("./../Pages/Login/Firebase/firebase.init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _firebase["default"])();

var useFirebase = function useFirebase() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var auth = (0, _auth.getAuth)();

  var signInUsingGoogle = function signInUsingGoogle() {
    var googleProvider = new _auth.GoogleAuthProvider();
    (0, _auth.signInWithPopup)(auth, googleProvider).then(function (result) {
      setUser(result.user);
    });
  }; //observe user state change


  (0, _react.useEffect)(function () {
    var unsubscribed = (0, _auth.onAuthStateChanged)(auth, function (user) {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user); // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
    });
    return function () {
      return unsubscribed;
    };
  }, []);

  var logOut = function logOut() {
    (0, _auth.signOut)(auth).then(function (result) {})["catch"](function (error) {// An error happened.
    });
  };

  return {
    user: user,
    signInUsingGoogle: signInUsingGoogle,
    logOut: logOut
  };
};

var _default = useFirebase;
exports["default"] = _default;