"use strict";
function multiplicador(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicador(9.5, 2));
function saldacao(nome) {
    return `Olá ${nome}, tudo bem?`;
}
console.log(saldacao('lucas'));
let nome = ['Pedro'];
const dizOla = nome.map(function (data) {
    return `olá, ${data}.`;
});
console.log(dizOla);
