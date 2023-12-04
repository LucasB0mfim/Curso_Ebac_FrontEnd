const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    // criamos uma variável para que o acesso a essa informação seja controlado.
    let _salario = salario;

    this.dizOi = function() {
        console.log(this.nome + " diz olá");
        console.log(this.cargo);
    }

    this.getSalario = function() {
        return `O salário de ${nome} é de R$${_salario},00.`
    }

    // se a atributo "valor" for um número era é alterado.
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }
}


funcionario1.dizOi();
// não vai aparecer mil porque o atributo abaixo é uma string.
funcionario1.getSalario("mil");
console.log(funcionario1.getSalario());