class Poligonal{
    constructor(n1,n2){
    this.x = n1
    this.z = n2
    }
    adiciona(Ponto){
    this.p = Ponto;
    }
    
}
class Ponto extends Poligonal{
    
}

    let poli = new Poligonal();
    poli.adiciona(new Ponto(1,1));
    poli.adiciona(new Ponto(2,4));
    poli.adiciona(new Ponto(5,6));
    poli.adiciona(new Ponto(4,1));
    poli.adiciona(new Ponto(8,2));
    console.log(poli);
    console.log(poli.comprimento());