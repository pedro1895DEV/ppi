 function media3(a : number, b : number, c : number) : number {
    return (a + b + c) / 3;
}
console.log(media3(10, 20, 30)); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function ehPrimo(num: number) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return true;
};
console.log(ehPrimo(30));

for(let i =2; i < 30; i++){
    if(ehPrimo(i)){
        console.log(i);
    }
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function saudacao(nome: string, frase?: string): string {
    if (frase)
        return `${frase}${nome}`;
    else
        return `Olá, ${nome}`
            ;
}

console.log(saudacao('Fulano'));
console.log(saudacao('Sicrano', 'Bom dia, '));
console.log(saudacao('Beltrano', 'Boa noite, '));