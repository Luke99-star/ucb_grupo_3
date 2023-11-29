import express from 'express'
import config from './config.js'
import cors from 'cors';

import operacionesRoutes from './routes/operaciones.routes.js'
import voluntariosRoutes from './routes/voluntarios.routes.js'
import vehiculosRoutes from './routes/vehiculos.routes.js'
import loginRoutes from './routes/login.routes.js';

const app = express();
app.use(cors());

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(operacionesRoutes);
app.use(voluntariosRoutes);
app.use(vehiculosRoutes);
app.use(loginRoutes);

export default app 