const familia = [
    ["Fred", "Barney"],
    ["George", "Jane", "Elroy"],
    ["Homer", "Marge", "Bart"]
];
function tabula(familia) {
    for (let i = 0; i < familia.length; i++) {
        let linha = '';
        for (let j = 0; j < familia[i].length; j++) {
            linha += familia[i][j] + '\t'
        }
        console.log(linha);
    }
}

tabula(familia);