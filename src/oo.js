"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaconta) {
        //available in inherited classes | inherited = herdeira
        this.saldo = 0;
        this.numeroConta = numeroDaconta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    //only available in own class | in own = na própria
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
//use "extends" to inherited classes
class ContaBancariaPessoaFisia extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisia(123456);
//contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();
