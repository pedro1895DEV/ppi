let contaX = {
    nome: 'José Fontes',
    saldo: 1000,
    deposita : function(valor){
        this.saldo += valor
    },
    retira : function(valor){
      this.saldo -= valor
    },
    transferePara : function(contaY , valor){
      this.saldo -= valor, contaY.saldo += valor
    }
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000,
    deposita : function(valor){
        this.saldo += valor
    },
    retira : function(valor){
      this.saldo -= valor
    },
    transferePara : function(valor){
      this.saldo -= valor, contaX.saldo += valor
    }
};
    
contaX.deposita(800);
console.log(contaX.nome, contaX.saldo);

contaX.retira(500);
console.log(contaX.nome, contaX.saldo);

contaX.transferePara(contaY, 1000);
console.log(contaX.nome, contaX.saldo);
console.log(contaY.nome, contaY.saldo);    