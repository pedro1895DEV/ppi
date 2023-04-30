function ehPalindromo(string) {
    return string === string.split('').reverse().join('')
}

console.log(ehPalindromo('asa'));