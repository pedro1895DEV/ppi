interface Item {
    id: number,
    nome: string,
    modelo?: number
}

function adicionaAoCarrinho(i : Item){
    console.log(`Adicionando ${i.nome} (id ${i.id}) ao carrinho`);
}

let sapato : Item = {
    id: 1, nome: 'Sapatos de couro'
}

adicionaAoCarrinho(sapato);