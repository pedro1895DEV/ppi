interface Cidade { 
    nome: string; 
}

interface Cidade {
    coords: any
}

let brasilia = {
    coords: {
        latitude: -15.7608947,
        longitude: -47.8924659,
    },
    nome: 'Brasília',
};

let goiania = {
    coords: {
        latitude: -16.6869871,
        longitude: -49.2648432,
    },
    nome: 'Goiânia',
};

function obterInformacoes(cidade: Cidade) {
    const coords = `(${cidade.coords.latitude.toFixed(3)}, ${cidade.coords.longitude.toFixed(3)})`;
    return `${cidade.nome.toUpperCase()} está localizada em ${coords}.`;
}

console.log( obterInformacoes(brasilia) );
console.log( obterInformacoes(goiania) );