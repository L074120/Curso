/* 
  O que precisamos fazer? - quando passar o mouse em cima do agente na lista temos que adicionar a borda azul de seleção na imagem pequena do agente e mostrar a imagem, o nome e o texto grande do agente que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do agente na listagem, devemos selecioná-lo
        passo 1 - pegar os agentes no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        
        passo 2 - adicionar a classe selecionado no agente que o usuário passar o cursor do mouse
        
        passo 3 - verificar se já exista um agente selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do agente na listagem, trocar a imagem, o nome e a descrição do agente grande
        passo 1 - pegar o elemento do agente grande pra adicionar as informações nele
        passo 2 - alterar a imagem do agente grande
        passo 3 - alterar o nome do agente grande
        passo 4 - alterar a descrição do agente grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do agente na listagem, devemos selecioná-lo
// passo 1 - pegar os agentes no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const agentes = document.querySelectorAll('.agente');


// passo 2 - adicionar a classe selecionado no agente que o usuário passar o cursor do mouse
agentes.forEach((agente) => {
    agente.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um agente selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoAgente();

        agente.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do agente na listagem, trocar a imagem, o nome e a descrição do agente grande
        
        //passo 1 - pegar o elemento do agente grande pra adicionar as informações nele
        alterarImagemAgenteSelecionado(agente);

        // passo 3 - alterar o nome do agente grande
        alterarNomeAgenteSelecionado(agente);

        // passo 4 - alterar a descrição do agente grande
        alterarDescricaoAgente(agente);
    })
})

function alterarDescricaoAgente(agente) {
    const descricaoAgente = document.getElementById('descricao-agente');
    descricaoAgente.innerText = agente.getAttribute('data-description');
}

function alterarNomeAgenteSelecionado(agente) {
    const nomeAgente = document.getElementById('nome-agente');
    nomeAgente.innerText = agente.getAttribute('data-name');
}

function alterarImagemAgenteSelecionado(agente) {
    const imagemAgenteGrande = document.querySelector('.agente-grande');
    // passo 2 - alterar a imagem do agente grande
    const idAgente = agente.attributes.id.value;
    imagemAgenteGrande.src = `./src/imagens/card-${idAgente}.png`;
}

function removerSelecaoDoAgente() {
    const agenteSelecionado = document.querySelector('.selecionado');
    agenteSelecionado.classList.remove('selecionado');
}