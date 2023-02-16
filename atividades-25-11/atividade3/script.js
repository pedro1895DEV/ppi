function adiciona() {
    let x = ['texto1', 'texto2', 'texto3', 'texto4']
    for (let i = 0; i < 1; i++) {
        let p = document.createElement('p')
        p.innerHTML = x[i]

        let div = document.getElementById('text');
        div.appendChild(p);
    }
}