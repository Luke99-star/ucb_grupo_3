import {Router} from 'express'

import { createNewVehiculo, deleteVehiculoByAño, getVehiculos,
     getVehiculosByAño, updateVehiculoByAño, deleteVehiculoByCodigo, getTotalVehiculos, getVehiculosByCodigo, updateVehiculoByCodigo} from '../controllers/vehiculos.controllers.js'

const router = Router();

Router.get("/vehiculos", getVehiculos);

Router.post("/vehiculos", createNewVehiculo);

Router.get("/vehiculos/count", getTotalVehiculos);

Router.get("/vehiculos/:codigo", getVehiculosByCodigo);

Router.delete("/vehiculos/:codigo", deleteVehiculoByCodigo);

Router.put("/vehiculos/:codigo ", updateVehiculoByCodigo);

export default router