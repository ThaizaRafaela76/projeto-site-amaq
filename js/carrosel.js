const carrossel = document.querySelector('.img-event');
const volBnt = document.getElementById('voltar-bnt');
const proxBnt = document.getElementById('prox-bnt');


// Define a largura que o carrossel vai se mover a cada clique
// 350px é a largura de um card
// 64px corresponde ao espaço (gap) entre os cards (4rem ≈ 64px)
const LargCard = 350 + 64;          

function avancar() {
    // scrollLeft é a propriedade que define a posição horizontal do scroll
    // Adiciona a largura do card à posição atual do scroll
    carrossel.scrollLeft = carrossel.scrollLeft + LargCard;
}

function voltar() {
    // Subtrai a largura do card da posição atual do scroll
    carrossel.scrollLeft = carrossel.scrollLeft - LargCard;
}
