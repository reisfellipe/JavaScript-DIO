class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos`);
    }

}

const vitor = new Pessoa();
vitor.nome = 'Vitor Farias';
vitor.idade = 24;


const fellipe = new Pessoa();
fellipe.nome = 'Fellipe Reis';
fellipe.idade = 19;

vitor.descrever();
fellipe.descrever();








/*const vitor = {
    nome: 'Vitor Farias',
    idade: 23,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} eu tenho ${this.idade} anos`);
    }
}

const fellipe = {
    nome: 'Fellipe Reis',
    idade:19,
    descrever: function() {
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos`);
    }
}*/