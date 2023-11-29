import {Router} from 'express'

import { createNewVehiculo, deleteVehiculoByAño, getVehiculos,
     getVehiculosByAño, updateVehiculoByAño, deleteVehiculoByCodigo, getTotalVehiculos, getVehiculosByCodigo, updateVehiculoByCodigo} from '../controllers/vehiculos.controllers.js'

const router = Router();

router.get("/vehiculos", getVehiculos);

router.post("/vehiculos", createNewVehiculo);

router.get("/vehiculos/count", getTotalVehiculos);

router.get("/vehiculos/:codigo", getVehiculosByCodigo);

router.delete("/vehiculos/:codigo", deleteVehiculoByCodigo);

router.put("/vehiculos/:codigo ", updateVehiculoByCodigo);

export default router