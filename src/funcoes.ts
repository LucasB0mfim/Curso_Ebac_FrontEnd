function calculaArea(base: number, altura: number): number {
    return base * altura
};

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...numbers: number[] ): void {
    //numbers.reduce()
    console.log(numbers)
};

function teste(): number | string {
    if  (10 > 5) {
        return 'Dez é maior que cinco'
    } else {
        return 5
    }
};

const resultadoDeTeste = teste();
