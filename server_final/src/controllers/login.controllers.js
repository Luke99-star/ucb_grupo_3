import { getConnection, sql, queries } from '../database';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input('username', sql.VarChar, username)
            .input('password', sql.VarChar, password)
            .query(queries.getUserByUsernameAndPassword);

        if (result.recordset.length > 0) {
            // Usuario autenticado
            res.json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            // Usuario no encontrado o contraseña incorrecta
            res.status(401).json({ success: false, message: 'Usuario no autenticado' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
