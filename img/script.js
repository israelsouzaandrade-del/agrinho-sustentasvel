// Função para adicionar projetos dinamicamente
function adicionarProjeto() {
    const nomeProjeto = prompt("Digite o nome do novo projeto:");
    if (nomeProjeto) {
        const lista = document.getElementById("projetos-lista");
        const li = document.createElement("li");
        li.textContent = nomeProjeto;
        lista.appendChild(li);
    }
}

// Função para enviar o formulário
const form = document.getElementById("contato-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem-sucesso").style.display = "block";
    form.reset();
});
