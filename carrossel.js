const carrosselContainer = document.querySelector('.imagens');
const botaoDireita = document.querySelector('.botao-direita');
const botaoEsquerda = document.querySelector('.botao-esquerda');

const imagensLista = document.querySelectorAll('.imagens img');
const totalImagens = imagensLista.length;

const larguraImagem = 500;

let indiceAtual = 0;

function moverCarrossel() {
    const deslocamento = -indiceAtual * larguraImagem;

    carrosselContainer.style.transform = `transLateX(${deslocamento}px)`;
}

function proximaImagem() {
    indiceAtual++;
    if (indiceAtual >= totalImagens) {
        indiceAtual = 0;
    }

    moverCarrossel();
}

function imagemAnterior() {
    indiceAtual--;
    
    if (indiceAtual < 0) {
        indiceAtual = totalImagens - 1;
    }

    moverCarrossel();
}

botaoDireita.addEventListener('click',proximaImagem);
botaoEsquerda.addEventListener('click',imagemAnterior);

moverCarrossel();