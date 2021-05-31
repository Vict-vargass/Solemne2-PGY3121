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
        agregaInput2.html('<input type="text" name="" id="rutPersona" class="form-control" placeholder="Ingrese su rut">');
    })
    //FUNCION PARA CAMBIAR A INPUT PASAPORTE
    $('#pas').click(function(){
        var agregaInput = $('#rutPas')
        agregaInput.html('<input type="text" name="" id="pasaporte" class="form-control" placeholder="Ingrese su pasaporte">')
    })
    //ENVIAR EL FORMULARIO
    $('#btnEnviar').submit(function(){
        alert("Formulario enviado")
    })

})