class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos`);
    }

}

const vitor = new Pessoa('Vitor farias', 24);
const fellipe = new Pessoa('Fellipe', 19);

console.log(vitor);
console.log(fellipe);