let pessoa = {
    primeiroNome : '',
    ultimoNome : '',

  get nome (){
    return this.primeiroNome
  },
  set nome(novoPrimeiro){
    this.primeiroNome = novoPrimeiro
  },
  get nome (){
    return this.ultimoNome
  },
  set nome(novoUltimo){
    this.ultimoNome = novoUltimo
  }
}
pessoa.primeiroNome = 'Lucas ';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);

pessoa.nome = 'Mariana'
console.log(pessoa.nome);