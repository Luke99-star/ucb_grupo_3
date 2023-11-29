import { getConnection, sql, queries} from "../database";

export const getVehiculos = async(req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllVehiculos);
        res.json(result.recordset); 

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const createNewVehiculo = async(req, res) => {
    const {Modelo, Marca, codigo, estado} = req.body

    let { quantity } = req.body;

    if(Modelo == null || Marca == null || codigo == null || estado == null ){
        return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }
    if(quantity == null){
        quantity = 0;
    } 

     try {
        const pool = await getConnection();

        await pool
        .request()
        .input("Modelo", sql.VarChar, Modelo)
        .input('Marca', sql.VarChar, Marca)
        .input('quantity', sql.Int, quantity)
        .input('año', sql.Date, año)
        .input('codigo', sql.Int, codigo)
        .input('estado', sql.VarChar, estado)
        .query(queries.addNewVehiculo);

    res.json({Modelo, Marca, quantity, codigo, estado});
     } catch (error) {
        res.statur(500);
        res.send(error.message);
     }
};

export const getVehiculosByCodigo = async (req, res) => {
    const {codigo} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('codigo', codigo)
    .query(queries.getVehiculosByCodigo);
   // console.log(result);

    res.send(result.recordset[0])
};

export const deleteVehiculoByCodigo = async (req, res) => {
    const {codigo} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("codigo", codigo)
    .query(queries.deleteVehiculo);
}

export const getTotalVehiculos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalVehiculos);

    res.json(result.recordset[0][''])
};

export const updateVehiculoByCodigo = async (req, res) => {
    const {Modelo, Marca, quantity, año, estado} = req.body;
    const { codigo } = req.params;

    if(Modelo == null || Marca == null, quantity == null || codigo == null || estado == null){
        return res.status(400).json({ msg: "Bad Request. Please Fill all fields"});
    }

    const pool = await getConnection();
    await pool
        .request()
        .input("Modelo", sql.VarChar, Modelo)
        .input("Marca", sql.VarChar, Marca)
        .input("quantity", sql.Int, quantity)
        .input('año', sql.Date, año)
        .input("codigo", sql.Int, codigo)
        .input("estado", sql.VarChar, estado)
        .query(queries.updateVehiculoByAño);

        res.json({Modelo, Marca, quantity, codigo, estado})

};