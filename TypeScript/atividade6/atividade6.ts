interface Filme {
    titulo: string,
    duracao: number
};

let filmes: (any)[] = [
    ['O Irlandês', 3.5, 'Martins Scorsese'],
    ['Parasita', 2.2],
    ['Pinóquio por Guillermo del Toro', 1.9]
];

function escreve( f : Filme) {
    console.log(`${f}`);
}

for (const f of filmes) {
    escreve(filmes[0])
}