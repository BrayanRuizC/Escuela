"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var alumnoEsquema = new _mongoose.Schema({
  nombres: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  aPaterno: {
    type: String,
    required: true
  },
  aMaterno: {
    type: String,
    required: true
  },
  fechaNac: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  direccion: {
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
var _default = (0, _mongoose.model)("Alumnos", alumnoEsquema);
exports["default"] = _default;