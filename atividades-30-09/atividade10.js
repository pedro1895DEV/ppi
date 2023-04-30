let familias = {
  Flintstones: {
    pai: 'Fred',
    amigo: 'Barney'
  },
  Jetsons: {
    pai: 'George',
    mae: 'Jane',
    filho: 'Elroy'
  },
  Simpsons: {
    pai: 'Homer',
    mae: 'Marge',
    filho: 'Bart'
  }
};

let totalFamilias = 0;
let totalPessoas = 0;

for (let familia in familias) {
  console.log(familia, familias[familia]);

  for (let x in familias[familia]) {
    totalPessoas++;
  }

  totalFamilias++;
}

console.log('O total é de: ' + totalFamilias + ' famílias' + '\nO total de pessoas é: ' + totalPessoas + ' pessoas');