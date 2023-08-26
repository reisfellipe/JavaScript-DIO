const custoEtanol = 3.61;
const custoGasolina = 5.82;
const myFuels = "Etanol";
const distanceKM = 25;
const gastoMedio = 0.43;

if(myFuels === 'Etanol' || myFuels === 'etanol'){
    totalViagem = custoEtanol * distanceKM
    console.log(`Sua viagem custará R$${totalViagem}`);
}else if (myFuels === 'Gasolina' || myFuels === 'gasolina'){
    totalViagem = custoGasolina * distanceKM
    console.log(`A viagem custará R$${totalViagem}`);
}else{
    console.log("Verifique os valores, e preencha corretamente.")
}

//solução feita pelo alemaozin
const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 100;
const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));