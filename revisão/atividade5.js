class Livro{
    constructor(autor,titulo,n_pags){
        this.a = autor;
        this.t = titulo;
        this.n = n_pags;
    }
    teste(){
        this.a+this.t+this.n
    }
}
class ListaDeLivros extends Livro{
    constructor(autor,titulo,n_pags, tamanho){
        super(autor,titulo,n_pags);
        this.tam = tamanho;
    }
    adicionaLivro(){
        return this.a + this.t + this.n + this.tam
    }
    totalDePaginasNaoLidas(){

    }
    escreve(){
        
    }
    marcarComoLido(){

    }
}
let livro1 = new Livro('Machado de Assis', 'Dom Casmurro', 250);
let livro2 = new Livro('Machado de Assis', 'Quincas Borba', 360);
let lista = new ListaDeLivros();
lista.adicionaLivro(livro1);
lista.adicionaLivro(livro2);
lista.adicionaLivro( new Livro('J.R.R. Tolkien', 'O Hobbit', 336) );
lista.adicionaLivro( new Livro('J.R.R. Tolkien', 'O Silmarillion', 496) );

console.log('Antes:');
lista.escreve();
console.log('Páginas não lidas:', lista.totalDePaginasNaoLidas());

console.log();
lista.marcarComoLido(1);
lista.marcarComoLido(3);

console.log('Depois:');
lista.escreve();
console.log('Páginas não lidas:', lista.totalDePaginasNaoLidas());