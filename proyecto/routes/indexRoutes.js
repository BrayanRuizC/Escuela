"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var _Profesores = _interopRequireDefault(require("../models/Profesores"));
var _alumnoController = require("../controllers/alumnoController");
var _asignaturaController = require("../controllers/asignaturaController");
var _profesorController = require("../controllers/profesorController");
var router = (0, _express.Router)();
router.get("/", _alumnoController.renderAlumnos, _asignaturaController.renderAsignaturas, _profesorController.renderProfesores);
router.get("/asignaturas/agregar", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var asignaturas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Asignaturas["default"].find().lean();
        case 2:
          asignaturas = _context.sent;
          res.render("agregarAsignaturas", {
            asignaturas: asignaturas
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/alumnos/agregar", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var alumnos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Alumnos["default"].find().lean();
        case 2:
          alumnos = _context2.sent;
          res.render("agregarAlumnos", {
            alumnos: alumnos
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get("/profesores/agregar", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var profesores;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Profesores["default"].find().lean();
        case 2:
          profesores = _context3.sent;
          res.render("agregarProfesores", {
            profesores: profesores
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post("/alumnos/agregar", _alumnoController.createAlumnos);
router.post("/asignaturas/agregar", _asignaturaController.createAsignaturas);
router.post("/profesores/agregar", _profesorController.createProfesores);
router.get("/alumnos/:id/updateAlumno", _alumnoController.renderEditAlumnos);
router.get("/asignaturas/:id/updateAsignatura", _asignaturaController.renderEditAsignaturas);
router.get("/profesores/:id/updateProfesor", _profesorController.renderEditProfesores);
router.post("/alumnos/:id/updateAlumno", _alumnoController.updateAlumnos);
router.post("/asignaturas/:id/updateAsignatura", _asignaturaController.updateAsignaturas);
router.post("/profesores/:id/updateProfesor", _profesorController.updateProfesores);
router.get("/alumnos/:id/deleteAlumno", _alumnoController.deleteAlumnos);
router.get("/asignaturas/:id/deleteAsignatura", _asignaturaController.deleteAsignaturas);
router.get("/profesores/:id/deleteProfesor", _profesorController.deleteProfesores);
router.get("/alumnos/:id/statusAlumno", _alumnoController.statusAlumnos);
router.get("/asignaturas/:id/statusAsignatura", _asignaturaController.statusAsignaturas);
router.get("/profesores/:id/statusProfesor", _profesorController.statusProfesores);
var _default = router;
exports["default"] = _default;