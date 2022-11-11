class mediaAreas{
    constructor(med){
        this.x = med;
    }
}
class Quadrado extends mediaAreas{
    constructor(lado){
        super(lado)
        this.l = lado;
    }
    area(){
        return this.l*this.l
    }
}
class TrianguloEq extends mediaAreas{
    constructor(lado){
        super(lado)
        this.l = lado;
    }
    area(){
        return (Math.sqrt(3)/4)*Math.pow(this.l,2)
    }
}

console.log(  mediaAreas(
    new Quadrado(10), new TrianguloEq(10), new Quadrado(5)
));