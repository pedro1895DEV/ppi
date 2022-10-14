let pessoa ={
    primeiroNome : '',
    ultimoNome : '',

    get nome(){
        return this.primeiroNome;
    },
    set nome(primeiroNome){
        primeiroNome = 'Lucas';
    },
    get total (){
        return this.ultimoNome;
    },
    set total(ultimoNome){
        return ultimoNome = 'Barbosa';
    }

}
pessoa.primeiroNome = 'Lucas';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);