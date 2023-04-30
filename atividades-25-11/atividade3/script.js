let x = ['texto1', 'texto2', 'texto3', 'texto4'];

const paragrafos = document.getElementById("texto");
const botao = document.getElementById("botao");

let indiceTexto = 0;
botao.addEventListener('click', () => {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = x[indiceTexto];
    texto.appendChild(novoParagrafo);
    indiceTexto = (indiceTexto + 1) % x.length;
});