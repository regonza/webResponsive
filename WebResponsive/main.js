function ir_a(elemento) {
    var posicion = $(elemento).position().top;
    $('html,body').animate({scrollTop: posicion}, 500);
    return;
}