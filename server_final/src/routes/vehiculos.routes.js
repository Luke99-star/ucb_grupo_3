import {Router} from 'express'

import { createNewVehiculo, deleteVehiculoByAño, getVehiculos,
     getVehiculosByAño, updateVehiculoByAño } from '../controllers/vehiculos.controller.js';

const router = Router();

Router.get("/vehiculos", getVehiculos);

Router.post("/vehiculos",  createNewVehiculo);

Router.get("/vehiculos/count",  getTotalVehiculos);

Router.get("/vehiculos/:año",getVehiculosByAño);

Router.delete("/vehiculos/:año", deleteVehiculoByAño);

Router.put("/vehiculos/:año ", updateVehiculoByAño);

export default router