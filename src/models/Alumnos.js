import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    aPaterno: {
      type: String,
      required: true,
    },
    aMaterno: {
      type: String,
      required: true,
    },
    fechaNac: {
      type: String,
      required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    direccion: {
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

export default model("Alumnos", alumnoEsquema);