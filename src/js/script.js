const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.querySelector('.item-resposta');
        resposta.classList.toggle('ativo');        
    })
})