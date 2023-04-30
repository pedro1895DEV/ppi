class Usuario {
    constructor(nome) {
        this.x = nome;
    }
    obtemNome() {
        return this.x;
    }
}

let user = new Usuario('Fulano');

console.log(`Meu nome é ${user.obtemNome()}.`);