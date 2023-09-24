$(document).ready(function() {
    $("#telefone_do_usuario").mask("(00) 00000-0000");
    $("#cpf_do_usuario").mask("000.000.000-00");
    $("#cep_do_usuario").mask("00000-000");
    $("form").on("submit", function(e) {
        e.preventDefault();
        alert("Parabéns! Seu cadastro foi concluído..")
        $("#nome_do_usuario").val("");
        $("#email_do_usuario").val("");
        $("#telefone_do_usuario").val("");
        $("#cpf_do_usuario").val("");
        $("#endereco_do_usuario").val("");
        $("#cep_do_usuario").val("");
        $("#senha_do_usuario").val("");
        $(".cadastro").show();
        window.location.replace("http://127.0.0.1:5500/html/login.html?");
    })
});
