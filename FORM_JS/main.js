const formulario = document.getElementById("formulario_de_cadastro");
const cpfInput = document.getElementById("cpf-cnpj_do_usuario");
const mensagemSucesso = document.querySelector(".msg_sucesso");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const campoA = parseFloat(document.getElementById("valor_campo_A").value);
    const campoB = parseFloat(document.getElementById("valor_campo_B").value);

    const mensagemDeSucesso = `Parabéns! O valor foi transferido com sucesso!`;

//A função isNaN(Is Not-a-Number) retorna true se o valor passado para ela não for um número e falsese for um número válido. 
//O "&&" é um operador lógico em JavaScript que representa a operação lógica "E".
if (!isNaN(campoA) && !isNaN(campoB) && campoA < campoB) {
        mensagemSucesso.innerHTML = mensagemDeSucesso;
        mensagemSucesso.style.display = "block";
        document.querySelector(".mensagem_de_erro").style.display = "none";
        cpfInput.value = "";
        document.getElementById("valor_campo_A").value = "";
        document.getElementById("valor_campo_B").value = "";
    } else {
        document.querySelector(".mensagem_de_erro").style.display = "block";
        mensagemSucesso.style.display = "";
        document.getElementById("valor_campo_A").value = "";
        document.getElementById("valor_campo_B").value = "";
    }
});