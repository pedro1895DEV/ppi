for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
        if (j < i) {
            process.stdout.write(' ');
        }
    }
    process.stdout.write('\n');
}