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

$('p').on('click', function(e){
    $(this).text( $("input[name='bola']:checked").val() );
})

function slide (){
    
}