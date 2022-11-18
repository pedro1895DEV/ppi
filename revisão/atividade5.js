class Livro{
    constructor(autor, titulo, paginas){
        this.autor = autor;
        this.titulo = titulo;
        this.paginas = paginas;
        this.foiLido = false;
    }
}
class ListaDeLivros{
    constructor(){
        this.lista = [];
    }
    adicionaLivro(Livro){
        this.lista.push(Livro);
    }
    removeLivro(index){
        this.lista.splice(index,1);
    }
    marcarComoLido(index){
        this.lista[index].foiLido = true;
    }
    totalDePaginasNaoLidas(){
        let total = this.lista.reduce(
            function( acc, livro) {
                if(livro.foiLido != true){
                    acc += livro.paginas;
                }

                return acc;

            }, 0 );

        return total;
    }
    escreve(){
        for(let f of this.lista){
            console.log(`"${f.titulo}", ${f.autor} (${f.paginas} páginas) - ${this.variavelLido(f)}`);
        }
    }
    variavelLido(item){
        if(item.foiLido == true){
            return 'lido';
        }
        else{
            return 'não lido';
        }
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