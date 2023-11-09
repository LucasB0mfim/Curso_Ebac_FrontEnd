const butao = document.getElementById("btn");

butao.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("image").classList.toggle("alterar");
})