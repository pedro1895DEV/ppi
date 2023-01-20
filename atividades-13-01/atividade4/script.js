$("#botao").click(() => {
    let numero = $('#id-livro').val();
    $.ajax({
        type :'GET',
        url : `http://localhost:3000/livro/${numero}`,
        success : function (res){
            $('#titulo').html(res.resultado.titulo)
            $('#autor').html(res.resultado.autor)
            $('#numPags').html(res.resultado.npags)
            console.log(res);               
        }
    })
})