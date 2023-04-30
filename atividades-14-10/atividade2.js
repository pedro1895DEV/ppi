let cores = ['ciano', 'verde', 'amarelo'];
//Loop for simples
for (let i = 0; i < cores.length; i++) {
    console.log('- ' + cores[i]);
}
//Loop for in    
for (let i in cores) {
    console.log('- ' + cores[i]);
}
//Loop for of
for (let i of cores) {
    console.log('- ' + i);
}