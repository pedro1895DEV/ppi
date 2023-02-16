function deletar() {
    let n = $('#numero').val();
    $.ajax(
        {
            type: 'DELETE',
            url: `https://reqres.in/api/users/${n}`,
            success: function (dados, textost, xhr) {
                $('#aqui').html('Usuário deletado!')
            },
            error: function(dados, textost, xhr){
                $('#aqui').html('Usuário não encontrado!')
            },
            dataType: 'json'
        }
    )
}