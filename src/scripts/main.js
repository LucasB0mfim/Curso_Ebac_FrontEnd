document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-sorteador").addEventListener("submit", function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById("numero-maximo").value;
        // transformar STRING em NUMBER
        numeroMaximo = parseInt(numeroMaximo);
        // Math.random = Gerar número aleatório
        let numeroAleatorio = Math.random() * numeroMaximo;
        // Math.ceil = Arredondar para cima
        // Math.floor = Arredondar para baixo
        // Math.round = Arredondar para cima acima de .50 e para baixo abaixo de .50
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        // innerText = criar texto no html
        document.getElementById("resultado-valor").innerText = numeroAleatorio;
        document.querySelector(".resultado").style.display = "block";
    })
})