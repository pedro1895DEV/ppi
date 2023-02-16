//Digite o valor do raio
let raio = parseInt(process.argv[2])
function calc(raio) {
    let area = Math.PI * (raio * raio);
    if (raio > 0) {
        return area;
    }
    else
        return 0;
}
console.log(calc(raio));