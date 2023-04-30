class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distancia(outroPonto) {
        return Math.sqrt(Math.pow(outroPonto.x - this.x, 2) + Math.pow(outroPonto.y - this.y, 2));
    }
}

class Poligonal {
    constructor() {
        this.pontos = []
    }
    adiciona(ponto) {
        this.pontos.push(ponto);
    }
    comprimento() {
        let soma = 0;
        for (let i = 0; i < this.pontos.length - 1; i++) {
            let ponto1 = this.pontos[i];
            let ponto2 = this.pontos[i + 1];
            soma += ponto1.distancia(ponto2);
        }
        return soma;
    }
}

let poli = new Poligonal();
poli.adiciona(new Ponto(1, 1));
poli.adiciona(new Ponto(2, 4));
poli.adiciona(new Ponto(5, 6));
poli.adiciona(new Ponto(4, 1));
poli.adiciona(new Ponto(8, 2));
console.log(poli);
console.log(poli.comprimento());