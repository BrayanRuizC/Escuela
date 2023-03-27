import Alumnos from "../models/Alumnos";
import Asignaturas  from "../models/Asignaturas";
import Profesores  from "../models/Profesores";

export const renderAsignaturas = async (req, res) => {

    const asignaturas = await Asignaturas.find().lean();
  
    res.render("index", { asignaturas: asignaturas});
  };

  export const createAsignaturas=async (req, res) => {
    try {
      const asignaturas = Asignaturas(req.body);
      await asignaturas.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  export const renderEditAsignaturas=async (req, res) => {
    try {
      const asignaturas = await Asignaturas.findById(req.params.id).lean();
      res.render("editarAsignatura", { asignaturas });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateAsignaturas=async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);
    res.redirect("/asignaturas/agregar");
  };

  export const deleteAsignaturas=async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndDelete(id, req.body);
  
    res.redirect("/");
  };

  export const statusAsignaturas=async (req, res) => {
    const { id } = req.params;
    const asignaturas = await Asignaturas.findById(id);
    //la propiedad opcion esta en Model
    asignaturas.opcion = !asignaturas.opcion;
    await asignaturas.save();
  
    res.redirect("/");
  };