import express from 'express'
import config from './config'

const app=express()



//setting (para configurar el puerto)
app.set('port', config.port) 
// si existe una variable port usala y si no usa el puerto 3000


export default app

//importar el modulo express, y ejecutamos para empezar a configurar el servidor