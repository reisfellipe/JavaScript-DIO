const camisetaFellipeAzul = true;
const camisetaReisAzul = false;

//teste de impar ou par
const numero = 0;
const numeroPar = (numero % 2) === 0;

if(numeroPar){
    console.log('Par')
}else {
    console.log('impar')
}

//segunda forma mais trabalhada

const num = 9;
const numDivisivelPor5 = (num % 5) === 0;

if(numDivisivelPor5) {
    console.log(`o numero ${num} é DIVISÍVEL`);
}else{
    console.log(`O numero ${num} NÃO É DIVISÍVEL`);
}