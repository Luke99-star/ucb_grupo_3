import { Promise } from "mssql";
import { getConnection, sql, queries} from "../database/connection";
import querys from '../database/querys'

export const getVoluntarios = async (req, res) => {
    try {
        const pool = await getConnection(); //llamo a la conexion
        const result = await pool.request().query(queries.getAllVoluntarios); //con el pool haceomos una consulta
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewVoluntario = async (req, res) => {
    const { carnet_Voluntario, name, telefono, nacionalidad, direccion, fechaNacimiento, clase, turno } = req.body

    if (name == null || carnet_Voluntario == null || telefono == null || nacionalidad == null || direccion == null || fechaNacimiento == null || clase == null || turno == null) {
        return res.status(400).json({ msg: 'Bad Request, por favro llena todos los campos' })
    }

    try {
        const pool = await getConnection()

        await pool
        .request()
        .input('carnet_Voluntario', sql.Int, carnet_Voluntario)
        .input('name', sql.VarChar, name)
        .input('telefono', sql.Int, telefono)
        .input('nacionalidad', sql.VarChar, nacionalidad)
        .input('direccion', sql.VarChar, direccion)
        .input('fechaNacimiento', sql.VarChar, fechaNacimiento)
        .input('clase', sql.VarChar, clase)
        .input('turno', sql.VarChar, turno)
        .query(queries.addNewVoluntario);
    
    
        res.json({ carnet_Voluntario, name, telefono, nacionalidad, direccion, fechaNacimiento, clase, turno })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getVoluntariosByCi = async (req, res) => {
    const { carnet_Voluntario } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('carnet_Voluntario', carnet_Voluntario)
        .query(queries.getVoluntariosByCi);

    res.send(result.recordset[0]);
};

export const DeleteVoluntarioByCi = async (req, res) => {
    const { carnet_Voluntario } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('carnet_Voluntario', carnet_Voluntario)
        .query(queries.DeleteVoluntario);

    res.sendStatus(204);
}

export const getTotalVoluntarios = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getAllVoluntarios);

    res.json(result.recordset[0]['']);
}

export const updateVolunarioByCi = async (req, res) => {
    const {name,telefono, nacionalidad, direccion,fechaNacimiento, clase, turno} = req.body;
    const {carnet_Voluntario} = req.params

    if (name == null || carnet_Voluntario == null || telefono == null || nacionalidad == null || direccion == null || fechaNacimiento == null || clase == null || turno == null) {
        return res.status(400).json({ msg: 'Bad Request, por favro llena todos los campos' })
    }

    const pool = await getConnection()
    await pool.request()
        .input('carnet_Voluntario', sql.Int, carnet_Voluntario)
        .input('name', sql.VarChar, name)
        .input('telefono', sql.Int, telefono)
        .input('nacionalidad', sql.VarChar, nacionalidad)
        .input('direccion', sql.VarChar, direccion)
        .input('fechaNacimiento', sql.VarChar, fechaNacimiento)
        .input('clase', sql.VarChar, clase)
        .input('turno', sql.VarChar, turno)
        .input('carnet_Voluntario', sql.Int, carnet_Voluntario)
        .query(queries.updateVolunarioByCi)

    res.json ({carnet_Voluntario, name, telefono, nacionalidad, direccion, fechaNacimiento, clase, turno})

}