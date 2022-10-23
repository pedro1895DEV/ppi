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
let y;

let totalPessoas = 0;
let z;

for (y in familias){
    totalFamilias++;
}
  for (z in familias.Flintstones){
    totalPessoas++
}
  for (z in familias.Jetsons){
    totalPessoas++
}
  for (z in familias.Simpsons){
    totalPessoas++
}


for (let x in familias){
   console.log(x, familias[x])
}

console.log('O total é de: '+totalFamilias +' famílias' + 
'\nO total de pessoas é: ' + totalPessoas + ' pessoas');