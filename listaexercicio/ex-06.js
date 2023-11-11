function calculo (x,y) {
    soma = x + y;

    console.log(`resultado soma = ${soma}`)

    if (x == y){
        console.log("Os numeros são iguais!");
    }else {
        console.log("Os numeros somados são diferentes!")
    }

    if( soma > 10 && soma < 20 ) {
        console.log(`A soma dos numeros ${x} e ${y} estão entre 10 e 20`);
    }if(soma < 10) {
        console.log(`A soma dos numeros ${x} e ${y} são menores que 10`);
    }
    else {
        console.log(`A soma dos numeros ${x} e ${y} excedem a quantidade de 20`)
    }

}

console.log(calculo(2,1));