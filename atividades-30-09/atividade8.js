let pessoa = {
  primeiroNome : '',
  ultimoNome : '',

get nome (){
  return this.primeiroNome + this.ultimoNome;
},
set nome(x){
  this.primeiroNome = x ;
},
set nome (x){
  this.ultimoNome = '';  
}

}
pessoa.primeiroNome = 'Lucas ';
pessoa.ultimoNome = 'Barbosa';
console.log(pessoa.nome);

pessoa.nome = 'Mariana';
console.log(pessoa.nome);