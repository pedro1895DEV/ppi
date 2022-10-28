function calcula(array){
    let soma = 0;
    for (let i in array){
    soma += array[i]
    }
    return total ={
    soma,
    media: soma/array.length
    } 
}
console.log(calcula([4, 8, 20, 6]));