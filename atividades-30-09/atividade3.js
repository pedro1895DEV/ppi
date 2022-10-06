let livro = {
    Nome : 'Winds of Winter',
    Autor : 'George R. R. Martin',
    N_pags : 876
}

for(let prop in livro){
    console.log(prop +':' ,livro[prop]);
}