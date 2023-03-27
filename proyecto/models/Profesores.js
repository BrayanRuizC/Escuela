"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var profesorEsquema = new _mongoose.Schema({
  rfc: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  paterno: {
    type: String,
    required: true
  },
  materno: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  profesion: {
    type: String,
    required: true
  },
  numEmpleado: {
    type: String,
    required: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});

//Se crea el modelo de datos como quiero que se llame la collection
var _default = (0, _mongoose.model)("Profesores", profesorEsquema);
exports["default"] = _default;