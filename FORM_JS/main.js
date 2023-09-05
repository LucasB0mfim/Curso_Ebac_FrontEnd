const form = document.getElementById ("formulario");

//usado para adicionar um evento
form.addEventListener("submit", function(e) {
    //usado para cancelar a ação padrão do butão
    e.preventDefault();

    //criei duas constantes para os meus valores do campo A e B    
    const VA = document.getElementById ("valorA");
    const VB = document.getElementById ("valorB");
    const MSG_SUCESSO = `Parabéns! Valor transferido.`;

    //se o valor do campo A for MAIOR que o campo B o formulario é enviado
    if (VA.value < VB.value) {
        //criei uma constante chamada mensagem_de_sucesso e liguei ao <p> do html
        const mensagem_de_sucesso = document.querySelector(".CERTO");
        //agora eu liguei a constante a minha frase MSG_SUCESSO
        mensagem_de_sucesso.innerHTML = MSG_SUCESSO;
        //por fim. fiz com que ele aparece-se caso VB fosse maior que VA
        mensagem_de_sucesso.style.display = "block";
        //criei uma variável caso a pessoa erre na primeira vez, assim, o aviso de erro some
        document.querySelector(".mensagem_de_erro").style.display = "none";
        VB.style.border = "";
    } else {
        VB.style.border = "2px solid red"
        document.querySelector(".mensagem_de_erro").style.display = "block";
        const mensagem_de_sucesso = document.querySelector(".CERTO");
        mensagem_de_sucesso.innerHTML = MSG_SUCESSO;
        mensagem_de_sucesso.style.display = "none";
    }
    
    //depois que o formulario é enviado, o que tiver no campo é apagado
    VA.value = "";
    VB.value = "";
})

console.log(form);