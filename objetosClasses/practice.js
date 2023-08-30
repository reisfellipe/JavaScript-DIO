class Pessoa {
    nome;
    idade;

    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descriptionOfPersonal(){
        console.log(`Olá eu sou ${this.nome} tenho ${this.idade}, e nasci em ${this.anoDeNascimento}`);
    }
}

function ComparisonPeople(p1,p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}
const p1 = new Pessoa('Fellipe', 19);
const p2 = new Pessoa('Lorenzo', 14);

ComparisonPeople(p1,p2);
console.log(p1.descriptionOfPersonal());

console.log(p2.descriptionOfPersonal());