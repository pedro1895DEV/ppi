function calc(op,a,b){
    function adiciona(){
        if( op === 0){
            console.log(a + b);
        }
        if(op === 1){
            console.log(a - b);
        }
        if(op === 2){
            console.log(a * b);
        }
        if(op === 3){
        console.log(a / b);
        }
    }
    adiciona();
}
calc(2, 15 , 10);

