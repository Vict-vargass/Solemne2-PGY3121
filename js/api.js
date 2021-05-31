$(document).ready(function(){
    var contenedor=$('#contenedor');
    contenedor.empty();
    $('#btnEnviar').submit(function(){
        alert("Formulario enviado")
    })
    $('#rut').html(function(){
        var agregaInput= $('#rutPas')
        var seleccionado=$('#rut')
        agregaInput.html('<input type="text" name="" id="rutPersona" class="form-control" placeholder="Ingrese su rut">');
        seleccionado.click();
    })
    $('#rut').click(function(){
        var agregaInput= $('#rutPas')
        agregaInput.html('<input type="text" name="" id="rutPersona" class="form-control" placeholder="Ingrese su rut">');
    })

    $('#pas').click(function(){
        var agregaInput = $('#rutPas')
        agregaInput.html('<input type="text" name="" id="pasaporte" class="form-control" placeholder="Ingrese su pasaporte">')
    })

    $('#traerPlaylist').click(function(){
        var artista = $('#nombreArtista').val()
        var token = $('#token').val()
        $.get({
            url: 'https://api.spotify.com/v1/artists/' + artista +'/albums',
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function(respuestaOK){
                var contenedor = $('#contenedor')
                //contenedor.empty()

                $.each(respuestaOK.items, function(indice, album){
                    contenedor.append("<div class='card'>" +
                    "<img src='" + album.images[1].url + "' class='card-img-top max-tam-img' alt='" + album.name + "'>" +
                    "<div class='card-body'>"+
                    "<h5 class='card-title'>" + album.name + "</h5>" +
                    "<p class='card-text'><b>Lanzamiento: </b>" + album.release_date + "</p>"+
                "</div></div>")
                })

            },
            error: function(respuestaError){
                console.error(respuestaError);
            }
        })
    })
})//fin document ready{


