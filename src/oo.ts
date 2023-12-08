class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}


class ContaBancaria {
    //available in inherited classes | inherited = herdeira
    protected saldo: number = 0;
    //available in all classes
    public numeroConta: number;

    constructor(numeroDaconta: number) {
        this.numeroConta = numeroDaconta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }

    //only available in own class | in own = na própria
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

//use "extends" to inherited classes
class ContaBancariaPessoaFisia extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisia(123456);
//contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();