const {gets, print } = require('./aula-01');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for( let i = 0; i < 5; i++ ){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }

}

print(maiorValorEncontrado);