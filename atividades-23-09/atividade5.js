function temp(t1){
    return (t1 - 32) * 5/9;
}
for(temperatura = -50; temperatura < 55; temperatura += 5) {
    let celsius = temp(temperatura)
    console.log(temperatura +'°F '+ '| ' + celsius.toFixed(2) +'°C ')
}
