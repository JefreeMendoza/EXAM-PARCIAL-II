import { Router } from "express";
import {
    createAlumno,
    getAlumnos,
    getAlumnoById,
    /* updateAlumno,
    deleteAlumno */
} from "../Controllers/auth.controllers.js";

const router = Router();

router.post('/', createAlumno);
router.get('/', getAlumnos);
router.post('/:id', getAlumnoById);
/* router.post('/:id', updateAlumno);
router.post('/:id', deleteAlumno); */


export default router;
