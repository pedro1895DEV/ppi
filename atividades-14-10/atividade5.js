function calcula(...args){
    let soma = 0;
    for (let i =0; i < args.length; i++){
    soma += args[i]
    }
    return total ={
    soma,
    media: soma/args.length
    } 
}
console.log(calcula(4, 8, 20, 6));