enum Veiculo {
    carro = "Carro", onibus = "Ônibus", bicicleta = "Bicicleta"
}

function descreveVeiculo (v: Veiculo){
    console.log(`O veículo é um ${v}`);
}

descreveVeiculo(Veiculo.carro)