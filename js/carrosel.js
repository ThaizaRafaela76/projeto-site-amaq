const carrossel = document.querySelector('.img-event');
const volBnt = document.getElementById('voltar-bnt');
const proxBnt = document.getElementById('prox-bnt');


// Define a largura que o carrossel vai se mover a cada clique
// 350px é a largura de um card
// 64px corresponde ao espaço (gap) entre os cards (4rem = 64px)
const LargCard = 350 + 64; 

volBnt.style.visibility = 'hidden'; // Inicialmente, o botão de voltar está escondido 

function avancar() {
    carrossel.scrollLeft = carrossel.scrollLeft + LargCard; // scrollLeft é a propriedade que define a posição horizontal do scroll; Adiciona a largura do card à posição atual do scroll
}

function voltar() {
    carrossel.scrollLeft = carrossel.scrollLeft - LargCard; // Subtrai a largura do card da posição atual do scroll
}

// Toda vez que o carrossel se mover, essa função roda
carrossel.onscroll = function () {

    // Controle do botão VOLTAR
    if (carrossel.scrollLeft <= 0) {            // se a posição do scroll for menor ou igual a 0, esconde o botão de voltar
        volBnt.style.visibility = 'hidden';     // isso faz o botão desaparecer quando estiver no início do carrossel
    } else {
        volBnt.style.visibility = 'visible';    // caso contrário, mostra o botão de voltar
    }

    // Controle do botão AVANÇAR
    if (carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 5) {  // se a posição do scroll mais a largura visível do carrossel for maior ou igual à largura total do conteúdo do carrossel, esconde o botão de avançar
        proxBnt.style.visibility = 'hidden';
    } else {
        proxBnt.style.visibility = 'visible';
    }
};

