function saudacao(nome, frase = 'Olá, ') {
        if (saudacao > 0) {
                console.log('Olá, ' + nome);
        }
        else {
                console.log(frase + nome);
        }
}
saudacao('Marcelo', 'Bom dia, ');
saudacao('Fernando', 'Boa tarde, ');
saudacao('Luiz');