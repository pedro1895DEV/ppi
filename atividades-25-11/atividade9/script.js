$('p').on('click', function () {
    $(this).css(
        'opacity', '0'
    )
});

function rodar() {
    $('span').toggleClass('destaque')
}

function voltar(){
    $('p').css(
        'opacity', 100
    )
}