//2) Crie um programa que seja capaz de percorrer uma lisya de números e imprima cada número ímpar encontrado

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {

    const impar = numeros[i] % 2;

    if (impar > 0){
        console.log(numeros[i] + " IMPAR");
    }
    
}