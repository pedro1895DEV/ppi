class Livro{
    constructor(livro, autor, n_pags){
    this.x = livro;
    this.y = autor;
    this.z = n_pags;
    }
    obterDescricao(){
    return this.x +', autor: '+ this.y +', '+ this.z
    }   
} 
    class EBook extends Livro{
        constructor(livro, autor, n_pags, tamanho){
            super(livro, autor, n_pags,);
            this.tam = tamanho;
    }
    obterDescricao(){
        return this.x +', '+ this.y +', '+ this.z
    }
    obterTamanho(){
        return this.tam +'.kb'
    }
    }
    
let dom = new Livro('Dom Casmurro', 'Machado de Assis', 256);
let hp = new EBook('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 309, 420);
console.log(dom.obterDescricao());
console.log(hp.obterDescricao());
console.log(hp.obterTamanho());