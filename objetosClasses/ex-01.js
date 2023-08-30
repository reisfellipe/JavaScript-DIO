const pessoa = {
    nome:'Fellipe Reis',
    idade: 19,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.descrever = function(){
    console.log(`meu nome é ${this.nome}`);
}

pessoa.descrever();