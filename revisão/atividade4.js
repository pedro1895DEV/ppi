class Cachorro{
    constructor(cansa, fome, sede){
        this.c = cansa = 5;
        this.f = fome = 5;
        this.s = sede = 5;
    }
    toString(){
        return 'Fome: '+ this.f+ ' Sede: '+ this.s + ' Cansaço: ' + this.c
    }
    alimenta(){
        return this.f -= 5;
    }
    brinca(valor){
        return this.c +=valor;
    }
}
let cachorro = new Cachorro();
console.log('Antes: ' + cachorro);
cachorro.alimenta();
cachorro.brinca(3);
console.log('Depois: ' + cachorro);