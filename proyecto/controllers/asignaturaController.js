"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAsignaturas = exports.statusAsignaturas = exports.renderEditAsignaturas = exports.renderAsignaturas = exports.deleteAsignaturas = exports.createAsignaturas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var _Profesores = _interopRequireDefault(require("../models/Profesores"));
var renderAsignaturas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var asignaturas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Asignaturas["default"].find().lean();
        case 2:
          asignaturas = _context.sent;
          res.render("index", {
            asignaturas: asignaturas
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderAsignaturas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderAsignaturas = renderAsignaturas;
var createAsignaturas = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var asignaturas;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          asignaturas = (0, _Asignaturas["default"])(req.body);
          _context2.next = 4;
          return asignaturas.save();
        case 4:
          res.redirect("/");
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function createAsignaturas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createAsignaturas = createAsignaturas;
var renderEditAsignaturas = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var asignaturas;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Asignaturas["default"].findById(req.params.id).lean();
        case 3:
          asignaturas = _context3.sent;
          res.render("editarAsignatura", {
            asignaturas: asignaturas
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderEditAsignaturas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderEditAsignaturas = renderEditAsignaturas;
var updateAsignaturas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Asignaturas["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/asignaturas/agregar");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateAsignaturas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateAsignaturas = updateAsignaturas;
var deleteAsignaturas = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Asignaturas["default"].findByIdAndDelete(id, req.body);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteAsignaturas(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAsignaturas = deleteAsignaturas;
var statusAsignaturas = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, asignaturas;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Asignaturas["default"].findById(id);
        case 3:
          asignaturas = _context6.sent;
          //la propiedad opcion esta en Model
          asignaturas.opcion = !asignaturas.opcion;
          _context6.next = 7;
          return asignaturas.save();
        case 7:
          res.redirect("/");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function statusAsignaturas(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.statusAsignaturas = statusAsignaturas;