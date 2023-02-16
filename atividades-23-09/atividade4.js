//Digite três números para saber a média aritmética
let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])
let num3 = parseInt(process.argv[4])

function media3(a,b,c){
return (a + b + c) / 3;
}
console.log(media3(num1, num2, num3));