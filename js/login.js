const formulario = document.getElementById("formulario_de_cadastro");
const usuarioInput = document.getElementById("nome_do_usuario");
const senhaInput = document.getElementById("senha_do_usuario");
const mensagemDeLogin = document.querySelector(".usuario_logado_com_sucesso");

function logar(nome) {
    const nomeComposto = nome.split(" ");
    return nomeComposto.length >= 2;
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomeUsuario = usuarioInput.value;
    const mensagemDeLoginSucesso = `Parabéns! Você foi logado com sucesso...`;

    const podeLogar = logar(nomeUsuario);

    if (podeLogar) {
        mensagemDeLogin.innerHTML = mensagemDeLoginSucesso;
        mensagemDeLogin.style.display = "block";
        document.querySelector(".nome_incompleto").style.display = "none";
        usuarioInput.classList.remove("errado");
        usuarioInput.value = "";
        senhaInput.value = "";
    } else {
        usuarioInput.classList.add("errado");
        document.querySelector(".nome_incompleto").style.display = "block";
        mensagemDeLogin.style.display = "";
    }
});