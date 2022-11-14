let cores = { 
    "aliceblue": [240, 248, 255, 1],
    "antiquewhite": [250, 235, 215, 1],
    "aqua": [0, 255, 255, 1],
    "aquamarine": [127, 255, 212, 1],
    "azure": [240, 255, 255, 1],
    "beige": [245, 245, 220, 1]
};

function geraCorCss(cores){
    return 'rbga ' + cores.beige
}

function geraCorCss(){
    for(i in cores){
        return 'rgba '+cores.beige.join('-')
    }
}
console.log( geraCorCss(cores, 'beige') );