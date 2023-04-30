let livro = {
    Nome: 'Winds of Winter',
    Autor: 'George R. R. Martin',
    N_pags: 876
}

for (let x in livro) {
    console.log(x + ':', livro[x]);
}