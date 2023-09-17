$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        const atividade = $("#atividade-cliente").val();
        const novoItem = $(`<li><div class="lista"><h2>${atividade}</h2></div></li>`);
        $("ul").append(novoItem);
        $("#atividade-cliente").val("");
        
        
//O método toggleClass é uma função jQuery que permite alternar uma ou mais classes CSS de um elemento HTML.
// Quando você usa toggleClass, ele verifica se o elemento já possui a classe especificada. Se a classe estiver presente, ele a remove; caso contrário, a adiciona.
// Isso é especialmente útil para criar efeitos de alternância, como realce, tachado, destaque, etc.,
        novoItem.on("click", function() {            
        $("h2", this).toggleClass("tachado");
        // Neste código, "this" se refere ao elemento <li> que foi clicado. A linha $("h2", this) procura a tag <h2> dentro desse elemento <li>. 
        // Em seguida, o toggleClass("tachado") é aplicado ao <h2>, adicionando ou removendo a classe 
        });
    });
});

