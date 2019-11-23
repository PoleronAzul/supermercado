const datosVendedores = [];
function agregarDatosVendedor(e,form){
    stop(e);
    // Definición de variable
    let datosVendedor = {};
    // asignación de datos del formulario
    datosVendedor.nombre = form.NVendedor.value;
    datosVendedor.apellido = form.ApeVende.value;
    datosVendedor.runVendedor = form.RunVende.value;
    datosVendedor.genero = form.GVende.value;
    datosVendedor.contrasena = form.ContraVende.value;
    datosVendedor.email = form.EmailVende.value;
    datosVendedor.direccion = form.DVende.value;
    datosVendedor.telefono = form.TelefonoVende.value;
    datosVendedor.ciudad = form.CiudadVende.value;
    datosVendedor.comuna = form.ComunaVende.value;
    // Se imprime por consola
    datosVendedores.push(datosVendedor);
    formMod.setAttribute("onsubmit")
    listar();
    form.reset();
}

function modificarDatosVendedor(e,form,pos){
    stop(e);
    alert("Ejecutado correctamente");
    let newDatosV = {
        nombre:form.nombre.value,
        apellido:form.ApeVende.value,
        run:form.RunVende.value,
        genero:form.GVende.value,
        contrasena:form.ContraVende.value,
        email:form.email.value,
        direccion:form.DVende.value,
        telefono:form.telefono.value,
        ciudad:form.CiudadVende.value,
        comuna:form.ComunaVende.value,
    }
    datosVendedores[pos] = newDatosV;
    listar();
    formMod.setAttribute("onsubmit","agregarDatos(event,this)");
}

function listarVendedores(){
    let tbody = "";
    for(let i=0;i<=datos.length-1;i++){
        let info=datosVendedor[i];
        let td = "<tr> <td>"+info.nombre+"</td> <td>"+info.apellido+"</td> <td>"+info.runVendedor+"</td> <td>"+info.genero+"</td> <td>"+info.contrasena+"</td> <td>"+info.email+"</td> <td>"+info.direccion+"</td> <td>"+info.telefono+"</td> <td>"+info.ciudad+"</td> <td>"+info.comuna+"</td></tr>" 
        tbody=tbody + td;
    }
    document.querySelector("#TablaVendedores tbody").innerHTML = "";
    document.querySelector("#TablaVendedores tbody").innerHTML = tbody
}

function EliminarVendedor(e,form){
    stop(e);
    let nombreAEliminar = form.nombreaEliminar.value;
    for(let i=0;i<=datosVendedores.length-1;i++){
        if(datosVendedores[i].nombre===nombreAEliminar){
            datosVendedores.splice(i,1);
            break;
        }
    }
    listar();
}

function agregarDatosUsuario(e,form){
    stop(e);
    // Definición de variable
    let datosUsuario = {};
    // asignación de datos del formulario
    datosUsuario.nombre = form.NUsuario.value;
    datosUsuario.apellido = form.ApeUsuario.value;
    datosUsuario.runUsuario = form.RunUsuario.value;
    datosUsuario.genero = form.GUsuario.value;
    datosUsuario.Contrasena = form.ContraUsuario.value;
    datosUsuario.email = form.emailUsuario.value;
    datosUsuario.direccion = form.DUsuario.value;
    datosUsuario.telefono = form.TelefonoUsuario.value;
    datosUsuario.ciudad = form.CiudadUsuario.value;
    datosUsuario.comuna = form.ComunaUsuario.value;
    // Se imprime por consola
    datosUsuarios.push(datosUsuario);
    formMod.setAttribute("onsubmit")
    listar();
    form.reset();
    
}

function modificarDatosUsuario(e,form,pos){
    stop(e);
    alert("Ejecutado correctamente");
    let newDatosU = {
        nombre:form.nombre.value,
        apellido:form.ApeUsuario.value,
        run:form.RunUsuario.value,
        genero:form.GUsuario.value,
        contrasena:form.ContraUsuario.value,
        email:form.email.value,
        direccion:form.DUsuario.value,
        telefono:form.telefono.value,
        ciudad:form.CiudadUsuario.value,
        comuna:form.ComunaUsuario.value,
    }
    datosUsuarios[pos] = newDatosU;
    listar();
    formMod.setAttribute("onsubmit","agregarDatosUsuario(event,this)");
}

function listarUsuarios(){
    let tbody = "";
    for(let i=0;i<=datos.length-1;i++){
        let info=datosUsuarios[i];
        let td = "<tr> <td>"+info.nombre+"</td> <td>"+info.apellido+"</td> <td>"+info.runUsuario+"</td> <td>"+info.genero+"</td> <td>"+info.contrasena+"</td> <td>"+info.email+"</td> <td>"+info.direccion+"</td> <td>"+info.telefono+"</td> <td>"+info.ciudad+"</td> <td>"+info.comuna+"</td></tr>" 
        tbody=tbody + td;
    }
    document.querySelector("#TablaUsuarios tbody").innerHTML = "";
    document.querySelector("#TablaUsuarios tbody").innerHTML = tbody
}

function EliminarUsuario(e,form){
    stop(e);
    let nombreAEliminar = form.nombreaEliminar.value;
    for(let i=0;i<=datosUsuarios.length-1;i++){
        if(datosUsuarios[i].nombre===nombreAEliminar){
            datosUsuarios.splice(i,1);
            break;
        }
    }
    listar();
}

function stop(e){
    e.preventDefault();
}


    
inicial();