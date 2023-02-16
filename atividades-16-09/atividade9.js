let temp;

for (temperatura = -50; temperatura < 55; temperatura += 5) {
    let celsius = (temperatura - 32) * 5 / 9;
    console.log(temperatura + '°F ' + '| ' + celsius.toFixed(2) + '°C ')
}