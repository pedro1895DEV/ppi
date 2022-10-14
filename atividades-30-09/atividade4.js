let livro1 = {
    nome : 'Dom Casmurro',
    Autor : 'Machado de Assis',
    N_pags : 256
}
let livro2 = {
    nome : 'Winds of Winter',
    autor : 'George R. R. Martin',
    n_pags : 876
}
function obterDescricao(livro1){
    return 'O livro é: ' + livro1.nome + '\nDo autor: ' + livro1.Autor + '\nE tem: ' + livro1.N_pags +' páginas'
}

console.log(obterDescricao(livro1,livro2));

