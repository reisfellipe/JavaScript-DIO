const {gets, print } = require('./aula-01');

const numerosSorteados = [];

for( let i = 0; i < 5; i++ ){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for(let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maior = numeroSorteado;
    }
}

print(maiorValor);