class Forma {
    constructor() {
    }

    toString() {
        return 'p= ' + this.perimetro() + ' a= ' + this.area()
    }

}
class Quadrado extends Forma {
    constructor(lado) {
        super(lado)
        this.l = lado;
    }
    perimetro() {
        return this.l + this.l + this.l + this.l
    }

    area() {
        return this.l * this.l
    }

}
class TrianguloEq extends Forma {
    constructor(lado) {
        super(lado)
        this.l = lado;
    }
    perimetro() {
        return this.l + this.l + this.l
    }

    area() {
        return (Math.sqrt(3) / 4) * Math.pow(this.l, 2)
    }

}

let formas = [new Quadrado(5), new Quadrado(10),
new TrianguloEq(5), new TrianguloEq(10)];
for (forma of formas) {
    console.log(`${forma.constructor.name}: ${forma.toString()}`);
}