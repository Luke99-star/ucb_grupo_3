//aqui se agrupara todos los imports que se hagan al operacionescontroller 

//export { getoConnnection, sql } from './connection.js' //lo que sale de connection

export * from './connection.js' //esta es la mejor manera para exportar, con el * se exporta todo
export {queries} from './querys.js' //con esto se puede importar al operaciones.controller.js 1.16.35