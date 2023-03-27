import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    creditos: {
      type: String,
      required: true,
    },
    horas: {
      type: String,
      required: true,
    },
    opcion: {
      type:Boolean,
      default:false,
  }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Asignaturas", asignaturaEsquema);
