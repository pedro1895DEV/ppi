function adicionar() {
    let p = document.createElement('p');
    let texto =
        document.createTextNode('Um novo parágrafo');
    p.appendChild(texto);
    let div = document.querySelector('p');
    div.appendChild(p);
}

$('p').on('click', function() {
    $(this).css(
    'color','green'
    )
     
});