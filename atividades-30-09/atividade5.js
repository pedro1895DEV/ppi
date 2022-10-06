let livro = {
    nome : 'Dom Casmurro',
    Autor : 'Machado de Assis',
    N_pags : 256
}
function criaLivro(result){
    return result.nome +'; \n'+ result.Autor +'; \n'+ result.N_pags + ';';
}
console.log(criaLivro(livro.nome, livro.Autor, livro.N_pags));
