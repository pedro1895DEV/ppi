let primeiro = process.argv[2];
let segundo = process.argv[3];
let terceiro = process.argv[4];

if (primeiro > segundo && terceiro) {
    console.log('O maior número digitado é: ' + primeiro)
}
else if (segundo > primeiro && segundo > terceiro) {
    console.log('O maior número digitado é: ' + segundo);
}
else {
    console.log('O maior número digitado é: ' + terceiro);
}