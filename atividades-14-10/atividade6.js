let a = [4, 5, 10];
let b = [2, 3, 8];

function somaArrays(a, b) {
    let resultado = [];
    for (let i = 0; i < a.length; i++) {
        resultado.push(a[i] + b[i])
    }
    return resultado;
}

console.log(somaArrays(a, b));