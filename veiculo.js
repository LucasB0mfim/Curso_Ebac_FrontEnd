// classe de abstração
function Veiculo(tipo, modelo, preco) {
    this.tipo = tipo;
    this.modelo = modelo;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }

    this.descricao = function() {
        console.log(`O seu veículo é um(a): ${this.tipo} da ${this.modelo} que custa R$ ${_preco.toFixed(2)}`);
    }
}

// classes herdeiras
function Carro(tipo) {
    Veiculo.call(this, tipo, 'BMW', 620000.00);
}

function Moto(tipo) {
    Veiculo.call(this, tipo, 'Kawasaki', 250000.00);
}

function Bicicleta(tipo) {
    Veiculo.call(this, tipo, 'Caloi', 1500.00);
}

// instâncias de objetos
const carro1 = new Carro('Carro');
const moto1 = new Moto('Moto');
const bicicleta1 = new Bicicleta('Bicicleta');

carro1.descricao();
moto1.descricao();
bicicleta1.descricao();