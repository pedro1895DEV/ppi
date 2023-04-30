$(document).ready(function () {
    const textos = ["texto1", "texto2", "texto3", "texto4", "texto5"]
    let indice = 0;

    $('#botao').click(function () {
        let texto = textos[indice];
        let paragrafo = $('<p>').text(texto);
        $('#texto').append(paragrafo);

        indice++;
        if (indice == textos.length) {
            indice = 0;
        }
    })
});