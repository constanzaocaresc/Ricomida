const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//Esta funcion se usa para que el codigo se ejecute cuando se haya cargado la pagina
$(function(){

    // Accion de alert
    $("#enviarCorreo").click(function(){
        alert("Correo enviado con éxito...");

    });

    //ocultar clase segun tamaño pantalla
    $(window).resize(function() {
        let tam_pan=$(window).width();
        if (tam_pan<= 950){
            $('#content-img').addClass("border-top");
            /*$('#carrusel').css(
                "display","none"
            );*/
            
        }else{
            $('#content-img').removeClass("border-top");
            /*$('#carrusel').show();*/
        }
        
    });

    //Cambiar titulo a color rojo con dobleclick
    $(".ing-titulo").on({
        dblclick: function(){
            $(this).css("color", "red");
        }
    });


    // ocultar detalle de recetas

    $("#card-uno").click(function(){
       // $("div#body-uno.card-body").toggle();
        $("#body-uno").toggle();

    });
    $("#card-dos").click(function(){
         $("#body-dos").toggle();
     });

    $("#card-tres").click(function(){
        $("#body-tres").toggle();
    });

    
});


