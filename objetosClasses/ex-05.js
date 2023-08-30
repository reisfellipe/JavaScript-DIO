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

function compararPessoas(pessoa1,pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    }else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}`);
    }else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);

const fellipe = new Pessoa('Fellipe', 19);

compararPessoas(vitor,fellipe);