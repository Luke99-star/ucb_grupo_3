import {Router} from 'express'

import { DeleteVoluntarioByCi, createNewVoluntario, getTotalVoluntarios, getVoluntarios, getVoluntariosByCi, updateVolunarioByCi } from '../controllers/voluntarios.controllers.js'

const router = Router()

router.get('/voluntarios',getVoluntarios);

router.post('/voluntarios', createNewVoluntario);

router.get("/voluntarios/count", getTotalVoluntarios);

router.get('/voluntarios/:carnet_Voluntario', getVoluntariosByCi );

router.delete('/voluntarios/:carnet_Voluntario', DeleteVoluntarioByCi);

router.put('/voluntarios/:carnet_Voluntario', updateVolunarioByCi);

export default router