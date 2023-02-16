function buscar() {
    let n = $('#numero').val();
    $.ajax(
        {
            type: 'GET',
            url: `https://reqres.in/api/users/${n}`,
            success: function (dados) {
                $('#email').text(dados.data.email)
                $('#nome').text(dados.data.first_name);
                $('#sobrenome').text(dados.data.last_name);
                $('#avatar').attr('src', dados.data.avatar);
            },
            error: function () {
                $('#msg').html("Usuário não encontrado!")
            },
            dataType: 'json'
        }

    )

}