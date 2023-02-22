function rodar() {
    $('span').toggleClass('destaque')
}

function voltar() {
    $('p').css(
        'opacity', 100
    )
}

$('p, span').on('click', function () {

    switch ($("input[name='bola']:checked")[0].id) {
        case 'fade':
            $(this).fadeOut();
            break;
        case 'slide':
            $(this).slideUp();
            break;
        case 'hide':
            $(this).hide();
            break;
        default:
            break;
    }

})