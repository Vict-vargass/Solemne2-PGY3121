$(document).ready(function(){
    //FUNCION QUE ESTABLECE EL RUT SELECCIONADO, ASEGURA PONER EL INPUT CORRESPONDIENTE
    $('#rut').html(function(){
        var agregaInput1= $('#rutPas')
        var seleccionado=$('#rut')
        agregaInput1.html('<input type="text" name="" id="rutPersona" class="form-control" placeholder="Ingrese su rut">');
        seleccionado.click();
    })
    // FUNCION PARA VOLVER AL INPUT ORIGINAL
    $('#rut').click(function(){
        var agregaInput2= $('#rutPas')
        agregaInput2.html('<input type="text" name="" id="rutPersona" class="form-control" placeholder="Ingrese su rut" maxlength="20">');
    })
    //FUNCION PARA CAMBIAR A INPUT PASAPORTE
    $('#pas').click(function(){
        var agregaInput3 = $('#rutPas')
        agregaInput3.html('<input type="text" name="" id="pasaporte" class="form-control" placeholder="Ingrese su pasaporte"  maxlength="20">')
    })
    //ENVIAR Y VALIDAR EL FORMULARIO
    $('#formularioContacto').submit(function(){
        var nombreCompleto=$('#nombreCompleto')
        var email= $('#email')
        var rut = $('#rutPersona')
        var pasaporte = $('#pasaporte')
        var celular = $('#nroCelular')
        var ciudad = $('#ciudades')
        var mensaje = $('#textArea') 
        if(nombreCompleto.val()==""){
            nombreCompleto.addClass('alert')
            event.preventDefault();
        }
        if(email.val()==""){
            email.addClass('alert')
            event.preventDefault();
        }
        if(rut.val()==""){
            rut.addClass('alert')
            event.preventDefault();
        }
        if(pasaporte.val()==""){
            pasaporte.addClass('alert')
            event.preventDefault();
        }
        if(celular.val()==""){
            celular.addClass('alert')
            event.preventDefault();
        }
        if(ciudad.val()=="0"){
            ciudad.addClass('alert')
            event.preventDefault();
        }
        if(mensaje.val()==""){
            mensaje.addClass('alert')
            event.preventDefault();
        }
        else{
            alert("El formulario a sido enviado con exito")
            nombreCompleto.val("").removeClass("alert");
            email.val("").removeClass("alert");
            rut.val("").removeClass("alert");
            pasaporte.val("").removeClass("alert");
            celular.val("").removeClass("alert");
            ciudad.val(0).removeClass("alert")
            mensaje.val("").removeClass("alert")
        } 
        }
    )
    //LIMPIAR EL FORMULARIO
    $('#btnLimpiar').click(function(){
        var nombreCompleto=$('#nombreCompleto');
        var email= $('#email');
        var rut = $('#rutPersona');
        var pasaporte = $('#pasaporte');
        var celular = $('#nroCelular');
        var ciudad = $('#ciudades');
        var mensaje = $('#textArea');
        nombreCompleto.val("").removeClass("alert");
        email.val("").removeClass("alert");
        rut.val("").removeClass("alert");
        pasaporte.val("").removeClass("alert");
        celular.val("").removeClass("alert");
        ciudad.val(0).removeClass("alert");
        mensaje.val("").removeClass("alert");
    })

})