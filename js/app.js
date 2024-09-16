let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let botaoClick = document.getElementById(`game-${id}`);
    let imagem = botaoClick.querySelector('.dashboard__item__img');
    let button = botaoClick.querySelector('.dashboard__item__button');
    let nomeJogo = botaoClick.querySelector('.dashboard__item__name');

  
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

