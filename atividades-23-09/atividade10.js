function numprint(n) {
    let num = n - 1;
    if (num > 0) {
        numprint(num);
    }
    if (n <= 50)
        console.log(n);
}
numprint(5000);