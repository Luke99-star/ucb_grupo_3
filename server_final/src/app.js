import express from 'express'
import config from './config.js'

import operacionesRoutes from './routes/operaciones.routes.js'
import voluntariosRoutes from './routes/voluntarios.routes.js'

const app = express();

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(operacionesRoutes);
app.use(voluntariosRoutes);

export default app 