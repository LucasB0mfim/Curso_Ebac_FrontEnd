//EXECUTAR A MESMA TAREFA, MAS DE FORMAS DIFERENTES.

const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000);
const funcionario2 = new Estagiario("Pedro");

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
        return _salario;
    }

    // se a atributo "valor" for um número era é alterado.
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);
    
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}


funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());