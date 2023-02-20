/* 8. Recupere o código das funções escritas nas questões 3, 7 e 8 da Lista de Exercícios 2 e acrescente a elas os tipos de 
parâmetro e retorno apropriados, além de marcações de parâmetro opcional quando aplicável.
*/
/* function media3(a : number, b : number, c : number) : number {
    return (a + b + c) / 3;
}
console.log(media3(10, 20, 30)); */

/* function ehPrimo(num: number) {
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
} */

function saudacao(nome: string, frase? : string){
    if (nome) {
            console.log('Olá, ' + nome);
    }
    else {
            console.log(frase  + nome);
    }
}
saudacao('Fulano');
saudacao('Sicrano', 'Bom dia ');
saudacao('Beltrano', 'Boa noite ');