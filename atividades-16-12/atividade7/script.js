function criar() {
    let n = $('#nome').val();
    let pro = $('#profissao').val();
    $.ajax(
        {
            type: 'POST',
            url: 'https://reqres.in/api/users',
            data: JSON.stringify(
                {
                    name: n,
                    job: pro
                }
            ),
            contentType: "application/json",
            success: function (dados) {
                $("#nome2").html(`Nome do usuário: ${dados.name}`)
                $("#profissao2").html(`Trabalho do usuário: ${dados.job}`)
                $("#id").html(`ID: ${dados.id}`)
            },
            dataType: 'json'
        }
    )
}