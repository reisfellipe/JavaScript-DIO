function aoQuadrado(valor){
    return valor * valor;
}

const quadradoDeDez = aoQuadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));