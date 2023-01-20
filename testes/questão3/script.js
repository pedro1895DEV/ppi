function atualizar(){
    let numero = $('#entrada').val()

    $.ajax(
        {
            type :'GET',
            url : `https://xkcd.now.sh/?comic=${numero}`,
            success: function (dados){
                $('#texto').html(dados.alt)
                $('#ibagen').attr('src', dados.img)
            }
        }
    )
}