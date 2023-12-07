"use strict";

var alunos = [{
  nome: "João",
  nota: 9
}, {
  nome: "Amanda",
  nota: 8
}, {
  nome: "Lucas",
  nota: 7
}, {
  nome: "Maria",
  nota: 6
}, {
  nome: "Júlia",
  nota: 5
}, {
  nome: "Pedro",
  nota: 4
}, {
  nome: "Sofia",
  nota: 3
}];
var mapearAlunos = alunos.map(function (dados) {
  dados = {
    resumo: dados
  };
  return dados;
});
var alunosAprovados = mapearAlunos.filter(function (alunoAprovado) {
  return alunoAprovado.resumo.nota >= 6;
});
console.log(alunosAprovados);