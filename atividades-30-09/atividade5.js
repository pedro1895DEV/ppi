let livro = {
    nome: 'Dom Casmurro',
    Autor: 'Machado de Assis',
    N_pags: 256
}
function criaLivro(obj, obj2, obj3) {
    return 'Livro: ' + obj + '\nAutor: ' + obj2 + '\nN° de páginas: ' + obj3;
}
console.log(criaLivro(livro.nome, livro.Autor, livro.N_pags));
