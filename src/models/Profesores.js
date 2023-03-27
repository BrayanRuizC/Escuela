import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
    {


        rfc: {
            type: String,
            required: true,
        },

        nombre: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        paterno: {
            type: String,
            required: true,
        },
        materno: {
            type: String,
            required: true,
        },
        fechaNacimiento: {
            type: String,
            required: true,
        },
        direccion: {
            type: String,
            required: true,
        },
        celular: {
            type: String,
            required: true,
        },
        profesion: {
            type: String,
            required: true,
        },
        numEmpleado:{
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
        versionKey: false
    }
);

//Se crea el modelo de datos como quiero que se llame la collection
export default model("Profesores", profesorEsquema);