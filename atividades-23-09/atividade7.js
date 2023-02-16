//Digite 30 para listar todos os números primos entre 2 e 30
let x = parseInt(process.argv[2])
function ehPrimo(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return true;
};
console.log(ehPrimo());
for (let i = 2; i < 30; i++) if (ehPrimo(i)) console.log(i); 