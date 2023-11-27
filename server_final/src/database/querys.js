//aca solo entran las consultas de las bases de datos

export const queries = {
    getAllOperaciones: 'SELECT * FROM Operaciones1',
    
    //OPERACIONES
    addNewOperacion: 'INSERT INTO Operaciones1 (codigoVehiculo, nombreDenunciante, telefonoDenunciante, ubicacion, tipoOperacion, cantidadPx, horaSalidaCCR, horaLlegadaLugar, horaRetorno, horaCasa, descripcion) VALUES (@codigoVehiculo, @nombreDenunciante, @telefonoDenunciante, @ubicacion, @tipoOperacion, @cantidadPx, @horaSalidaCCR, @horaLlegadaLugar, @horaRetorno, @horaCasa, @descripcion)',
    getOperacionesByCodigoEmergencia: 'SELECT * FROM Operaciones1 WHERE codigoEmergencia = @codigoEmergencia',//va a consultar por un solo id, va a hacer la busqueda de ese id, solo nos retornara un objeto, el query: el codEmergencia que sea igual al que te voy a pasar
    deleteOperacionesByCodigoEmergencia: 'DELETE FROM [SARDDB].[dbo].[Operaciones1] WHERE codigoEmergencia = @codigoEmergencia', //importante anotarlo con los corchetes de esa manera porque sino se puede borrrar todo
    getTotalOperaciones: 'SELECT COUNT(*) FROM Operaciones1',//consulta para la query de contar 1.28.17
    updateOperacionesByCodigoEmergencia: 'UPDATE Operaciones1 SET codigoVehiculo = @codigoVehiculo, nombreDenunciante = @nombreDenunciante, telefonoDenunciante = @telefonoDenunciante, ubicacion = @ubicacion, tipoOperacion = @tipoOperacion, cantidadPx = @cantidadPx, horaSalidaCCR = @horaSalidaCCR, horaLlegadaLugar = @horaLlegadaLugar, horaRetorno = @horaRetorno, horaCasa = @horaCasa, descripcion = @descripcion WHERE codigoEmergencia = @codigoEmergencia ', //para la actualizacion de operaciones

    //VOLUNTARIOS
    getAllVoluntarios: 'SELECT * FROM Voluntarios',
    addNewVoluntario: 'INSERT INTO Voluntarios (carnet_Voluntario, name, telefono, nacionalidad, direccion, fechaNacimiento, clase, turno) VALUES (@carnet_Voluntario, @name, @telefono, @nacionalidad, @direccion, @fechaNacimiento, @clase, @turno)',
    getVoluntarioByCi: 'SELECT * FROM Voluntarios WHERE carnet_Voluntario =@carnet_Voluntario', 
    deleteVoluntario: 'DELETE FROM [SARDDB].[dbo].[Voluntarios] WHERE carnet_Voluntario =@carnet_Voluntario',
    getTotalVoluntarios: 'SELECT COUNT(*) FROM Voluntarios',
    updateVoluntariosByCi: 'UPDATE Voluntarios SET name= @name, name, telefono=@telefono, direccion=@direccion, fechaNacimiento=@fechaNacimiento, clase=@clase, turno=@turno'
};