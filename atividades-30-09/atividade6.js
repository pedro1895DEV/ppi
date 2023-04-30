let contaX = {
    nome: 'José Fontes',
    saldo: 1000
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}

function deposita(conta, valor) {
    conta.saldo += valor
}

function retira(conta, valor) {
    conta.saldo -= valor
}

function transfere(conta1, conta2, valor) {
    conta1.saldo -= valor
    conta2.saldo += valor

}

deposita(contaY, 500);
retira(contaX, 200);
transfere(contaX, contaY, 300);
transfere(contaY, contaX, 500)
console.log(contaY);
console.log(contaX);