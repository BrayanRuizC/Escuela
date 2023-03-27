import { Router } from "express";
import Alumnos from "../models/Alumnos";
import Asignaturas from "../models/Asignaturas";
import Profesores from "../models/Profesores";
import { createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";
import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores } from "../controllers/profesorController";

const router = Router();
router.get("/",renderAlumnos,renderAsignaturas,renderProfesores);

router.get("/asignaturas/agregar", async (req, res) => {
    const asignaturas = await Asignaturas.find().lean();
    res.render("agregarAsignaturas", { asignaturas: asignaturas });
  });
  
  router.get("/alumnos/agregar", async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    res.render("agregarAlumnos", { alumnos: alumnos });
  });
  
  
  router.get("/profesores/agregar", async (req, res) => {
    const profesores = await Profesores.find().lean();
    res.render("agregarProfesores", { profesores: profesores });
  });

router.post("/alumnos/agregar",createAlumnos);
router.post("/asignaturas/agregar",createAsignaturas);
router.post("/profesores/agregar",createProfesores);


router.get("/alumnos/:id/updateAlumno", renderEditAlumnos);
router.get("/asignaturas/:id/updateAsignatura", renderEditAsignaturas);
router.get("/profesores/:id/updateProfesor", renderEditProfesores);


router.post("/alumnos/:id/updateAlumno", updateAlumnos);
router.post("/asignaturas/:id/updateAsignatura", updateAsignaturas);
router.post("/profesores/:id/updateProfesor", updateProfesores);


router.get("/alumnos/:id/deleteAlumno", deleteAlumnos);
router.get("/asignaturas/:id/deleteAsignatura", deleteAsignaturas);
router.get("/profesores/:id/deleteProfesor", deleteProfesores);


router.get("/alumnos/:id/statusAlumno", statusAlumnos);
router.get("/asignaturas/:id/statusAsignatura", statusAsignaturas);
router.get("/profesores/:id/statusProfesor", statusProfesores);


export default router;
