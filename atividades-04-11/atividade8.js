class Quadrado {
    constructor(lado) {
        this.l = lado;
    }

    perimetro() {
        return this.l + this.l + this.l + this.l
    }

    area() {
        return this.l * this.l
    }
}

class TrianguloEq {
    constructor(lado) {
        this.l = lado;
    }
    
    perimetro() {
        return this.l + this.l + this.l
    }

    area() {
        return (Math.sqrt(3) / 4) * Math.pow(this.l, 2)
    }
}

function mediaAreas(...formas) {
    const areas = formas.map(forma => forma.area());
    const somaAreas = areas.reduce((total, area) => total + area, 0);
    return somaAreas / formas.length;
}

console.log(mediaAreas(
    new Quadrado(10), new TrianguloEq(10), new Quadrado(5)
));