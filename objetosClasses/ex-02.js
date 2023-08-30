const pessoa = {
    nome:'Fellipe Reis',
    idade: 19,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};
//ACESSANDO OS ATRIBUTOS DO OBJETO DE FORMA DINÂMICA
const atributo = 'idade';
console.log(pessoa[atributo]);

//O QUE SIGNIFICA?
pessoa['nome'] = 'teste';
//O MESMO QUE:
pessoa.nome = 'teste';