let n = $('#numero').val();
$('#local').html('Carregando...')
$.ajax(
    {
        type: 'GET',
        url: `http://numbersapi.com/${n}`,
        success: function (dados) {
            $('#local').html('Pronto!')
            document.getElementById('local').innerHTML = dados;
        }
    }
)