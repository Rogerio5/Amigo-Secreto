//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Adiciona amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        input.value = "";
        atualizarLista();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

// Remove amigo da lista
function removerAmigo(nome) {
    amigos = amigos.filter(amigo => amigo !== nome);
    atualizarLista();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement("li");

        // Nome do amigo
        item.textContent = amigo;

        // Botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(amigo);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Sorteia os pares de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para fazer o sorteio.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const sorteados = [...amigos];
    embaralhar(sorteados);

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let amigoSecreto = sorteados[i];

        // Garante que ninguém seja seu próprio amigo secreto
        if (amigo === amigoSecreto) {
            sortearAmigo(); // Tenta novamente se algum par for inválido
            return;
        }

        const item = document.createElement("li");
        item.textContent = `${amigo} ➝ ${amigoSecreto}`;
        resultado.appendChild(item);
    }
}

// Função auxiliar para embaralhar o array
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
