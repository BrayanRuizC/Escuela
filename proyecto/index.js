"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config");
//Equivale al codigo que esta en app.js

_app["default"].listen(3000);
console.log("Servidor en puerto", _config.PORT);