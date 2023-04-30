let pessoa = {
  primeiroNome: '',
  ultimoNome: '',

  get nome() {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  },
  set nome(x) {
    let [nPrimeiroNome, nUltimoNome] = x.split(' ');
    this.primeiroNome = nPrimeiroNome;
    this.ultimoNome = nUltimoNome || '';
  }

}
pessoa.primeiroNome = 'Lucas ';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);

pessoa.nome = 'Mariana';
console.log(pessoa.nome);