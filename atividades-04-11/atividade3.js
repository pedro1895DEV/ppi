class Ponto{
    constructor(x,y){
        this.a = x;
        this.b = y;
    }
    distancia(){
        return Math.sqrt((this.a-this.b)**0+(this.a-this.b)**0)*2
    }
}

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));