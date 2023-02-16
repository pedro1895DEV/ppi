function mudar() {
    let n = $('#numero').val();
    $('#aqui').load(
        `http://numbersapi.com/${n}`
    )
}