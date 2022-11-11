class TrianguloEq{
    constructor(lado){
        this.l = lado;
    }
    perimetro(){
        return this.l + this.l + this.l
    }
    
    area(){
        return (Math.sqrt(3)/4)*Math.pow(this.l,2)
    }
    
}
    class Quadrado{
        constructor(lado){
            this.l = lado;
    }
    perimetro(){
        return this.l + this.l + this.l + this.l
    }
    
    area(){
        return this.l*this.l
    }
    
    }
    
let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());
let q = new Quadrado(10);
console.log(q.perimetro(), q.area());