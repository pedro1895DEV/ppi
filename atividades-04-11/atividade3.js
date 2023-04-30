class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distancia(outroPonto) {
        const distanciaX = outroPonto.x - this.x;
        const distanciaY = outroPonto.y - this.y;
        const distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
        return distancia;
    }
}

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));