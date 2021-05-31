$(document).ready(function(){
    //INICIALIZA VARIABLE CONTENEDOR PARA USAR EMPTY
    var contenedor=$('#contenedor');
    contenedor.empty();
    //TRAE API DE SPOTIFY
    $('#traerSpotify').click(function(){
        var artista = $('#nombreArtista').val()
        var token = $('#token').val()
        $.get({
            url: 'https://api.spotify.com/v1/artists/' + artista +'/albums',
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function(respuestaOK){
                $.each(respuestaOK.items, function(indice, album){
                    contenedor.append("<div class='card'>" +
                    "<img src='" + album.images[1].url + "' class='card-img-top max-tam-img' alt='" + album.name + "'>" +
                    "<div class='card-body'>"+
                    "<h5 class='card-title'>" + album.name + "</h5>" +
                    "<p class='card-text'><b>Lanzamiento: </b>" + album.release_date + "<br>"+album.external_urls[1]+"</p>"+
                "</div></div>")
                })

            },
            error: function(respuestaError){
                console.error(respuestaError);
            }
        })
    })
    $('#btnLimpiar').click(function(){
        contenedor.empty();
         $('#nombreArtista').val("");
    })
})//fin document ready{


