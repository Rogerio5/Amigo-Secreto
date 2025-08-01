
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Adiciona amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        if (amigos.includes(nome)) {
            alert("Esse nome já foi adicionado.");
            return;
        }
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
        item.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(amigo);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Sorteia os pares de amigo secreto (versão segura!)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para fazer o sorteio.");
        return;
    }

    let sorteados = [];
    let valido = false;

    while (!valido) {
        sorteados = [...amigos];
        embaralhar(sorteados);
        valido = amigos.every((amigo, i) => amigo !== sorteados[i]);
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    amigos.forEach((amigo, i) => {
        const item = document.createElement("li");
        item.textContent = `${amigo} ➝ ${sorteados[i]}`;
        resultado.appendChild(item);
    });
}

// Embaralha o array de forma aleatória
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
