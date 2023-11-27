import { getConnection, sql, queries} from "../database"; //esto estara en el index en la carpeta de database

export const getOperaciones = async (req, res) => {
    try{//adentro lo intentara hacer correctamente, si falla muestra un error

        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllOperaciones);
        res.json(result.recordset);

    }catch(error){
        res.status(500);//error interno del servidor
        res.send(error.message);
    }
};

export const createNewOperaciones = async (req, res) => {
   
    const { codigoVehiculo, nombreDenunciante,
    telefonoDenunciante, ubicacion, tipoOperacion,
    horaSalidaCCR, horaLlegadaLugar,
    horaRetorno, horaCasa, descripcion} = req.body
    let { cantidadPx } = req.body;

    if (codigoVehiculo == null){
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }//validacion de los datos

    if (cantidadPx == null){
        cantidadPx = 0;
    }

    try{

        const pool = await getConnection();

        await pool
        .request()
        .input("codigoVehiculo", sql.VarChar, codigoVehiculo)
        .input("nombreDenunciante", sql.VarChar, nombreDenunciante)
        .input("telefonoDenunciante", sql.VarChar, telefonoDenunciante)
        .input("ubicacion", sql.VarChar, ubicacion)
        .input("tipoOperacion", sql.VarChar, tipoOperacion)
        .input("cantidadPx", sql.Int, cantidadPx)
        .input("horaSalidaCCR", sql.Time, horaSalidaCCR)
        .input("horaLlegadaLugar", sql.Time, horaLlegadaLugar)
        .input("horaRetorno", sql.Time, horaRetorno)
        .input("horaCasa", sql.Time, horaCasa)
        .input("descripcion", sql.Text, descripcion)
        .query(queries.addNewOperacion);
    
        //console.log(codigoVehiculo, nombreDenunciante,
            //telefonoDenunciante, ubicacion, tipoOperacion,
            //cantidadPx, horaSalidaCCR, horaLlegadaLugar,
            //horaRetorno, horaCasa, descripcion)
       
        res.json({codigoVehiculo, nombreDenunciante, telefonoDenunciante, ubicacion, tipoOperacion, cantidadPx, horaSalidaCCR, horaLlegadaLugar, horaRetorno, horaCasa, descripcion});
        
    }catch(error){

        res.status(500);//error interno del servidor
        res.send(error.message);

    }
};

//para obtener un solo producto por id
export const getOperacionesByCodigoEmergencia = async (req, res) => {
    
    const{ codigoEmergencia } = req.params; //para obtener el codEmergencia
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("codigoEmergencia", codigoEmergencia)
    .query(queries.getOperacionesByCodigoEmergencia);
    //console.log(result);
    
    res.send(result.recordset[0]); //para que no aparezca en la consola, suno en el archivo response que aparece despues de hacer el request
};


//para obtener eliminar una operacion por codigoEmergencia
export const deleteOperacionesByCodigoEmergencia = async (req, res) => {
    
    const{ codigoEmergencia } = req.params; //para obtener el codEmergencia
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("codigoEmergencia", codigoEmergencia)
    .query(queries.deleteOperacionesByCodigoEmergencia);
    //console.log(result);
    
    //res.send(result); //para que no aparezca en la consola, suno en el archivo response que aparece despues de hacer el request, 1.27.00 Se procede a mejorarlo
    res.sendStatus(204);
};


//para hacer el conteo de la cantidad total de operaciones

export const getTotalOperaciones = async (req, res) => {
    
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalOperaciones);
    //console.log(result);//tiene una propiedad llamada recordset
    res.json(result.recordset[0][''])//que retorne el primer valor, pedor dentro del cero hay una propiedad vacia, luego que retorne el valor de ese string vacio 
    //res.send(result); //para que no aparezca en la consola, suno en el archivo response que aparece despues de hacer el request, 1.27.00 Se procede a mejorarlo
    //res.sendStatus(204);
};



//Faltaria el actualizar 1.32.42
//El actualizar es como porciones del crear y eliminar, primero se busca por id, y luego hay que a;adir datos y validarlo

export const updateOperacionesByCodigoEmergencia = async (req, res) => {
    const { codigoVehiculo, nombreDenunciante,
        telefonoDenunciante, ubicacion, tipoOperacion, cantidadPx,
        horaSalidaCCR, horaLlegadaLugar,
        horaRetorno, horaCasa, descripcion} = req.body
    const { codigoEmergencia } = req.params; //para extraer el codigoEmergencia


    if (codigoVehiculo == null || nombreDenunciante == null || telefonoDenunciante == null || ubicacion == null || tipoOperacion == null || cantidadPx == null || horaSalidaCCR == null || horaLlegadaLugar == null || horaRetorno == null || horaCasa == null || descripcion == null){
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }//validacion de los datos

    const pool = await getConnection()
    await pool
    .request()
    .input("codigoVehiculo", sql.VarChar, codigoVehiculo)
    .input("nombreDenunciante", sql.VarChar, nombreDenunciante)
    .input("telefonoDenunciante", sql.VarChar, telefonoDenunciante)
    .input("ubicacion", sql.VarChar, ubicacion)
    .input("tipoOperacion", sql.VarChar, tipoOperacion)
    .input("cantidadPx", sql.Int, cantidadPx)
    .input("horaSalidaCCR", sql.Time, horaSalidaCCR)
    .input("horaLlegadaLugar", sql.Time, horaLlegadaLugar)
    .input("horaRetorno", sql.Time, horaRetorno)
    .input("horaCasa", sql.Time, horaCasa)
    .input("descripcion", sql.Text, descripcion)
    .input('codigoEmergencia', sql.Int, codigoEmergencia)//para el codigoEmergencia
    .query(queries.updateOperacionesByCodigoEmergencia);

    res.json({codigoVehiculo, nombreDenunciante, telefonoDenunciante, ubicacion, tipoOperacion, cantidadPx, horaSalidaCCR, horaLlegadaLugar, horaRetorno, horaCasa, descripcion})

};
