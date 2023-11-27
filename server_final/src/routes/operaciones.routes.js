import {Router} from 'express'

import {createNewOperaciones, deleteOperacionesByCodigoEmergencia, getOperaciones, getOperacionesByCodigoEmergencia, getTotalOperaciones, updateOperacionesByCodigoEmergencia} from '../controllers/operaciones.controller.js'

const router = Router();

router.get("/operaciones", getOperaciones);

router.post("/operaciones", createNewOperaciones);

router.get("/operaciones/count", getTotalOperaciones)//contar cuantas operaciones, 1.31.32 este funciona con el metodo get, no con el metodo post

router.get("/operaciones/:codigoEmergencia", getOperacionesByCodigoEmergencia);//va a tener un parametro extra, :id, 

router.delete("/operaciones/:codigoEmergencia", deleteOperacionesByCodigoEmergencia);

router.put("/operaciones/:codigoEmergencia", updateOperacionesByCodigoEmergencia);

export default router 