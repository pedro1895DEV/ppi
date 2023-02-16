$('p').on('click', function () {
    $(this).css(
        'color', 'green'
    )
});

function rodar() {
    $('span').toggleClass('destaque')
}