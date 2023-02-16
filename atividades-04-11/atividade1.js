function Usuario(nome) {
    this.x = nome;
    Usuario.prototype.obtemNome = function () {
        return this.x;
    };
}
let user = new Usuario('Fulano');
console.log(`Meu nome é ${user.obtemNome()}.`);