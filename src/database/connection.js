import sql from 'mssql'


//Aqui definiremos donde esta la DB y el usuario

const dbSettings = {
    user:"grupo3",
    password: "Grupo3",
    server: "localhost",
    database: "SARDB",
    options : {
        encrypt: true,
        trustServerCertificate: true,
    },
};

async function getConnection()
{
    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1');
    console.log(result);
}

getConnection();
