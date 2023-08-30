//PRIMEIRO EXERCICIO DE CLASSE
/*
1 - Crie uma classe para representar carros.
OS CARROS POSSUEM UMA MARCA, UMA COR E UM GASTO MÉDIO DE COMBUSTÍVEL POR KILÔMETRO RODADO.

2 - Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor de gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

    descrever(marca,cor){
        console.log(`meu carro é da marca ${this.marca} da cor ${this.cor}`);
    }
}

const carro1 = new Carros('FIAT', 'Branco', 1 / 12);
console.log(carro1.calcularViagem(70,5));
const carro2 = new Carros('Hunday', 'Cinza Fosco', 1.5 / 10);
console.log(carro2.calcularViagem(50,5));

