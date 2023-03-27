"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfesores = exports.statusProfesores = exports.renderProfesores = exports.renderEditProfesores = exports.deleteProfesores = exports.createProfesores = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var _Profesores = _interopRequireDefault(require("../models/Profesores"));
var renderProfesores = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var asignaturas, alumnos, profesores;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Asignaturas["default"].find().lean();
        case 2:
          asignaturas = _context.sent;
          _context.next = 5;
          return _Alumnos["default"].find().lean();
        case 5:
          alumnos = _context.sent;
          _context.next = 8;
          return _Profesores["default"].find().lean();
        case 8:
          profesores = _context.sent;
          res.render("index", {
            asignaturas: asignaturas,
            alumnos: alumnos,
            profesores: profesores
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderProfesores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderProfesores = renderProfesores;
var createProfesores = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          profesores = (0, _Profesores["default"])(req.body);
          _context2.next = 4;
          return profesores.save();
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
  return function createProfesores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createProfesores = createProfesores;
var renderEditProfesores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Profesores["default"].findById(req.params.id).lean();
        case 3:
          profesores = _context3.sent;
          res.render("editarProfesor", {
            profesores: profesores
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
  return function renderEditProfesores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderEditProfesores = renderEditProfesores;
var updateProfesores = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Profesores["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/profesores/agregar");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateProfesores(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProfesores = updateProfesores;
var deleteProfesores = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Profesores["default"].findByIdAndDelete(id, req.body);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteProfesores(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteProfesores = deleteProfesores;
var statusProfesores = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, profesores;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Profesores["default"].findById(id);
        case 3:
          profesores = _context6.sent;
          //la propiedad opcion esta en Model
          profesores.opcion = !profesores.opcion;
          _context6.next = 7;
          return profesores.save();
        case 7:
          res.redirect("/");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function statusProfesores(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.statusProfesores = statusProfesores;