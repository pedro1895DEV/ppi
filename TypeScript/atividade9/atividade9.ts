let codigos : number[] = [12, 13, 14, 21, 22, 25, 28, 31];

let filtro = (codigos: number) => {
    return codigos > 20 && codigos < 25;
};

console.log(codigos.filter(filtro));