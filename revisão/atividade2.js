let musicas = [
    {id: 0, titulo: 'Don\'t Stop Me Now', duracao: 218},
    {id: 1, titulo: 'Another One Bites the Dust', duracao: 215},
    {id: 2, titulo: 'We Will Rock You', duracao: 122},
    {id: 3, titulo: 'We Are the Champions', duracao: 179},
    {id: 4, titulo: 'Bohemian Rhapsody', duracao: 355},        
];
function filtraDuracao(lista, duracao){
    let x = '\n'
    if(duracao <= 200){
        console.log(' '+lista[2]['titulo'],x,lista[3]['titulo']);
    }else{
        console.log('Nenhuma música encontrada seguindo os parâmetros solicitados.');
    }
}
filtraDuracao(musicas, 200);