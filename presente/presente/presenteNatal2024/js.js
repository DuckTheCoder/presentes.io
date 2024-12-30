const textoCtn = document.getElementById("textoCtn");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const texto3 = document.getElementById("texto3");
const imagem1 = document.getElementById("imagem1");
const bilhete = document.getElementById("bilhete");
const imagem2 = document.getElementById("imagem2");
const botao = document.getElementById("botao");

let textos = [texto1, texto2, texto3];
let i = 0;

function animarTextos() {
    if (i < textos.length) {
        textos[i].classList.add('fade-in-out');
        textos[i].addEventListener('animationend', () => {
            textos[i].classList.remove('fade-in-out');
            i++;
            animarTextos();
        }, {once: true});
    } else {
        showImages();
    }
}

function showImages() {
textoCtn.style.display = 'none';
imagem1.classList.add('fade-in');
bilhete.classList.add('fade-in')
imagem2.classList.add('fade-in');
botao.classList.add('fade-in');
}

animarTextos();