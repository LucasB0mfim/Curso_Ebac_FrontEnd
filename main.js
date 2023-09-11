const form = document.getElementById("formulario-de-numeros");
const nomeContato = document.querySelector(".nome-contato");
const numeroContato = document.querySelector(".numero-contato");
let linhas = "";
const nomes = [];
const numeros = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
});

function adicionaLinha () {
    const inputNome = document.getElementById("nome-cadastro");
    const inputNumero = document.getElementById("numero-cadastro");
    
    if (numeros.includes(parseFloat(inputNumero.value))) {
        alert(`Já existe um nome cadastrado a este número..`)
    } else {
        document.querySelector("thead").style.border = "block";
        nomes.push(inputNome.value);
        numeros.push(parseFloat(inputNumero.value));
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
        linhas += linha

        nomeContato.classList.add("borda");
        document.querySelector(".nome-contato").style.display = "block";
        numeroContato.classList.add("borda");
        document.querySelector(".nome-contato").style.display = "block";
    }
    inputNome.value = "";
    inputNumero.value = "";
}

function atualizaTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}